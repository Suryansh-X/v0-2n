"use client"

import { useRef } from "react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"

export default function Portfolio() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const krishnaTeachings = [
    {
      id: 1,
      teaching:
        "You have the right to perform your actions, but you are not entitled to the fruits of action. Never consider yourself the cause of the results of your activities, and never be attached to not doing your duty.",
      title: "Karma Yoga",
      image: "/lord-krishna-with-flute-peaceful-expression.jpg",
    },
    {
      id: 2,
      teaching:
        "For the soul there is neither birth nor death. It is not slain when the body is slain. The soul is eternal, indestructible, and timeless.",
      title: "Eternal Soul",
      image: "/lord-krishna-divine-radiant-form.jpg",
    },
    {
      id: 3,
      teaching:
        "Abandon all varieties of religion and just surrender unto Me. I shall deliver you from all sinful reactions. Do not fear.",
      title: "Surrender",
      image: "/lord-krishna-compassionate-blessing-pose.jpg",
    },
    {
      id: 4,
      teaching:
        "When meditation is mastered, the mind is unwavering like the flame of a lamp in a windless place. In the still mind, in the depths of meditation, the Self reveals itself.",
      title: "Meditation",
      image: "/lord-krishna-in-meditation-lotus-position.jpg",
    },
  ]

  return (
    <section className="bg-black py-20 relative">
      <div ref={ref} className="container mx-auto px-4 relative">
        <motion.div
          className="absolute top-0 left-4 z-10"
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <h1 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-orange-400 to-amber-500 animate-pulse">
            हरे कृष्ण
          </h1>
          {/* Glowing shadow effect */}
          <div className="absolute inset-0 text-3xl md:text-4xl font-bold text-amber-400/30 blur-sm animate-pulse">
            हरे कृष्ण
          </div>
          {/* Additional glow layers */}
          <div className="absolute inset-0 text-3xl md:text-4xl font-bold text-orange-300/20 blur-md animate-pulse delay-150">
            हरे कृष्ण
          </div>
        </motion.div>

        <motion.h2
          className="mb-12 text-center text-3xl font-bold tracking-tighter sm:text-4xl text-white"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          Krishna's Wisdom
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {krishnaTeachings.map((item, index) => (
            <motion.div
              key={item.id}
              className="relative group"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className="bg-gradient-to-br from-amber-900/20 to-orange-900/20 backdrop-blur-sm border border-amber-500/30 rounded-2xl p-6 h-[400px] flex flex-col justify-between relative overflow-hidden group-hover:border-amber-400/50 transition-all duration-500">
                {/* Glowing background effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Circular Krishna image */}
                <div className="flex justify-center mb-4">
                  <div className="relative">
                    <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-amber-400/50 group-hover:border-amber-300 transition-colors duration-300 shadow-lg shadow-amber-500/20">
                      <img
                        src={item.image || "/placeholder.svg"}
                        alt={`Krishna ${item.title}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    {/* Glow effect around image */}
                    <div className="absolute inset-0 rounded-full bg-amber-400/20 blur-md scale-110 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-amber-300 text-center mb-4 group-hover:text-amber-200 transition-colors duration-300">
                  {item.title}
                </h3>

                {/* Teaching text */}
                <p className="text-gray-300 text-sm leading-relaxed text-center flex-grow group-hover:text-white transition-colors duration-300">
                  "{item.teaching}"
                </p>

                {/* Decorative elements */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-amber-400 rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 w-1 h-1 bg-orange-400 rounded-full opacity-30 group-hover:opacity-70 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
