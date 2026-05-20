import { useState, useEffect } from 'react'

/**
 * Retorna { dias, horas, minutos, segundos } contando até `targetDate`.
 * @param {Date} targetDate
 */
export function useCountdown(targetDate) {
  const calc = () => {
    const ms = targetDate - new Date()
    if (ms <= 0) return { dias: 0, horas: 0, minutos: 0, segundos: 0 }
    return {
      dias:     Math.floor(ms / (1000 * 60 * 60 * 24)),
      horas:    Math.floor((ms / (1000 * 60 * 60)) % 24),
      minutos:  Math.floor((ms / (1000 * 60)) % 60),
      segundos: Math.floor((ms / 1000) % 60),
    }
  }

  const [tick, setTick] = useState(calc)

  useEffect(() => {
    const id = setInterval(() => setTick(calc()), 1000)
    return () => clearInterval(id)
  }, [targetDate])

  const pad = (n) => String(Math.max(0, n)).padStart(2, '0')

  return {
    dias:     pad(tick.dias),
    horas:    pad(tick.horas),
    minutos:  pad(tick.minutos),
    segundos: pad(tick.segundos),
  }
}
