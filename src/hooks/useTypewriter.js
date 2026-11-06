import { useEffect, useState } from 'react'
import { useReducedMotion } from 'framer-motion'

// Effet machine à écrire : tape un mot, attend, l'efface, passe au suivant.
// Avec prefers-reduced-motion, les mots changent simplement toutes les 2,5 s.
export function useTypewriter(words, { typeSpeed = 80, deleteSpeed = 45, pause = 1600 } = {}) {
  const reduce = useReducedMotion()
  const [index, setIndex] = useState(0)
  // Vide au départ (identique au HTML pré-rendu) ; l'effet ci-dessous affiche le premier mot si besoin
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)

  // Repartir de zéro quand la liste change (changement de langue)
  useEffect(() => {
    setIndex(0)
    setDeleting(false)
    setText(reduce ? words[0] : '')
  }, [words, reduce])

  useEffect(() => {
    const word = words[index % words.length]

    if (reduce) {
      const id = setTimeout(() => {
        setIndex((i) => (i + 1) % words.length)
        setText(words[(index + 1) % words.length])
      }, 2500)
      return () => clearTimeout(id)
    }

    let delay = deleting ? deleteSpeed : typeSpeed
    if (!deleting && text === word) delay = pause
    if (deleting && text === '') delay = 300

    const id = setTimeout(() => {
      if (!deleting && text === word) {
        setDeleting(true)
      } else if (deleting && text === '') {
        setDeleting(false)
        setIndex((i) => (i + 1) % words.length)
      } else {
        setText(word.slice(0, text.length + (deleting ? -1 : 1)))
      }
    }, delay)
    return () => clearTimeout(id)
  }, [text, deleting, index, words, reduce, typeSpeed, deleteSpeed, pause])

  return text
}
