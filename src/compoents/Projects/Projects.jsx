import { GithubLogoOutline, NewTabIcon } from "../../libs/icons/icon"
import { projects } from "./components/constants"

const Projects = ({ theme }) => {
  return (
    <div className="">
      <div id="Experience" className="mt-4 gap-7 flex flex-col items-center justify-center  md:mt-20 ">
        <div id="header" className="text-7xl font-bold mb-4" style={theme.gradentifyText}>
          Projects
        </div>
        <div id="cards" className="flex flex-wrap justify-center items-center gap-16 md:gap-36 ">
          {projects.map((project, i) => (
            <div id="card" key={i} className=" flex flex-col items-center bg-[#f5f5f5] shadow h-[400px] w-[320px] rounded-xl">
              <a href={project?.link} target="_blank" rel="noopener noreferrer">
                <img src={project?.pic} className=" h-[140px] flex my-3 shadow rounded-xl " />
              </a>
              <div id="text" className=" text-left w-full px-3 ">
                <h3 className=" text-[#005996] text-[18px] font-semibold">{project?.name}</h3>
                <p className="text-[14px] text-[#000000] font-normal">{project?.description}</p>

                <div id="action_button" className="flex items-center text-dark">
                  <div id="project_link" className="h-10 px-4 gap-10 flex items-center border border-solid border-dark rounded-md">
                    View Project <NewTabIcon className="text-[#160037]" />
                  </div>
                  <GithubLogoOutline className="text-[#160037]" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects
