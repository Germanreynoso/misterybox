'use client'

import { motion } from 'framer-motion'
import { WaxSeal } from './wax-seal'

export function MysteryBox() {
  return (
    <section className="relative py-32 md:py-48 px-4 overflow-hidden">
      {/* Red spotlight effect */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px] animate-pulse-glow" />
      </div>
      
      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_var(--background)_70%)]" />

      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-primary text-sm tracking-[0.3em] uppercase">
            La Recompensa
          </span>
        </motion.div>

        {/* Mystery Box Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative flex justify-center mb-16"
        >
          <div className="relative animate-float">
            {/* Box shadow */}
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-48 h-8 bg-black/40 blur-xl rounded-full" />
            
            {/* The box */}
            <div className="relative">
              {/* Box body */}
              <div className="w-56 h-40 md:w-72 md:h-52 bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a] border border-[#2a2a2a] rounded-sm shadow-2xl">
                {/* Box texture lines */}
                <div className="absolute inset-2 border border-[#222] rounded-sm" />
                <div className="absolute inset-4 border border-[#1a1a1a] rounded-sm" />
              </div>
              
              {/* Box lid */}
              <div className="absolute -top-4 left-0 right-0">
                <div className="w-56 h-8 md:w-72 md:h-10 bg-gradient-to-b from-[#222] to-[#1a1a1a] border border-[#2a2a2a] rounded-sm mx-auto shadow-lg" />
              </div>
              
              {/* Wax seal on top */}
              <div className="absolute -top-8 left-1/2 -translate-x-1/2">
                <WaxSeal size={60} />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl text-foreground mb-6 leading-tight text-balance">
            No sabés lo que hay adentro.
            <br />
            <span className="text-primary">Esa es la idea.</span>
          </h2>
          
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed">
            Al final de cada misión, una caja sellada te espera. Su contenido es aleatorio, curado y secreto. Nunca se revela de antemano.
          </p>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-sm text-muted-foreground/70 italic"
          >
            Cada caja es distinta. Ninguna se repite.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
