import { MessageCircle } from 'lucide-react'
import Reveal from './Reveal'
import { WHATSAPP_URL } from '../content'

/** Fotos reais de cortes feitos na barbearia. Para trocar, substitua os arquivos em /public. */
const CUTS = [
  { src: import.meta.env.BASE_URL + 'corte-5.webp', alt: 'Corte social com risca lateral e degradê, barba aparada' },
  { src: import.meta.env.BASE_URL + 'corte-2.webp', alt: 'Degradê com topo volumoso e barba cheia' },
  { src: import.meta.env.BASE_URL + 'corte-1.webp', alt: 'Degradê baixo com topo texturizado, visto de costas' },
  { src: import.meta.env.BASE_URL + 'corte-3.webp', alt: 'Corte curto e uniforme, visto de costas' },
  { src: import.meta.env.BASE_URL + 'corte-4.webp', alt: 'Degradê clássico com barba desenhada' },
]

export default function Cuts() {
  return (
    <section className="py-24 md:py-32">
      <div className="px-6 md:px-12">
        <div className="max-w-2xl">
          <Reveal><p className="mb-4 text-sm uppercase tracking-[0.3em] text-mogno">Os Cortes</p></Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-4xl font-semibold leading-tight text-ink md:text-5xl">Acabamento que dá para ver.</h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-5 font-display text-xl italic text-mogno">Alguns dos trabalhos feitos na nossa cadeira.</p>
          </Reveal>
        </div>
      </div>

      {/* Carrossel infinito: a lista é duplicada e a animação desloca -50% */}
      <div className="marquee mt-14 overflow-hidden" role="region" aria-label="Galeria de cortes">
        <div className="marquee-track flex w-max animate-marquee gap-5 pr-5" style={{ animationDuration: '45s' }}>
          {[...CUTS, ...CUTS].map((c, i) => {
            const copy = i >= CUTS.length
            return (
              <div key={i} className="group h-80 w-[240px] shrink-0 overflow-hidden rounded-3xl shadow-card md:h-[440px] md:w-[320px]" aria-hidden={copy}>
                <img
                  src={c.src}
                  alt={copy ? '' : c.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[2500ms] ease-out group-hover:scale-105"
                />
              </div>
            )
          })}
        </div>
      </div>

      <div className="px-6 md:px-12">
        <Reveal delay={0.1}>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Agendar um corte pelo WhatsApp"
            className="mt-12 inline-flex items-center gap-3 rounded-full bg-espresso px-8 py-4 font-medium text-champagne transition hover:-translate-y-0.5 hover:bg-ink active:translate-y-0"
          >
            <MessageCircle size={18} aria-hidden /> Quero um corte assim
          </a>
        </Reveal>
      </div>
    </section>
  )
}
