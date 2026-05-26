import { useReveal } from "@/hooks/use-reveal"
import { useState, type FormEvent } from "react"
import { MagneticButton } from "@/components/magnetic-button"
import Icon from "@/components/ui/icon"

export function ContactSection() {
  const { ref, isVisible } = useReveal(0.3)
  const [formData, setFormData] = useState({ name: "", phone: "", bouquet: "", comment: "" })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!formData.name || !formData.phone) return
    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 1200))
    setIsSubmitting(false)
    setSubmitSuccess(true)
    setFormData({ name: "", phone: "", bouquet: "", comment: "" })
    setTimeout(() => setSubmitSuccess(false), 6000)
  }

  return (
    <section
      ref={ref}
      className="flex h-screen w-screen shrink-0 snap-start items-center px-4 pt-20 md:px-12 md:pt-0 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid gap-8 md:grid-cols-[1.2fr_1fr] md:gap-16 lg:gap-24">
          {/* Левая сторона — контакты */}
          <div className="flex flex-col justify-center">
            <div
              className={`mb-6 transition-all duration-700 md:mb-10 ${
                isVisible ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0"
              }`}
            >
              <h2 className="mb-2 font-sans text-4xl font-light leading-[1.05] tracking-tight text-foreground md:mb-3 md:text-6xl lg:text-7xl">
                Сделать
                <br />
                заказ
              </h2>
              <p className="font-mono text-xs text-foreground/60 md:text-base">/ Ижевск · Доставка 2 часа</p>
            </div>

            <div className="space-y-5 md:space-y-7">
              <a
                href="tel:+73412000000"
                className={`group block transition-all duration-700 ${
                  isVisible ? "translate-x-0 opacity-100" : "-translate-x-16 opacity-0"
                }`}
                style={{ transitionDelay: "200ms" }}
              >
                <div className="mb-1 flex items-center gap-2">
                  <Icon name="Phone" className="h-3 w-3 text-foreground/60" />
                  <span className="font-mono text-xs text-foreground/60">Телефон</span>
                </div>
                <p className="text-base text-foreground transition-colors group-hover:text-primary md:text-2xl">
                  +7 (3412) 00-00-00
                </p>
              </a>

              <div
                className={`transition-all duration-700 ${
                  isVisible ? "translate-x-0 opacity-100" : "-translate-x-16 opacity-0"
                }`}
                style={{ transitionDelay: "300ms" }}
              >
                <div className="mb-1 flex items-center gap-2">
                  <Icon name="MapPin" className="h-3 w-3 text-foreground/60" />
                  <span className="font-mono text-xs text-foreground/60">Адрес</span>
                </div>
                <a
                  href="https://yandex.ru/maps/?text=Ижевск+переулок+Северный+45"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 text-base text-foreground transition-colors hover:text-primary md:text-2xl"
                >
                  Ижевск, пер. Северный, 45
                  <Icon name="ExternalLink" className="h-4 w-4 opacity-40 transition-opacity group-hover:opacity-80" />
                </a>
              </div>

              <div
                className={`transition-all duration-700 ${
                  isVisible ? "translate-x-0 opacity-100" : "-translate-x-16 opacity-0"
                }`}
                style={{ transitionDelay: "400ms" }}
              >
                <div className="mb-1 flex items-center gap-2">
                  <Icon name="Clock" className="h-3 w-3 text-foreground/60" />
                  <span className="font-mono text-xs text-foreground/60">Часы работы</span>
                </div>
                <p className="text-base text-foreground md:text-xl">Пн–Вс: 9:00 — 21:00</p>
              </div>

              <div
                className={`flex gap-3 pt-2 transition-all duration-700 md:pt-4 ${
                  isVisible ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"
                }`}
                style={{ transitionDelay: "500ms" }}
              >
                {["Telegram", "ВКонтакте", "WhatsApp"].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="rounded-full border border-foreground/20 bg-white/40 px-3 py-1 font-mono text-xs text-foreground/70 backdrop-blur-sm transition-all hover:border-primary/40 hover:bg-white/70 hover:text-primary"
                  >
                    {social}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Правая сторона — форма заказа */}
          <div className="flex flex-col justify-center">
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-5">
              <div
                className={`transition-all duration-700 ${
                  isVisible ? "translate-x-0 opacity-100" : "translate-x-16 opacity-0"
                }`}
                style={{ transitionDelay: "200ms" }}
              >
                <label className="mb-1 block font-mono text-xs text-foreground/60 md:mb-2">Ваше имя *</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full rounded-xl border border-foreground/20 bg-white/50 px-4 py-2.5 text-sm text-foreground placeholder:text-foreground/40 focus:border-primary/50 focus:bg-white/70 focus:outline-none backdrop-blur-sm transition-all md:text-base"
                  placeholder="Как вас зовут?"
                />
              </div>

              <div
                className={`transition-all duration-700 ${
                  isVisible ? "translate-x-0 opacity-100" : "translate-x-16 opacity-0"
                }`}
                style={{ transitionDelay: "300ms" }}
              >
                <label className="mb-1 block font-mono text-xs text-foreground/60 md:mb-2">Телефон *</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                  className="w-full rounded-xl border border-foreground/20 bg-white/50 px-4 py-2.5 text-sm text-foreground placeholder:text-foreground/40 focus:border-primary/50 focus:bg-white/70 focus:outline-none backdrop-blur-sm transition-all md:text-base"
                  placeholder="+7 (900) 000-00-00"
                />
              </div>

              <div
                className={`transition-all duration-700 ${
                  isVisible ? "translate-x-0 opacity-100" : "translate-x-16 opacity-0"
                }`}
                style={{ transitionDelay: "400ms" }}
              >
                <label className="mb-1 block font-mono text-xs text-foreground/60 md:mb-2">Букет / повод</label>
                <input
                  type="text"
                  value={formData.bouquet}
                  onChange={(e) => setFormData({ ...formData, bouquet: e.target.value })}
                  className="w-full rounded-xl border border-foreground/20 bg-white/50 px-4 py-2.5 text-sm text-foreground placeholder:text-foreground/40 focus:border-primary/50 focus:bg-white/70 focus:outline-none backdrop-blur-sm transition-all md:text-base"
                  placeholder="День рождения, свадьба, просто так..."
                />
              </div>

              <div
                className={`transition-all duration-700 ${
                  isVisible ? "translate-x-0 opacity-100" : "translate-x-16 opacity-0"
                }`}
                style={{ transitionDelay: "500ms" }}
              >
                <label className="mb-1 block font-mono text-xs text-foreground/60 md:mb-2">Пожелания</label>
                <textarea
                  rows={2}
                  value={formData.comment}
                  onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                  className="w-full rounded-xl border border-foreground/20 bg-white/50 px-4 py-2.5 text-sm text-foreground placeholder:text-foreground/40 focus:border-primary/50 focus:bg-white/70 focus:outline-none backdrop-blur-sm transition-all md:text-base"
                  placeholder="Любимые цветы, цвета, бюджет..."
                />
              </div>

              <div
                className={`transition-all duration-700 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
                }`}
                style={{ transitionDelay: "600ms" }}
              >
                <MagneticButton
                  variant="primary"
                  size="lg"
                  className="w-full disabled:opacity-50"
                >
                  {isSubmitting ? "Отправляем... 🌸" : "Оформить заказ 💐"}
                </MagneticButton>
                {submitSuccess && (
                  <p className="mt-3 text-center font-mono text-sm text-primary">
                    Заказ принят! Влада свяжется с вами в течение 15 минут 🌷
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}