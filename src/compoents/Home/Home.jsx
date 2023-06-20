import { NewTabIcon } from "../../libs/icons/icon"
import AvatarDark from "../../libs/icons/assets/icons/avatar.svg"
import AvatarLight from "../../libs/icons/assets/icons/avatar_light.svg"
import styles from "./Home.module.scss"
import commonStyles from "../common_styles.module.scss"
import { homeURLs } from "./components/constants"

const Home = ({ theme }) => {
  return (
    <div id="home" className="h-[100vh] pt-8 flex  items-center gap-16 flex-col lg:flex-row lg:justify-between lg:pt-0 lg:h-[90vh] ">
      <div className="w-full lg:w-2/5 flex items-center justify-center">
        <img src={theme.theme === "dark" ? AvatarDark : AvatarLight} id="avatar" className="w-11/12 flex justify-center" />
      </div>
      <div className="w-full lg:w-3/5 flex flex-col gap-8">
        <div className={`${styles.title} ${theme.theme === "dark" ? commonStyles.darkGradient : commonStyles.lightGradient} text-center text-3xl  lg:text-3xl lg:text-left lg:leading-relaxed lg:text-3xl lg:leading-relaxed xl:text-6xl xl:leading-normal`}>Turning Vision Into Reality With Code.</div>
        <div className="text-2xl flex items-center text-center  px-2 lg:text-xl lg:text-left xl:text-2xl">Skilled full-stack developer specializing in React.js and web development, dedicated to translating ideas into impressive web applications.</div>
        <div className="flex items-center gap-20 pl-2 mt-10 justify-center lg:justify-start">
          <a href={homeURLs?.resume} target="_blank" rel="noopener noreferrer" className={`flex items-center justify-center gap-[5px] ${styles.button}`}>
            Resume <NewTabIcon />
          </a>
          <a href="#contact" className={`flex items-center justify-center ${styles.button}`}>
            Contact
          </a>
        </div>
      </div>
    </div>
  )
}

export default Home
