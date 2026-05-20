import { useEffect } from 'react'

/**
 * Rastreia qual seção está visível e destaca o link correspondente
 * no índice lateral (#side-index).
 * @param {string[]} ids — array de IDs das seções, na ordem do documento
 */
export function useSideIndex(ids) {
  useEffect(() => {
    const sideLinks = document.querySelectorAll('#side-index a')

    const sections = ids
      .map((id) => ({ id, el: document.getElementById(id) }))
      .filter((s) => s.el)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const id = e.target.id
            sideLinks.forEach((a) =>
              a.classList.toggle('active', a.getAttribute('href') === '#' + id)
            )
          }
        })
      },
      { rootMargin: '-40% 0px -55% 0px' }
    )

    sections.forEach((s) => observer.observe(s.el))
    return () => observer.disconnect()
  }, [ids])
}
