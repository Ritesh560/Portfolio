import React, { useEffect } from "react"

function Contact({ theme }) {
  return (
    <div id="contact" className="mt-4 gap-7 flex flex-col items-center justify-center  md:mt-20 ">
      <div id="header" className="text-7xl font-bold mb-8" style={theme.gradentifyText}>
        Contact
      </div>
    </div>
  )
}

export default Contact
