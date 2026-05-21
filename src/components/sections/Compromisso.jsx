import { edition } from '../../data/edition.js'

const { compromisso } = edition

const statusLabel = {
  realizado: 'Realizado',
  proxima:   'Próxima visita',
  confirmar: 'A confirmar',
}

export default function Compromisso() {
  const { acoesRealizadas } = compromisso

  return (
    <section className="section" id="compromisso" data-screen-label="Compromisso"
      style={{ background: '#fff' }}>
      <div className="wrap">

        {/* Cabeçalho */}
        <div className="section-head reveal">
          <span className="eyebrow">Programa · Atendimento Presencial</span>
          <h2>{compromisso.titulo}</h2>
          <p>{compromisso.intro}</p>
        </div>

        {/* Ações realizadas */}
        <div className="reveal" style={{ marginBottom: 48 }}>
          <span className="eyebrow" style={{ color: 'var(--brand-blue-mid)', marginBottom: 8, display: 'block' }}>
            {acoesRealizadas.label} · {acoesRealizadas.local} · {acoesRealizadas.periodo}
          </span>
          {acoesRealizadas.descricao.split('\n\n').map((p, i) => (
            <p key={i} style={{ color: 'var(--text-secondary)', marginTop: i === 0 ? 0 : 12 }}>
              {p}
            </p>
          ))}

          {/* Stats em cards claros */}
          <div className="elas-stats" style={{ marginTop: 24 }}>
            {acoesRealizadas.resultados.map((r, i) => (
              <div key={i} className="stat-card light reveal" style={{ '--delay': `${i * 0.08}s` }}>
                <div className="v">{r.valor}</div>
                <div className="l">{r.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Contexto dos resultados */}
        <p className="reveal" style={{ color: 'var(--text-secondary)', marginBottom: 32 }}>
          {compromisso.resultadosContexto}
        </p>

        {/* Citação */}
        <blockquote className="quote reveal" style={{ marginBottom: 56 }}>
          "{compromisso.citacao}"
          <cite>— {compromisso.citacaoAutor}</cite>
        </blockquote>

        {/* Cabeçalho do calendário */}
        <div className="reveal">
          <span className="eyebrow" style={{ color: 'var(--brand-coral)', marginBottom: 6, display: 'block' }}>
            Calendário 2026
          </span>
          <h3 style={{ fontSize: 22, color: 'var(--text-primary)', marginBottom: 4 }}>
            Próximas visitas às unidades
          </h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: 14, margin: 0 }}>
            O calendário está em fase de organização. As datas serão divulgadas oportunamente pelos canais oficiais da BRF Prev e RH's locais.
          </p>
        </div>

        {/* Grid de cards de calendário */}
        <div className="calendar-grid">
          {compromisso.calendario.map((item, i) => (
            <div
              key={i}
              className="cal-card reveal"
              style={{ '--delay': `${(i % 3) * 0.07}s` }}
            >
              {/* Área de imagem/gradient */}
              <div className="cal-img">
                <div
                  className="cal-img-bg"
                  style={{ background: item.gradient }}
                />
                <div className="cal-img-overlay">
                  <span className="cal-location-label">
                    {item.unidade}
                  </span>
                </div>
              </div>

              {/* Corpo do card */}
              <div className="cal-body">
                <p className="cal-city">
                  {item.unidade}
                  <span style={{ color: 'var(--text-muted)', fontWeight: 400, fontSize: 13 }}>
                    {' '}· {item.estado}
                  </span>
                </p>
                <span className="cal-date">{item.datas}</span>
                <span className={`cal-status ${item.status}`}>
                  {statusLabel[item.status]}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
