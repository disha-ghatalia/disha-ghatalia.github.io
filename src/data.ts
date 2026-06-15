// All site content lives here — edit this file to update the site.

export interface Persona {
  key: string
  label: string
  shortcut: string
  eyebrow: string
  headline: [string, string]
  sub: string
  focus: string[]
}

export interface Stat {
  value: number
  suffix: string
  label: string
}

export interface GaugeMetric {
  type: 'gauge'
  from: number
  to: number
  label: string
}

export interface NumberMetric {
  type: 'number'
  value: string
  label: string
}

export interface Project {
  id: string
  title: string
  org: string
  description: string
  tags: string[]
  metric: GaugeMetric | NumberMetric
  featured?: boolean
}

export interface Job {
  role: string
  org: string
  where: string
  when: string
  note: string
}

export interface EducationEntry {
  degree: string
  school: string
  year: string
}

export interface SkillGroup {
  group: string
  items: string[]
}

export interface ContactInfo {
  name: string
  location: string
  email: string
  linkedin: string
  github: string
  resume: string
}

export const personas: Record<string, Persona> = {
  engineer: {
    key: 'engineer',
    label: 'Frontend Engineer',
    shortcut: '1',
    eyebrow: 'Senior Frontend Engineer',
    headline: ['I build interfaces', 'that feel alive.'],
    sub: '10+ years crafting fast, accessible React & TypeScript products across fintech, enterprise SaaS, and high-traffic platforms. Performance budgets, design systems, and WCAG are my home turf.',
    focus: ['fintech', 'dashboards', 'design-system'],
  },
  leader: {
    key: 'leader',
    label: 'Technical Program Lead',
    shortcut: '2',
    eyebrow: 'Tech Lead · Engineering Manager · EMBA',
    headline: ['I ship programs', 'and grow teams.'],
    sub: 'Led teams of 2 to 12 engineers through hiring, 1:1s, and delivery. Drove an 18-month, 10-person fintech migration from kickoff to launch. Executive MBA in Operational Effectiveness — I speak both roadmap and runtime.',
    focus: ['fintech', 'tcs', 'ai-workflows'],
  },
  ai: {
    key: 'ai',
    label: 'AI Workflow Engineer',
    shortcut: '3',
    eyebrow: 'AI-Assisted Development · Prompt Engineering',
    headline: ['I make teams faster', 'with AI.'],
    sub: 'I design and roll out AI-assisted development workflows that actually stick — prompt patterns, review automation, and adoption strategy across whole engineering practices. 200+ PR reviews a year, increasingly co-piloted.',
    focus: ['ai-workflows', 'design-system', 'dashboards'],
  },
}

export const personaOrder: string[] = ['engineer', 'leader', 'ai']

export const stats: Stat[] = [
  { value: 10, suffix: '+', label: 'years building for the web' },
  { value: 200, suffix: '+', label: 'PRs reviewed per year' },
  { value: 40, suffix: '+', label: 'client sites shipped' },
  { value: 12, suffix: '', label: 'engineers led at once' },
]

