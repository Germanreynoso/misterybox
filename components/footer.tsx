'use client'

import { motion } from 'framer-motion'

export function Footer() {
  return (
    <footer className="py-12 px-4 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-3">
            <span className="font-serif text-xl text-foreground tracking-wide">
              Entrega Clasificada
            </span>
          </div>

          <div className="flex items-center gap-8 text-sm">
            <a
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Contacto
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Preguntas frecuentes
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Términos
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-8 pt-8 border-t border-border/50 text-center"
        >
          <p className="text-xs text-muted-foreground/60">
            © {new Date().getFullYear()} Entrega Clasificada. Buenos Aires, Argentina.
          </p>
          <p className="text-xs text-muted-foreground/40 mt-2 italic">
            Este mensaje se autodestruirá.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
