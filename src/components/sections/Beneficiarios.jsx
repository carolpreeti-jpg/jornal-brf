import { edition } from '../../data/edition.js'
import { asset } from '../../utils/assets.js'

const { beneficiarios: b } = edition

const NOTO = { fontFamily: "'Noto Sans', sans-serif" }
const TXT  = { ...NOTO, fontSize: 17, lineHeight: 1.8, color: 'var(--text-secondary)' }

const TRIGGER_COLORS = ['var(--brand-blue)', 'var(--brand-coral)', 'var(--brand-blue-mid)']
const TRIGGER_ICONS = [
  <svg key="t1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="8" cy="15" r="5" /><circle cx="16" cy="15" r="5" /></svg>,
  <svg key="t2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3v6" /><path d="M12 9 6 21" /><path d="M12 9l6 12" /></svg>,
  <svg key="t3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M18.4 5.6l-2.8 2.8M8.4 15.6l-2.8 2.8" /></svg>,
  <svg key="t4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="7" r="3" /><path d="M2 21v-1a6 6 0 0 1 6-6h2a6 6 0 0 1 6 6v1" /><circle cx="18" cy="8" r="2.2" /><path d="M22 21v-.8a4.2 4.2 0 0 0-3-4" /></svg>,
  <svg key="t5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 21c6-1 9-6 9-13-7 0-12 3-13 9-1 3 0 4 4 4Z" /><path d="M12 21c-1-4 1-8 5-11" /></svg>,
  <svg key="t6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 11l9-7 9 7" /><path d="M5 10v10h14V10" /><path d="M9 20v-6h6v6" /></svg>,
  <svg key="t7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="12" r="8" /><circle cx="12" cy="12" r="4" /><circle cx="12" cy="12" r=".6" fill="currentColor" stroke="none" /></svg>,
]

