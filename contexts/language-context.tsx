"use client"

import { createContext, useContext, useState, ReactNode } from 'react'

export type Language = 'ar' | 'en'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const translations = {
  ar: {
    // Header
    'nav.mission': 'الرسالة',
    'nav.groups': 'المجموعات',
    'nav.community': 'المجتمع',
    'header.title': 'نادي عمان للمطورين',
    'header.subtitle': 'البيئة الامثل للمطورين في عُمان',
    
    // Hero Section
    'hero.badge': 'البيئة الامثل للمطورين في عُمان',
    'hero.title': 'مرحباً بكم في نادي عمان للمطورين',
    'hero.description': 'انضم إلى مجتمعنا النابض بالشغف من المطورين والمبدعين وعشاق التكنولوجيا الذين يعملون معاً لتحقيق التحول الرقمي في عُمان.',
    'hero.join': 'انضم لمجتمعنا',
    'hero.explore': 'استكشف المجموعات',
    'hero.groups': 'مجموعات متخصصة',
    'hero.members': 'عضو نشط',
    'hero.platforms': 'منصات',
    
    // Mission Section
    'mission.title': 'رسالتنا',
    'mission.subtitle': 'نحن ملتزمون ببناء البيئة الامثل للمطورين في عُمان من خلال التعاون والابتكار وتبادل المعرفة.',
    'mission.digital.title': 'التحول الرقمي',
    'mission.digital.description': 'تكثيف الجهود في تحديث المشهد الرقمي في عُمان من خلال الحلول المبتكرة وأفضل الممارسات.',
    'mission.community.title': 'بناء المجتمع',
    'mission.community.description': 'تعزيز مجتمع نابض بالحياة من المطورين والمصممين وعشاق التكنولوجيا عبر منصات متعددة.',
    'mission.innovation.title': 'مركز الابتكار',
    'mission.innovation.description': 'إنشاء نظام بيئي تزدهر فيه الأفكار ويتم استكشاف وتطبيق التقنيات المتطورة.',
    
    // Groups Section
    'groups.title': 'مجموعاتنا المتخصصة',
    'groups.subtitle': 'خمس مجتمعات مركزة، كل منها لديها خبرتها ورسالتها الخاصة، تعمل معاً نحو التميز الرقمي.',
    'groups.localhost.name': 'المضيف المحلي',
    'groups.localhost.description': 'المجموعة العامة للجميع في مجتمعنا. مساحة ترحيبية للمطورين من جميع المستويات للتواصل وتبادل الأفكار والتعاون.',
    'groups.learn.name': 'تعلم معاً',
    'groups.learn.description': 'مركزة على تبادل المعرفة والتعلم التعاوني. انضم إلى مجموعات الدراسة وورش العمل وبرامج الإرشاد لتطوير مهاراتك.',
    'groups.jobs.name': 'الوظائف',
    'groups.jobs.description': 'بوابتك إلى الفرص المهنية والتوظيف في قطاع التكنولوجيا في عُمان. تواصل مع أصحاب العمل واكتشف دورك التالي.',
    'groups.oss.name': 'البرمجيات مفتوحة المصدر',
    'groups.oss.description': 'دعم والمساهمة في مشاريع مفتوحة المصدر. التعاون في مشاريع ذات معنى تفيد مجتمع المطورين العالمي.',
    'groups.business.name': 'شبكة الأعمال التقنية',
    'groups.business.description': 'مجموعة مخصصة لربط أصحاب الأعمال والشركات في مجال التكنولوجيا. شبكة للتواصل التجاري وبناء الشراكات وتبادل الفرص الاستثمارية والتعاونية.',
    'groups.integration.name': 'تكاملات البرمجيات',
    'groups.integration.description': 'للمطورين العاملين على التكاملات بين الشركات والأنظمة الحكومية. سد الفجوة بين القطاعين العام والخاص من خلال الحلول التقنية المتكاملة.',
    'groups.join': 'انضم للمجموعة',
    
    // Community Section
    'community.title': 'انضم إلى مجتمعنا',
    'community.subtitle': 'تواصل معنا عبر منصات متعددة. كل منصة تخدم غرضاً فريداً في نظامنا البيئي.',
    'community.discord.name': 'ديسكورد',
    'community.discord.description': 'دردشة فورية وقنوات صوتية وفعاليات مجتمعية',
    'community.github.name': 'جيت هب',
    'community.github.description': 'مشاريع مفتوحة المصدر والتعاون في البرمجة',
    'community.linkedin.name': 'لينكدإن',
    'community.linkedin.description': 'الشبكات المهنية والفرص المهنية',
    'community.whatsapp.name': 'واتساب',
    'community.whatsapp.description': 'تحديثات سريعة ومناقشات غير رسمية',
    'community.members': 'أعضاء',
    'community.repositories': 'مستودعات',
    'community.join.button': 'انضم الآن',
    'community.cta.title': 'مستعد للبدء؟',
    'community.cta.description': 'اختر منصتك المفضلة وانضم للمحادثة اليوم.',
    
    // Footer
    'footer.title': 'نادي عمان للمطورين',
    'footer.subtitle': 'البيئة الامثل للمطورين في عُمان',
    'footer.description': 'بناء مجتمع تقني أقوى في عُمان من خلال التعاون والتعلم والابتكار.',
    'footer.community': 'المجتمع',
    'footer.mission': 'رسالتنا',
    'footer.groups': 'المجموعات',
    'footer.join': 'انضم إلينا',
    'footer.groups.localhost': 'المضيف المحلي',
    'footer.groups.learn': 'تعلم معاً',
    'footer.groups.jobs': 'الوظائف',
    'footer.groups.oss': 'مفتوح المصدر',
    'footer.groups.business': 'شبكة الأعمال',
    'footer.groups.integration': 'التكاملات',
    'footer.connect': 'تواصل',
    'footer.copyright': '© 2025 نادي عمان للمطورين. بناء مستقبل التكنولوجيا في عُمان.',
    
    // Meta
    'meta.title': 'نادي عمان للمطورين - البيئة الامثل للمطورين في عُمان',
    'meta.description': 'انضم إلى مجتمع نادي عمان للمطورين الذي يقود التحول الرقمي الحقيقي في عُمان. تواصل مع المطورين عبر Discord و GitHub و LinkedIn و WhatsApp.',
  },
  en: {
    // Header
    'nav.mission': 'Mission',
    'nav.groups': 'Groups',
    'nav.community': 'Community',
    'header.title': 'Oman Developers Club',
    'header.subtitle': 'The ideal environment for developers in Oman',
    
    // Hero Section
    'hero.badge': 'The ideal environment for developers in Oman',
    'hero.title': 'Welcome to the Oman Developers Club',
    'hero.description': 'Join our vibrant community of developers, innovators, and tech enthusiasts working together to build the ideal environment for developers across Oman.',
    'hero.join': 'Join Our Community',
    'hero.explore': 'Explore Groups',
    'hero.groups': 'Specialized Groups',
    'hero.members': 'Active Members',
    'hero.platforms': 'Platforms',
    
    // Mission Section
    'mission.title': 'Our Mission',
    'mission.subtitle': 'We are committed to build the ideal environment for developers in Oman through collaboration, innovation, and knowledge sharing.',
    'mission.digital.title': 'Digital Transformation',
    'mission.digital.description': 'Leading the charge in modernizing Oman\'s digital landscape through innovative solutions and best practices.',
    'mission.community.title': 'Community Building',
    'mission.community.description': 'Fostering a vibrant community of developers, designers, and tech enthusiasts across multiple platforms.',
    'mission.innovation.title': 'Innovation Hub',
    'mission.innovation.description': 'Creating an ecosystem where ideas flourish and cutting-edge technologies are explored and implemented.',
    
    // Groups Section
    'groups.title': 'Our Specialized Groups',
    'groups.subtitle': 'Five focused communities, each with its own expertise and mission, working together towards digital excellence.',
    'groups.localhost.name': 'Localhost',
    'groups.localhost.description': 'The general group for everyone in our community. A welcoming space for developers of all levels to connect, share ideas, and collaborate.',
    'groups.learn.name': 'Learn Together',
    'groups.learn.description': 'Focused on knowledge sharing and collaborative learning. Join study groups, workshops, and mentorship programs to grow your skills.',
    'groups.jobs.name': 'Jobs',
    'groups.jobs.description': 'Your gateway to career opportunities and hiring in Oman\'s tech sector. Connect with employers and discover your next role.',
    'groups.oss.name': 'Open Source Software',
    'groups.oss.description': 'Supporting and contributing to open-source projects. Collaborate on meaningful projects that benefit the global developer community.',
    'groups.business.name': 'Business Tech Network',
    'groups.business.description': 'A dedicated group for connecting business owners and companies in the technology sector. A network for business networking, building partnerships, and sharing investment and collaboration opportunities.',
    'groups.integration.name': 'Software Integrations',
    'groups.integration.description': 'For developers working on integrations between companies and government systems. Bridging the gap between public and private sectors through integrated technical solutions.',
    'groups.join': 'Join Group',
    
    // Community Section
    'community.title': 'Join Our Community',
    'community.subtitle': 'Connect with us across multiple platforms. Each platform serves a unique purpose in our ecosystem.',
    'community.discord.name': 'Discord',
    'community.discord.description': 'Real-time chat, voice channels, and community events',
    'community.github.name': 'GitHub',
    'community.github.description': 'Open source projects and code collaboration',
    'community.linkedin.name': 'LinkedIn',
    'community.linkedin.description': 'Professional networking and career opportunities',
    'community.whatsapp.name': 'WhatsApp',
    'community.whatsapp.description': 'Quick updates and informal discussions',
    'community.members': 'Members',
    'community.repositories': 'Repositories',
    'community.join.button': 'Join Now',
    'community.cta.title': 'Ready to get started?',
    'community.cta.description': 'Choose your preferred platform and join the conversation today.',
    
    // Footer
    'footer.title': 'Oman Developers Club',
    'footer.subtitle': 'The ideal environment for developers in Oman',
    'footer.description': 'Building a stronger tech community in Oman through collaboration, learning, and innovation.',
    'footer.community': 'Community',
    'footer.mission': 'Our Mission',
    'footer.groups': 'Groups',
    'footer.join': 'Join Us',
    'footer.groups.localhost': 'Localhost',
    'footer.groups.learn': 'Learn Together',
    'footer.groups.jobs': 'Jobs',
    'footer.groups.oss': 'Open Source',
    'footer.groups.business': 'Business Network',
    'footer.groups.integration': 'Integrations',
    'footer.connect': 'Connect',
    'footer.copyright': '© 2025 Oman Developers Club. Building the future of tech in Oman.',
    
    // Meta
    'meta.title': 'Oman Developers Club - The ideal environment for developers in Oman',
    'meta.description': 'Join the Oman Developers Club community driving real digital transformation in Oman. Connect with developers across Discord, GitHub, LinkedIn, and WhatsApp.',
  }
}

interface LanguageProviderProps {
  children: ReactNode
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguage] = useState<Language>('ar')
  
  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[Language]] || key
  }
  
  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}