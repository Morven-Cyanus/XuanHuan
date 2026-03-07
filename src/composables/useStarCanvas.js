import { onMounted, onUnmounted } from 'vue'

export function useStarCanvas(canvasId = 'star-canvas') {
  let rafId = null

  function init() {
    const canvas = document.getElementById(canvasId)
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    let W, H
    let stars = []

    function resize() {
      W = canvas.width = window.innerWidth
      H = canvas.height = window.innerHeight
    }

    function mkStar() {
      return {
        x: Math.random() * W,
        y: Math.random() * H,
        r: Math.random() * 1.4 + 0.2,
        a: Math.random(),
        da: (Math.random() - 0.5) * 0.006,
        color:
          Math.random() > 0.85
            ? `rgba(212,175,55,${Math.random() * 0.6 + 0.2})`
            : `rgba(180,200,255,${Math.random() * 0.5 + 0.2})`,
      }
    }

    function draw() {
      ctx.clearRect(0, 0, W, H)
      stars.forEach((s) => {
        s.a += s.da
        if (s.a < 0 || s.a > 1) s.da *= -1
        ctx.beginPath()
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2)
        ctx.fillStyle = s.color
        ctx.globalAlpha = s.a
        ctx.fill()
      })
      ctx.globalAlpha = 1
      rafId = requestAnimationFrame(draw)
    }

    resize()
    stars = Array.from({ length: 220 }, mkStar)
    window.addEventListener('resize', resize)
    draw()

    return () => {
      window.removeEventListener('resize', resize)
    }
  }

  let cleanup = null

  onMounted(() => {
    cleanup = init()
  })

  onUnmounted(() => {
    if (rafId) cancelAnimationFrame(rafId)
    if (cleanup) cleanup()
  })
}
