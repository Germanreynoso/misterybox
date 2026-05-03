'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Check } from 'lucide-react'

const plans = [
  {
    name: 'Básico',
    price: '$15.000 – $30.000',
    description: 'Tu primera misión. Ideal para curiosos.',
    features: [
      'Sobre sellado con misión personalizada',
      '3-5 pistas para resolver',
      'Caja de misterio nivel I',
      'Duración: 2-3 horas',
    ],
    featured: false,
  },
  {
    name: 'Intermedio',
    price: '$40.000 – $80.000',
    description: 'Para los que buscan más adrenalina.',
    features: [
      'Todo lo del plan Básico',
      '6-10 pistas con mayor complejidad',
      'Ubicaciones exclusivas',
      'Caja de misterio nivel II',
      'Duración: 4-6 horas',
    ],
    featured: true,
  },
  {
    name: 'Premium',
    price: '$100.000+',
    description: 'La experiencia definitiva. Sin límites.',
    features: [
      'Misión completamente personalizada',
      'Actores en vivo',
      'Locaciones VIP',
      'Caja de misterio nivel III',
      'Duración: día completo',
      'Sorpresas adicionales',
    ],
    featured: false,
  },
]

export function ExperiencePlans() {
  return (
    <section className="py-24 md:py-32 px-4 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm tracking-[0.3em] uppercase mb-4 block">
            Niveles de acceso
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-foreground mb-4">
            Elegí tu experiencia
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Cada nivel incluye una caja de misterio diferente. El contenido siempre es secreto.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`relative p-6 md:p-8 rounded-sm border transition-all duration-500 ${
                plan.featured
                  ? 'bg-card border-primary/50 shadow-[0_0_40px_rgba(192,57,43,0.15)]'
                  : 'bg-card/50 border-border hover:border-primary/30'
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground text-xs tracking-wider uppercase px-4 py-1">
                    Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="font-serif text-2xl text-foreground mb-2">
                  {plan.name}
                </h3>
                <p className="text-primary font-medium text-lg">
                  {plan.price}
                </p>
                <p className="text-muted-foreground text-sm mt-2">
                  {plan.description}
                </p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm">
                    <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full ${
                  plan.featured
                    ? 'bg-primary hover:bg-primary/90 text-primary-foreground'
                    : 'bg-secondary hover:bg-secondary/80 text-secondary-foreground border border-border'
                }`}
              >
                Seleccionar
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
