import { useReveal } from "@/hooks/use-reveal"

const bouquets = [
  {
    number: "01",
    title: "Розовая нежность",
    category: "Пионы · Розы · Эвкалипт",
    price: "3 500 ₽",
    direction: "left",
    image: "https://cdn.poehali.dev/projects/6788b6d8-26da-4a47-ad9a-35762458c722/files/37e0d725-5e95-43d2-8772-846dd270a496.jpg",
  },
  {
    number: "02",
    title: "Весенний бриз",
    category: "Тюльпаны · Нарциссы · Мимоза",
    price: "2 800 ₽",
    direction: "right",
    image: "https://cdn.poehali.dev/projects/6788b6d8-26da-4a47-ad9a-35762458c722/files/6559545a-d645-4cc9-80ab-d0ae573d898a.jpg",
  },
  {
    number: "03",
    title: "Лавандовая мечта",
    category: "Лаванда · Ромашки · Сухоцветы",
    price: "4 200 ₽",
    direction: "left",
    image: "https://cdn.poehali.dev/projects/6788b6d8-26da-4a47-ad9a-35762458c722/files/75a40d21-c87f-41a2-8c66-30a78a5f4688.jpg",
  },
  {
    number: "04",
    title: "Авторский премиум",
    category: "Пионовидные розы · Гортензия",
    price: "5 900 ₽",
    direction: "right",
    image: "https://cdn.poehali.dev/projects/6788b6d8-26da-4a47-ad9a-35762458c722/files/e6a5a81b-306c-423d-a560-6253a725e42e.jpg",
  },
]

export function WorkSection() {
  const { ref, isVisible } = useReveal(0.3)

  return (
    <section
      ref={ref}
      className="flex h-screen w-screen shrink-0 snap-start items-center px-6 pt-20 md:px-12 md:pt-0 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div
          className={`mb-8 transition-all duration-700 md:mb-12 ${
            isVisible ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0"
          }`}
        >
          <h2 className="mb-2 font-sans text-5xl font-light tracking-tight text-foreground md:text-6xl lg:text-7xl">
            Каталог
          </h2>
          <p className="font-mono text-sm text-foreground/60 md:text-base">/ Наши букеты 🌸</p>
        </div>

        <div className="grid gap-3 md:gap-4">
          {bouquets.map((bouquet, i) => (
            <BouquetCard key={i} bouquet={bouquet} index={i} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  )
}

function BouquetCard({
  bouquet,
  index,
  isVisible,
}: {
  bouquet: { number: string; title: string; category: string; price: string; direction: string; image: string }
  index: number
  isVisible: boolean
}) {
  const getRevealClass = () => {
    if (!isVisible) {
      return bouquet.direction === "left" ? "-translate-x-16 opacity-0" : "translate-x-16 opacity-0"
    }
    return "translate-x-0 opacity-100"
  }

  return (
    <div
      className={`group flex cursor-pointer items-center justify-between rounded-2xl border border-foreground/10 bg-white/40 px-4 py-3 backdrop-blur-sm transition-all duration-700 hover:border-primary/30 hover:bg-white/70 hover:shadow-md md:px-6 md:py-4 ${getRevealClass()}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="flex items-center gap-4 md:gap-6">
        <div className="h-14 w-14 shrink-0 overflow-hidden rounded-xl md:h-16 md:w-16">
          <img
            src={bouquet.image}
            alt={bouquet.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        <div>
          <h3 className="mb-0.5 font-sans text-xl font-light text-foreground transition-transform duration-300 group-hover:translate-x-1 md:text-2xl">
            {bouquet.title}
          </h3>
          <p className="font-mono text-xs text-foreground/50 md:text-sm">{bouquet.category}</p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <span className="font-sans text-base font-medium text-primary md:text-lg">{bouquet.price}</span>
        <div className="flex h-8 w-8 items-center justify-center rounded-full border border-foreground/15 bg-white/60 text-sm transition-all duration-300 group-hover:border-primary/40 group-hover:bg-primary/10">
          🛒
        </div>
      </div>
    </div>
  )
}
