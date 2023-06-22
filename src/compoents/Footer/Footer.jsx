import { FacebookLogoOutline, GithubLogoOutline, InstagramLogoOutline, LinkdinLogoOutline, TwitterLogoOutline } from "../../libs/icons/icon"
import { urls } from "../constants"
import styles from "./Footer.module.scss"

const Footer = ({ theme }) => {
  return (
    <div className="-mx-16 mt-16 flex md:flex-col md:gap-3 md:-mx-8 sm:-mx-2 items-center justify-between py-1 px-8 text-2xl font-semibold border-t border-solid border-dark dark:border-light">
      <p>Copyright @2023</p>
      <p>Ritesh Kumar</p>
      <div id="icons" className={`${theme.theme === "dark" ? styles.logoDark : styles.logoLight} flex items-center justify-between gap-4 `}>
        <a href={urls?.linkdin} target="_blank" rel="noopener noreferrer">
          <LinkdinLogoOutline className="h-12" />
        </a>
        <a href={urls?.github} target="_blank" rel="noopener noreferrer">
          <GithubLogoOutline className="h-12 " />
        </a>
        <a href={urls?.twitter} target="_blank" rel="noopener noreferrer">
          <TwitterLogoOutline className="h-12" />
        </a>
        <a href={urls?.instagram} target="_blank" rel="noopener noreferrer">
          <InstagramLogoOutline className="h-12" />
        </a>
        <a href={urls?.facebook} target="_blank" rel="noopener noreferrer">
          <FacebookLogoOutline className="h-12" />
        </a>
      </div>
    </div>
  )
}

export default Footer
