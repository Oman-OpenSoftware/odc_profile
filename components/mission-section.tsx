"use client"

import { Target, Users, Zap } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function MissionSection() {
  const { t } = useLanguage()
  
  return (
    <section id="mission" className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold font-[var(--font-playfair)] text-balance">{t('mission.title')}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            {t('mission.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto">
              <Target className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold">{t('mission.digital.title')}</h3>
            <p className="text-muted-foreground">
              {t('mission.digital.description')}
            </p>
          </div>

          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto">
              <Users className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold">{t('mission.community.title')}</h3>
            <p className="text-muted-foreground">
              {t('mission.community.description')}
            </p>
          </div>

          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto">
              <Zap className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold">{t('mission.innovation.title')}</h3>
            <p className="text-muted-foreground">
              {t('mission.innovation.description')}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
