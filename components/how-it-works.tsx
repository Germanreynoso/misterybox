'use client'

import { motion } from 'framer-motion'
import { Mail, MapPin, Package } from 'lucide-react'

const steps = [
  {
    icon: Mail,
    title: 'Recibí el sobre',
    description: 'Un sobre sellado llega a tus manos con instrucciones clasificadas.',
  },
  {
    icon: MapPin,
    title: 'Seguí las pistas',
    description: 'Ubicaciones reales, códigos secretos y decisiones que tomar.',
  },
  {
    icon: Package,
    title: 'Abrí la caja final',
    description: 'Al completar tu misión, una caja de misterio te espera.',
  },
]

export function HowItWorks() {
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
            Protocolo
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-foreground">
            Cómo funciona
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative group"
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-px bg-border" />
              )}
              
              <div className="text-center">
                <div className="relative inline-flex mb-6">
                  <div className="w-24 h-24 rounded-full border border-border flex items-center justify-center bg-card transition-all duration-500 group-hover:border-primary/50 group-hover:shadow-[0_0_30px_rgba(192,57,43,0.15)]">
                    <step.icon className="w-10 h-10 text-primary" strokeWidth={1.5} />
                  </div>
                  <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-medium flex items-center justify-center">
                    {index + 1}
                  </span>
                </div>
                <h3 className="font-serif text-xl md:text-2xl text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed max-w-xs mx-auto">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
