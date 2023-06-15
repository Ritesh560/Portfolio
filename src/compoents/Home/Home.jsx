import { AvatarDark, NewTabIcon } from "../../libs/icons/icon"
import styles from "./Home.module.scss"

const Home = ({ theme }) => {
  return (
    <div className="h-[100vh] pd-14 flex justify-between items-center flex-col md:flex-row" style={{ color: theme.text }}>
      <div className="w-full md:w-2/5 flex items-center justify-center">
        <AvatarDark className="aspect-w-531 aspect-h-521 " />
      </div>
      <div className="w-full md:w-3/5 flex flex-col gap-8">
        <div className={`${styles.title} ${styles.darkGradient}`}>Turning Vision Into Reality With Code.</div>
        <div className="text-2xl flex items-center justify-center px-2">Skilled full-stack developer specializing in React.js and web development, dedicated to translating ideas into impressive web applications.</div>
        <div className="flex items-center gap-20 pl-2 mt-10">
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
