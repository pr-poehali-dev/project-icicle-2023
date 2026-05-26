import { MagneticButton } from "@/components/magnetic-button"
import { useReveal } from "@/hooks/use-reveal"

const reviews = [
  {
    name: "Алина К.",
    text: "Заказывала букет маме на день рождения — просто шедевр! Доставили вовремя, всё свежее.",
    stars: 5,
  },
  {
    name: "Дмитрий В.",
    text: "Влада помогла подобрать идеальный букет невесты. Свадьба прошла сказочно!",
    stars: 5,
  },
  {
    name: "Марина П.",
    text: "Беру цветы здесь уже год. Всегда свежие, всегда красивые. Рекомендую всем!",
    stars: 5,
  },
]

export function AboutSection({ scrollToSection }: { scrollToSection?: (index: number) => void }) {
  const { ref, isVisible } = useReveal(0.3)

  return (
    <section
      ref={ref}
      className="flex h-screen w-screen shrink-0 snap-start items-center px-4 pt-20 md:px-12 md:pt-0 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid gap-8 md:grid-cols-2 md:gap-16 lg:gap-24">
          {/* Левая сторона — история */}
          <div>
            <div
              className={`mb-6 transition-all duration-700 md:mb-10 ${
                isVisible ? "translate-y-0 opacity-100" : "-translate-y-12 opacity-0"
              }`}
            >
              <h2 className="mb-3 font-sans text-3xl font-light leading-[1.1] tracking-tight text-foreground md:mb-4 md:text-5xl lg:text-6xl">
                О нашем
                <br />
                магазине
                <br />
                <span className="text-foreground/40">с любовью</span>
              </h2>
            </div>

            <div
              className={`space-y-3 transition-all duration-700 md:space-y-4 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              <p className="max-w-md text-sm leading-relaxed text-foreground/80 md:text-base">
                «Кот цветок» — это магазин с любовью к живым цветам и нашему пушистому логотипу 🐱 Каждый букет — маленькая история, рассказанная через цветы.
              </p>
              <p className="max-w-md text-sm leading-relaxed text-foreground/80 md:text-base">
                Работаем в Ижевске каждый день. Приходите в магазин или оформляйте доставку онлайн!
              </p>
            </div>

            <div
              className={`mt-6 flex flex-wrap gap-3 transition-all duration-700 md:mt-10 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
              }`}
              style={{ transitionDelay: "400ms" }}
            >
              <MagneticButton size="lg" variant="primary" onClick={() => scrollToSection?.(4)}>
                Заказать букет
              </MagneticButton>
              <MagneticButton size="lg" variant="secondary" onClick={() => scrollToSection?.(1)}>
                Смотреть каталог
              </MagneticButton>
            </div>
          </div>

          {/* Правая сторона — отзывы */}
          <div className="flex flex-col justify-center gap-4 md:gap-5">
            <div
              className={`transition-all duration-700 ${
                isVisible ? "translate-x-0 opacity-100" : "translate-x-16 opacity-0"
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              <p className="mb-3 font-mono text-xs text-foreground/60">/ Отзывы покупателей</p>
            </div>
            {reviews.map((review, i) => {
              return (
                <div
                  key={i}
                  className={`rounded-2xl border border-foreground/10 bg-white/50 p-4 backdrop-blur-sm transition-all duration-700 md:p-5 ${
                    isVisible ? "translate-x-0 opacity-100" : "translate-x-16 opacity-0"
                  }`}
                  style={{ transitionDelay: `${300 + i * 120}ms` }}
                >
                  <div className="mb-1.5 flex items-center justify-between">
                    <span className="font-sans text-sm font-medium text-foreground">{review.name}</span>
                    <span className="text-xs text-amber-400">{"★".repeat(review.stars)}</span>
                  </div>
                  <p className="text-sm leading-relaxed text-foreground/70">{review.text}</p>
                </div>
              )
            })}

            <div
              className={`flex items-center gap-6 border-t border-foreground/10 pt-4 transition-all duration-700 md:pt-5 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: "750ms" }}
            >
              <div className="text-center">
                <div className="text-2xl font-light text-foreground md:text-3xl">500+</div>
                <div className="font-mono text-xs text-foreground/50">довольных клиентов</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-light text-foreground md:text-3xl">4.9</div>
                <div className="font-mono text-xs text-foreground/50">средняя оценка</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-light text-foreground md:text-3xl">2 ч</div>
                <div className="font-mono text-xs text-foreground/50">доставка</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}