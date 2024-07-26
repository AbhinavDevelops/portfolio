import React from 'react'
import Navbar from "./components/navbar"
import Me from "./components/me"
import Technologies from './components/technologies'
import Experience from './components/experience'
import Projects from './components/projects'
import ChatbotA from './components/chat_a'
import ChatbotB from './components/chat_b'

const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <div className="fixed top-0 -z-10 h-full w-full" >

        <div className="fixed inset-0 -z-10 h-screen w-screen items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#60e_100%)]"></div>
      </div>

      <div className="container mx-auto px-8">

        <Navbar />

        <Me />

        <Technologies />

        <Projects />

        <Experience />

        <ChatbotB />

      </div>


    </div>
  )
}

export default App
