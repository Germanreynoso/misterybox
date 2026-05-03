'use client'

import { motion } from 'framer-motion'
import { Eye, Heart, Skull, Gamepad2, Film, Cake } from 'lucide-react'

const themes = [
  { name: 'Espías', icon: Eye, description: 'Infiltración y secretos de estado' },
  { name: 'Romance', icon: Heart, description: 'Una aventura para dos' },
  { name: 'Terror', icon: Skull, description: 'Solo para los más valientes' },
  { name: 'Gamer', icon: Gamepad2, description: 'Misiones del mundo virtual' },
  { name: 'Noir', icon: Film, description: 'Crimen y misterio clásico' },
  { name: 'Cumpleaños', icon: Cake, description: 'Una celebración inolvidable' },
]

export function ThemesSection() {
  return (
    <section className="py-24 md:py-32 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm tracking-[0.3em] uppercase mb-4 block">
            Temáticas
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-foreground mb-4">
            Elegí tu mundo
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Cada temática ofrece una experiencia única con pistas, estética y sorpresas diferentes.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {themes.map((theme, index) => (
            <motion.div
              key={theme.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="group relative p-6 md:p-8 bg-card border border-border rounded-sm cursor-pointer transition-all duration-300 hover:border-primary/40 hover:shadow-[0_0_30px_rgba(192,57,43,0.1)]"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-full border border-border flex items-center justify-center mb-4 transition-all duration-300 group-hover:border-primary/50 group-hover:bg-primary/5">
                  <theme.icon className="w-6 h-6 md:w-7 md:h-7 text-muted-foreground group-hover:text-primary transition-colors" strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-lg md:text-xl text-foreground mb-1">
                  {theme.name}
                </h3>
                <p className="text-xs md:text-sm text-muted-foreground">
                  {theme.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
