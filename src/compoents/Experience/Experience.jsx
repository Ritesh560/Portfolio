import styles from "./Experience.module.scss"
import { motion, useScroll } from "framer-motion"
import { useRef } from "react"
import LitIcon from "./components/LitIcon"
import { experiences } from "./components/constants"
import commonStyles from "../common_styles.module.scss"

const Details = ({ position, company, companyLink, time, work }) => {
  const litIconRef = useRef(null)
  return (
    <li ref={litIconRef} className="my-8  first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between ">
      <LitIcon reference={litIconRef} />
      <div>
        <h3 className=" capitalize font-bold text-2xl">
          {position}{" "}
          {companyLink?.length ? (
            <a href={companyLink} target="_blank" rel="noopener noreferrer" className="text-primary capitalize">
              <span className="text-lightPrimary dark dark:text-darkPrimary">@{company}</span>
            </a>
          ) : (
            <span className=" text-lightPrimary dark dark:text-darkPrimary">@{company}</span>
          )}
        </h3>
        <span className="capitalize font-medium text-sm opacity-80 dark text-dark dark:text-light">{time}</span>
        <p className=" font-medium w-full ">{work}</p>
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
    <div id="experience" className="mt-4 gap-7 flex flex-col items-center justify-center  md:mt-32 ">
      <div id="header" className={`${theme.theme === "dark" ? commonStyles.darkGradient : commonStyles.lightGradient} text-7xl font-bold mb-4`}>
        Experience
      </div>

      <div ref={lineRef} className="w-[75%] mx-auto relative">
        <motion.div style={{ scaleY: scrollYProgress }} className="absolute left-9 top-1 w-[4px] h-full dark bg-dark origin-top dark:bg-light " />
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
