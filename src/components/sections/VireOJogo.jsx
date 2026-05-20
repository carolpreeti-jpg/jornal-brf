import { edition } from '../../data/edition.js'

const { vireOJogo } = edition

export default function VireOJogo() {
  const pct = vireOJogo.progresso.percentual

  return (
    <section className="section game" id="vire-o-jogo" data-screen-label="Vire o jogo">
      <div className="wrap">
        <div className="row">
          {/* Esquerdo */}
          <div className="reveal">
            <span className="eyebrow">Aporte Extra · Campanha</span>
            <h2>
              Vire <em>o jogo:</em>
            </h2>
            <p className="sub">
              Já imaginou aumentar seu saldo e ainda ganhar um{' '}
              {vireOJogo.premio}? Quem faz aporte extra durante a campanha entra
              automaticamente no sorteio de prêmios mensais.
            </p>

            <div className="actions">
              <a className="btn btn-primary" href="#">
                Simule agora <span className="arrow">→</span>
              </a>
              <a className="link" href="#">Veja as regras completas</a>
            </div>

            <div className="progress-block">
              <div className="labels">
                <span>Meta da campanha</span>
                <span>
                  <strong>{pct}%</strong> ·{' '}
                  {vireOJogo.progresso.atual.toLocaleString('pt-BR')} /{' '}
                  {vireOJogo.progresso.meta.toLocaleString('pt-BR')} aportes
                </span>
              </div>
              <div className="bar">
                <i style={{ width: `${pct}%` }} />
              </div>
            </div>
          </div>

          {/* Card direito */}
          <div className="prize-card reveal d2">
            <div className="prize-art">
              <span className="ps">
                PS<sup>5</sup>
              </span>
            </div>

            <table className="sim-table" aria-label="Simulação de aporte">
              <thead>
                <tr>
                  <th>Plano de aporte</th>
                  <th>Valor mensal</th>
                  <th>Saldo em 12 meses</th>
                </tr>
              </thead>
              <tbody>
                {vireOJogo.planos.map((p) => (
                  <tr key={p.nome}>
                    <td>{p.nome}</td>
                    <td className="num">{p.mensal}</td>
                    <td className="num">{p.saldo12m}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <p style={{ margin: '12px 0 0', fontSize: 12, color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
              *Projeção considerando rentabilidade IPCA+5,5% a.a.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
