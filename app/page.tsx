"use client"

import { useEffect, useRef } from "react"
import Hero from "./components/hero"
import Gallery from "./components/gallery"
import Portfolio from "./components/portfolio"
import Contact from "./components/contact"
import Footer from "./components/footer"

export default function Page() {
  const sectionsRef = useRef<(HTMLElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in")
            entry.target.classList.remove("animate-fade-out")
          } else {
            entry.target.classList.add("animate-fade-out")
            entry.target.classList.remove("animate-fade-in")
          }
        })
      },
      {
        threshold: 0.3,
        rootMargin: "-10% 0px -10% 0px",
      },
    )

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <main className="min-h-screen bg-black text-white">
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeOut {
          from { opacity: 1; transform: translateY(0); }
          to { opacity: 0.3; transform: translateY(-20px); }
        }
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
        }
        .animate-fade-out {
          animation: fadeOut 0.6s ease-in forwards;
        }
      `}</style>

      <section ref={(el) => (sectionsRef.current[0] = el)} className="transition-opacity duration-700">
        <Hero />
      </section>

      <section ref={(el) => (sectionsRef.current[1] = el)} className="transition-opacity duration-700">
        <Gallery />
      </section>

      <section ref={(el) => (sectionsRef.current[2] = el)} className="transition-opacity duration-700">
        <Portfolio />
      </section>

      <section ref={(el) => (sectionsRef.current[3] = el)} className="transition-opacity duration-700">
        <Contact />
      </section>

      <section ref={(el) => (sectionsRef.current[4] = el)} className="transition-opacity duration-700">
        <Footer />
      </section>
    </main>
  )
}
