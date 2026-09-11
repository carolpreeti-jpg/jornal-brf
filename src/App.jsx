import { useScrollReveal } from './hooks/useScrollReveal.js'
import Header       from './components/layout/Header.jsx'
import Footer       from './components/layout/Footer.jsx'

import MenuIndex      from './components/sections/MenuIndex.jsx'
import Hero           from './components/sections/Hero.jsx'
import Editorial      from './components/sections/Editorial.jsx'
import Portabilidade  from './components/sections/Portabilidade.jsx'
import Beneficiarios  from './components/sections/Beneficiarios.jsx'
import Reconhecimento from './components/sections/Reconhecimento.jsx'
import Conexao        from './components/sections/Conexao.jsx'
import Planejamento   from './components/sections/Planejamento.jsx'
import PlanoFamilia   from './components/sections/PlanoFamilia.jsx'
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
        <Portabilidade />
        <Beneficiarios />
        <Reconhecimento />
        <Conexao />
        <Planejamento />
        <PlanoFamilia />
        <Redes />
      </main>

      <Footer />
    </>
  )
}
