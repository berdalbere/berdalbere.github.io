import { Routes, Route } from 'react-router-dom'
import { LazyMotion, MotionConfig } from 'framer-motion'
import Layout from './components/Layout'
import Home from './pages/Home'
import ProjectDetail from './pages/ProjectDetail'
import NotFound from './pages/NotFound'

// Comportements de React Router v7 activés dès maintenant (évite les avertissements en console)
export const ROUTER_FUTURE = { v7_startTransition: true, v7_relativeSplatPath: true }

// Le moteur d'animation est téléchargé à part pour ne pas retarder le premier affichage
const loadMotionFeatures = () => import('./motionFeatures').then((mod) => mod.default)

export default function App() {
  return (
    // LazyMotion + composants « m » : seules les fonctionnalités utilisées sont chargées
    // reducedMotion="user" : les animations respectent prefers-reduced-motion
    <LazyMotion features={loadMotionFeatures} strict>
      <MotionConfig reducedMotion="user">
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="projets/:slug" element={<ProjectDetail />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </MotionConfig>
    </LazyMotion>
  )
}
