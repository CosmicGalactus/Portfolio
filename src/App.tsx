import { useState } from 'react'
import './App.css'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Projects } from './components/Projects'
import { Contact } from './components/Contact'

function App() {
  const [activeSection, setActiveSection] = useState('home')

  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return <Hero />
      case 'about':
        return <About />
      case 'projects':
        return <Projects />
      case 'contact':
        return <Contact />
      default:
        return <Hero />
    }
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar activeSection={activeSection} onNavigate={setActiveSection} />
      <main>
        {renderSection()}
      </main>
    </div>
  )
}

export default App
