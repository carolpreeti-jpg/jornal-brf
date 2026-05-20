import { edition } from '../../data/edition.js'

const { novoSite } = edition

export default function NovoSite() {
  return (
    <section className="section newsite" id="novo-site" data-screen-label="Novo site">
      <div className="wrap">
        <div className="row">
          {/* Texto */}
          <div className="reveal">
            <span className="eyebrow" style={{ color: 'var(--brand-blue-mid)' }}>
              Portal do participante
            </span>
            <h2
              style={{ color: 'var(--brand-blue)', marginTop: 10 }}
              dangerouslySetInnerHTML={{ __html: novoSite.titulo }}
            />
            <p style={{ color: 'var(--text-secondary)', fontSize: 16, marginTop: 14, maxWidth: 520 }}>
              {novoSite.descricao}
            </p>

            <ul className="check-list">
              {novoSite.itens.map((item, i) => (
                <li key={i}>
                  <span className="ck">✓</span>
                  {item}
                </li>
              ))}
            </ul>

            <a className="btn btn-primary" href="#">
              Acesse o novo portal <span className="arrow">→</span>
            </a>
          </div>

          {/* Mockup de browser */}
          <div className="browser reveal d2" aria-hidden="true">
            <div className="browser-bar">
              <span className="dot r" /><span className="dot y" /><span className="dot g" />
              <span className="url">{novoSite.url}</span>
            </div>
            <div className="browser-body">
              <div className="row1">
                <div className="logo">BRF · previdência</div>
                <div className="menu">
                  <span>Início</span><span>Extrato</span>
                  <span>Simulador</span><span>Conta</span>
                </div>
              </div>
              <div className="hero-box">Bem-vindo, Ana. <br />Saldo: R$ 184.927,02</div>
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
