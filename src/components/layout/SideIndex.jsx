import { useSideIndex } from '../../hooks/useSideIndex.js'

const items = [
  { href: '#editorial',     label: '01 Editorial' },
  { href: '#diretor',       label: '02 Diretor' },
  { href: '#vire-o-jogo',   label: '03 Vire o jogo' },
  { href: '#unidades',      label: '04 Unidades' },
  { href: '#elas',          label: '05 Elas' },
  { href: '#novo-site',     label: '06 Novo site' },
  { href: '#eventos',       label: '07 Eventos' },
  { href: '#pesquisa',      label: '08 Pesquisa' },
  { href: '#rentabilidade', label: '09 Rentabilidade' },
  { href: '#estatuto',      label: '10 Estatuto' },
  { href: '#levelup',       label: '11 Level Up' },
  { href: '#redes',         label: '12 Redes' },
]

const sectionIds = items.map((i) => i.href.replace('#', ''))

export default function SideIndex() {
  useSideIndex(sectionIds)

  return (
    <ul className="side-index" id="side-index" aria-label="Índice rápido">
      {items.map((item) => (
        <li key={item.href}>
          <a href={item.href}>
            <span className="b" />
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  )
}
