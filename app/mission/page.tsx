import { MissionControl } from '@/components/mission-control'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Acceso a Misión | Entrega Clasificada',
  description: 'Ingrese su código de autorización para ver los detalles de la misión.',
}

export default function MissionPage() {
  return (
    <main className="min-h-screen bg-background">
      <MissionControl />
    </main>
  )
}
