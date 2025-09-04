"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [displayedText, setDisplayedText] = useState("")
  const [isTypingComplete, setIsTypingComplete] = useState(false)
  const fullText = "SANIKA SHARMA"

  useEffect(() => {
    let currentIndex = 0
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayedText(fullText.slice(0, currentIndex))
        currentIndex++
      } else {
        setIsTypingComplete(true)
        clearInterval(typingInterval)
      }
    }, 150)

    return () => clearInterval(typingInterval)
  }, [])

  useEffect(() => {
    if (!canvasRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles: Particle[] = []
    const particleCount = 100

    class Particle {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number

      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 2 + 0.1
        this.speedX = Math.random() * 2 - 1
        this.speedY = Math.random() * 2 - 1
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY

        if (this.x > canvas.width) this.x = 0
        if (this.x < 0) this.x = canvas.width
        if (this.y > canvas.height) this.y = 0
        if (this.y < 0) this.y = canvas.height
      }

      draw() {
        if (!ctx) return
        ctx.fillStyle = "rgba(255, 255, 255, 0.5)"
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle())
    }

    function animate() {
      if (!ctx) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (const particle of particles) {
        particle.update()
        particle.draw()
      }

      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      if (!canvasRef.current) return
      canvasRef.current.width = window.innerWidth
      canvasRef.current.height = window.innerHeight
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full bg-black" />
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_20250903_160053.jpg-ydxy7hIwTd8AUZgzZHhsfAv5cXhQyH.jpeg"
            alt="Sanika Sharma"
            className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 rounded-full object-cover shadow-2xl krishna-glow bg-transparent"
            style={{
              mixBlendMode: "screen",
              filter: "drop-shadow(0 0 20px rgba(255, 255, 255, 0.3))",
            }}
          />
        </motion.div>

        <motion.h1
          className="mb-6 text-6xl font-mono font-black tracking-wider sm:text-7xl lg:text-8xl gradient-text uppercase"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {displayedText}
          {!isTypingComplete && <span className="animate-pulse">|</span>}
        </motion.h1>
        <motion.p
          className="max-w-[600px] text-lg text-gray-400 sm:text-xl glowing-text"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Music Composer and Singer
        </motion.p>
      </div>

      <style jsx>{`
        .gradient-text {
          background: linear-gradient(
            45deg,
            #ff0040,
            #00ffff,
            #0080ff,
            #00ff80,
            #ffff00,
            #ff0080,
            #ff8000,
            #8000ff
          );
          background-size: 400% 400%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: gradient-shift 4s ease-in-out infinite;
        }
        
        .glowing-text {
          color: #ffffff;
          text-shadow: 
            0 0 5px rgba(255, 255, 255, 0.8),
            0 0 10px rgba(255, 255, 255, 0.6),
            0 0 15px rgba(255, 255, 255, 0.4),
            0 0 20px rgba(255, 255, 255, 0.2);
          animation: glow-pulse 2s ease-in-out infinite alternate;
        }
        
        @keyframes glow-pulse {
          from {
            text-shadow: 
              0 0 5px rgba(255, 255, 255, 0.8),
              0 0 10px rgba(255, 255, 255, 0.6),
              0 0 15px rgba(255, 255, 255, 0.4),
              0 0 20px rgba(255, 255, 255, 0.2);
          }
          to {
            text-shadow: 
              0 0 10px rgba(255, 255, 255, 1),
              0 0 20px rgba(255, 255, 255, 0.8),
              0 0 30px rgba(255, 255, 255, 0.6),
              0 0 40px rgba(255, 255, 255, 0.4);
          }
        }
        
        @keyframes gradient-shift {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        
        .krishna-glow {
          box-shadow: 
            0 0 20px rgba(0, 150, 255, 0.5),
            0 0 40px rgba(255, 215, 0, 0.3),
            0 0 60px rgba(138, 43, 226, 0.2);
          animation: divine-glow 3s ease-in-out infinite alternate;
        }
        
        @keyframes divine-glow {
          from {
            box-shadow: 
              0 0 20px rgba(0, 150, 255, 0.5),
              0 0 40px rgba(255, 215, 0, 0.3),
              0 0 60px rgba(138, 43, 226, 0.2);
          }
          to {
            box-shadow: 
              0 0 30px rgba(0, 150, 255, 0.8),
              0 0 60px rgba(255, 215, 0, 0.5),
              0 0 90px rgba(138, 43, 226, 0.4);
          }
        }
      `}</style>
    </div>
  )
}
