"use client"

import { useEffect, useRef } from "react"
import { useTheme } from "next-themes"
import { motion } from "framer-motion"

export default function AntigravityBackground() {
  const canvasRef = useRef(null)
  const { theme, systemTheme } = useTheme()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    let animationFrameId
    let particles = []

    const currentTheme = theme === "system" ? systemTheme : theme
    const isDark = currentTheme === "dark" || !currentTheme // Default to dark ideally

    // Particles and lines colors
    const particleColor = isDark ? "rgba(255, 255, 255, 0.5)" : "rgba(15, 23, 42, 0.4)"
    const connectColorTeal = isDark ? "rgba(45, 212, 191, " : "rgba(13, 148, 136, "
    const connectColorPink = isDark ? "rgba(244, 114, 182, " : "rgba(219, 39, 119, "
    const connectColorWhite = isDark ? "rgba(255, 255, 255, " : "rgba(15, 23, 42, "

    // Mouse coordinates
    let mouse = { x: null, y: null, radius: 180 }

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      initParticles()
    }

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 1.8 + 0.3 // More size variation for depth
        this.density = (Math.random() * 25 + 5) * this.size
        // Smaller pieces move slightly faster, giving parallax
        let baseSpeed = (Math.random() - 0.5) * 0.6
        this.speedX = baseSpeed / this.size
        this.speedY = (Math.random() - 0.5) * 0.6 / this.size
        
        const rand = Math.random()
        this.colorType = rand > 0.66 ? "teal" : rand > 0.33 ? "pink" : "white"
        this.baseX = this.x
        this.baseY = this.y
      }

      draw() {
        ctx.fillStyle = particleColor
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.closePath()
        ctx.fill()
      }

      update() {
        // Floating motion
        this.x += this.speedX
        this.y += this.speedY

        // Wrap around screen seamlessly
        if (this.x > canvas.width + 50) this.x = -50
        if (this.x < -50) this.x = canvas.width + 50
        if (this.y > canvas.height + 50) this.y = -50
        if (this.y < -50) this.y = canvas.height + 50

        // Magnetic Swirl Interaction
        if (mouse.x != null && mouse.y != null) {
          let dx = mouse.x - this.x
          let dy = mouse.y - this.y
          let distance = Math.sqrt(dx * dx + dy * dy)
          
          if (distance < mouse.radius) {
            let force = (mouse.radius - distance) / mouse.radius
            let directionX = dx / distance
            let directionY = dy / distance
            
            // Push away
            let repelX = directionX * force * this.density * 0.03
            let repelY = directionY * force * this.density * 0.03
            
            // Tangential swirl (Perpendicular to radius)
            let swirlX = directionY * force * this.density * 0.02
            let swirlY = -directionX * force * this.density * 0.02

            this.x -= repelX + swirlX
            this.y -= repelY + swirlY
          }
        }
      }
    }

    const initParticles = () => {
      particles = []
      // Density based on screen size
      let numberOfParticles = Math.min(Math.floor((canvas.width * canvas.height) / 10000), 130)
      
      // Improve visuals on smaller screens
      if (window.innerWidth < 768) {
          numberOfParticles = Math.min(numberOfParticles, 60)
      }
      
      for (let i = 0; i < numberOfParticles; i++) {
        particles.push(new Particle())
      }
    }

    const connect = () => {
      let opacityValue = 1
      ctx.globalCompositeOperation = isDark ? 'screen' : 'source-over'

      for (let a = 0; a < particles.length; a++) {
        for (let b = a; b < particles.length; b++) {
          let distance =
            (particles[a].x - particles[b].x) * (particles[a].x - particles[b].x) +
            (particles[a].y - particles[b].y) * (particles[a].y - particles[b].y)

          if (distance < 18000) { // Approx 134px
            opacityValue = 1 - distance / 18000
            
            // Choose color based on particles
            let baseColorStr = connectColorWhite
            if (particles[a].colorType === "teal" || particles[b].colorType === "teal") {
                baseColorStr = connectColorTeal
            } else if (particles[a].colorType === "pink" || particles[b].colorType === "pink") {
                baseColorStr = connectColorPink
            }

            ctx.strokeStyle = baseColorStr + opacityValue * 0.55 + ")" // brighter max opacity
            ctx.lineWidth = Math.max(0.4, particles[a].size * 0.5) // thicker lines for closer nodes
            ctx.beginPath()
            ctx.moveTo(particles[a].x, particles[a].y)
            ctx.lineTo(particles[b].x, particles[b].y)
            ctx.stroke()
          }
        }
      }
      ctx.globalCompositeOperation = 'source-over' // reset
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      for (let i = 0; i < particles.length; i++) {
        particles[i].update()
        particles[i].draw()
      }
      connect()
      animationFrameId = requestAnimationFrame(animate)
    }

    const handleMouseMove = (e) => {
      mouse.x = e.clientX
      mouse.y = e.clientY
    }
    const handleMouseLeave = () => {
      mouse.x = null
      mouse.y = null
    }

    window.addEventListener("resize", resize)
    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("mouseleave", handleMouseLeave)

    resize()
    animate()

    return () => {
      window.removeEventListener("resize", resize)
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("mouseleave", handleMouseLeave)
      cancelAnimationFrame(animationFrameId)
    }
  }, [theme, systemTheme])

  return (
    <div className="pointer-events-none fixed inset-0 z-[-1] h-[100vh] w-full overflow-hidden bg-transparent">
      {/* Intense Glowing Nebulas */}
      <motion.div
        className="absolute left-[0%] top-[-10%] h-[50vh] w-[50vw] rounded-full bg-teal-500/15 blur-[120px]"
        animate={{ opacity: [0.6, 0.9, 0.6], scale: [1, 1.1, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute right-[-10%] top-[20%] h-[60vh] w-[50vw] rounded-full bg-pink-600/15 blur-[120px]"
        animate={{ opacity: [0.5, 0.8, 0.5], scale: [1, 1.2, 1] }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
      />
      
      {/* The Particle Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 h-full w-full"
      />
    </div>
  )
}
