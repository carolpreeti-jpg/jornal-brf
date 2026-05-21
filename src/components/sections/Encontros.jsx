import { edition } from '../../data/edition.js'

const { encontros } = edition

export default function Encontros() {
  return (
    <section className="section survey" id="encontros" data-screen-label="Encontros">
      <div className="wrap inner">
        {/* Lado esquerdo */}
        <div className="reveal">
          <span className="eyebrow">Resultados · 33ª Edição</span>
          <h2>{encontros.titulo}</h2>
          <p>{encontros.intro}</p>
          <p style={{ marginTop: 12 }}>{encontros.descricao}</p>

          {/* Próximas datas */}
          {encontros.proximasDatas && encontros.proximasDatas.length > 0 && (
            <div style={{ marginTop: 24 }}>
              <span className="eyebrow" style={{ color: 'rgba(255,255,255,.7)', marginBottom: 8, display: 'block' }}>
                Já reserve na sua agenda as próximas datas para acompanhar ao vivo:
              </span>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 6 }}>
                {encontros.proximasDatas.map((d, i) => (
                  <li key={i} style={{ color: 'rgba(255,255,255,.85)', fontSize: 14, display: 'flex', gap: 8, alignItems: 'center' }}>
                    <span style={{ color: 'var(--brand-yellow)', flexShrink: 0 }}>▸</span>
                    {d}
                  </li>
                ))}
              </ul>
              <p style={{ marginTop: 12, color: 'rgba(255,255,255,.7)', fontSize: 13 }}>
                Fique de olho em nossas comunicações para conferir os horários e acessar os links.
              </p>
            </div>
          )}
        </div>

        {/* Links das gravações */}
        <div className="reveal d2" style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <span className="eyebrow" style={{ color: 'rgba(255,255,255,.7)', marginBottom: 4 }}>
            Confira as gravações
          </span>
          {encontros.gravacoes.map((g, i) => (
            <a
              key={i}
              href={g.href}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-yellow"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 10 }}
            >
              <span style={{ fontSize: 18 }}>▶</span>
              {g.titulo}
              <span className="arrow">→</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
