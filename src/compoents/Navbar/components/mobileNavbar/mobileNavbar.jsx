import { NavComponents } from "../constants"
import { DarkMode, FacebookLogoOutline, GithubLogo, GithubLogoOutline, InstagramLogoOutline, LightMode, LinkdinLogo, LinkdinLogoOutline, TwitterLogo, TwitterLogoOutline } from "../../../../libs/icons/icon"
import { urls } from "../../../constants"
import { darkTheme } from "../../../../libs/themes/constants"

function MobileNavbar({ theme, handleLightMode, handleDarkMode, setIsMenuOpen }) {
  return (
    <div className=" min-w-[70vw] xs:w-[90vw] flex flex-col justify-between x-30 items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark/90 dark:bg-light/70 rounded-lg backdrop-blur-md py-16">
      <div className="flex flex-col gap-2 uppercase items-center">
        {Object.keys(NavComponents)?.map((key) => (
          <div key={key} className="text-xl text-light dark:text-dark" onClick={() => setIsMenuOpen(false)}>
            <a href={key}>{NavComponents[key]}</a>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center px-4 gap-6 flex-wrap h-8 mt-4 text-light dark:text-dark ">
        <a href={urls?.linkdin} target="_blank" rel="noopener noreferrer">
          <LinkdinLogoOutline className="h-8 hover:fill-white dark:hover:fill-black" />
        </a>
        <a href={urls?.github} target="_blank" rel="noopener noreferrer">
          <GithubLogoOutline className="h-8 hover:fill-white dark:hover:fill-black" />
        </a>
        <a href={urls?.twitter} target="_blank" rel="noopener noreferrer">
          <TwitterLogoOutline className="h-8 hover:fill-white dark:hover:fill-black" />
        </a>
        <a href={urls?.instagram} target="_blank" rel="noopener noreferrer">
          <InstagramLogoOutline className="h-8 hover:fill-white dark:hover:fill-black" />
        </a>
        <a href={urls?.facebook} target="_blank" rel="noopener noreferrer">
          <FacebookLogoOutline className="h-8 hover:fill-white dark:hover:fill-black" />
        </a>
        {theme === darkTheme ? <LightMode className=" cursor-pointer hover:fill-black" onClick={handleLightMode} /> : <DarkMode className=" cursor-pointer hover:fill-light " onClick={handleDarkMode} />}
      </div>
    </div>
  )
}

export default MobileNavbar
