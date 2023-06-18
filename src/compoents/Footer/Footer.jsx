import { FacebookLogoOutline, GithubLogoOutline, InstagramLogoOutline, LinkdinLogoOutline, TwitterLogoOutline } from "../../libs/icons/icon"

const Footer = () => {
  return (
    <div className=" -mx-16 mt-16 flex items-center justify-between py-1 px-8 text-2xl font-semibold border-t border-solid dark border-dark dark:border-light">
      <p>Copyright @2023</p>
      <p>Ritesh Kumar</p>
      <div id="icons" className="flex items-center justify-between gap-4 ">
        <LinkdinLogoOutline className="h-12" />
        <GithubLogoOutline className="h-12" />
        <TwitterLogoOutline className="h-12" />
        <InstagramLogoOutline className="h-12" />
        <FacebookLogoOutline className="h-12" />
      </div>
    </div>
  )
}

export default Footer
