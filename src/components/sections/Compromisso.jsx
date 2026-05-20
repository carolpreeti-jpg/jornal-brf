import { edition } from '../../data/edition.js'

const { compromisso } = edition

export default function Compromisso() {
  return (
    <section className="section units" id="compromisso" data-screen-label="Compromisso">
      <div className="wrap">
        <div className="section-head reveal">
          <span className="eyebrow">Programa · Atendimento Presencial</span>
          <h2>{compromisso.titulo}</h2>
          <p>{compromisso.intro}</p>
        </div>

        {/* Resultados da 1ª ação */}
        <div className="reveal" style={{ marginBottom: 40 }}>
          <span className="eyebrow" style={{ color: 'var(--brand-blue-mid)' }}>
            1ª ação · {compromisso.primeiraAcao.local} · {compromisso.primeiraAcao.periodo}
          </span>
          <p style={{ color: 'var(--text-secondary)', marginTop: 8 }}>
            {compromisso.primeiraAcao.descricao}
          </p>
        </div>

        <div className="elas-stats reveal d2">
          {compromisso.primeiraAcao.resultados.map((r, i) => (
            <div key={i} className={`stat-card${i > 0 ? ` reveal d${i + 1}` : ''}`}>
              <div className="v">{r.valor}</div>
              <div className="l">{r.label}</div>
            </div>
          ))}
        </div>

        <blockquote className="quote reveal" style={{ marginTop: 40 }}>
          "{compromisso.citacao}"
          <cite>— {compromisso.citacaoAutor}</cite>
        </blockquote>

        {/* Próxima visita */}
        <div className="reveal" style={{ marginTop: 40, marginBottom: 24 }}>
          <span className="eyebrow" style={{ color: 'var(--brand-teal)' }}>Próxima visita</span>
          <p style={{ marginTop: 8, fontWeight: 600, color: 'var(--text-primary)' }}>
            {compromisso.proximaVisita}
          </p>
          <p style={{ color: 'var(--text-secondary)', fontSize: 14, marginTop: 4 }}>
            O calendário das próximas ações presenciais está em fase de organização. As datas serão divulgadas oportunamente pelos canais oficiais da BRF Prev.
          </p>
        </div>

        {/* Calendário */}
        <div className="rent-table-wrap reveal d2">
          <table className="rent-table">
            <thead>
              <tr>
                <th>Mês</th>
                <th>Unidade</th>
                <th>Datas</th>
              </tr>
            </thead>
            <tbody>
              {compromisso.calendario.map((item, i) => (
                <tr key={i}>
                  <td>{item.mes}</td>
                  <td>{item.unidade}</td>
                  <td>{item.datas}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
