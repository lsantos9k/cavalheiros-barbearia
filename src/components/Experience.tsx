import { Car, Snowflake, GlassWater, Music } from 'lucide-react'
import Reveal from './Reveal'

const ITEMS = [
  { icon: Car, title: 'Estacionamento próprio' },
  { icon: Snowflake, title: 'Ambiente climatizado' },
  { icon: GlassWater, title: 'Seleção de bebidas' },
  { icon: Music, title: 'Trilha sonora na medida' },
]

export default function Experience() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <Reveal><p className="mb-4 text-sm uppercase tracking-[0.3em] text-mogno">O Ambiente</p></Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-4xl font-semibold leading-tight text-ink md:text-5xl">Muito além de um corte de cabelo.</h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-5 font-display text-xl italic text-mogno">Um ambiente descontraído, limpo e aconchegante desenhado para você relaxar.</p>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="mt-5 leading-relaxed text-ink/80">
              Nossa estrutura conta com estacionamento próprio, ambiente totalmente climatizado, seleção de bebidas e trilha sonora na medida certa. Tudo para que sua visita seja o melhor momento do seu dia.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-4">
          {ITEMS.map(({ icon: Icon, title }, i) => (
            <Reveal key={title} delay={0.1 * i} className="h-full">
              <div className={`flex h-full flex-col justify-between gap-12 rounded-3xl border border-champagne/15 p-7 shadow-card md:min-h-[220px] bg-espresso`}>
                <Icon size={28} strokeWidth={1.4} className="text-champagne" aria-hidden />
                <h3 className="font-display text-xl text-champagne">{title}</h3>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
