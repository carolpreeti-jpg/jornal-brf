import { useSideIndex } from '../../hooks/useSideIndex.js'

const items = [
  { href: '#editorial',       label: '01 Editorial' },
  { href: '#diretor',         label: '02 Diretor' },
  { href: '#compromisso',     label: '03 Compromisso' },
  { href: '#fale-presidente', label: '04 Fale c/ Presidente' },
  { href: '#historias',       label: '05 Histórias' },
  { href: '#relatorio',       label: '06 Relatório Anual' },
  { href: '#webinar',         label: '07 Webinar IR' },
  { href: '#encontros',       label: '08 Encontros' },
  { href: '#patrimonio',      label: '09 Patrimônio' },
  { href: '#aportes',         label: '10 Aportes' },
  { href: '#rentabilidade',   label: '11 Rentabilidade' },
  { href: '#renda-certa',     label: '12 Renda Certa' },
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
