import { edition } from '../../data/edition.js'
import { useCountdown } from '../../hooks/useCountdown.js'

const { pesquisa } = edition

export default function Pesquisa() {
  const { dias, horas, minutos, segundos } = useCountdown(pesquisa.dataEncerramento)

  return (
    <section className="section survey" id="pesquisa" data-screen-label="Pesquisa">
      <div className="wrap inner">
        {/* Lado esquerdo */}
        <div className="reveal">
          <span className="clock-pill">⏱  Últimos dias para participar</span>
          <h2>{pesquisa.titulo}</h2>
          <p>{pesquisa.descricao}</p>

          <div className="contact-row">
            {pesquisa.contatos.map((c) => (
              <span key={c.texto} className="contact">
                {c.ic}  {c.texto}
              </span>
            ))}
          </div>
        </div>

        {/* Countdown */}
        <div className="countdown reveal d2">
          <span className="l">Encerra em</span>
          <div className="grid">
            <div className="cell"><span className="n">{dias}</span><span className="u">dias</span></div>
            <div className="cell"><span className="n">{horas}</span><span className="u">horas</span></div>
            <div className="cell"><span className="n">{minutos}</span><span className="u">min</span></div>
            <div className="cell"><span className="n">{segundos}</span><span className="u">seg</span></div>
          </div>
          <a className="btn btn-yellow" href="#">
            Responder pesquisa agora <span className="arrow">→</span>
          </a>
        </div>
      </div>
    </section>
  )
}
