import { GithubLogoOutline, NewTabIcon } from "../../libs/icons/icon"
import { projects } from "./components/constants"
import { motion } from "framer-motion"
import commonStyles from "../common_styles.module.scss"

const Projects = ({ theme }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } },
  }

  return (
    <div id="projects">
      <div id="Experience" className="mt-4 gap-7 flex flex-col items-center justify-center  md:mt-20 ">
        <div id="header" className={`${theme.theme === "dark" ? commonStyles.darkGradient : commonStyles.lightGradient} text-7xl font-bold mb-8`}>
          Projects
        </div>
        <motion.div id="cards" className="flex flex-wrap justify-center items-center gap-16 md:gap-36 " initial="hidden" variants={containerVariants} whileInView="visible">
          {projects.map((project, i) => (
            <motion.div id="card" key={i} className=" flex flex-col items-center  bg-[#ffffff] shadow h-[430px] w-[320px] rounded-xl" variants={cardVariants}>
              <a href={project?.link} target="_blank" rel="noopener noreferrer">
                <img src={project?.pic} className=" h-[140px] flex my-3 shadow rounded-xl " />
              </a>
              <div id="text" className=" text-left w-full px-3 ">
                <h3 className=" text-[#005996] text-[18px] font-semibold">{project?.name}</h3>
                <p className="text-[14px] text-[#000000] font-normal">{project?.description}</p>
              </div>
              <div id="action_button" className="w-full mt-auto p-4 flex items-center justify-between text-dark">
                <a href={project?.link} target="_blank" rel="noopener noreferrer" id="project_link" className="h-10 px-4 gap-10 flex items-center font-semibold border border-solid border-dark rounded-md hover:text-light hover:bg-dark">
                  View Project <NewTabIcon className=" " />
                </a>
                <a href={project?.github} target="_blank" rel="noopener noreferrer">
                  <GithubLogoOutline className=" h-9 hover:fill-black" />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export default Projects
