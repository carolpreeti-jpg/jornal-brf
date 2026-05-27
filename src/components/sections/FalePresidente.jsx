import { edition } from '../../data/edition.js'
import { asset } from '../../utils/assets.js'

const { falePresidente } = edition

export default function FalePresidente() {
  return (
    <section className="section newsite" id="fale-presidente" data-screen-label="Fale com o Presidente">
      <div className="wrap">

        {/* Imagem + título — largura total */}
        <div>
          <img
            src={asset('/imagem04.png')}
            alt=""
            style={{ width: '25%', borderRadius: 12, marginBottom: 28, display: 'block' }}
          />
          <h2 style={{ marginTop: 0, fontSize: 'clamp(28px, 3.2vw, 44px)', lineHeight: 1.15 }}>
            <span style={{ color: 'var(--brand-blue)', display: 'block' }}>Fale com o Presidente:</span>
            <span style={{ color: 'var(--gray-700)', display: 'block' }}>um novo canal de escuta</span>
            <span style={{ color: 'var(--gray-700)', display: 'block' }}>e proximidade com</span>
            <span style={{ color: 'var(--gray-700)', display: 'block' }}>os participantes</span>
          </h2>
        </div>

        {/* Grid: texto esquerda · card direita */}
        <div className="fale-content-grid">

          {/* Coluna esquerda — todo o texto */}
          <div>
            <p style={{ color: 'var(--text-secondary)', marginTop: 14 }}>
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

            <p style={{ marginTop: 20, color: 'var(--text-secondary)' }}>
              {falePresidente.cta}{' '}
              <a href={`mailto:${falePresidente.email}`} style={{ color: 'var(--brand-blue)', textDecoration: 'none', fontWeight: 600 }}>
                {falePresidente.email}
              </a>
            </p>
            <p style={{ marginTop: 12, color: 'var(--text-secondary)' }}>
              {falePresidente.ctaComplemento}
            </p>

            <a className="btn btn-primary" style={{ marginTop: 20, background: '#EE686D', boxShadow: 'none', fontSize: 18 }} href={`mailto:${falePresidente.email}`}>
              Acessar o canal
            </a>

          </div>

          {/* Coluna direita — card sticky */}
          <div className="fale-card-col">
            <div className="testimonial-card">
              <div className="card-top" style={{ position: 'relative' }}>
                <img
                  src={asset('/mauricio-manduca.jpg')}
                  alt="Maurício Manduca"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', display: 'block', borderRadius: '16px 16px 0 0' }}
                />
                <div className="quote-badge fale-quote-badge">"</div>
              </div>
              <div className="card-bottom">
                <p className="card-text">{falePresidente.citacao}</p>
                <div>
                  <p className="card-author-name" style={{ fontFamily: "'Co Headline', sans-serif", fontWeight: 400, color: '#EE686D', fontSize: 20 }}>{falePresidente.citacaoAutor.split('\n')[0]}</p>
                  <p className="card-author-role" style={{ fontFamily: "'Noto Sans', sans-serif" }}>{falePresidente.citacaoAutor.split('\n')[1]}</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
