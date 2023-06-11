import { FacebookLogoOutline, GithubLogo, InstagramLogoOutline, LinkdinLogo, TwitterLogo } from "../../libs/icons/icon"
import { NavComponents } from "./components/constants"

function Navbar() {
  return (
    <div className="flex p-4 justify-between items-center ">
      <div className="flex gap-4 uppercase items-center ">
        {Object.keys(NavComponents)?.map((key) => (
          <div key={key}>{NavComponents[key]} </div>
        ))}
      </div>
      <div className="flex items-center gap-4 ">
        <LinkdinLogo />
        <GithubLogo />
        <TwitterLogo />
        <FacebookLogoOutline />
      </div>
    </div>
  )
}

export default Navbar
