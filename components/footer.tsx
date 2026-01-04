"use client"

import Image from "next/image"
import Link from "next/link"
import { Github, Linkedin, MessageCircle, MessageSquare } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function Footer() {
  const { t } = useLanguage()
  
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Image
                src="/images/logo.png"
                alt={t('footer.title')}
                width={32}
                height={32}
                className="rounded-lg brightness-0 invert"
              />
              <div>
                <h3 className="font-bold">{t('footer.title')}</h3>
                <p className="text-xs opacity-80">{t('footer.subtitle')}</p>
              </div>
            </div>
            <p className="text-sm opacity-80 leading-relaxed">
              {t('footer.description')}
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">{t('footer.community')}</h4>
            <div className="space-y-2 text-sm">
              <Link href="#mission" className="block opacity-80 hover:opacity-100 transition-opacity">
                {t('footer.mission')}
              </Link>
              <Link href="#initiatives" className="block opacity-80 hover:opacity-100 transition-opacity">
                {t('footer.initiatives')}
              </Link>
              <Link href="#groups" className="block opacity-80 hover:opacity-100 transition-opacity">
                {t('footer.groups')}
              </Link>
              <Link href="#community" className="block opacity-80 hover:opacity-100 transition-opacity">
                {t('footer.join')}
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">{t('footer.groups')}</h4>
            <div className="space-y-2 text-sm">
              <div className="opacity-80">{t('footer.groups.localhost')}</div>
              <div className="opacity-80">{t('footer.groups.learn')}</div>
              <div className="opacity-80">{t('footer.groups.jobs')}</div>
              <div className="opacity-80">{t('footer.groups.oss')}</div>
              <div className="opacity-80">{t('footer.groups.business')}</div>
              <div className="opacity-80">{t('footer.groups.integration')}</div>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">{t('footer.connect')}</h4>
            <div className="flex gap-3">
              <Link
                href="https://discord.gg/ATuWw4Urhf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-background/10 rounded-lg flex items-center justify-center hover:bg-background/20 transition-colors"
              >
                <MessageCircle className="h-4 w-4" />
              </Link>
              <Link
                href="https://github.com/Oman-OpenSoftware"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-background/10 rounded-lg flex items-center justify-center hover:bg-background/20 transition-colors"
              >
                <Github className="h-4 w-4" />
              </Link>
              <Link
                href="https://www.linkedin.com/company/om-dev-club"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-background/10 rounded-lg flex items-center justify-center hover:bg-background/20 transition-colors"
              >
                <Linkedin className="h-4 w-4" />
              </Link>
              <Link
                href="https://chat.whatsapp.com/KkjfkksiSiE4sqGjXopXjx?mode=ems_copy_t"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-background/10 rounded-lg flex items-center justify-center hover:bg-background/20 transition-colors"
              >
                <MessageSquare className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 mt-8 pt-8 text-center text-sm opacity-80">
          <p>{t('footer.copyright')}</p>
          <p>{t('footer.copyright2')}</p>
        </div>
      </div>
    </footer>
  )
}
