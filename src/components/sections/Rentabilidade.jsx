import { useState } from 'react'
import { edition } from '../../data/edition.js'

const { rentabilidade } = edition

function classeValor(v) {
  const num = parseFloat(v.replace('%', '').replace(',', '.'))
  return num >= 0 ? 'pos' : 'neg'
}

function acumular(meses) {
  let acc = 0
  return meses.map((v) => {
    acc += parseFloat(v.replace('%', '').replace(',', '.'))
    const sinal = acc >= 0 ? '+' : ''
    return sinal + acc.toFixed(2).replace('.', ',') + '%'
  })
}

export default function Rentabilidade() {
  const [view, setView] = useState('mensal') // 'mensal' | 'acumulada'

  return (
    <section className="section rent" id="rentabilidade" data-screen-label="Rentabilidade">
      <div className="wrap">
        <div className="section-head reveal">
          <span className="eyebrow">Resultado dos planos · {rentabilidade.periodo}</span>
          <h2>Planos com rentabilidade próxima das metas em cenário econômico desafiador.</h2>
        </div>

        <p className="intro reveal">{rentabilidade.intro}</p>

        <div className="toolbar reveal">
          <div className="toggle" role="tablist">
            <button
              className={view === 'mensal' ? 'active' : ''}
              onClick={() => setView('mensal')}
            >
              Mensal
            </button>
            <button
              className={view === 'acumulada' ? 'active' : ''}
              onClick={() => setView('acumulada')}
            >
              Acumulada
            </button>
          </div>
          <span style={{ fontSize: 13, color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
            Fonte: relatório interno · ITAÚ Asset / BRF Prev
          </span>
        </div>

        <div className="rent-table-wrap reveal d2">
          <table className="rent-table">
            <thead>
              <tr>
                <th>Plano</th>
                {rentabilidade.meses.map((m) => <th key={m}>{m}</th>)}
                <th>Acum. Ano</th>
                <th>Meta</th>
              </tr>
            </thead>
            <tbody>
              {rentabilidade.planos.map((plano) => {
                const valores = view === 'acumulada' ? acumular(plano.meses) : plano.meses
                return (
                  <tr key={plano.nome}>
                    <td>{plano.nome}</td>
                    {valores.map((v, i) => (
                      <td key={i} className={classeValor(v)}>{v}</td>
                    ))}
                    <td className="pos">{plano.acum}</td>
                    <td>{plano.meta}</td>
                  </tr>
                )
              })}
              {/* Linha de referência */}
              <tr className="meta">
                <td>{rentabilidade.referencia.nome}</td>
                {rentabilidade.referencia.meses.map((v, i) => (
                  <td key={i}>{v}</td>
                ))}
                <td>{rentabilidade.referencia.acum}</td>
                <td>{rentabilidade.referencia.meta}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="rent-foot">{rentabilidade.rodape}</p>
      </div>
    </section>
  )
}
