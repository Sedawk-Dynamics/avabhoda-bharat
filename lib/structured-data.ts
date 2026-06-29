export const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Avabodha Bharat',
  url: 'https://avabodha-bharat.com',
  logo: 'https://avabodha-bharat.com/favicon.ico',
  description: 'Expert POSH and POCSO training, compliance and legal advisory platform',
  foundingDate: '2024',
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'Customer Service',
    telephone: '+91-XXXXX-XXXXX',
    email: 'webelio.leads@gmail.com',
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Your Address',
    addressLocality: 'India',
    addressCountry: 'IN',
  },
  sameAs: [
    'https://www.facebook.com/avabodha-bharat',
    'https://www.twitter.com/avabodha-bharat',
    'https://www.linkedin.com/company/avabodha-bharat',
  ],
}

export const homePageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Avabodha Bharat | POSH & POCSO Training & Compliance',
  description: 'Expert POSH and POCSO training and compliance services',
  url: 'https://avabodha-bharat.com',
  isPartOf: {
    '@id': 'https://avabodha-bharat.com',
  },
  datePublished: '2024-01-01',
  dateModified: '2026-03-31',
}

export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is POSH (Prevention of Sexual Harassment)?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'POSH refers to the Prevention of Sexual Harassment of Women at Workplace (PoSH) Rules, 2013, which is an act to prevent and address sexual harassment at workplaces in India.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is POCSO (Protection of Children from Sexual Offences)?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'POCSO is the Protection of Children from Sexual Offences Act, 2012, which provides comprehensive protection to children against sexual offences.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why is POSH compliance important for organizations?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'POSH compliance ensures a safe and respectful workplace, reduces legal risks, and demonstrates organizational commitment to employee safety and dignity.',
      },
    },
  ],
}

export const breadcrumbSchema = (title: string, path: string) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://avabodha-bharat.com',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: title,
      item: `https://avabodha-bharat.com${path}`,
    },
  ],
})
