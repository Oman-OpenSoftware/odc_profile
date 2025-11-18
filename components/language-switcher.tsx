"use client"

import { useLanguage } from '@/contexts/language-context'
import { Button } from '@/components/ui/button'
import { Globe } from 'lucide-react'

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()
  
  const toggleLanguage = () => {
    setLanguage(language === 'ar' ? 'en' : 'ar')
  }
  
  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLanguage}
      className="flex items-center gap-2"
    >
      <Globe className="h-4 w-4" />
      <span className="text-sm font-medium">
        {language === 'ar' ? 'Eng' : 'ع'}
      </span>
    </Button>
  )
}