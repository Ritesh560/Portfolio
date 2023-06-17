import profile from "../../libs/icons/assets/icons/profile_pic_dark.svg"
import { motion } from "framer-motion"
import { mySkills } from "./components/constants"

import styles from "./Skills.module.scss"

const Skill = ({ name, x, y }) => {
  return (
    <motion.div className="flex items-center dark justify-center rounded-full font-bold bg-dark dark:bg-light text-light dark:text-dark py-3 px-6 shadow-dark cursor-pointer absolute" whileHover={{ scale: 1.05 }} initial={{ x: 0, y: 0 }} whileInView={{ x: x, y: y }} transition={{ duration: 1.5 }}>
      {name}
    </motion.div>
  )
}

const Skills = ({ theme }) => {
  return (
    <div id="skills" className="mt-4 gap-7 flex flex-col items-center justify-center  md:mt-32 ">
      <div id="header" className="text-6xl font-bold" style={theme.gradentifyText}>
        Skills
      </div>

      <div className="w-full h-screen dark relative bg-circularLight dark:bg-circularDark  flex items-center justify-center rounded-full lg:bg-circularLightLg lg:dark:bg-circularDarkLg md:bg-circularLightMd md:dark:bg-circularDarkMd  sm:bg-circularLightSm sm:dark:bg-circularDarkSm lg:h-[90vh] sm:h-[60vh] xs:h-[50vh]">
        <motion.div className="flex items-center dark justify-center rounded-full font-bold bg-dark dark:bg-light text-light dark:text-dark p-8 shadow-dark cursor-pointer" whileHover={{ scale: 1.05 }}>
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
