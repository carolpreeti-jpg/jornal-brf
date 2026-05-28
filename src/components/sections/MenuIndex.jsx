import { edition } from '../../data/edition.js'
import { asset } from '../../utils/assets.js'
import { CARD_IMAGES } from '../../assets/cardImages.js'

export default function MenuIndex() {
  return (
    <section className="menu-index" id="menu-index" data-screen-label="Índice">

      <div className="wrap">
        <div className="section-head menu-index-head reveal">
          <h2>{edition.menuIndexTitulo}</h2>
        </div>

        <div className="menu-index-grid">
          {edition.menuIndex.map((card, i) => (
            <a
              key={card.id}
              href={`#${card.id}`}
              className="mi-card reveal"
              style={{ '--delay': `${(i % 4) * 0.07}s` }}
            >
              {/* Imagem/gradiente com recorte orgânico */}
              <div
                className="mi-img"
                style={{
                  background: card.gradient,
                  '--mi-flip': card.imagemFlipX ? -1 : 1,
                  '--mi-scale': card.imagemScale ?? 1,
                  '--mi-tx': card.imagemTranslateX ?? '0',
                  '--mi-ty': card.imagemTranslateY ?? '0',
                }}
              >
                {card.imagem && (
                  <img
                    loading="lazy"
                    decoding="async"
                    src={CARD_IMAGES[card.imagem] ?? asset(card.imagem)}
                    alt={card.titulo}
                    style={{
                      objectFit: card.imagemFit || 'cover',
                      objectPosition: card.imagemPosition || 'center center',
                    }}
                  />
                )}
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
