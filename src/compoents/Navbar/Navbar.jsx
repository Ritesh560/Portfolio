import { FacebookLogoOutline, GithubLogo, InstagramLogoOutline, LinkdinLogo, TwitterLogo } from "../../libs/icons/icon"
import { NavComponents } from "./components/constants"

const Navbar = ({ theme, setTheme }) => {
  return (
    <div className="flex p-4 h-14 justify-between border-s-orange-900 w-[100%] fixed top-0 left-0" style={{ background: theme.background }}>
      <div className="flex gap-6 uppercase items-center h-6">
        {Object.keys(NavComponents)?.map((key) => (
          <div key={key} className="" style={{ color: theme.text }}>
            <a href={key}>{NavComponents[key]}</a>
          </div>
        ))}
      </div>
      <div className="flex items-center gap-6 h-6 ">
        <LinkdinLogo className="h-6" />
        <GithubLogo className="h-6" />
        <TwitterLogo className="h-6" />
        <FacebookLogoOutline className="h-5" />
      </div>
    </div>
  )
}

export default Navbar
