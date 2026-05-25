import { edition } from '../../data/edition.js'

const { historias } = edition

export default function Historias() {
  return (
    <section className="elas" id="historias" data-screen-label="Histórias">

      {/* Wave superior */}
      <svg
        className="wave-divider"
        style={{ transform: 'rotate(180deg)', background: '#fff' }}
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path fill="#1B46B2" d="M0,30 C240,80 480,0 720,30 C960,60 1200,10 1440,40 L1440,80 L0,80 Z" />
      </svg>

      <div className="wrap inner">

        {/* Grid: foto esquerda · badge + título + intro direita */}
        <div className="elas-hero-grid">

          {/* Coluna esquerda — foto */}
          <div className="elas-photo" style={{ alignSelf: 'stretch', clipPath: 'inset(0 0 15% 0 round 24px)' }} aria-hidden="true">
            <img
              src="/ivone-delazari.jpg"
              alt="Dra. Ivone Delazari"
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', display: 'block' }}
            />
          </div>

          {/* Coluna direita — badge, título, primeiro parágrafo */}
          <div>
            <div className="hist-badge" style={{ marginTop: 40, marginLeft: '-260px', position: 'relative', zIndex: 10 }}>Histórias que Inspiram</div>
            <h2 style={{ marginTop: 2 }}>{historias.subtitulo}</h2>
            <p style={{ opacity: 0.9, marginTop: 32 }}>{historias.intro}</p>
          </div>

        </div>

        {/* Blocos de história abaixo */}
        <div className="elas-text" style={{ marginTop: '-2%' }}>
          {historias.blocos.slice(0, 2).map((bloco, i) => (
            <div key={i} style={{ marginBottom: 64 }}>
              <h3 style={{ color: '#fff', marginBottom: 18 }}>{bloco.titulo}</h3>
              <p>{bloco.texto}</p>
              <blockquote className="hist-quote">
                {i === 0 ? (
                  <>
                    "Eu fazia questão de visitar todas as unidades e estar com os trabalhadores da unidade.
                    <br />Eles diziam que aprendiam comigo, mas, na realidade, eu que aprendia com eles."
                  </>
                ) : `"${bloco.citacao}"`}
              </blockquote>
            </div>
          ))}
        </div>

        {/* Bloco 3 · texto à esquerda · foto à direita — termina em "trajetória coletiva" */}
        <div className="elas-hero-grid" style={{ marginTop: 40, alignItems: 'start' }}>

          <div style={{ paddingRight: 48 }}>
            <h3 style={{ color: '#fff', marginBottom: 18 }}>{historias.blocos[2].titulo}</h3>
            <p>{historias.blocos[2].texto}</p>
            <blockquote className="hist-quote">
              "{historias.blocos[2].citacao}"
            </blockquote>
            {historias.blocos[2].complemento && (
              <p style={{ marginTop: 24, opacity: 0.88 }}>{historias.blocos[2].complemento}</p>
            )}
          </div>


        </div>

        {/* Um exemplo que fica — largura total */}
        <div style={{ marginTop: 32 }}>
          <h3 style={{ color: '#fff', marginBottom: 18 }}>Um exemplo que fica</h3>
          <p style={{ opacity: 0.88 }}>
            {historias.fechamento}
          </p>
        </div>

      </div>

      {/* Wave inferior */}
      <svg
        className="wave-divider"
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path fill="#F8FAFC" d="M0,40 C240,80 480,0 720,30 C960,60 1200,20 1440,50 L1440,80 L0,80 Z" />
      </svg>

    </section>
  )
}
