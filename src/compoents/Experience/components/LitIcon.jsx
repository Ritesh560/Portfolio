import { motion, useScroll } from "framer-motion"

function LitIcon({ scrollYProgress }) {
  return (
    <figure className="absolute left-0 md:-left-9 sm:-left-11 stroke-dark dark:stroke-light">
      <svg className=" -rotate-90" width="75" height="75" viewBox="0 0 100 100">
        <circle cx="75" cy="50" r="20" className="dark stroke-lightPrimary dark:stroke-darkPrimary stroke-1 fill-none" />
        <motion.circle
          cx="75"
          cy="50"
          r="20"
          className="stroke-[5px]  fill-light  dark:fill-dark "
          style={{
            pathLength: scrollYProgress,
          }}
        />
        <circle cx="75" cy="50" r="10" className="stroke-1 fill-lightPrimary dark:fill-darkPrimary" />
      </svg>
    </figure>
  )
}

export default LitIcon
