import { useState } from "react"
import "./App.scss"
import About from "./compoents/About/About"
import Contact from "./compoents/Contact/Contact"
import Home from "./compoents/Home/Home"
import Navbar from "./compoents/Navbar/Navbar"
import Skills from "./compoents/Skills/Skills"
import { darkTheme } from "./libs/themes/constants"
import Experience from "./compoents/Experience/Experience"
import Projects from "./compoents/Projects/Projects"
const App = () => {
  const [theme, setTheme] = useState(darkTheme)

  return (
    <div className="flex flex-col gap-2 font-sans px-8 md:px-16" style={{ background: theme.background, color: theme.text }}>
      <Navbar theme={theme} setTheme={setTheme} />
      <Home theme={theme} />
      <About theme={theme} />
      <Skills theme={theme} />
      <Experience theme={theme} />
      <Projects theme={theme} />
      <Contact theme={theme} />
    </div>
  )
}

export default App
