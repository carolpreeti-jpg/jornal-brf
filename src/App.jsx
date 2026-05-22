import { useScrollReveal } from './hooks/useScrollReveal.js'
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
import Encontros      from './components/sections/Encontros.jsx'
import Aportes        from './components/sections/Aportes.jsx'
import BRFPrevEmFoco  from './components/sections/BRFPrevEmFoco.jsx'
import AppBRFPrev     from './components/sections/AppBRFPrev.jsx'
import Rentabilidade  from './components/sections/Rentabilidade.jsx'
import RendaCerta     from './components/sections/RendaCerta.jsx'
import Redes          from './components/sections/Redes.jsx'

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
        <Aportes />
        <BRFPrevEmFoco />
        <AppBRFPrev />
        <Rentabilidade />
        <RendaCerta />
        <Redes />
      </main>

      <Footer />
    </>
  )
}
