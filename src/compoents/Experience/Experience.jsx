import styles from "./Experience.module.scss"
import { motion, useScroll } from "framer-motion"
import { useRef } from "react"
import LitIcon from "./components/LitIcon"
import { experiences } from "./components/constants"
import commonStyles from "../common_styles.module.scss"

const Details = ({ position, company, companyLink, time, work }) => {
  const litIconRef = useRef(null)
  return (
    <li ref={litIconRef} className="my-8 first:mt-0 last:mb-0 w-[60%] lg:w-[75%] md:w-[85%] sm:w-[98%] mx-auto flex flex-col items-center justify-between ">
      <LitIcon reference={litIconRef} />
      <div>
        <h3 className=" capitalize font-bold text-2xl md:text-xl sm:text-lg">
          {position}{" "}
          {companyLink?.length ? (
            <a href={companyLink} target="_blank" rel="noopener noreferrer" className="text-primary capitalize">
              <span className="text-lightPrimary dark:text-darkPrimary">@{company}</span>
            </a>
          ) : (
            <span className=" text-lightPrimary dark:text-darkPrimary">@{company}</span>
          )}
        </h3>
        <span className="capitalize font-medium text-sm opacity-80 text-dark dark:text-light">{time}</span>
        <p className=" font-medium w-full sm:text-sm">{work}</p>
      </div>
    </li>
  )
}

const Experience = ({ theme }) => {
  const lineRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: lineRef,
    offset: ["start end", "center start"],
  })

  return (
    <div id="experience" className="mt-32  gap-7 flex flex-col items-center justify-center  md:mt-4 ">
      <div id="header" className={`${theme.theme === "dark" ? commonStyles.darkGradient : commonStyles.lightGradient} text-7xl lg:text-6xl sm:text-5xl font-bold mb-4`}>
        Experience
      </div>

      <div ref={lineRef} className="w-[75%] xl:w-[85%] mx-auto relative">
        <motion.div style={{ scaleY: scrollYProgress }} className="absolute left-9 md:left-0 sm:-left-2 top-1 w-[4px] h-full bg-dark origin-top dark:bg-light " />
        <ul className="w-full flex flex-col items-center justify-between ml-4">
          {experiences.map((experience, i) => (
            <Details key={i} position={experience?.position} company={experience?.company} companyLink={experience?.companyLink} time={experience?.time} work={experience?.work} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Experience
