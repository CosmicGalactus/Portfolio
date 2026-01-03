import { useState } from 'react'
import './App.css'
import { ThemeProvider } from './context/ThemeContext'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Stats } from './components/Stats'
import { About } from './components/About'
import { Projects } from './components/Projects'
import { Contact } from './components/Contact'

function AppContent() {
  const [activeSection, setActiveSection] = useState('home')

  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return (
          <>
            <Hero />
            <Stats />
          </>
        )
      case 'about':
        return <About />
      case 'projects':
        return <Projects />
      case 'contact':
        return <Contact />
      default:
        return (
          <>
            <Hero />
            <Stats />
          </>
        )
    }
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Navbar activeSection={activeSection} onNavigate={setActiveSection} />
      <main>
        {renderSection()}
      </main>
    </div>
  )
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  )
}

export default App
