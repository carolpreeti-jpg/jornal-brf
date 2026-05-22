import { useSideIndex } from '../../hooks/useSideIndex.js'

const items = [
  { href: '#editorial',       label: '01 Editorial' },
  { href: '#compromisso',     label: '02 Compromisso' },
  { href: '#fale-presidente', label: '03 Fale c/ Presidente' },
  { href: '#historias',       label: '04 Histórias' },
  { href: '#relatorio',       label: '05 Relatório Anual' },
  { href: '#webinar',         label: '06 Webinar IR' },
  { href: '#encontros',       label: '07 Encontros' },
  { href: '#patrimonio',      label: '08 Patrimônio' },
  { href: '#aportes',         label: '09 Aportes' },
  { href: '#rentabilidade',   label: '10 Rentabilidade' },
  { href: '#renda-certa',     label: '11 Renda Certa' }
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
