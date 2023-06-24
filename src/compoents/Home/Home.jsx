import { NewTabIcon } from "../../libs/icons/icon"
import AvatarDark from "../../libs/icons/assets/icons/avatar.svg"
import AvatarLight from "../../libs/icons/assets/icons/avatar_light.svg"
import styles from "./Home.module.scss"
import commonStyles from "../common_styles.module.scss"
import { homeURLs } from "./components/constants"

const Home = ({ theme }) => {
  return (
    <div id="home" className="min-h-[90vh]  flex items-center gap-10 flex-row justify-between lg:flex-col lg:justify-normal lg:pt-8  ">
      <div className="w-2/5 lg:w-full flex items-center justify-center">
        <img src={theme.theme === "dark" ? AvatarDark : AvatarLight} id="avatar" className="w-8/9 lg:11/12 flex justify-center" />
      </div>
      <div className="w-3/5 lg:w-full flex flex-col gap-8">
        <div className={`${styles.title} ${theme.theme === "dark" ? commonStyles.darkGradient : commonStyles.lightGradient} text-left text-6xl lg:text-center leading-normal xl:text-4xl sm:text-3xl xs:text-2xl xl:leading-relaxed`}>Turning Vision Into Reality With Code.</div>
        <div className="text-2xl sm:text-xl xs:text-lg flex items-center text-left  px-2 lg:text-center">Skilled full-stack developer specializing in React.js and web development, dedicated to translating ideas into impressive web applications.</div>
        <div className="flex items-center gap-20 xs:gap-5 pl-2 mt-10 justify-start lg:justify-center text-xl sm:text-lg">
          <a href={homeURLs?.resume} target="_blank" rel="noopener noreferrer" className={`flex items-center justify-center gap-[5px] py-3 px-6 xs:px-4 bg-dark hover:bg-black  ${styles.button}`}>
            Resume <NewTabIcon />
          </a>
          <a href="#contact" className={`flex items-center justify-center py-3 px-6 xs:px-4 bg-dark hover:bg-black  ${styles.button}`}>
            Contact
          </a>
        </div>
      </div>
    </div>
  )
}

export default Home
