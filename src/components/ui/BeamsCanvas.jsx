import { useEffect, useRef } from 'react'

function createBeam(width, height) {
  const angle = -35 + Math.random() * 10
  return {
    x:          Math.random() * width  * 1.5 - width  * 0.25,
    y:          Math.random() * height * 1.5 - height * 0.25,
    width:      30 + Math.random() * 60,
    length:     height * 2.5,
    angle,
    speed:      0.6 + Math.random() * 1.2,
    opacity:    0.12 + Math.random() * 0.16,
    hue:        190 + Math.random() * 70,
    pulse:      Math.random() * Math.PI * 2,
    pulseSpeed: 0.02 + Math.random() * 0.03,
  }
}

export default function BeamsCanvas({ style }) {
  const canvasRef = useRef(null)
  const beamsRef  = useRef([])
  const rafRef    = useRef(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const TOTAL = 30

    function resize() {
      const dpr = window.devicePixelRatio || 1
      const W   = canvas.offsetWidth
      const H   = canvas.offsetHeight
      canvas.width  = W * dpr
      canvas.height = H * dpr
      ctx.scale(dpr, dpr)
      beamsRef.current = Array.from({ length: TOTAL }, () => createBeam(W, H))
    }

    function resetBeam(beam, index) {
      const W       = canvas.offsetWidth
      const H       = canvas.offsetHeight
      const col     = index % 3
      const spacing = W / 3
      beam.y        = H + 100
      beam.x        = col * spacing + spacing / 2 + (Math.random() - 0.5) * spacing * 0.5
      beam.width    = 100 + Math.random() * 100
      beam.speed    = 0.5 + Math.random() * 0.4
      beam.hue      = 190 + (index * 70) / TOTAL
      beam.opacity  = 0.2 + Math.random() * 0.1
      return beam
    }

    function drawBeam(beam) {
      ctx.save()
      ctx.translate(beam.x, beam.y)
      ctx.rotate((beam.angle * Math.PI) / 180)
      const pulsingOpacity = beam.opacity * (0.8 + Math.sin(beam.pulse) * 0.2)
      const grad = ctx.createLinearGradient(0, 0, 0, beam.length)
      grad.addColorStop(0,   `hsla(${beam.hue},85%,65%,0)`)
      grad.addColorStop(0.1, `hsla(${beam.hue},85%,65%,${pulsingOpacity * 0.5})`)
      grad.addColorStop(0.4, `hsla(${beam.hue},85%,65%,${pulsingOpacity})`)
      grad.addColorStop(0.6, `hsla(${beam.hue},85%,65%,${pulsingOpacity})`)
      grad.addColorStop(0.9, `hsla(${beam.hue},85%,65%,${pulsingOpacity * 0.5})`)
      grad.addColorStop(1,   `hsla(${beam.hue},85%,65%,0)`)
      ctx.fillStyle = grad
      ctx.fillRect(-beam.width / 2, 0, beam.width, beam.length)
      ctx.restore()
    }

    function animate() {
      const W = canvas.offsetWidth
      const H = canvas.offsetHeight
      ctx.clearRect(0, 0, W, H)
      ctx.filter = 'blur(35px)'
      beamsRef.current.forEach((beam, i) => {
        beam.y     -= beam.speed
        beam.pulse += beam.pulseSpeed
        if (beam.y + beam.length < -100) resetBeam(beam, i)
        drawBeam(beam)
      })
      rafRef.current = requestAnimationFrame(animate)
    }

    resize()
    animate()
    window.addEventListener('resize', resize)
    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        left: 0,
        right: 0,
        width: '100%',
        filter: 'blur(15px)',
        pointerEvents: 'none',
        ...style,
      }}
    />
  )
}
