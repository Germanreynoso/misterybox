'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Lock, ShieldAlert, Terminal, ArrowRight, Timer } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export function MissionControl() {
  const [status, setStatus] = useState<'locked' | 'accessing' | 'granted'>('locked')
  const [code, setCode] = useState('')
  const [error, setError] = useState(false)
  const [timeLeft, setTimeLeft] = useState(600) // 10 minutes in seconds
  const [showHint, setShowHint] = useState(false)

  const CORRECT_CODE = 'TUCUMAN' // Example code

  useEffect(() => {
    if (status === 'granted' && timeLeft > 0) {
      const timer = setInterval(() => setTimeLeft(prev => prev - 1), 1000)
      return () => clearInterval(timer)
    }
  }, [status, timeLeft])

  const handleAccess = (e: React.FormEvent) => {
    e.preventDefault()
    if (code.toUpperCase() === CORRECT_CODE) {
      setStatus('accessing')
      setTimeout(() => setStatus('granted'), 1500)
    } else {
      setError(true)
      setTimeout(() => setError(false), 2000)
    }
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4 font-mono">
      <AnimatePresence mode="wait">
        {status !== 'granted' ? (
          <motion.div
            key="login"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            className="w-full max-w-md"
          >
            <div className="bg-card border border-border p-8 rounded-sm shadow-2xl relative overflow-hidden">
              {/* Decorative scanner line */}
              <div className="absolute inset-x-0 top-0 h-px bg-primary/30 animate-scan" />
              
              <div className="flex flex-col items-center text-center mb-8">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 border border-primary/20">
                  <Lock className={`w-8 h-8 ${error ? 'text-destructive' : 'text-primary'}`} />
                </div>
                <h1 className="text-xl tracking-widest uppercase mb-2">Acceso Restringido</h1>
                <p className="text-muted-foreground text-xs">INGRESE CÓDIGO DE AUTORIZACIÓN</p>
              </div>

              <form onSubmit={handleAccess} className="space-y-4">
                <div className="relative">
                  <Input
                    type="text"
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    placeholder="_ _ _ _ _ _"
                    className="bg-background border-border text-center text-xl tracking-[0.5em] h-14 uppercase focus-visible:ring-primary"
                    autoFocus
                  />
                  {error && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="absolute -bottom-6 left-0 right-0 text-center text-[10px] text-destructive uppercase tracking-tighter"
                    >
                      <ShieldAlert className="w-3 h-3 inline mr-1" /> Código inválido - Intento registrado
                    </motion.div>
                  )}
                </div>
                
                <Button 
                  type="submit"
                  disabled={status === 'accessing'}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground h-12 uppercase tracking-widest text-xs"
                >
                  {status === 'accessing' ? (
                    <span className="flex items-center">
                      <Terminal className="w-4 h-4 mr-2 animate-pulse" /> Desencriptando...
                    </span>
                  ) : (
                    'Verificar Identidad'
                  )}
                </Button>
              </form>

              <div className="mt-8 pt-6 border-t border-border/50 text-[10px] text-muted-foreground/50 flex justify-between uppercase">
                <span>ID: M-8429-X</span>
                <span>Encrypted-AES256</span>
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="w-full max-w-4xl"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Left Panel: Stats */}
              <div className="space-y-4">
                <div className="bg-card border border-border p-4 rounded-sm">
                  <div className="flex items-center text-primary mb-2">
                    <Timer className="w-4 h-4 mr-2" />
                    <span className="text-xs uppercase tracking-widest">Tiempo Restante</span>
                  </div>
                  <div className="text-3xl font-bold tracking-tighter text-foreground">
                    {formatTime(timeLeft)}
                  </div>
                </div>
                
                <div className="bg-card border border-border p-4 rounded-sm">
                  <span className="text-[10px] text-muted-foreground uppercase block mb-2">Ubicación Actual</span>
                  <p className="text-sm text-foreground">PLAZA INDEPENDENCIA, SMT</p>
                </div>
              </div>

              {/* Main Content: The Enigma */}
              <div className="md:col-span-2 space-y-6">
                <div className="bg-card border border-primary/20 p-8 rounded-sm shadow-[0_0_50px_rgba(192,57,43,0.05)] relative">
                  <div className="flex items-center justify-between mb-8 border-b border-border pb-4">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-primary rounded-full animate-pulse mr-2" />
                      <h2 className="text-sm uppercase tracking-widest">Misión: El Secreto del Congreso</h2>
                    </div>
                    <span className="text-[10px] text-muted-foreground uppercase">Nivel 1</span>
                  </div>

                  <div className="prose prose-invert max-w-none">
                    <p className="text-lg text-foreground/90 leading-relaxed italic mb-8">
                      "Donde la historia se selló con sangre y tinta, busca el farol que nunca se apaga pero no emite luz."
                    </p>
                    
                    <div className="bg-background/50 border border-border p-6 rounded-sm mb-8">
                      <p className="text-xs text-muted-foreground uppercase mb-4 tracking-widest">Enigma Cifrado (Código Morse):</p>
                      <p className="text-xl tracking-[0.3em] break-all text-primary font-bold">
                        -- --- .-. ... . / -.-. --- -.. .
                      </p>
                    </div>

                    <div className="flex flex-col items-center">
                      <div className="w-48 h-48 bg-white p-2 rounded-sm mb-4">
                        {/* Placeholder for QR code logic */}
                        <div className="w-full h-full bg-[url('https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=PROXIMA_PISTA')] bg-center bg-no-repeat bg-contain opacity-10" />
                        <div className="absolute inset-0 flex items-center justify-center">
                           <span className="text-[10px] text-black bg-white px-2 uppercase font-bold">Escanear en ubicación</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 flex justify-end">
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => setShowHint(!showHint)}
                      className="text-[10px] uppercase tracking-widest border-primary/30 hover:bg-primary/5"
                    >
                      {showHint ? 'Ocultar Pista' : 'Necesito una pista'}
                    </Button>
                  </div>

                  {showHint && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      className="mt-4 p-4 bg-primary/5 border-l-2 border-primary text-xs text-muted-foreground"
                    >
                      BUSCA CERCA DE LA ESTATUA DE LA LIBERTAD, LADO NORTE.
                    </motion.div>
                  )}
                </div>

                <div className="flex justify-between items-center text-[10px] text-muted-foreground/30 uppercase px-2">
                  <span>Transmisión segura activa</span>
                  <div className="flex items-center">
                    <span className="mr-2">Señal:</span>
                    <div className="flex gap-0.5">
                      <div className="w-1 h-2 bg-primary/40" />
                      <div className="w-1 h-3 bg-primary/40" />
                      <div className="w-1 h-4 bg-primary" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx global>{`
        @keyframes scan {
          from { transform: translateY(0); }
          to { transform: translateY(300px); }
        }
        .animate-scan {
          animation: scan 3s linear infinite;
        }
      `}</style>
    </div>
  )
}