export const projects: Project[] = [
  {
    id: 'fintech',
    title: 'Fintech Platform Migration',
    org: 'Valtech · fintech client',
    description:
      '18-month migration of a fintech microsite ecosystem to Optimizely with a 10-person cross-functional team. Built 20+ reusable React/TypeScript components and 8 production pages — code splitting, lazy loading, and smarter data fetching pushed Lighthouse from 60 to 80+.',
    tags: ['React', 'TypeScript', 'Optimizely', 'WCAG', 'Performance'],
    metric: { type: 'gauge', from: 60, to: 80, label: 'Lighthouse score' },
    featured: true,
  },
  {
    id: 'dashboards',
    title: 'Financial Data Dashboards',
    org: 'Valtech · fintech client',
    description:
      'Data-driven dashboards rendering 15+ Chart.js visualization types over REST APIs — with deliberately designed loading, error, and partial-data states so complex financial UIs degrade gracefully instead of breaking.',
    tags: ['Chart.js', 'REST APIs', 'React', 'UX states'],
    metric: { type: 'number', value: '15+', label: 'chart types in production' },
  },
  {
    id: 'design-system',
    title: 'Design System & Storybook Library',
    org: 'Practice-wide',
    description:
      'Established Storybook-documented React/TypeScript component patterns and frontend standards — accessibility, performance budgets, naming — adopted by 8+ engineers and reused across client projects.',
    tags: ['Storybook', 'Design Systems', 'TypeScript', 'a11y'],
    metric: { type: 'number', value: '8+', label: 'engineers building on it' },
  },
  {
    id: 'ai-workflows',
    title: 'AI-Assisted Dev Workflows',
    org: 'Engineering practice',
    description:
      "Designed the team's AI adoption strategy: prompt patterns for code generation and review, guardrails for regulated client work, and practices that improved code consistency at the scale of 200+ reviews a year.",
    tags: ['Prompt Engineering', 'AI Tooling', 'Code Review', 'Enablement'],
    metric: { type: 'number', value: '200+', label: 'AI-augmented reviews / yr' },
  },
  {
    id: 'northeastern',
    title: 'University Web Platform',
    org: 'Northeastern University',
    description:
      'Sole frontend engineer for the marketing & communications department — owned end-to-end development of accessible (WCAG 2.0), SEO-optimized properties serving high-traffic university audiences.',
    tags: ['React', 'WordPress', 'Tailwind', 'SEO', 'WCAG 2.0'],
    metric: { type: 'number', value: '1', label: 'engineer, entire frontend' },
  },
  {
    id: 'tcs',
    title: '40+ Sites, 12 Engineers',
    org: 'Tata Consultancy Services',
    description:
      'Managed a team of 12 frontend engineers across 40+ client engagements — hiring, performance management, mentorship programs, and onboarding playbooks that cut new-engineer ramp time.',
    tags: ['Team Leadership', 'Hiring', 'Delivery', 'Mentorship'],
    metric: { type: 'number', value: '40+', label: 'client sites delivered' },
  },
]

export const experience: Job[] = [
  {
    role: 'Senior Frontend Engineer · Tech Lead',
    org: 'Valtech',
    where: 'Arizona',
    when: '2021 — Present',
    note: 'Frontend strategy across concurrent fintech & enterprise engagements; direct reports, hiring panels, AI adoption.',
  },
  {
    role: 'Lead Web Specialist',
    org: 'Northeastern University',
    where: 'Boston, MA',
    when: '2020 — 2021',
    note: 'Sole frontend engineer for university marketing & communications.',
  },
  {
    role: 'Web Infrastructure Intern',
    org: 'MathWorks',
    where: 'Natick, MA',
    when: '2019',
    note: 'Interactive components for MATLAB App Designer developer tooling.',
  },
  {
    role: 'Senior Frontend Engineer & Team Lead',
    org: 'Tata Consultancy Services',
    where: 'India',
    when: '2015 — 2018',
    note: 'Led 12 engineers across 40+ client engagements.',
  },
  {
    role: 'Website Implementation Specialist',
    org: 'Accenture',
    where: 'India',
    when: '2013 — 2015',
    note: 'AEM (CQ5) builds for global pharmaceutical clients.',
  },
]

export const education: EducationEntry[] = [
  { degree: 'Executive MBA, Operational Effectiveness', school: 'Ottawa University', year: '2025' },
  { degree: 'MPS, Informatics', school: 'Northeastern University', year: '2020' },
  { degree: 'B.Sc, Information Technology', school: 'University of Mumbai', year: '2009' },
]

export const skills: SkillGroup[] = [
  { group: 'Core', items: ['TypeScript', 'JavaScript', 'React', 'Next.js', 'HTML5', 'CSS3'] },
  { group: 'UI & Systems', items: ['Storybook', 'Tailwind CSS', 'SCSS', 'Material UI', 'PrimeReact', 'Chart.js'] },
  { group: 'Quality', items: ['Jest', 'Lighthouse', 'WCAG / a11y', 'Code Review', 'Core Web Vitals'] },
  { group: 'Platforms', items: ['Optimizely', 'AEM', 'Contentstack', 'WordPress', 'GraphQL'] },
  { group: 'Ways of working', items: ['AI-assisted development', 'Agile/Scrum', 'Azure DevOps', 'CI/CD', 'Vercel', 'Hiring & mentorship'] },
]

export const contact: ContactInfo = {
  name: 'Disha Ghatalia',
  location: 'Phoenix, AZ',
  email: 'disha.ghatalia@gmail.com',
  linkedin: 'https://www.linkedin.com/in/disha-ghatalia',
  github: 'https://github.com/disha-ghatalia',
  resume: '/Disha_Ghatalia_Resume.docx',
}
