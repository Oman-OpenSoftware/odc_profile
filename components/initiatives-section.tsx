"use client"

import { GraduationCap, CalendarCheck2, Lightbulb } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { Card, CardContent } from "@/components/ui/card"

const initiatives = [
  {
    key: "collaborative",
    icon: GraduationCap,
    panel: "from-[#365769]/10 via-background to-background border-[#365769]/20",
    accent: "bg-[#365769]/10 text-[#365769] border-[#365769]/20",
  },
  {
    key: "challenges",
    icon: CalendarCheck2,
    panel: "from-[#365769]/10 via-background to-background border-[#365769]/20",
    accent: "bg-[#365769]/10 text-[#365769] border-[#365769]/20",
  },
]

export function InitiativesSection() {
  const { t } = useLanguage()

  return (
    <section id="initiatives" className="py-20 bg-gradient-to-b from-background via-muted/30 to-background">
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold font-[var(--font-playfair)] text-balance">
            {t("initiatives.title")}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            {t("initiatives.subtitle")}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {initiatives.map((initiative) => {
            const Icon = initiative.icon
            return (
              <Card
                key={initiative.key}
                className={`group relative overflow-hidden border bg-gradient-to-br shadow-[0_12px_30px_-24px_rgba(0,0,0,0.6)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_50px_-28px_rgba(0,0,0,0.65)] ${initiative.panel}`}
              >
                <div className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-[#365769]/10 blur-2xl transition-opacity duration-300 group-hover:opacity-90" />
                <div className="pointer-events-none absolute -left-10 -bottom-10 h-32 w-32 rounded-full bg-[#365769]/10 blur-2xl transition-opacity duration-300 group-hover:opacity-90" />
                <CardContent className="relative z-10 p-8 space-y-6">
                  <div className="flex items-center gap-4">
                    <div className={`h-12 w-12 rounded-2xl border shadow-sm flex items-center justify-center ${initiative.accent}`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-2xl font-semibold">
                      {t(`initiatives.${initiative.key}.title`)}
                    </h3>
                  </div>

                  <div className="space-y-4 text-muted-foreground leading-relaxed text-pretty">
                    <p>{t(`initiatives.${initiative.key}.description`)}</p>
                    {initiative.key === "challenges" && (
                      <p>{t(`initiatives.${initiative.key}.detail`)}</p>
                    )}
                  </div>

                  <div className="rounded-2xl border bg-background/70 backdrop-blur-sm p-5">
                    <h4 className="font-semibold mb-3">
                      {t(`initiatives.${initiative.key}.listTitle`)}
                    </h4>
                    <ul className="space-y-3 text-sm text-muted-foreground">
                      {[1, 2, 3, 4].map((index) => (
                        <li key={index} className="flex gap-3">
                          <span className="mt-2 h-2 w-2 rounded-full bg-[#365769]" aria-hidden="true" />
                          <span>{t(`initiatives.${initiative.key}.bullet${index}`)}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <p className="text-sm font-semibold tracking-wide text-[#365769]">
                    {t(`initiatives.${initiative.key}.footer`)}
                  </p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <Card className="relative mt-12 overflow-hidden border bg-card/80 shadow-[0_10px_30px_-22px_rgba(0,0,0,0.5)]">
          <div className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full bg-[#365769]/10 blur-2xl" />
          <CardContent className="relative z-10 p-8 space-y-6">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-2xl border border-[#365769]/20 bg-[#365769]/10 text-[#365769] flex items-center justify-center">
                <Lightbulb className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-semibold">{t("initiatives.why.title")}</h3>
            </div>
            <p className="text-muted-foreground">{t("initiatives.why.lead")}</p>
            <ul className="space-y-3 text-muted-foreground list-disc list-inside">
              {[1, 2, 3].map((index) => (
                <li key={index}>{t(`initiatives.why.bullet${index}`)}</li>
              ))}
            </ul>
            <p className="font-semibold">{t("initiatives.why.footer")}</p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
