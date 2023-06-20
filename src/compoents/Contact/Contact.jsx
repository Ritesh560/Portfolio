import { ContactImage, Send } from "../../libs/icons/icon"
import locationIcon from "../../libs/icons/assets/icons/location.svg"
import emailLogo from "../../libs/icons/assets/icons/email.svg"
import telephone from "../../libs/icons/assets/icons/telephone.svg"
import commonStyles from "../common_styles.module.scss"

function Contact({ theme }) {
  return (
    <div id="contact" className="mt-4 mb-8 gap-7 flex flex-col items-center justify-center  lg:mt-20 ">
      <div id="header" className={`${theme.theme === "dark" ? commonStyles.darkGradient : commonStyles.lightGradient} text-7xl font-bold lg:mb-8`}>
        Contact
      </div>

      <div className="w-full flex items-center justify-around flex-col gap-16 lg:flex-row lg:gap-0">
        <div className="w-6/7 lg:w-2/5 flex flex-col items-center gap-4 order-2 lg:order-1">
          <p className=" font-semibold text-xl">Let’s connect and make something new, different and more meaningful.</p>
          <div id="inputbox" className="w-full text-lg font-normal flex flex-col gap-2 text-dark dark:text-light ">
            <label>Name</label>
            <input type="text" name="name" id="name" placeholder="Enter your name" className=" rounded-md p-2 shadow bg-blue-500 bg-opacity-10  border-none outline-none" />
          </div>
          <div id="inputbox" className="w-full text-lg font-normal flex flex-col gap-2 text-dark dark:text-light ">
            <label>Email</label>
            <input type="text" name="email" id="email" placeholder="Enter your email address" className=" rounded-md p-2 shadow bg-blue-500 bg-opacity-10 border-none outline-none" />
          </div>
          <div id="inputbox" className="w-full text-lg font-normal flex flex-col gap-2 text-dark dark:text-light ">
            <label>Message</label>
            <textarea rows={4} type="text" name="message" id="message" placeholder="Type your message here" className="resize-none h-24 overflow-hidden rounded-md p-2 shadow bg-blue-500 bg-opacity-10 border-none outline-none" />
          </div>
          <div className="flex items-center justify-center cursor-pointer gap-2 px-4 py-2 mr-auto rounded-lg font-bold text-xl border border-solid bg-dark dark:bg-none dark:border-light text-light hover:opacity-70 ">
            Send <Send height="23px" />
          </div>
        </div>
        <div className="w-6/7 flex items-center justify-center rounded-xl bg-blue-500 bg-opacity-10 dark:bg-opacity-100 dark:bg-[#6B7280] orfer-1 lg:order-2 ">
          <ContactImage />
        </div>
      </div>

      <div id="contact_details" className="mt-24  w-[90%] lg:w-[500px] lg:ml-36 flex justify-center flex-col gap-6 ">
        <div id="address" className="flex items-center justify-start gap-4 ">
          <div className=" h-12 w-[75px] flex items-center justify-center bg-[#ffffff] shadow   rounded-md">
            <img src={locationIcon} alt="" />
          </div>
          <p className="font-semibold text-2xl leading-7 font-lexend-deca">
            <span className="dark text-lightPrimary dark:text-darkPrimary">Address _ </span> Akash Nagar, Salarpur Road, Kurukshetra, Haryana.
          </p>
        </div>
        <div id="phone_number" className="flex items-center justify-start gap-4 ">
          <div className=" h-12 w-12 p-[2px] flex items-center justify-center bg-[#ffffff] shadow  rounded-md">
            <img src={telephone} alt="" />
          </div>
          <p className="font-semibold text-2xl leading-7 font-lexend-deca">
            <span className="dark text-lightPrimary dark:text-darkPrimary">Phone _ </span> 94167-72825
          </p>
        </div>
        <div id="address" className="flex items-center justify-start gap-4 ">
          <div className=" h-12 w-12 p-[2px] flex items-center justify-center bg-[#ffffff] shadow  rounded-md">
            <img src={emailLogo} alt="" />
          </div>
          <p className="font-semibold text-2xl leading-7 font-lexend-deca">
            <span className="dark text-lightPrimary dark:text-darkPrimary">Email _ </span> singlaritesh007@gmail.com
          </p>
        </div>
      </div>
    </div>
  )
}

export default Contact
