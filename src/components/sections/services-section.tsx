import { useReveal } from "@/hooks/use-reveal"

const services = [
  {
    emoji: "💐",
    title: "Букеты на заказ",
    description: "Соберём букет по вашему вкусу и бюджету. Подберём цветы, упаковку и ленты.",
    direction: "top",
  },
  {
    emoji: "🚗",
    title: "Доставка по Ижевску",
    description: "Привезём свежие цветы за 2 часа в любую точку города. Бесплатно от 3 000 ₽.",
    direction: "right",
  },
  {
    emoji: "💍",
    title: "Свадьбы и события",
    description: "Оформление залов, арки, столы для гостей, букет невесты — всё под ключ.",
    direction: "left",
  },
  {
    emoji: "🎁",
    title: "Подарочные наборы",
    description: "Цветы + коробка конфет, мягкая игрушка или открытка — идеальный подарок.",
    direction: "bottom",
  },
]

export function ServicesSection() {
  const { ref, isVisible } = useReveal(0.3)

  return (
    <section
      ref={ref}
      className="flex h-screen w-screen shrink-0 snap-start items-center px-6 pt-20 md:px-12 md:pt-0 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div
          className={`mb-10 transition-all duration-700 md:mb-14 ${
            isVisible ? "translate-y-0 opacity-100" : "-translate-y-12 opacity-0"
          }`}
        >
          <h2 className="mb-2 font-sans text-5xl font-light tracking-tight text-foreground md:text-6xl lg:text-7xl">
            Услуги
          </h2>
          <p className="font-mono text-sm text-foreground/60 md:text-base">/ Всё для ваших цветов</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 md:gap-x-14 md:gap-y-10 lg:gap-x-20">
          {services.map((service, i) => (
            <ServiceCard key={i} service={service} index={i} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ServiceCard({
  service,
  index,
  isVisible,
}: {
  service: { emoji: string; title: string; description: string; direction: string }
  index: number
  isVisible: boolean
}) {
  const getRevealClass = () => {
    if (!isVisible) {
      switch (service.direction) {
        case "left":
          return "-translate-x-16 opacity-0"
        case "right":
          return "translate-x-16 opacity-0"
        case "top":
          return "-translate-y-16 opacity-0"
        case "bottom":
          return "translate-y-16 opacity-0"
        default:
          return "translate-y-12 opacity-0"
      }
    }
    return "translate-x-0 translate-y-0 opacity-100"
  }

  return (
    <div
      className={`group transition-all duration-700 ${getRevealClass()}`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="mb-3 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/60 text-xl shadow-sm backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
          {service.emoji}
        </div>
        <div className="h-px flex-1 bg-foreground/15 transition-all duration-300 group-hover:bg-primary/30" />
        <span className="font-mono text-xs text-foreground/50">0{index + 1}</span>
      </div>
      <h3 className="mb-2 font-sans text-2xl font-light text-foreground md:text-3xl">{service.title}</h3>
      <p className="max-w-sm text-sm leading-relaxed text-foreground/70 md:text-base">{service.description}</p>
    </div>
  )
}
