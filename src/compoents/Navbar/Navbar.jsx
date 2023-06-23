import { useState } from "react"
import UseThemeSwitcher from "../../hooks/useThemeSwitcher"
import { DarkMode, FacebookLogoOutline, GithubLogo, GithubLogoOutline, InstagramLogoOutline, LightMode, LinkdinLogo, LinkdinLogoOutline, TwitterLogo, TwitterLogoOutline } from "../../libs/icons/icon"
import { darkTheme, lightTheme } from "../../libs/themes/constants"
import { urls } from "../constants"
import { NavComponents } from "./components/constants"
import MobileNavbar from "./components/mobileNavbar/mobileNavbar"
import styles from "./Navbar.module.scss"

const Navbar = ({ theme, setTheme }) => {
  const [mode, setMode] = UseThemeSwitcher()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleDarkMode = () => {
    setTheme(darkTheme)
    setMode("dark")
  }
  const handleLightMode = () => {
    setTheme(lightTheme)
    setMode("light")
  }

  return (
    <div className={`w-[100%] fixed top-0 left-0 z-50 ${isMenuOpen ? "bg-opacity-50" : "bg-opacity-100"}`}>
      <div className=" hidden lg:block p-5">
        <button type="button" className=" flex-col items-center justify-center hidden lg:flex h-6 w-6 cursor-pointer" onClick={() => setIsMenuOpen((prev) => !prev)}>
          <span className={`bg-dark dark:bg-light block h-0.5 w-6 rounded-sm transition-all duration-300 ease-out ${isMenuOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"}`}></span>
          <span className={`bg-dark dark:bg-light block h-0.5 w-6 rounded-sm transition-all duration-300 ease-out my-0.5 ${isMenuOpen ? " opacity-0" : " opacity-100"}`}></span>
          <span className={`bg-dark dark:bg-light block h-0.5 w-6 rounded-sm transition-all duration-300 ease-out ${isMenuOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"}`}></span>
        </button>
        {isMenuOpen && <MobileNavbar theme={theme} handleLightMode={handleLightMode} handleDarkMode={handleDarkMode} setIsMenuOpen={setIsMenuOpen} />}
      </div>
      <div className="flex p-4 px-8  justify-between border-s-orange-900  bg-light dark:bg-dark bg-opacity-70 dark:bg-opacity-50 lg:hidden">
        <div className="flex gap-6 uppercase items-center h-6">
          {Object.keys(NavComponents)?.map((key) => (
            <div key={key} className="text-xl" style={{ color: theme.text }}>
              <a href={key}>{NavComponents[key]}</a>
            </div>
          ))}
        </div>
        <div className={`${theme.theme === "dark" ? styles.logoDark : styles.logoLight} flex items-center gap-6 h-8`}>
          <a href={urls?.linkdin} target="_blank" rel="noopener noreferrer">
            <LinkdinLogoOutline className="h-8" />
          </a>
          <a href={urls?.github} target="_blank" rel="noopener noreferrer">
            <GithubLogoOutline className="h-8 " />
          </a>
          <a href={urls?.twitter} target="_blank" rel="noopener noreferrer">
            <TwitterLogoOutline className="h-8" />
          </a>
          <a href={urls?.instagram} target="_blank" rel="noopener noreferrer">
            <InstagramLogoOutline className="h-8" />
          </a>
          <a href={urls?.facebook} target="_blank" rel="noopener noreferrer">
            <FacebookLogoOutline className="h-8" />
          </a>

          {theme === darkTheme ? <LightMode className=" cursor-pointer hover:fill-light dark:hover:fill-white" onClick={handleLightMode} /> : <DarkMode className=" cursor-pointer hover:fill-black" onClick={handleDarkMode} />}
        </div>
      </div>
    </div>
  )
}

export default Navbar
