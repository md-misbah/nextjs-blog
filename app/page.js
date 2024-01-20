import React from 'react'
import Navbar from '@/components/Navbar'
import About from '@/components/About'
import EducationNLanguages from '@/components/EdunLang'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'

export default function Home() {
  return (
    <main className="text-white">
      {/* <Navbar /> */}
      <About />
      <EducationNLanguages />
      <Skills />
      <Projects />

    </main>
  )
}
