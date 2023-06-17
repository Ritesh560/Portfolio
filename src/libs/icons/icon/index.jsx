import React from "react"
import Icon from "./icon"

export const AINews = (props) => <Icon {...props} name="ai_news" />
export const AvatarDark = (props) => <Icon {...props} name="avatar_dark" />
export const AvatarLight = (props) => <Icon {...props} name="avatar_light" />
export const BlogHub = (props) => <Icon {...props} name="bloghub" />
export const BRMeals = (props) => <Icon {...props} name="br_meals" />
export const ChatZone = (props) => <Icon {...props} name="chat_zone" />
export const DrumKit = (props) => <Icon {...props} name="drumkit" />
export const ContactImage = (props) => <Icon {...props} name="contact_image" />
export const EmailLogo = (props) => <Icon {...props} name="email_logo" />
export const FacebookLogoOutline = (props) => <Icon {...props} name="facebook_logo_outline" />
export const GithubLogoOutline = (props) => <Icon {...props} name="github_logo_outline" />
export const GithubLogo = (props) => <Icon {...props} name="github_logo" />
export const InstagramLogoOutline = (props) => <Icon {...props} name="instagram_logo_outline" />
export const LinkdinLogoOutline = (props) => <Icon {...props} name="linkdin_logo_outline" />
export const LinkdinLogo = (props) => <Icon {...props} name="linkdin_logo" />
export const LocationIcon = (props) => <Icon {...props} name="location_icon" />
export const NewTabIcon = (props) => <Icon {...props} name="new_tab_icon" />
export const ProfilePicDark = (props) => <Icon {...props} name="profile_pic_dark" />
export const ProfilePicLight = (props) => <Icon {...props} name="profile_pic_light" />
export const Send = (props) => <Icon {...props} name="send" />
export const Telephone = (props) => <Icon {...props} name="telephone" />
export const TwitterLogo = (props) => <Icon {...props} name="twitter_logo" />
export const TwitterLogoOutline = (props) => <Icon {...props} name="twitter_logo_outline" />
export const WordPic = (props) => <Icon {...props} name="word_pic" />

// const fs = require("fs")

// const svgs = fs.readdirSync("../assets/icons/icon-map.js", { encoding: "utf-8" })
// const s = svgs.length

// let dataToWrite = "",
//   iconsToWrite = ""

// for (let i = 0; i < s; i++) {
//   let fileBreak = svgs[i].split("_")
//   let IconName = ""
//   fileBreak.forEach((item) => {
//     IconName += item[0].toUpperCase() + item.slice(1)
//   })
//   IconName = IconName.split(".")[0]
//   dataToWrite += `import { ReactComponent as ${IconName} } from './svg/${svgs[i]}';\n`
//   iconsToWrite += `  ${svgs[i].split(".")[0]} : <${IconName} />, \n`
// }

// dataToWrite += `\nexport const ICONS = {\n` + iconsToWrite + `};`

// fs.writeFileSync("src/assets/index.js", dataToWrite)
