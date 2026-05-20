import { useScrollReveal } from './hooks/useScrollReveal.js'
import Header    from './components/layout/Header.jsx'
import Footer    from './components/layout/Footer.jsx'

import MenuIndex     from './components/sections/MenuIndex.jsx'
import Hero          from './components/sections/Hero.jsx'
import Editorial     from './components/sections/Editorial.jsx'
import Diretor       from './components/sections/Diretor.jsx'
import VireOJogo     from './components/sections/VireOJogo.jsx'
import Unidades      from './components/sections/Unidades.jsx'
import Elas          from './components/sections/Elas.jsx'
import NovoSite      from './components/sections/NovoSite.jsx'
import Eventos       from './components/sections/Eventos.jsx'
import Pesquisa      from './components/sections/Pesquisa.jsx'
import Rentabilidade from './components/sections/Rentabilidade.jsx'
import Estatuto      from './components/sections/Estatuto.jsx'
import LevelUp       from './components/sections/LevelUp.jsx'
import Redes         from './components/sections/Redes.jsx'

export default function App() {
  useScrollReveal()

  return (
    <>
      <Header />
      <main id="top">
        <Hero />
        <MenuIndex />
        <Editorial />
        <Diretor />
        <VireOJogo />
        <Unidades />
        <Elas />
        <NovoSite />
        <Eventos />
        <Pesquisa />
        <Rentabilidade />
        <Estatuto />
        <LevelUp />
        <Redes />
      </main>

      <Footer />
    </>
  )
}
