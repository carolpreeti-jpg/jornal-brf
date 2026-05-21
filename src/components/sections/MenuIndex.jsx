import { edition } from '../../data/edition.js'

export default function MenuIndex() {
  return (
    <section className="menu-index" id="menu-index" data-screen-label="Índice">

      <div className="wrap">
        <div className="menu-index-grid">
          {edition.menuIndex.map((card, i) => (
            <a
              key={card.id}
              href={`#${card.id}`}
              className="mi-card reveal"
              style={{ '--delay': `${(i % 4) * 0.07}s` }}
            >
              {/* Imagem/gradiente com recorte orgânico */}
              <div className="mi-img" style={{ background: card.gradient }}>
                {card.imagem && <img src={card.imagem} alt={card.titulo} />}
                <span className="mi-num">{card.n}</span>
              </div>

              {/* Botão seta — posicionado no recorte côncavo */}
              <span className="mi-arrow">↗</span>

              {/* Área de texto */}
              <div className="mi-body">
                <h3 className="mi-titulo">{card.titulo}</h3>
                {card.subtitulo && (
                  <p className="mi-sub">{card.subtitulo}</p>
                )}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
