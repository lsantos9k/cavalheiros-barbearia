import { Star } from 'lucide-react'
import Reveal from './Reveal'
import { REVIEWS } from '../content'

function Card({ text, author }: { text: string; author: string }) {
  return (
    <figure className="flex h-full w-[300px] shrink-0 snap-center flex-col justify-between gap-6 rounded-3xl border border-champagne/10 bg-espresso p-7 shadow-card md:w-[380px]">
      <div>
        <div className="flex gap-1 text-champagne" role="img" aria-label="5 de 5 estrelas">
          {Array.from({ length: 5 }).map((_, i) => <Star key={i} size={16} fill="currentColor" aria-hidden />)}
        </div>
        <blockquote className="mt-5 leading-relaxed text-champagne/85">“{text}”</blockquote>
      </div>
      <figcaption className="text-sm font-medium text-champagne">{author}</figcaption>
    </figure>
  )
}

export default function Reviews() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <Reveal>
          <h2 className="font-display text-4xl font-semibold leading-tight text-ink md:text-5xl">A palavra de quem já esteve na nossa cadeira.</h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-5 text-ink/80">Não somos apenas nós dizendo. Veja a experiência real dos nossos clientes em Jundiaí.</p>
        </Reveal>
      </div>

      {/* Mobile: scroll com snap. Desktop: marquee infinito */}
      <div className="mt-14 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-4 md:hidden">
        {REVIEWS.map((r) => <Card key={r.author} {...r} />)}
      </div>
      <div className="marquee mt-14 hidden overflow-hidden md:block" aria-label="Avaliações de clientes no Google">
        <div className="marquee-track flex w-max animate-marquee gap-5 pr-5">
          {[...REVIEWS, ...REVIEWS].map((r, i) => (
            <div key={i} className="flex" aria-hidden={i >= REVIEWS.length}>
              <Card {...r} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
