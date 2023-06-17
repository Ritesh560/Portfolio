import profile from "../../libs/icons/assets/icons/profile_pic_dark.svg"
import { motion } from "framer-motion"

const skill = (name, x, y) => {
  return (
    <motion.div className="flex items-center justify-center rounded-full bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute" whileHover={{ scale: 1.05 }} initial={{ x: 0, y: 0 }} whileInView={{ x: x, y: y }} transition={{ duration: 1.5 }}>
      {name}
    </motion.div>
  )
}

const Skills = ({ theme }) => {
  return (
    <div id="skills" className="h-[100vh] mt-4 gap-7 flex flex-col items-center justify-center  md:mt-32 ">
      <div id="header" className="text-6xl font-bold" style={theme.gradentifyText}>
        Skills
      </div>
      {/* <div id="skills_list" className="w-full h-full relative bg-circularLight dark:bg-circularDark flex items-center justify-center mb-4 md:mb-0 rounded-full lg:bg-circularLightLg lg:dark:bg-circularDarkLg md:bg-circularLightMd md:dark:bg-circularDarkMd sm:bg-circularLightSm sm:dark:bg-circularDarkSm" style={{ border: "2px solid white", aspectRatio: "min-content" }}></div> */}

      {/* <div id="skills_list" className="w-full h-[100vh] relative bg-circularLight dark:bg-circularDark  flex items-center justify-center  mb-4 md:mb-0 rounded-full lg:bg-circularLightLg lg:dark:bg-circularDarkLg md:bg-circularLightMd md:dark:bg-circularDarkMd  sm:bg-circularLightSm sm:dark:bg-circularDarkSm lg:h-[70vh] sm:h-[60vh] xs:h-[50vh]  " style={{ border: "2px solid white" }}>
        <div id="skills_list" className="w-[80%] h-[80%] relative bg-circularLight dark:bg-circularDark  flex items-center justify-center  mb-4 md:mb-0 rounded-full lg:bg-circularLightLg lg:dark:bg-circularDarkLg md:bg-circularLightMd md:dark:bg-circularDarkMd  sm:bg-circularLightSm sm:dark:bg-circularDarkSm " style={{ border: "2px solid white" }}></div>
      </div> */}

      <div className="w-full h-[100vh] relative bg-circularLight dark:bg-circularDark  flex items-center justify-center  mb-64 md:mb-32 rounded-full lg:bg-circularLightLg lg:dark:bg-circularDarkLg md:bg-circularLightMd md:dark:bg-circularDarkMd  sm:bg-circularLightSm sm:dark:bg-circularDarkSm lg:h-[80vh] sm:h-[60vh] xs:h-[50vh]  "></div>
    </div>
  )
}

export default Skills
