import { useEffect, useMemo, useRef, useState } from 'react'
import { edition } from '../../data/edition.js'

const g = edition.portabilidade.porQueTrazer.grafico

const W = 860, H = 420
const M = { top: 18, right: 18, bottom: 40, left: 44 }
const PLOT_W = W - M.left - M.right
const PLOT_H = H - M.top - M.bottom
const Y_TICKS = [0, 50, 100, 150, 200]

const xAt = (i) => M.left + (PLOT_W * i) / (g.anos.length - 1)
const yAt = (v) => M.top + PLOT_H - (PLOT_H * v) / g.eixoMax
const fmt = (v) => v.toFixed(1).replace('.', ',') + '%'
const buildPath = (values) => values.map((v, i) => (i === 0 ? 'M' : 'L') + xAt(i).toFixed(2) + ' ' + yAt(v).toFixed(2)).join(' ')

// Deriva só de `g` (constante do módulo) — computado uma única vez, fora do componente.
const PATH_EFPC = buildPath(g.efpc)
const PATH_EAPC = buildPath(g.eapc)
const TIGHT = g.efpc.map((v, i) => Math.abs(yAt(v) - yAt(g.eapc[i])) < 22)

export default function RentGrafico() {
  const cardRef = useRef(null)
  const svgRef = useRef(null)
  const pathEfpcRef = useRef(null)
  const pathEapcRef = useRef(null)
  const [inView, setInView] = useState(false)
  const [compact, setCompact] = useState(false)
  const [chartK, setChartK] = useState(1)
  const [tip, setTip] = useState(null)

  useEffect(() => {
    const el = cardRef.current
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      })
    }, { threshold: 0.35 })
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!inView) return
    const paths = [pathEfpcRef.current, pathEapcRef.current]
    const lens = paths.map((p) => p.getTotalLength())
    paths.forEach((p, i) => {
      p.style.strokeDasharray = lens[i]
      p.style.strokeDashoffset = lens[i]
    })
    paths.forEach((p, i) => {
      p.animate(
        [{ strokeDashoffset: lens[i] }, { strokeDashoffset: 0 }],
        { duration: 1100, delay: i * 150, easing: 'cubic-bezier(.65,0,.35,1)', fill: 'forwards' }
      )
    })
  }, [inView])

  useEffect(() => {
    const svg = svgRef.current
    if (!svg || !window.ResizeObserver) return
    const ro = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const renderedW = entry.contentRect.width
        if (renderedW <= 0) continue
        setChartK(Math.min(2.2, Math.max(1, W / renderedW)))
        setCompact(renderedW < 520)
      }
    })
    ro.observe(svg)
    return () => ro.disconnect()
  }, [])

  function showTip(i) {
    const svg = svgRef.current
    const bbox = svg.getBoundingClientRect()
    const scale = bbox.width / W
    setTip((prev) => (prev && prev.i === i ? prev : { i, x: xAt(i) * scale, y: Math.min(yAt(g.efpc[i]), yAt(g.eapc[i])) * scale }))
  }

  // Conteúdo estático do gráfico (grade, eixos, linhas, marcadores, rótulos) — não
  // depende de `tip`, então é calculado uma única vez em vez de a cada hover.
  const staticChart = useMemo(() => (
    <>
      <g>
        {Y_TICKS.map((v) => (
          <line key={v} className="rent-grid-line" x1={M.left} x2={W - M.right} y1={yAt(v)} y2={yAt(v)} />
        ))}
      </g>
      <g>
        {Y_TICKS.map((v) => (
          <text key={v} className="rent-axis-label" x={M.left - 10} y={yAt(v) + 4} textAnchor="end">{v}%</text>
        ))}
      </g>
      <g>
        {g.anos.map((yr, i) => {
          const isEndpoint = i === 0 || i === g.anos.length - 1 || i % 2 === 0
          return (
            <text key={yr} className={`rent-year-label${isEndpoint ? ' endpoint' : ''}`} x={xAt(i)} y={H - M.bottom + 22} textAnchor="middle">{yr}</text>
          )
        })}
      </g>

      <path ref={pathEfpcRef} className="rent-series-line rent-series-efpc" d={PATH_EFPC} />
      <path ref={pathEapcRef} className="rent-series-line rent-series-eapc" d={PATH_EAPC} />

      <g>
        {g.efpc.map((v, i) => (
          <circle key={i} className="rent-marker rent-marker-efpc" cx={xAt(i)} cy={yAt(v)} r={5.5} style={{ animationDelay: `${0.35 + i * 0.075}s` }} />
        ))}
      </g>
      <g>
        {g.eapc.map((v, i) => (
          <circle key={i} className="rent-marker rent-marker-eapc" cx={xAt(i)} cy={yAt(v)} r={5.5} style={{ animationDelay: `${0.35 + i * 0.075}s` }} />
        ))}
      </g>

      <g>
        {g.efpc.map((v, i) => {
          const isEndpoint = i === 0 || i === g.efpc.length - 1
          const dy = TIGHT[i] ? -18 : -14
          return (
            <text key={i} className={`rent-data-label efpc${isEndpoint ? ' endpoint' : ''}`} x={xAt(i)} y={yAt(v) + dy} textAnchor="middle" style={{ animationDelay: `${0.55 + i * 0.075}s` }}>{fmt(v)}</text>
          )
        })}
      </g>
      <g>
        {g.eapc.map((v, i) => {
          const isEndpoint = i === 0 || i === g.eapc.length - 1
          const dy = TIGHT[i] ? 26 : 20
          const isFirst = i === 0
          return (
            <text
              key={i}
              className={`rent-data-label eapc${isEndpoint ? ' endpoint' : ''}`}
              x={isFirst ? xAt(i) + 10 : xAt(i)}
              y={yAt(v) + dy}
              textAnchor={isFirst ? 'start' : 'middle'}
              style={{ animationDelay: `${0.55 + i * 0.075}s` }}
            >{fmt(v)}</text>
          )
        })}
      </g>
    </>
  ), [])

  return (
    <div
      ref={cardRef}
      className={`rent-chart-card${inView ? ' in-view' : ''}${compact ? ' compact' : ''}`}
      style={{ '--chart-k': chartK }}
    >
      <div className="rent-chart-caption">{g.titulo}</div>

      <div className="rent-chart-legend">
        <div className="rent-chart-legend-item">
          <span className="rent-chart-swatch" style={{ background: 'var(--brand-blue)' }} />
          <span>EFPC <small>Entidades Fechadas</small></span>
        </div>
        <div className="rent-chart-legend-item">
          <span className="rent-chart-swatch" style={{ background: 'var(--brand-coral)' }} />
          <span>EAPC <small>Entidades Abertas</small></span>
        </div>
      </div>

      <div className="rent-chart-wrap">
        <svg ref={svgRef} viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="xMidYMid meet">
          {staticChart}

          {tip && <line className="rent-hover-line" x1={xAt(tip.i)} x2={xAt(tip.i)} y1={M.top} y2={H - M.bottom} style={{ opacity: 1 }} />}

          <g>
            {g.anos.map((yr, i) => {
              const bandW = PLOT_W / g.anos.length
              return (
                <rect
                  key={yr}
                  className="rent-hover-col"
                  x={xAt(i) - bandW / 2}
                  y={M.top}
                  width={bandW}
                  height={PLOT_H}
                  onMouseEnter={() => showTip(i)}
                  onMouseLeave={() => setTip(null)}
                />
              )
            })}
          </g>
        </svg>

        {tip && (
          <div className="rent-tooltip show" style={{ left: tip.x, top: tip.y }}>
            <div><b>EFPC</b> {fmt(g.efpc[tip.i])}</div>
            <div className="t-eapc">EAPC {fmt(g.eapc[tip.i])}</div>
            <div className="t-year">{g.anos[tip.i]}</div>
          </div>
        )}
      </div>

      <div className="rent-chart-footnote">
        <span>{g.rodape.esquerda}</span>
        <span>{g.rodape.direita}</span>
      </div>
    </div>
  )
}
