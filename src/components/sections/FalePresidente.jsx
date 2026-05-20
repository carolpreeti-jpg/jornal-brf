import { edition } from '../../data/edition.js'

const { falePresidente } = edition

export default function FalePresidente() {
  return (
    <section className="section newsite" id="fale-presidente" data-screen-label="Fale com o Presidente">
      <div className="wrap">
        <div className="row">
          {/* Texto */}
          <div className="reveal">
            <span className="eyebrow" style={{ color: 'var(--brand-blue-mid)' }}>
              Novo canal · Relacionamento
            </span>
            <h2 style={{ color: 'var(--brand-blue)', marginTop: 10 }}>
              {falePresidente.titulo}
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: 16, marginTop: 14, maxWidth: 520 }}>
              {falePresidente.descricao}
            </p>

            <ul className="check-list" style={{ marginTop: 20 }}>
              {falePresidente.paragrafos.map((p, i) => (
                <li key={i}>
                  <span className="ck">✓</span>
                  {p}
                </li>
              ))}
            </ul>

            <p style={{ marginTop: 20, color: 'var(--text-secondary)', fontSize: 15 }}>
              {falePresidente.cta}
            </p>

            <a className="btn btn-primary" style={{ marginTop: 20 }} href={`mailto:${falePresidente.email}`}>
              Acessar o canal <span className="arrow">→</span>
            </a>
          </div>

          {/* Mockup decorativo */}
          <div className="browser reveal d2" aria-hidden="true">
            <div className="browser-bar">
              <span className="dot r" /><span className="dot y" /><span className="dot g" />
              <span className="url">brfprevidencia.com.br</span>
            </div>
            <div className="browser-body">
              <div className="row1">
                <div className="logo">BRF · previdência</div>
                <div className="menu">
                  <span>Início</span><span>Extrato</span>
                  <span>Simulador</span><span>Conta</span>
                </div>
              </div>
              <div className="hero-box">Fale com o Presidente<br />Estamos ouvindo você.</div>
              <div className="cards">
                <div className="c a" /><div className="c b" /><div className="c c" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
