import { useState } from 'react'
import { edition } from '../../data/edition.js'

const { rentabilidade } = edition

function classeValor(v) {
  const num = parseFloat(String(v).replace(',', '.'))
  return num >= 0 ? 'pos' : 'neg'
}

export default function Rentabilidade() {
  const [view, setView] = useState('mensal')

  function acumular(meses) {
    let acc = 0
    return meses.map((v) => {
      acc += parseFloat(String(v).replace(',', '.'))
      return (acc >= 0 ? '+' : '') + acc.toFixed(2).replace('.', ',') + '%'
    })
  }

  const colExtras = ['2026', '12 Meses', '24 Meses', '36 Meses']

  return (
    <section className="section rent" id="rentabilidade" data-screen-label="Rentabilidade">
      <div className="wrap">

        <div className="section-head reveal">
          <span className="eyebrow">Resultado dos planos · {rentabilidade.periodo}</span>
          <h2>{rentabilidade.tituloCenario}</h2>
        </div>

        {/* Cenário econômico */}
        <div className="reveal" style={{ marginBottom: 32 }}>
          {rentabilidade.cenarioParagrafos.map((p, i) => (
            <p key={i} style={{ color: 'var(--text-secondary)', marginBottom: 12 }}>{p}</p>
          ))}
        </div>

        {/* Desempenho dos investimentos */}
        <div className="reveal d2" style={{ marginBottom: 36 }}>
          <h3 style={{ fontSize: 20, color: 'var(--text-primary)', marginBottom: 12 }}>
            {rentabilidade.tituloDesempenho}
          </h3>
          {rentabilidade.desempenhoParagrafos.map((p, i) => (
            <p key={i} style={{ color: 'var(--text-secondary)', marginBottom: 10 }}>{p}</p>
          ))}
        </div>

        {/* Toggle mensal / acumulada */}
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
            {rentabilidade.rodape}
          </span>
        </div>

        {/* Tabela Rentabilidade e Meta */}
        <div className="rent-table-wrap reveal d2">
          <p style={{ fontWeight: 700, fontSize: 13, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '.08em', marginBottom: 8 }}>
            Rentabilidade e Meta
          </p>
          <table className="rent-table">
            <thead>
              <tr>
                <th>Plano</th>
                {rentabilidade.meses.map((m) => <th key={m}>{m}</th>)}
                {colExtras.map((c) => <th key={c}>{c}</th>)}
              </tr>
            </thead>
            <tbody>
              {rentabilidade.linhas.map((linha, idx) => {
                const mesesVis = view === 'acumulada' ? acumular(linha.meses) : linha.meses.map(v => v + '%')
                return (
                  <tr key={idx} className={linha.tipo === 'meta' ? 'meta' : ''}>
                    <td>{linha.nome}</td>
                    {mesesVis.map((v, i) => (
                      <td key={i} className={linha.tipo !== 'meta' ? classeValor(v) : ''}>{v}</td>
                    ))}
                    <td className={linha.tipo !== 'meta' ? classeValor(linha.acum) : ''}>{linha.acum}%</td>
                    <td>{linha.p12m}%</td>
                    <td>{linha.p24m}%</td>
                    <td>{linha.p36m}%</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>

        {/* Tabela Índices Financeiros */}
        <div className="rent-table-wrap reveal d3" style={{ marginTop: 32 }}>
          <p style={{ fontWeight: 700, fontSize: 13, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '.08em', marginBottom: 8 }}>
            Índices Financeiros
          </p>
          <table className="rent-table">
            <thead>
              <tr>
                <th>Índice</th>
                {rentabilidade.meses.map((m) => <th key={m}>{m}</th>)}
                {colExtras.map((c) => <th key={c}>{c}</th>)}
              </tr>
            </thead>
            <tbody>
              {rentabilidade.indices.map((idx, i) => {
                const mesesVis = view === 'acumulada' ? acumular(idx.meses) : idx.meses.map(v => v + '%')
                return (
                  <tr key={i}>
                    <td>{idx.nome}</td>
                    {mesesVis.map((v, j) => (
                      <td key={j} className={classeValor(v)}>{v}</td>
                    ))}
                    <td className={classeValor(idx.acum)}>{idx.acum}%</td>
                    <td className={classeValor(idx.p12m)}>{idx.p12m}%</td>
                    <td className={classeValor(idx.p24m)}>{idx.p24m}%</td>
                    <td className={classeValor(idx.p36m)}>{idx.p36m}%</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>

        <p className="rent-foot">{rentabilidade.rodape}</p>
      </div>
    </section>
  )
}
