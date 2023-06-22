import profile from "../../libs/icons/assets/icons/profile_pic_dark.svg"
import profileLight from "../../libs/icons/assets/icons/profile_pic_light.svg"

const About = ({ theme }) => {
  return (
    <div id="about" className="min-h-[100vh] flex w-full items-center gap-16 flex-row lg:flex-col justify-between lg:justify-normal pt-8 lg:my-16">
      <div id="about" className=" w-7/12 lg:w-full order-1 flex flex-col gap-8 pl-8 lg:order-2">
        <div id="title" className="text-5xl font-bold lg:text-2xl xl:text-3xl xs:text-xl">
          Hi, I am <span style={{ color: theme.highLighter }}>Ritesh Kumar.</span>
        </div>
        <div id="about_me" className="text-2xl lg:text-xl xs:text-lg">
          I am a fourth-year B.Tech student in Information Technology at IIIT Sonepat, originally from Kurukshetra, Haryana. A dynamic and results-driven full stack web developer. With expertise in React and Node.js, I create extraordinary web applications that combine stunning visuals with seamless functionality. From crafting intuitive user interfaces to optimizing performance, I'm passionate about delivering exceptional user experiences. Let's embark on a digital journey together and bring your ideas to life with innovation and finesse.
        </div>
      </div>
      <div id="profilePic" className="order-2 lg:w-full flex items-center justify-center lg:order-1">
        <img src={theme.theme === "dark" ? profile : profileLight} alt="" className="w-8/12 lg:w-1/2 sm:w-9/12 flex justify-center" />
      </div>
    </div>
  )
}

export default About
