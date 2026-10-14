import { ArrowRight } from 'lucide-react'
import Reveal from './Reveal'
import { IMAGES, WHATSAPP_URL } from '../content'

export default function Hero() {
  return (
    <section className="mx-auto grid max-w-6xl items-center gap-12 px-6 pb-24 pt-14 md:grid-cols-2 md:gap-16 md:pb-32 md:pt-24">
      <div>
        <Reveal>
          <p className="mb-6 text-sm uppercase tracking-[0.3em] text-mogno">Barbearia · Jundiaí</p>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="font-display font-semibold leading-[1.08] text-ink" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}>
            A Experiência Definitiva em Barbearia em Jundiaí.
          </h1>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-6 font-display text-xl italic text-mogno">
            Tradição, cortes precisos e um ambiente pensado para o seu conforto.
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <p className="mt-6 max-w-lg leading-relaxed text-ink/80">
            Descubra o espaço onde o atendimento impecável encontra a técnica apurada. Na Cavalheiros Barbearia, seu visual é tratado com a excelência que você merece.
          </p>
        </Reveal>
        <Reveal delay={0.4}>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Agendar meu horário pelo WhatsApp"
            className="group mt-10 inline-flex items-center gap-3 rounded-full bg-espresso px-8 py-4 font-medium text-champagne transition hover:-translate-y-0.5 hover:bg-ink active:translate-y-0"
          >
            Agendar meu Horário
            <ArrowRight size={18} className="transition group-hover:translate-x-1" aria-hidden />
          </a>
        </Reveal>
      </div>
      <Reveal delay={0.25}>
        {/* TROCAR: foto real do interior iluminado */}
        <div className="overflow-hidden rounded-[2rem] shadow-card">
          <img
            src={IMAGES.hero}
            alt="Interior da Cavalheiros Barbearia com cadeiras clássicas, espelhos e luminárias vermelhas"
            loading="lazy"
            className="aspect-[4/5] w-full object-cover"
          />
        </div>
      </Reveal>
    </section>
  )
}
