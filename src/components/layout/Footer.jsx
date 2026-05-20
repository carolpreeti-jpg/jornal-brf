export default function Footer() {
  return (
    <footer id="contato" data-screen-label="Rodapé">
      <div className="wrap">
        <div className="grid">
          {/* Marca */}
          <div className="col">
            <a className="brand" href="#top" style={{ marginBottom: 6 }}>
              <div className="brand-logo">
                <span className="b1">BRF</span>
                <span className="b2">previdência</span>
              </div>
            </a>
            <p className="slogan">
              Cuidamos da previdência complementar de mais de 38 mil participantes
              ativos e aposentados do grupo BRF.
            </p>
            <div className="addr">
              Av. Engenheiro Luiz Carlos Berrini, 1.461<br />
              12º andar · Brooklin · São Paulo/SP<br />
              CEP 04571-011
            </div>
          </div>

          {/* Planos */}
          <div className="col">
            <h4>Planos</h4>
            <ul>
              <li><a href="#">Plano A</a></li>
              <li><a href="#">Plano B</a></li>
              <li><a href="#">Plano FAF</a></li>
              <li><a href="#">Plano III</a></li>
              <li><a href="#">Compare planos</a></li>
            </ul>
          </div>

          {/* Serviços */}
          <div className="col">
            <h4>Serviços</h4>
            <ul>
              <li><a href="#">Portal do Participante</a></li>
              <li><a href="#">Simulador de aposentadoria</a></li>
              <li><a href="#">Extrato online</a></li>
              <li><a href="#">Documentos &amp; formulários</a></li>
              <li><a href="#">Edições anteriores do jornal</a></li>
            </ul>
          </div>

          {/* Contato */}
          <div className="col">
            <h4>Contato</h4>
            <ul>
              <li><a href="#">0800 600 0001 · SAC</a></li>
              <li><a href="#">faleconosco@brfprevidencia.com.br</a></li>
              <li><a href="#">Ouvidoria</a></li>
              <li><a href="#">Atendimento presencial</a></li>
              <li><a href="#">Imprensa</a></li>
            </ul>
          </div>
        </div>

        <div className="bottom">
          <div className="reg">
            © 2025 BRF Previdência · CNPJ 04.123.456/0001-78 · Entidade fiscalizada pela PREVIC
            <a href="#">Política de Privacidade</a>
            <a href="#">Termos</a>
            <a href="#">Acessibilidade</a>
          </div>
          <div className="socials" aria-label="Redes sociais">
            <a href="#" aria-label="Instagram">IG</a>
            <a href="#" aria-label="LinkedIn">in</a>
            <a href="#" aria-label="Facebook">f</a>
            <a href="#" aria-label="YouTube">▶</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
