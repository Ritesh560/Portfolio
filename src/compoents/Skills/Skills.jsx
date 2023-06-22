import { motion } from "framer-motion"
import { mySkills } from "./components/constants"
import commonStyles from "../common_styles.module.scss"

const Skill = ({ name, x, y }) => {
  return (
    <motion.div className="flex items-center justify-center rounded-full font-bold bg-dark dark:bg-light sm:bg-transparent sm:dark:bg-transparent text-light sm:text-dark dark:text-dark sm:dark:text-light py-3 px-6 sm:py-0 sm:px-0 shadow-dark cursor-pointer absolute" whileHover={{ scale: 1.1 }} initial={{ x: 0, y: 0 }} whileInView={{ x: x, y: y }} transition={{ duration: 1.5 }} viewport={{ once: true }}>
      {name}
    </motion.div>
  )
}

const Skills = ({ theme }) => {
  return (
    <div id="skills" className="mt-32 gap-7 flex flex-col items-center justify-center  md:mt-4 ">
      <div id="header" className={`${theme.theme === "dark" ? commonStyles.darkGradient : commonStyles.lightGradient} text-7xl md:text-6xl sm:text-5xl font-bold mb-4`}>
        Skills
      </div>

      <div className="w-full h-[90vh] relative bg-circularLight dark:bg-circularDark  flex items-center justify-center rounded-full lg:bg-circularLightLg lg:dark:bg-circularDarkLg md:bg-circularLightMd md:dark:bg-circularDarkMd  sm:bg-circularLightSm sm:dark:bg-circularDarkSm lg:h-screen md:h-[60vh] sm:h-[50vh]">
        <motion.div className="flex items-center justify-center rounded-full font-bold bg-dark dark:bg-light sm:bg-transparent sm:dark:bg-transparent text-light sm:text-dark dark:text-dark sm:dark:text-light p-8 sm:p-0 shadow-dark cursor-pointer" whileHover={{ scale: 1.1 }}>
          Web
        </motion.div>
        {mySkills?.map((mySkill, i) => (
          <Skill key={i} name={mySkill?.name} x={mySkill?.x} y={mySkill?.y} />
        ))}
      </div>
    </div>
  )
}

export default Skills
