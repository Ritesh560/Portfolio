import { useState } from "react"
import "./App.scss"
import About from "./compoents/About/About"
import Contact from "./compoents/Contact/Contact"
import Home from "./compoents/Home/Home"
import Navbar from "./compoents/Navbar/Navbar"
import Skills from "./compoents/Skills/Skills"
import { darkTheme } from "./libs/themes/constants"
const App = () => {
  const [theme, setTheme] = useState(darkTheme)

  return (
    <div className="flex flex-col font-sans px-16" style={{ background: theme.background }}>
      <Navbar theme={theme} setTheme={setTheme} />
      <Home theme={theme} />
      <About theme={theme} />
      <Skills theme={theme} />
      <Contact theme={theme} />
    </div>
  )
}

export default App
