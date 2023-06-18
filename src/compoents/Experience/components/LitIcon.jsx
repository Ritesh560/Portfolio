import { motion, useScroll } from "framer-motion"

function LitIcon({ reference }) {
  const { scrollYProgress } = useScroll({
    target: reference,
    offset: ["center end", "center center"],
  })
  return (
    <figure className="absolute left-0 dark stroke-dark dark:stroke-light">
      <svg className=" -rotate-90" width="75" height="75" viewBox="0 0 100 100">
        <circle cx="75" cy="50" r="20" className="dark stroke-lightPrimary dark:stroke-darkPrimary stroke-1 fill-none" />
        <motion.circle
          cx="75"
          cy="50"
          r="20"
          className="stroke-[5px]  dark fill-light  dark:fill-dark "
          style={{
            pathLength: scrollYProgress,
          }}
        />
        <circle cx="75" cy="50" r="10" className="stroke-1 dark fill-lightPrimary dark:fill-darkPrimary" />
      </svg>
    </figure>
  )
}

export default LitIcon