import { useEffect, useState } from "react"

function UseThemeSwitcher() {
  const [mode, setMode] = useState("dark")

  useEffect(() => {
    if (mode === "light") {
      window.localStorage.setItem("theme", "light")
      document.documentElement.classList.remove("dark")
    } else {
      window.localStorage.setItem("theme", "dark")
      document.documentElement.classList.add("dark")
    }
  }, [mode])

  return { mode, setMode }
}

export default UseThemeSwitcher
