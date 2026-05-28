import { edition } from '../../data/edition.js'
import { asset } from '../../utils/assets.js'

const { relatorio } = edition

export default function RelatorioAnual() {
  return (
    <section className="section events" id="relatorio" data-screen-label="Relatório Anual">
      <div className="wrap">
        <div className="section-head reveal">
          <img
            src={asset('/imagem06.png')}
            alt="Relatório Anual 2025"
            style={{ width: '100%', borderRadius: 12, display: 'block', marginBottom: 32 }}
          />
          <div className="relatorio-top-row">

            <div className="relatorio-text-col">
              {relatorio.descricao.split('\n\n').map((p, i) => (
                <p key={i} style={{ marginTop: i === 0 ? 0 : 16 }}>{p}</p>
              ))}
            </div>

            <div className="relatorio-note-col">
              <img
                src={asset('/note.png')}
                alt="Notebook"
              />
            </div>

          </div>
        </div>

        <div className="relatorio-grid reveal">
          {relatorio.celulas.map((c, i) => (
            <div key={i} className={`cell cell-${i + 1}`}>
              <strong className="cell-titulo">{c.titulo}</strong>
              <p className="cell-texto">{c.texto}</p>
            </div>
          ))}
        </div>

        <div className="testimonial-card testimonial-card--horizontal reveal" style={{ marginTop: 72 }}>
          <div className="card-top">
            <img
              src={asset('/vivian-fonseca.jpg')}
              alt="Vivian Fonseca"
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', display: 'block', borderRadius: '16px 0 0 16px' }}
            />
          </div>
          <div className="quote-badge">"</div>
          <div className="card-bottom">
            <div>
              <p className="card-author-name" style={{ fontFamily: "'Co Headline', sans-serif", fontWeight: 400, color: '#EE686D', fontSize: 20 }}>{relatorio.citacaoAutor.split(',')[0]}</p>
              <p className="card-author-role">
                {relatorio.citacaoAutor.split(',').slice(1).join(',').trim().split(' e ').map((part, i, arr) => (
                  <span key={i} style={{ display: 'block' }}>{i > 0 ? 'e ' : ''}{part}</span>
                ))}
              </p>
            </div>
            <p className="card-text">{relatorio.citacao}</p>
          </div>
        </div>

        <div className="cta-row reveal" style={{ marginTop: 64 }}>
          <a
            className="btn btn-primary"
            href={relatorio.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{ background: '#ED676D', boxShadow: 'none', fontSize: 18 }}
          >
            Acesse o Relatório Anual 2025
          </a>
        </div>
      </div>
    </section>
  )
}
