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
    'nav.initiatives': 'المبادرات',
    'nav.groups': 'المجموعات',
    'nav.community': 'المجتمع',
    'header.title': 'نادي المطورين',
    'header.subtitle': 'البيئة الامثل للمطورين في عُمان',
    
    // Hero Section
    'hero.badge': 'البيئة الامثل للمطورين في عُمان',
    'hero.title': 'مرحباً بكم في نادي المطورين',
    'hero.description': 'انضم إلى مجتمعنا النابض بالشغف من المطورين والمبدعين وعشاق التكنولوجيا الذين يعملون معاً لتحقيق التحول الرقمي في عُمان.',
    'hero.join': 'انضم لمجتمعنا',
    'hero.explore': 'استكشف المجموعات',
    'hero.groups': 'مجموعات متخصصة',
    'hero.members': 'عضو نشط',
    'hero.platforms': 'منصات',
    
    // Mission Section
    'mission.title': 'رسالتنا',
    'mission.subtitle': 'نحن ملتزمون ببناء البيئة الامثل للمطورين في عُمان من خلال التعاون والابتكار ومشاركة المعرفة.',
    'mission.digital.title': 'التحول الرقمي',
    'mission.digital.description': 'ندفع المشهد الرقمي في عُمان عبر حلول مبتكرة وأفضل الممارسات.',
    'mission.community.title': 'بناء المجتمع',
    'mission.community.description': 'نعزيز مجتمعًا حيويًا من المطورين والمصممين وعشاق التكنولوجيا عبر منصات متعددة.',
    'mission.innovation.title': 'حاضنة الابتكار',
    'mission.innovation.description': 'نخلق منظومة تنمو فيها الأفكار وتُستكشف فيها التقنيات الحديثة وتُطبّق.',

    // Initiatives Section
    'initiatives.title': 'المبادرات',
    'initiatives.subtitle': 'نؤمن في النادي أن التعلم الحقيقي لا يحدث بشكل فردي فقط، بل من خلال المشاركة، النقاش، والتجربة الجماعية.',
    'initiatives.collaborative.title': 'التعلم التشاركي',
    'initiatives.collaborative.description': 'مبادرة التعلم التشاركي تهدف إلى بناء بيئة يتعلم فيها الأعضاء من بعضهم البعض عبر العمل على مواضيع تقنية حقيقية، تبادل الخبرات، ومناقشة أفضل الممارسات في سوق العمل.',
    'initiatives.collaborative.listTitle': 'في هذه المبادرة:',
    'initiatives.collaborative.bullet1': 'يتشارك الأعضاء المعرفة بدل استهلاكها فقط',
    'initiatives.collaborative.bullet2': 'يتم تبسيط المفاهيم المعقدة عبر النقاش والتطبيق',
    'initiatives.collaborative.bullet3': 'يكتسب المبتدئون خبرة عملية، ويصقل المتقدمون مهاراتهم القيادية',
    'initiatives.collaborative.bullet4': 'تتكون علاقات مهنية مبنية على التعاون لا المنافسة',
    'initiatives.collaborative.footer': 'التعلم التشاركي ليس دورة تدريبية، بل مجتمع يتطور مع أفراده.',
    'initiatives.challenges.title': 'التحديات الشهرية',
    'initiatives.challenges.description': 'التعلم بدون تطبيق يفقد قيمته. لذلك أطلقنا التحديات الشهرية لتحويل المعرفة إلى مهارة، والمهارة إلى إنجاز.',
    'initiatives.challenges.detail': 'كل شهر نطرح تحديًا تقنيًا واضح الهدف، مصمم ليحاكي مشاكل واقعية من سوق العمل.',
    'initiatives.challenges.listTitle': 'ويشجع الأعضاء على:',
    'initiatives.challenges.bullet1': 'الالتزام بالتعلم المستمر',
    'initiatives.challenges.bullet2': 'بناء مشاريع صغيرة قابلة للعرض',
    'initiatives.challenges.bullet3': 'تحسين التفكير التحليلي وحل المشكلات',
    'initiatives.challenges.bullet4': 'العمل ضمن معايير وجودة حقيقية',
    'initiatives.challenges.footer': 'التحديات مناسبة لمستويات مختلفة، والهدف ليس الفوز فقط، بل التقدم، الانضباط، وبناء سجل عملي (Portfolio) يعكس قدرات العضو.',
    'initiatives.why.title': 'لماذا هذه المبادرات؟',
    'initiatives.why.lead': 'لأننا نؤمن أن:',
    'initiatives.why.bullet1': 'المجتمع التقني القوي يُبنى بالممارسة لا بالمشاهدة',
    'initiatives.why.bullet2': 'المطور الجيد يتعلم، والمطور المتميز يطبق ويشارك',
    'initiatives.why.bullet3': 'النمو الفردي السريع يحتاج بيئة جماعية داعمة',
    'initiatives.why.footer': 'هذه المبادرات هي قلب النادي النابض، ومنها يبدأ التطور الحقيقي للأعضاء.',
    
    // Groups Section
    'groups.title': 'مجموعاتنا المتخصصة',
    'groups.subtitle': 'خمس مجتمعات مركزة، كل منها لديها خبرتها ورسالتها الخاصة، تعمل معاً نحو التميز الرقمي.',
    'groups.localhost.name': 'المضيف المحلي',
    'groups.localhost.description': 'المجموعة العامة للجميع في مجتمعنا. مساحة ترحيبية للمطورين من جميع المستويات للتواصل ومشاركة الأفكار والتعاون.',
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
      'community.cta.btn': 'انضم الآن',
    
    // Footer
    'footer.title': 'نادي المطورين',
    'footer.subtitle': 'البيئة الامثل للمطورين في عُمان',
    'footer.description': 'بناء مجتمع تقني أقوى في عُمان من خلال التعاون والتعلم والابتكار.',
    'footer.community': 'المجتمع',
    'footer.mission': 'رسالتنا',
    'footer.initiatives': 'المبادرات',
    'footer.groups': 'المجموعات',
    'footer.join': 'انضم إلينا',
    'footer.groups.localhost': 'المضيف المحلي',
    'footer.groups.learn': 'تعلم معاً',
    'footer.groups.jobs': 'الوظائف',
    'footer.groups.oss': 'مفتوح المصدر',
    'footer.groups.business': 'شبكة الأعمال',
    'footer.groups.integration': 'التكاملات',
    'footer.connect': 'تواصل',
    'footer.copyright': '© 2025 نادي المطورين. بناء مستقبل التكنولوجيا في عُمان.',
    'footer.copyright2': 'النادي مباردة غير ربحية تحت رعاية شركة رمز للتقنية والبيانات',
    // Meta
    'meta.title': 'نادي المطورين - البيئة الامثل للمطورين في عُمان',
    'meta.description': 'انضم إلى مجتمع نادي المطورين الذي يقود التحول الرقمي الحقيقي في عُمان. تواصل مع المطورين عبر Discord و GitHub و LinkedIn و WhatsApp.',
  },
  en: {
    // Header
    'nav.mission': 'Mission',
    'nav.initiatives': 'Initiatives',
    'nav.groups': 'Groups',
    'nav.community': 'Community',
    'header.title': 'Developers Club',
    'header.subtitle': 'The ideal environment for developers in Oman',
    
    // Hero Section
    'hero.badge': 'The ideal environment for developers in Oman',
    'hero.title': 'Welcome to the Developers Club',
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

    // Initiatives Section
    'initiatives.title': 'Initiatives',
    'initiatives.subtitle': 'We believe real learning does not happen in isolation, but through participation, dialogue, and shared experience.',
    'initiatives.collaborative.title': 'Collaborative Learning',
    'initiatives.collaborative.description': 'The collaborative learning initiative builds a space where members learn from one another by working on real technical topics, exchanging expertise, and discussing best practices in the job market.',
    'initiatives.collaborative.listTitle': 'In this initiative:',
    'initiatives.collaborative.bullet1': 'Members share knowledge instead of only consuming it',
    'initiatives.collaborative.bullet2': 'Complex concepts are simplified through discussion and hands-on practice',
    'initiatives.collaborative.bullet3': 'Beginners gain practical experience, while advanced members refine leadership skills',
    'initiatives.collaborative.bullet4': 'Professional relationships are built on collaboration, not competition',
    'initiatives.collaborative.footer': 'Collaborative learning is not a course, but a community that grows with its members.',
    'initiatives.challenges.title': 'Monthly Challenges',
    'initiatives.challenges.description': 'Learning without application loses its value. That is why we launched monthly challenges to turn knowledge into skill, and skill into achievement.',
    'initiatives.challenges.detail': 'Each month we propose a clear technical challenge designed to reflect real market problems.',
    'initiatives.challenges.listTitle': 'Members are encouraged to:',
    'initiatives.challenges.bullet1': 'Commit to continuous learning',
    'initiatives.challenges.bullet2': 'Build small, showcase-ready projects',
    'initiatives.challenges.bullet3': 'Strengthen analytical thinking and problem solving',
    'initiatives.challenges.bullet4': 'Work within real quality standards',
    'initiatives.challenges.footer': 'Challenges fit different levels; the goal is not just to win, but to progress, build discipline, and create a portfolio that reflects each member\'s capabilities.',
    'initiatives.why.title': 'Why these initiatives?',
    'initiatives.why.lead': 'Because we believe that:',
    'initiatives.why.bullet1': 'A strong technical community is built through practice, not watching',
    'initiatives.why.bullet2': 'A good developer learns, and a great developer applies and shares',
    'initiatives.why.bullet3': 'Fast individual growth needs a supportive collective environment',
    'initiatives.why.footer': 'These initiatives are the heartbeat of the club and the start of real member growth.',
    
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
      'community.cta.btn': 'Join Now',
    
    // Footer
    'footer.title': 'Developers Club',
    'footer.subtitle': 'The ideal environment for developers in Oman',
    'footer.description': 'Building a stronger tech community in Oman through collaboration, learning, and innovation.',
    'footer.community': 'Community',
    'footer.mission': 'Our Mission',
    'footer.initiatives': 'Initiatives',
    'footer.groups': 'Groups',
    'footer.join': 'Join Us',
    'footer.groups.localhost': 'Localhost',
    'footer.groups.learn': 'Learn Together',
    'footer.groups.jobs': 'Jobs',
    'footer.groups.oss': 'Open Source',
    'footer.groups.business': 'Business Network',
    'footer.groups.integration': 'Integrations',
    'footer.connect': 'Connect',
    'footer.copyright': '© 2025 Developers Club. Building the future of tech in Oman.',
    'footer.copyright2': 'The club is a non-profit initiative under the patronage of Ramz Technology and Data Company',

    // Meta
    'meta.title': 'Developers Club - The ideal environment for developers in Oman',
    'meta.description': 'Join the Developers Club community driving real digital transformation in Oman. Connect with developers across Discord, GitHub, LinkedIn, and WhatsApp.',
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
