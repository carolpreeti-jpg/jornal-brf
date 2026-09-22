import { edition } from '../../data/edition.js'
import { asset } from '../../utils/assets.js'
import RentCarousel from './RentCarousel.jsx'

const { rentabilidade } = edition

export default function Rentabilidade() {
  return (
    <section className="section rent rent-dark" id="rentabilidade" data-screen-label="Rentabilidade"
      style={{ background: 'linear-gradient(150deg, #1B46B2 0%, #1B46B2 60%, #7D94FC 100%)' }}>
      <div className="wrap">

        <div className="section-head reveal">
          <h2>{rentabilidade.tituloPrefixo}</h2>
        </div>

        {/* Cenário econômico */}
        <div className="rent-cenario-grid reveal">
          {rentabilidade.cenarioBoxes.map((box, i) => (
            <div key={i} className="rent-cenario-box" style={{ '--rent-accent': box.accent }}>
              <h4 className="rent-cenario-box-title">{box.titulo}</h4>
              {box.paragrafos.map((p, j) => (
                <p key={j} className="rent-cenario-box-text">{p}</p>
              ))}
            </div>
          ))}
        </div>

        {/* Desempenho dos investimentos */}
        <div className="rent-invest-wrap reveal d2">
          <div className="rent-invest-image-wrap">
            <img src={asset('/imagem12.png')} alt="Desempenho dos investimentos da BRF Prev" className="rent-invest-image" />
          </div>

          <div className="rent-invest-card">
            <div className="rent-invest-text-wrap">
              {rentabilidade.desempenhoParagrafos.map((p, i) => (
                <p key={i} className="rent-invest-text">{p}</p>
              ))}
            </div>

            <RentCarousel />

            <p className="rent-foot">{rentabilidade.rodape}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
