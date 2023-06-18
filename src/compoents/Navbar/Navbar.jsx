import { FacebookLogoOutline, GithubLogo, InstagramLogoOutline, LinkdinLogo, TwitterLogo } from "../../libs/icons/icon"
import { urls } from "../constants"
import { NavComponents } from "./components/constants"

const Navbar = ({ theme, setTheme }) => {
  return (
    <div className="flex p-4 px-8  justify-between border-s-orange-900 w-[100%] fixed top-0 left-0 z-50 dark bg-light dark:bg-dark bg-opacity-50 dark:bg-opacity-50">
      <div className="flex gap-6 uppercase items-center h-6">
        {Object.keys(NavComponents)?.map((key) => (
          <div key={key} className="text-xl" style={{ color: theme.text }}>
            <a href={key}>{NavComponents[key]}</a>
          </div>
        ))}
      </div>
      <div className="flex items-center gap-6 h-8 ">
        <a href={urls?.linkdin} target="_blank" rel="noopener noreferrer">
          <LinkdinLogo className="scale-150" />
        </a>
        <a href={urls?.github} target="_blank" rel="noopener noreferrer">
          <GithubLogo className=" scale-150" />
        </a>
        <a href={urls?.twitter} target="_blank" rel="noopener noreferrer">
          <TwitterLogo className=" scale-150" />
        </a>

        <a href={urls?.facebook} target="_blank" rel="noopener noreferrer">
          <FacebookLogoOutline className="scale-150 h-5" />
        </a>
      </div>
    </div>
  )
}

export default Navbar
