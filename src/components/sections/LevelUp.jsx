import { edition } from '../../data/edition.js'

const { levelUp } = edition

export default function LevelUp() {
  return (
    <section className="section levelup" id="levelup" data-screen-label="Level Up">
      <div className="wrap">
        <div className="row">
          {/* Conteúdo */}
          <div className="reveal">
            <span className="eyebrow" style={{ color: '#FCD34D' }}>
              Gamificação · {levelUp.temporada}
            </span>

            <div className="levelup-title">
              <span className="lu-mark">
                <span className="l">L</span>
                <span className="e">e</span>
                <span className="v">v</span>
                <span className="e2">e</span>
                <span className="l2">l</span>
              </span>
              <span className="lu-mark">
                <span className="u">U</span>
                <span className="p">p</span>
              </span>
              <h3><em>Renda Certa</em> — pontue e ganhe pontos extras.</h3>
            </div>

            {/* Regras */}
            <div className="lu-rules">
              {levelUp.regras.map((r, i) => (
                <div key={i} className="lu-rule">
                  <span className="ic">{r.ic}</span>
                  <span className="t">{r.texto}</span>
                  <span className="pts">{r.pts}</span>
                </div>
              ))}
            </div>

            {/* Faixas */}
            <div className="lu-tiers" aria-label="Faixas de premiação">
              {levelUp.faixas.map((f) => (
                <div key={f.nivel} className="lu-tier">
                  <div className="p">{f.pts}</div>
                  <div className="l">{f.nivel}</div>
                  <div className="pr">{f.premio}</div>
                </div>
              ))}
            </div>

            <div className="lu-cta">
              <a className="btn btn-yellow" href="#">
                Participar do Level Up <span className="arrow">→</span>
              </a>
            </div>
          </div>

          {/* Foto decorativa */}
          <div className="lu-photo reveal d2" aria-hidden="true">
            <span className="badge">+150 pts hoje</span>
          </div>
        </div>
      </div>
    </section>
  )
}
