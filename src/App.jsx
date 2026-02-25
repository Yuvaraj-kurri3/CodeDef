import './App.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import TrustedBy from './components/TrustedBy/TrustedBy'
import Capabilities from './components/Capabilities/Capabilities'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustedBy />
        <Capabilities />
      </main>
    </>
  )
}

export default App
