"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, MessageCircle } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { LanguageSwitcher } from "./language-switcher"

export function Header() {
  const { t } = useLanguage()
  
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-3">
          <Image src="/images/logo.png" alt={t('header.title')} width={40} height={40} className="rounded-lg" />
          <div>
            <h1 className="font-bold text-lg">{t('header.title')}</h1>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <Link href="#mission" className="text-sm font-medium hover:text-primary transition-colors">
            {t('nav.mission')}
          </Link>
          <Link href="#initiatives" className="text-sm font-medium hover:text-primary transition-colors">
            {t('nav.initiatives')}
          </Link>
          <Link href="#groups" className="text-sm font-medium hover:text-primary transition-colors">
            {t('nav.groups')}
          </Link>
          <Link href="#community" className="text-sm font-medium hover:text-primary transition-colors">
            {t('nav.community')}
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <LanguageSwitcher />
          <Button variant="ghost" size="sm" asChild>
            <Link href="https://github.com/Oman-OpenSoftware" target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4" />
              <span className="sr-only">GitHub</span>
            </Link>
          </Button>
          <Button variant="ghost" size="sm" asChild>
            <Link href="https://www.linkedin.com/company/om-dev-club" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-4 w-4" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </Button>
          <Button variant="ghost" size="sm" asChild>
            <Link href="https://discord.gg/ATuWw4Urhf" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="h-4 w-4" />
              <span className="sr-only">Discord</span>
            </Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
