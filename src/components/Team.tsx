import { MessageCircle } from 'lucide-react'
import Reveal from './Reveal'
import { IMAGES, WHATSAPP_URL } from '../content'

export default function Team() {
  return (
    <section className="bg-espresso py-24 text-champagne md:py-32">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 md:grid-cols-2 md:gap-20">
        <div>
          <Reveal>
            <h2 className="font-display text-4xl font-semibold leading-tight md:text-5xl">Técnica, habilidade e atenção aos detalhes.</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 font-display text-xl italic text-champagne/90">Excelentes profissionais ao seu dispor.</p>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-5 leading-relaxed text-champagne/80">
              Nossa equipe, formada por talentos como Mauro, Gabriel e James, domina as técnicas mais modernas e clássicas para sugerir e executar o corte de cabelo e barba que combina perfeitamente com o seu perfil e formato de rosto.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Falar com a equipe pelo WhatsApp"
              className="mt-9 inline-flex items-center gap-3 rounded-full bg-champagne px-8 py-4 font-medium text-ink transition duration-200 hover:-translate-y-0.5 hover:bg-white active:translate-y-0"
            >
              <MessageCircle size={18} aria-hidden /> Falar com a Equipe
            </a>
          </Reveal>
        </div>
        <Reveal delay={0.15}>
          {/* TROCAR: foto real da equipe (Mauro, Gabriel e James) */}
          <div className="group overflow-hidden rounded-[2rem] shadow-card">
            <img
              src={IMAGES.team}
              alt="Barbeiro da Cavalheiros Barbearia atendendo um cliente"
              loading="lazy"
              className="aspect-[4/5] w-full object-cover transition-transform duration-[2500ms] ease-out group-hover:scale-110"
            />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
