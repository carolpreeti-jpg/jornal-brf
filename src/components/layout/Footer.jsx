const S = {
  wrap: {
    maxWidth: 1200,
    margin: '0 auto',
    padding: '12px 40px 40px',
  },
  topGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: 48,
    marginBottom: 56,
  },
  sectionTitle: {
    fontFamily: "'Co Headline', sans-serif",
    fontWeight: 400,
    fontSize: 22,
    color: '#8b8fe8',
    marginBottom: 20,
  },
  block: { marginBottom: 24 },
  label: {
    fontFamily: "'Noto Sans', sans-serif",
    fontWeight: 700,
    fontSize: 14,
    color: '#fff',
    marginBottom: 6,
  },
  text: {
    fontFamily: "'Noto Sans', sans-serif",
    fontSize: 14,
    color: 'rgba(255,255,255,0.75)',
    lineHeight: 1.7,
    margin: 0,
  },
  divider: {
    borderTop: '1px solid rgba(255,255,255,0.12)',
    marginBottom: 40,
  },
  bottomGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: 48,
    alignItems: 'start',
  },
  logo: {
    fontFamily: "'Co Headline', sans-serif",
    fontWeight: 400,
    marginBottom: 24,
  },
  ctaLabel: {
    fontFamily: "'Noto Sans', sans-serif",
    fontWeight: 700,
    fontSize: 13,
    color: '#fff',
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
    marginBottom: 12,
  },
  link: {
    color: 'rgba(255,255,255,0.75)',
    textDecoration: 'underline',
    fontFamily: "'Noto Sans', sans-serif",
    fontSize: 14,
  },
}

export default function Footer() {
  return (
    <footer id="contato" data-screen-label="Rodapé" style={{ background: '#0B1530' }}>
      <div style={S.wrap}>

        {/* ── Expediente ── */}
        <div style={S.topGrid}>

          {/* Coluna esquerda */}
          <div>
            <p style={S.sectionTitle}>Expediente</p>

            <div style={S.block}>
              <p style={S.label}>Diretoria Executiva</p>
              <p style={S.text}>
                Maurício Manduca – Diretor-Presidente<br />
                Milton Cabral – Diretor de Investimento<br />
                Vivian Fonseca - Diretora Administrativa e de Seguridade
              </p>
            </div>

            <div style={S.block}>
              <p style={S.label}>Conselho Deliberativo</p>
              <p style={S.text}>
                <span style={{ display: 'block', marginBottom: 10 }}>Presidente: Daniel Luis Moreli Rocha</span>
                <span style={{ display: 'block', marginBottom: 10 }}>Vice-Presidente: Indiara Kurtz Danelli Manfre</span>
                <span style={{ display: 'block' }}>Conselheiros: Victor Rodrigues Antonio, Thiago Luiz de Freitas Pereira, Felipe Costa Ricciulli Soares, Antonio Carlos Cesco, Rafael Lando Menute, Luzia Goldbeck de Andrade, Jair Bondicz, José Carlos de Carvalho Martins, Júlio Cesar Cavasin, Hugo Saito</span>
              </p>
            </div>
          </div>

          {/* Coluna direita */}
          <div>
            <div style={{ ...S.block, marginTop: 42 }}>
              <p style={S.label}>Conselho Fiscal</p>
              <p style={S.text}>
                <span style={{ display: 'block', marginBottom: 10 }}>Presidente: Almir Sebastiao Zanon Xavier</span>
                <span style={{ display: 'block' }}>Conselheiros: Valmir Grolli, Ludieri Leandro Fiorelli, Tiago Both, Vinícius José Ferreira de Almeida, Osvaldo Vaz</span>
              </p>
            </div>

            <div style={S.block}>
              <p style={S.label}>Comunicação e Marketing</p>
              <p style={S.text}>Tatiani Leite</p>
            </div>

            <div style={S.block}>
              <p style={S.label}>Edição de arte:</p>
              <a href="https://mirador360.com.br" target="_blank" rel="noopener noreferrer" style={S.link}>
                Mirador Comunicação
              </a>
            </div>
          </div>
        </div>

        <div style={S.divider} />

        {/* ── Parte inferior ── */}
        <div style={S.bottomGrid}>

          {/* Esquerda — Logo + Canais */}
          <div>
            <div style={{ ...S.logo, marginBottom: 20 }}>
              <div style={{ fontFamily: "'Co Headline', sans-serif", fontWeight: 700, fontSize: 22, color: '#fff', lineHeight: 1 }}>BRF</div>
              <div style={{ fontFamily: "'Co Headline', sans-serif", fontWeight: 400, fontSize: 16, color: 'rgba(255,255,255,0.8)' }}>previdência</div>
            </div>

            <p style={S.ctaLabel}>Canais de Atendimento</p>
            <p style={S.text}>
              CENTRAL: 0800 702 4422<br />
              Atendimento das <strong style={{ color: '#fff' }}>8:30 às 17:30</strong> (de segunda a sexta-feira).<br /><br />
              E-MAIL: <a href="mailto:atendimento@brfprevidencia.com.br" style={S.link}>atendimento@brfprevidencia.com.br</a><br /><br />
              WHATS APP: (11) 96325-9487 - Atendimento somente por mensagens.
            </p>
          </div>

          {/* Direita — Redes + Denúncia + Versões */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 28 }}>

            {/* Ícones sociais */}
            <div style={{ display: 'flex', gap: 14 }}>
              {/* Instagram */}
              <a href="https://instagram.com/brfprevidencia" target="_blank" rel="noopener noreferrer" aria-label="Instagram"
                style={{ width: 48, height: 48, borderRadius: '50%', background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none' }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0f1f4b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
              {/* Facebook */}
              <a href="https://facebook.com/brfprevidencia" target="_blank" rel="noopener noreferrer" aria-label="Facebook"
                style={{ width: 48, height: 48, borderRadius: '50%', background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none' }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="#0f1f4b">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
              {/* LinkedIn */}
              <a href="https://linkedin.com/company/brf-previdencia" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
                style={{ width: 48, height: 48, borderRadius: '50%', background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none' }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="#0f1f4b">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
              {/* YouTube */}
              <a href="https://youtube.com/canalhrfprev" target="_blank" rel="noopener noreferrer" aria-label="YouTube"
                style={{ width: 48, height: 48, borderRadius: '50%', background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none' }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0f1f4b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#0f1f4b" stroke="none"/>
                </svg>
              </a>
            </div>

            {/* Canal de Denúncia */}
            <div>
              <p style={{ ...S.text, color: '#fff' }}>
                <strong>CANAL DE DENÚNCIA:</strong> 0800 740 4789
              </p>
              <p style={S.text}>
                Email: <a href="mailto:canaldedenuncias.brfprevidencia@iaudit.com.br" style={S.link}>
                  canaldedenuncias.brfprevidencia@iaudit.com.br
                </a>
              </p>
            </div>

            {/* Versões anteriores */}
            <div>
              <p style={{ ...S.text, marginBottom: 4 }}>Quer acessar as versões anteriores do jornal?</p>
              <a href={'/edicoes.html'} style={{ ...S.link, fontWeight: 700, color: '#fff', fontSize: 15 }}>
                CLIQUE AQUI
              </a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  )
}
