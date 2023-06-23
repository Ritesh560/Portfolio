import emailjs from "@emailjs/browser"
import { ContactImage, Send } from "../../libs/icons/icon"
import locationIcon from "../../libs/icons/assets/icons/location.svg"
import emailLogo from "../../libs/icons/assets/icons/email.svg"
import telephone from "../../libs/icons/assets/icons/telephone.svg"
import commonStyles from "../common_styles.module.scss"
import { useRef } from "react"

function Contact({ theme }) {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault() // prevents the page from reloading when you hit “Send”

    emailjs.sendForm("service_al3i19a", "template_37c11g8", form.current, "zrhVELa13EKFo5_9b").then(
      (result) => {
        console.log("Thanks For you message I will be get back to you soon.")
        form.current.reset()
      },
      (error) => {
        console.log(error)
      }
    )
  }

  return (
    <div id="contact" className="mt-20 mb-8 gap-7 flex flex-col items-center justify-center  lg:mt-16  ">
      <div id="header" className={`${theme.theme === "dark" ? commonStyles.darkGradient : commonStyles.lightGradient} text-7xl lg:text-6xl sm:text-5xl font-bold mb-8 lg:mb-0`}>
        Contact
      </div>

      <div className="w-full flex items-center justify-around flex-row gap-0 lg:flex-col lg:gap-16">
        <form ref={form} onSubmit={sendEmail} className="w-2/5 lg:w-9/12 sm:w-11/12 flex flex-col items-center gap-4 order-1 lg:order-2">
          <p className=" font-semibold text-xl sm:text-lg">Let’s connect and make something new, different and more meaningful.</p>
          <div id="inputbox" className="w-full text-lg font-normal flex flex-col gap-2 text-dark dark:text-light ">
            <label>Name</label>
            <input type="text" required name="from_name" id="name" placeholder="Enter your name" className=" rounded-md p-2 shadow bg-blue-500 bg-opacity-10  border-none outline-none" />
          </div>
          <div id="inputbox" className="w-full text-lg font-normal flex flex-col gap-2 text-dark dark:text-light ">
            <label>Email</label>
            <input type="email" required name="from_email" id="email" placeholder="Enter your email address" className=" rounded-md p-2 shadow bg-blue-500 bg-opacity-10 border-none outline-none" />
          </div>
          <div id="inputbox" className="w-full text-lg font-normal flex flex-col gap-2 text-dark dark:text-light ">
            <label>Message</label>
            <textarea rows={4} type="text" required name="message" id="message" placeholder="Type your message here" className="resize-none h-24 overflow-hidden rounded-md p-2 shadow bg-blue-500 bg-opacity-10 border-none outline-none" />
          </div>
          <button type="submit" className="flex items-center justify-center cursor-pointer gap-2 px-4 py-2 mr-auto rounded-lg font-bold text-xl border border-solid bg-dark dark:bg-none dark:border-light text-light hover:bg-black ">
            Send <Send height="23px" />
          </button>
        </form>
        <div className="w-2/5 lg:w-9/12 sm:w-11/12 flex items-center justify-center rounded-xl bg-blue-500 bg-opacity-10 dark:bg-opacity-100 dark:bg-[#6B7280] order-2 lg:order-1 ">
          <ContactImage width="100%" />
        </div>
      </div>

      <div id="contact_details" className="mt-24 ml-24  w-[500px] lg:w-[90%] lg:ml-0 flex justify-center flex-col gap-6 ">
        <div id="address" className="flex items-center justify-start gap-4 ">
          <div className=" h-12 w-[75px] sm:hidden flex items-center justify-center bg-[#ffffff] shadow rounded-md">
            <img src={locationIcon} alt="" />
          </div>
          <p className="font-semibold text-2xl sm:text-xl xs:text-lg leading-7 sm:leading-normal font-lexend-deca">
            <span className="dark text-lightPrimary dark:text-darkPrimary">Address _ </span> Akash Nagar, Salarpur Road, Kurukshetra, Haryana.
          </p>
        </div>
        <div id="phone_number" className="flex items-center justify-start gap-4 ">
          <div className=" h-12 w-12 sm:hidden p-[2px] flex items-center justify-center bg-[#ffffff] shadow  rounded-md">
            <img src={telephone} alt="" />
          </div>
          <p className="font-semibold text-2xl sm:text-xl xs:text-lg leading-7 sm:leading-normal font-lexend-deca">
            <span className="dark text-lightPrimary dark:text-darkPrimary">Phone _ </span> 94167-72825
          </p>
        </div>
        <div id="address" className="flex items-center justify-start gap-4 ">
          <div className=" h-12 w-12 sm:hidden p-[2px] flex items-center justify-center bg-[#ffffff] shadow  rounded-md">
            <img src={emailLogo} alt="" />
          </div>
          <p className="font-semibold text-2xl sm:text-xl xs:text-lg leading-7 sm:leading-normal font-lexend-deca">
            <span className="dark text-lightPrimary dark:text-darkPrimary">Email _ </span> singlaritesh007@gmail.com
          </p>
        </div>
      </div>
    </div>
  )
}

export default Contact
