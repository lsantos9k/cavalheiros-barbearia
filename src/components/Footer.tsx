import { MapPin, Clock, MessageCircle } from 'lucide-react'
import Reveal from './Reveal'
import { ADDRESS, HOURS, INSTAGRAM_URL, MAPS_URL, WHATSAPP_PHONE, WHATSAPP_URL } from '../content'

function Instagram({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
    </svg>
  )
}

export default function Footer() {
  return (
    <footer className="bg-champagne py-24 text-ink">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <h2 className="font-display text-4xl font-semibold leading-tight md:text-5xl">Pronto para o seu melhor corte?</h2>
          </Reveal>
          <Reveal delay={0.15}>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Agendar agora pelo WhatsApp ${WHATSAPP_PHONE}`}
              className="mt-10 inline-flex items-center gap-3 rounded-full bg-espresso px-8 py-5 text-base font-medium text-champagne transition hover:-translate-y-0.5 hover:bg-ink active:translate-y-0 sm:px-10 sm:text-lg"
            >
              <MessageCircle size={20} aria-hidden /> Agendar Agora (11 4087-4880)
            </a>
          </Reveal>
        </div>

        <div className="mt-20 grid gap-10 border-t border-ink/15 pt-12 md:grid-cols-3">
          <div>
            <p className="font-display text-2xl">Cavalheiros</p>
            <p className="mt-2 text-sm text-ink/75">Barbearia · Jundiaí, SP</p>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram da Cavalheiros Barbearia Jundiaí"
              className="mt-5 inline-flex items-center gap-2 text-sm underline-offset-4 hover:underline"
            >
              <Instagram size={18} /> Siga-nos no Instagram
            </a>
          </div>
          <div>
            <h3 className="mb-3 flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-ink/70"><MapPin size={16} aria-hidden /> Endereço</h3>
            {/* PENDÊNCIA: endereço completo — definir ADDRESS em src/content.ts */}
            {ADDRESS ? (
              <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" aria-label="Abrir o endereço da Cavalheiros Barbearia no Google Maps" className="block text-ink/85 underline-offset-4 hover:underline">
                {ADDRESS}
                <span className="mt-2 block text-sm font-medium text-mogno">Ver no Google Maps →</span>
              </a>
            ) : <p className="text-ink/85">Endereço completo em breve.</p>}
          </div>
          <div>
            <h3 className="mb-3 flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-ink/70"><Clock size={16} aria-hidden /> Horários</h3>
            {/* PENDÊNCIA: horários — definir HOURS em src/content.ts */}
            {HOURS ? HOURS.map((h) => <p key={h} className="text-ink/85">{h}</p>) : <p className="text-ink/85">Horários de funcionamento em breve.</p>}
          </div>
        </div>

        <p className="mt-16 text-center text-xs text-ink/70">© {new Date().getFullYear()} Cavalheiros Barbearia. Todos os direitos reservados.</p>
      </div>
    </footer>
  )
}