export default function Beneficiarios() {
  return (
    <section className="section" id="beneficiarios" data-screen-label="Beneficiários" style={{ background: 'var(--gray-50)' }}>
      <div className="wrap">

        {/* Cabeçalho */}
        <div className="section-head reveal">
          <span className="editorial-label" style={{ transform: 'none', whiteSpace: 'nowrap', maxWidth: 'none', minWidth: 158, fontSize: 13, padding: '11px 22px', boxShadow: 'none' }}>Planos Previdenciários</span>
          <h2>
            {(() => {
              const marker = 'última vez que você revisou seus beneficiários no plano?'
              const idx = b.titulo.indexOf(marker)
              return idx === -1
                ? b.titulo
                : <>{b.titulo.slice(0, idx)}<span style={{ color: 'var(--brand-coral)' }}>{marker}</span></>
            })()}
          </h2>
        </div>

        <div className="beneficiarios-intro-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: 32, alignItems: 'stretch', marginBottom: 48 }}>
          <div style={{ position: 'relative', minHeight: 220 }}>
            <div style={{ borderRadius: 'var(--radius-card)', overflow: 'hidden', width: '100%', height: '100%' }}>
              <img
                src={asset('/mother-son-autumn-park.jpg')}
                alt="Mãe com filho no parque"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
            </div>
          </div>
          <div>
            {b.intro.map((txt, i) => (
              <p key={i} style={{ ...TXT, marginBottom: i < b.intro.length - 1 ? 20 : 0 }}>{txt}</p>
            ))}
          </div>
        </div>

        {/* Quem é o beneficiário */}
        <div style={{
          background: '#fff',
          borderRadius: 'var(--radius-card)',
          border: '1px solid var(--gray-200)',
          padding: '32px 32px',
          marginBottom: 48,
        }}>
          <h3 style={{ fontFamily: "'Co Headline', sans-serif", fontWeight: 400, fontSize: 24, color: 'var(--brand-blue)', margin: '0 0 14px' }}>
            {b.quemEBeneficiario.titulo}
          </h3>
          <p style={{ ...TXT, margin: 0 }}>{b.quemEBeneficiario.texto}</p>
        </div>

        {/* Quando vale a pena revisar */}
        <div style={{ marginBottom: 56 }}>
          <h3 style={{ fontFamily: "'Co Headline', sans-serif", fontWeight: 400, fontSize: 26, color: 'var(--text-primary)', margin: '0 0 10px' }}>
            {b.quandoRevisar.titulo}
          </h3>
          <p style={{ ...TXT, marginBottom: 24 }}>{b.quandoRevisar.intro}</p>
          <div className="trigger-grid">
            {b.quandoRevisar.itens.map((item, i) => (
              <div
                key={i}
                className="trigger-card reveal d2"
                style={{ '--card-color': TRIGGER_COLORS[i % TRIGGER_COLORS.length] }}
              >
                <span className="trigger-icon">{TRIGGER_ICONS[i % TRIGGER_ICONS.length]}</span>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Como funciona por plano */}
        <div style={{ marginBottom: 56 }}>
          <h3 style={{ fontFamily: "'Co Headline', sans-serif", fontWeight: 400, fontSize: 26, color: 'var(--text-primary)', margin: '0 0 10px' }}>
            {b.comoFunciona.titulo}
          </h3>
          <p style={{ ...TXT, marginBottom: 28 }}>{b.comoFunciona.intro}</p>

          {(() => {
            const renderPlano = (plano, key) => (
              <article key={key} className="unit-card">
                <div className="unit-body" style={{ padding: '28px 26px' }}>
                  <h3 style={{ color: 'var(--brand-coral)', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 21 }}>{plano.nome}</h3>

                  {plano.intro && (
                    <p style={{ ...NOTO, fontSize: 18, fontWeight: 700, color: 'var(--text-primary)', margin: '4px 0 0' }}>{plano.intro}</p>
                  )}

                  {plano.categorias && plano.categorias.map((cat, j) => (
                    <p key={j} style={{ ...NOTO, fontSize: 18, lineHeight: 1.75, color: 'var(--text-secondary)', margin: '10px 0 0' }}>
                      <strong style={{ color: 'var(--text-primary)' }}>{cat.titulo}</strong> — {cat.texto}
                    </p>
                  ))}

                  {plano.ordem && (
                    <div style={{ marginTop: 16, paddingTop: 14, borderTop: '1px solid var(--gray-100)' }}>
                      <p style={{ ...NOTO, fontSize: 17, fontWeight: 700, color: 'var(--text-primary)', margin: '0 0 6px' }}>{plano.ordem.titulo}</p>
                      {plano.ordem.itens.map((it, k) => (
                        <p key={k} style={{ ...NOTO, fontSize: 17, color: 'var(--text-secondary)', margin: '2px 0' }}>{it}</p>
                      ))}
                    </div>
                  )}

                  {plano.texto && (
                    <p style={{ ...NOTO, fontSize: 18, lineHeight: 1.75, color: 'var(--text-secondary)', margin: '10px 0 0' }}>{plano.texto}</p>
                  )}

                  {plano.extra && (
                    <p style={{ ...NOTO, fontSize: 18, lineHeight: 1.75, color: 'var(--brand-coral)', fontWeight: 600, margin: '10px 0 0' }}>{plano.extra}</p>
                  )}
                </div>
              </article>
            )

            // Ordem visual: um plano por linha — Plano II, III, FAF, Família.
            const [pIII, pII, pFamilia, pFAF] = b.comoFunciona.planos
            return (
              <div className="units-col">
                {renderPlano(pII, 'II')}
                {renderPlano(pIII, 'III')}
                {renderPlano(pFAF, 'FAF')}
                {renderPlano(pFamilia, 'Familia')}
                <p style={{ ...TXT, fontSize: 15 }}>{b.comoFunciona.fechamento}</p>
              </div>
            )
          })()}
        </div>

        {/* Dependente no IR — callout */}
        <div style={{
          background: 'var(--brand-blue-light)',
          borderLeft: '4px solid var(--brand-blue)',
          borderRadius: '0 var(--radius-card) var(--radius-card) 0',
          padding: '24px 28px',
          marginBottom: 56,
        }}>
          <h3 style={{ fontFamily: "'Co Headline', sans-serif", fontWeight: 400, fontSize: 20, color: 'var(--brand-blue)', margin: '0 0 8px' }}>
            {b.dependenteIR.titulo}
          </h3>
          <p style={{ ...NOTO, fontSize: 15, lineHeight: 1.75, color: 'var(--text-secondary)', margin: 0 }}>{b.dependenteIR.texto}</p>
        </div>

        {/* Como atualizar */}
        <div style={{ marginBottom: 20, position: 'relative' }}>
          <h3 style={{ fontFamily: "'Co Headline', sans-serif", fontWeight: 400, fontSize: 26, color: 'var(--text-primary)', margin: '0 0 10px' }}>
            {b.comoAtualizar.titulo}
          </h3>
          <p style={{ ...TXT, marginBottom: 20 }}>{b.comoAtualizar.intro}</p>
          <div className="como-atualizar-grid" style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 24 }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              {b.comoAtualizar.canais.map((c, i) => (
                <div key={i} style={{ background: '#fff', border: '1px solid var(--gray-200)', borderRadius: 'var(--radius-card)', padding: '22px 24px' }}>
                  <p style={{ ...NOTO, fontWeight: 700, fontSize: 16, color: 'var(--brand-coral)', margin: '0 0 6px' }}>{c.titulo}</p>
                  <p style={{ ...NOTO, fontSize: 15, lineHeight: 1.7, color: 'var(--text-secondary)', margin: 0 }}>{c.texto}</p>
                </div>
              ))}
            </div>
            <div />
          </div>

          <img
            src={asset('/app-brf-prev-celular.png')}
            alt="Aplicativo BRF Prev"
            style={{
              position: 'absolute', top: -40, right: '4%', zIndex: 1,
              maxWidth: '30%', width: 'auto', height: 'auto', objectFit: 'contain',
              pointerEvents: 'none',
            }}
          />
        </div>

        {/* Box final — mantenha seu cadastro em dia */}
        <div style={{
          background: 'var(--brand-blue)',
          borderRadius: 'var(--radius-card)',
          padding: '40px 40px',
          color: '#fff',
          position: 'relative',
        }}>
          <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 26, color: '#fff', margin: '0 0 8px' }}>
            {b.boxFinal.titulo}
          </h3>
          <p style={{ ...NOTO, fontSize: 15, color: 'rgba(255,255,255,.85)', margin: '0 0 4px' }}>{b.boxFinal.intro}</p>
          <p style={{ ...NOTO, fontSize: 15, color: 'rgba(255,255,255,.85)', margin: '0 0 20px' }}>{b.boxFinal.texto}</p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginBottom: 24 }}>
            {b.boxFinal.itens.map((item, i) => (
              <span key={i} style={{
                ...NOTO,
                background: 'rgba(255,255,255,.12)',
                border: '1px solid rgba(255,255,255,.25)',
                borderRadius: 999,
                padding: '8px 20px',
                fontSize: 14,
                color: '#fff',
              }}>{item}</span>
            ))}
          </div>

          <p style={{ ...NOTO, fontSize: 15, lineHeight: 1.75, color: 'rgba(255,255,255,.85)', margin: 0 }}>{b.boxFinal.fechamento}</p>
        </div>

      </div>
    </section>
  )
}
