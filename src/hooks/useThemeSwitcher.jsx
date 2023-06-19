import { useEffect, useState } from "react"

function UseThemeSwitcher() {
  const [mode, setMode] = useState("dark")

  useEffect(() => {
    if (mode === "light") {
      window.localStorage.setItem("theme", "light")
      document.documentElement.classList.remove("dark")
      console.log(mode)
    } else {
      window.localStorage.setItem("theme", "dark")
      document.documentElement.classList.add("dark")
      console.log(mode)
    }
  }, [mode])

  return [mode, setMode]
}

export default UseThemeSwitcher
