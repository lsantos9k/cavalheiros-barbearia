import { MessageCircle } from 'lucide-react'
import { WHATSAPP_URL } from '../content'

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-[#edd5b2]/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#" className="font-display text-xl tracking-wide text-ink" aria-label="Cavalheiros Barbearia, início">
          Cavalheiros
        </a>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chamar a Cavalheiros Barbearia no WhatsApp"
          className="inline-flex items-center gap-2 rounded-full bg-espresso px-5 py-2 text-sm font-medium text-champagne transition hover:-translate-y-0.5 hover:bg-ink active:translate-y-0"
        >
          <MessageCircle size={16} aria-hidden /> WhatsApp
        </a>
      </div>
    </header>
  )
}
