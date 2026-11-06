import { useTranslation } from 'react-i18next'
import { usePageMeta } from '../hooks/usePageMeta'
import HeroShowcase from '../components/HeroShowcase'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/projects/Projects'
import Journey from '../components/Journey'
import Certifications from '../components/Certifications'
import Contact from '../components/Contact'

export default function Home() {
  const { t } = useTranslation()
  usePageMeta(t('meta.title'), t('meta.description'))

  return (
    <>
      <HeroShowcase />
      <About />
      <Skills />
      <Projects />
      <Journey />
      <Certifications />
      <Contact />
    </>
  )
}
