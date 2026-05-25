import { useScrollReveal } from './hooks/useScrollReveal.js'
import { edition } from './data/edition.js'
import Header       from './components/layout/Header.jsx'
import Footer       from './components/layout/Footer.jsx'

import MenuIndex      from './components/sections/MenuIndex.jsx'
import Hero           from './components/sections/Hero.jsx'
import Editorial      from './components/sections/Editorial.jsx'
import Compromisso    from './components/sections/Compromisso.jsx'
import FalePresidente from './components/sections/FalePresidente.jsx'
import Historias      from './components/sections/Historias.jsx'
import RelatorioAnual from './components/sections/RelatorioAnual.jsx'
import WebinarIR      from './components/sections/WebinarIR.jsx'
import Encontros            from './components/sections/Encontros.jsx'
import CompromissoUnidades  from './components/sections/CompromissoUnidades.jsx'
import RentCarousel         from './components/sections/RentCarousel.jsx'
import Aportes              from './components/sections/Aportes.jsx'
import BRFPrevEmFoco  from './components/sections/BRFPrevEmFoco.jsx'
import AppBRFPrev     from './components/sections/AppBRFPrev.jsx'

export default function App() {
  useScrollReveal()

  return (
    <>
      <Header />
      <main id="top">
        <Hero />
        <MenuIndex />
        <Editorial />
        <Compromisso />
        <FalePresidente />
        <Historias />
        <RelatorioAnual />
        <WebinarIR />
        <Encontros />
        <CompromissoUnidades />
        <WebinarIR
          bg="linear-gradient(150deg, #1B46B2 0%, #1B46B2 60%, #7D94FC 100%)"
          hideTitle
          hideCarousel
          topImage="/imagem11.png"
          customParagrafos={edition.rentabilidade.cenarioParagrafos.slice(0, 4)}
          boxIntro={edition.rentabilidade.desempenhoParagrafos}
          bottomContent={<RentCarousel />}
        />
        <Aportes />
        <BRFPrevEmFoco />
        <AppBRFPrev />
      </main>

      <Footer />
    </>
  )
}
