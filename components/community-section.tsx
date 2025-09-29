"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Github, Linkedin, MessageCircle, MessageSquare } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

const platforms = [
  {
    key: "discord",
    icon: MessageCircle,
    members: "50+",
    color: "bg-[#5865F2]/10 text-[#5865F2] border-[#5865F2]/20",
    href: "https://discord.gg/ATuWw4Urhf",
  },
  {
    key: "github",
    icon: Github,
    members: "22+",
    color: "bg-foreground/10 text-foreground border-foreground/20",
    href: "https://github.com/Oman-OpenSoftware",
  },
  {
    key: "linkedin",
    icon: Linkedin,
    members: "80+",
    color: "bg-[#0077B5]/10 text-[#0077B5] border-[#0077B5]/20",
    href: "https://www.linkedin.com/company/om-dev-club",
  },
  {
    key: "whatsapp",
    icon: MessageSquare,
    members: "520+",
    color: "bg-[#25D366]/10 text-[#25D366] border-[#25D366]/20",
    href: "https://chat.whatsapp.com/KkjfkksiSiE4sqGjXopXjx?mode=ems_copy_t",
  },
]

export function CommunitySection() {
  const { t } = useLanguage()
  
  return (
    <section id="community" className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold font-[var(--font-playfair)] text-balance">
            {t('community.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            {t('community.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {platforms.map((platform) => {
            const Icon = platform.icon
            return (
              <Card
                key={platform.key}
                className={`group hover:shadow-lg transition-all duration-300 ${platform.color} hover:scale-[1.02]`}
              >
                <CardContent className="p-6 text-center space-y-4">
                  <div className="w-12 h-12 mx-auto rounded-xl bg-current/10 flex items-center justify-center">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{t(`community.${platform.key}.name`)}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{t(`community.${platform.key}.description`)}</p>
                  </div>
                  <div className="text-2xl font-bold">{platform.members} {t(platform.key === 'github' ? 'community.repositories' : 'community.members')}</div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full group-hover:bg-current/10 transition-colors bg-transparent"
                    asChild
                  >
                    <a href={platform.href} target="_blank" rel="noopener noreferrer">
                      {t('community.join.button')}
                    </a>
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="text-center">
          <div className="inline-flex items-center gap-4 p-6 bg-card rounded-2xl border shadow-sm">
            <div className="text-left">
              <h3 className="font-semibold text-lg">{t('community.cta.title')}</h3>
              <p className="text-muted-foreground">
                {t('community.cta.description')}
              </p>
            </div>
            <Button size="lg" className="shrink-0">
              {"Get Started"}
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
