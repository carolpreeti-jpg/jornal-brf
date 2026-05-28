import { useEffect } from 'react'

/**
 * Aplica lazy loading em imagens abaixo da dobra.
 * Hero e header ficam com carregamento imediato.
 */
export function useLazyImages() {
  useEffect(() => {
    const prioritySelectors = ['.hero img', '#site-header img']
    const priority = new Set(
      prioritySelectors.flatMap((sel) => Array.from(document.querySelectorAll(sel)))
    )

    document.querySelectorAll('img').forEach((img) => {
      if (priority.has(img) || img.loading) return
      img.loading = 'lazy'
      img.decoding = 'async'
    })
  }, [])
}
