import { useEffect } from 'react'

/**
 * Adiciona a classe .scrolled ao <header id="site-header">
 * quando o usuário rola além de 8px.
 */
export function useStickyHeader() {
  useEffect(() => {
    const header = document.getElementById('site-header')
    if (!header) return

    const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 8)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()

    return () => window.removeEventListener('scroll', onScroll)
  }, [])
}
