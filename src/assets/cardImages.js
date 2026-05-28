/**
 * Imagens dos cards do MenuIndex importadas como módulos Vite.
 * Isso garante que o Vite gere nomes com hash no build (ex: jessica-webinar.Abc1234.jpg),
 * forçando o browser a buscar a versão nova sempre que o arquivo mudar.
 *
 * Para trocar uma imagem: substitua o arquivo em src/assets/cards/ e rode npm run build.
 */

import edicao         from './cards/edicao.jpg'
import acaoCuritiba   from './cards/acao-curitiba.png'
import mauricio       from './cards/mauricio-manduca.jpg'
import ivoneCard      from './cards/ivone-card.jpg'
import rai            from './cards/rai.png'
import jessicaWebinar from './cards/jessica-webinar.jpg'
import encontros      from './cards/encontro-resultados.png'
import bilhoes        from './cards/bilhoes.jpg'
import desempenho     from './cards/desempenho.jpg'
import aportes        from './cards/aportes.png'
import webinar        from './cards/webinar.jpg'
import appBrf         from './cards/app-brf-pre.png'

/** Mapa: valor de card.imagem → URL com hash gerado pelo Vite */
export const CARD_IMAGES = {
  '/edicao.jpg':              edicao,
  '/acao-curitiba.png':       acaoCuritiba,
  '/mauricio-manduca.jpg':    mauricio,
  '/ivone-card.jpg':          ivoneCard,
  '/rai.png':                 rai,
  '/jessica-webinar.jpg':     jessicaWebinar,
  '/encontro-resultados.png': encontros,
  '/bilhoes.jpg':             bilhoes,
  '/desempenho.jpg':          desempenho,
  '/aportes.png':             aportes,
  '/webinar.jpg':             webinar,
  '/app-brf-pre.png':         appBrf,
}
