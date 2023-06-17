import profile from "../../libs/icons/assets/icons/profile_pic_dark.svg"

const About = ({ theme }) => {
  return (
    <div id="about" className="h-[100vh] mt-0 flex  items-center gap-16 flex-col md:flex-row md:justify-between md:mt-8 ">
      <div id="about" className="w-full md:w-5/8 flex flex-col gap-8 pl-8">
        <div id="title" className="text-2xl font-bold md:text-3xl xl:text-5xl">
          Hi, I am <span style={{ color: theme.highLighter }}>Ritesh Kumar.</span>
        </div>
        <div id="about_me" className=" text-xl md:text-2xl">
          I am a fourth-year B.Tech student in Information Technology at IIIT Sonepat, originally from Kurukshetra, Haryana. A dynamic and results-driven full stack web developer. With expertise in React and Node.js, I create extraordinary web applications that combine stunning visuals with seamless functionality. From crafting intuitive user interfaces to optimizing performance, I'm passionate about delivering exceptional user experiences. Let's embark on a digital journey together and bring your ideas to life with innovation and finesse.
        </div>
      </div>
      <div id="profilePic" className="w-full md:w-3/8 flex items-center justify-center">
        <img src={profile} alt="" className="w-8/12 flex justify-center" />
      </div>
    </div>
  )
}

export default About
