import { AvatarDark, NewTabIcon } from "../../libs/icons/icon"
import styles from "./Home.module.scss"

const Home = ({ theme }) => {
  return (
    <div className="h-[100vh] pt-8 flex  items-center gap-16 flex-col md:flex-row md:justify-between md:pt-0 " style={{ color: theme.text }}>
      <div className="w-full md:w-2/5 flex items-center justify-center">
        <AvatarDark className="aspect-w-531 aspect-h-521 " />
      </div>
      <div className="w-full md:w-3/5 flex flex-col gap-8">
        <div className={`${styles.title} ${styles.darkGradient} text-center text-3xl  md:text-3xl md:text-left md:leading-relaxed lg:text-3xl lg:leading-relaxed xl:text-6xl xl:leading-normal`}>Turning Vision Into Reality With Code.</div>
        <div className="text-2xl flex items-center text-center  px-2 md:text-xl md:text-left xl:text-2xl">Skilled full-stack developer specializing in React.js and web development, dedicated to translating ideas into impressive web applications.</div>
        <div className="flex items-center gap-20 pl-2 mt-10 justify-center md:justify-start">
          <div className={`flex items-center justify-center gap-[5px] ${styles.button}`}>
            Resume <NewTabIcon />
          </div>
          <div className={`flex items-center justify-center ${styles.button}`}>Contact</div>
        </div>
      </div>
    </div>
  )
}

export default Home
