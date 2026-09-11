import { useSideIndex } from '../../hooks/useSideIndex.js'

const items = [
  { href: '#editorial',       label: '01 Editorial' },
  { href: '#portabilidade',   label: '02 Portabilidade' },
  { href: '#beneficiarios',   label: '03 Beneficiários' },
  { href: '#reconhecimento',  label: '04 Selo Sintonia A+', node: <><span style={{display:'block'}}>04 Selo</span><span style={{display:'block', paddingLeft:'1.1em'}}>Sintonia A+</span></> },
  { href: '#conexao',         label: '05 Conexão BRF Prev', node: <><span style={{display:'block'}}>05 Conexão</span><span style={{display:'block', paddingLeft:'1.1em'}}>BRF Prev</span></> },
  { href: '#planejamento',    label: '06 Planejamento' },
  { href: '#plano-familia',   label: '07 Plano Família' },
  { href: '#redes',           label: '08 Redes Sociais' },
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
            {item.node ?? item.label}
          </a>
        </li>
      ))}
    </ul>
  )
}
