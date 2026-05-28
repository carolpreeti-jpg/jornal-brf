const PROGRAMA_COMPROMISSO = 'BRF Prev Compromisso com Você'

export function withBoldPrograma(text) {
  if (!text.includes(PROGRAMA_COMPROMISSO)) return text

  const parts = text.split(PROGRAMA_COMPROMISSO)
  return parts.flatMap((part, i) =>
    i < parts.length - 1
      ? [part, <strong key={i}>{PROGRAMA_COMPROMISSO}</strong>]
      : [part]
  )
}
