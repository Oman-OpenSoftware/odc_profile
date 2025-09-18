"use client"

import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

const groups = [
  {
    key: "localhost",
    image: "/images/logo.png",
    color: "bg-primary/5 border-primary/20",
    href: "https://chat.whatsapp.com/KkjfkksiSiE4sqGjXopXjx?mode=ems_copy_t",
  },
  {
    key: "learn",
    image: "/images/learn.png",
    color: "bg-accent/5 border-accent/20",
    href: "https://chat.whatsapp.com/KkjfkksiSiE4sqGjXopXjx?mode=ems_copy_t",
  },
  {
    key: "jobs",
    image: "/images/jobs.png",
    color: "bg-secondary/5 border-secondary/20",
    href: "https://chat.whatsapp.com/KkjfkksiSiE4sqGjXopXjx?mode=ems_copy_t",
  },
  {
    key: "oss",
    image: "/images/oss.png",
    color: "bg-chart-1/5 border-chart-1/20",
    href: "https://chat.whatsapp.com/KkjfkksiSiE4sqGjXopXjx?mode=ems_copy_t",
  },
  {
    key: "business",
    image: "/images/busness.png",
    color: "bg-chart-2/5 border-chart-2/20",
    href: "https://chat.whatsapp.com/KkjfkksiSiE4sqGjXopXjx?mode=ems_copy_t",
  },
  {
    key: "integration",
    image: "/images/softwar_integrations.png",
    color: "bg-chart-3/5 border-chart-3/20",
    href: "https://chat.whatsapp.com/KkjfkksiSiE4sqGjXopXjx?mode=ems_copy_t",
  },
]

export function GroupsSection() {
  const { t, language } = useLanguage()
  
  return (
    <section id="groups" className="py-20">
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold font-[var(--font-playfair)] text-balance">
            {t('groups.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            {t('groups.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {groups.map((group) => (
            <Card
              key={group.key}
              className={`group hover:shadow-lg transition-all duration-300 ${group.color} hover:scale-[1.02]`}
            >
              <CardHeader className="text-center pb-4">
                <div className="w-20 h-20 mx-auto mb-4 relative">
                  <Image
                    src={group.image || "/placeholder.svg"}
                    alt={t(`groups.${group.key}.name`)}
                    width={80}
                    height={80}
                    className="w-full h-full object-contain"
                  />
                </div>
                <CardTitle className="text-xl font-semibold">{t(`groups.${group.key}.name`)}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-sm leading-relaxed">{t(`groups.${group.key}.description`)}</CardDescription>
                <Button variant="ghost" className="w-full group-hover:bg-primary/10 transition-colors" asChild>
                  <a href={group.href} target="_blank" rel="noopener noreferrer">
                    {t('groups.join')}
                    <ArrowRight className={`h-4 w-4 transition-transform ${language === 'ar' ? 'mr-2 group-hover:-translate-x-1 rotate-180' : 'ml-2 group-hover:translate-x-1'}`} />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
