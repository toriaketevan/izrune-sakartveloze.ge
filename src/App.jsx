import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import About from './pages/About'
import Projects from './pages/Projects'
import Friends from './pages/Friends'
import './App.css'

function App() {
  return (
    <>
      <Header />
      <div className="wrap">
        <main>
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/friends" element={<Friends />} />
          </Routes>
        </main>
      </div>
      <footer className="footer">© იზრუნე საქართველოზე</footer>
    </>
  )
}

export default App
