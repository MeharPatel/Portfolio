import React, { useRef, useState } from 'react'
import emailjs from "@emailjs/browser"

const Footer = () => {

    const form  = useRef();
    const [sent, setSent] = useState(false)

    const sendEmail = (e) => {
      e.preventDefault()

      emailjs.sendForm(
        'service_ldnh2zi',
        'template_h2zjyl9',
        form.current,
        'ypdF_nQp6-K3poURx'
      )
      .then(() => {
        setSent(true)
        form.current.reset()
      }).catch((err) => console.log(err))
    }

  return (
    <div className="bg-gray-600 text-white p-10 mt-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6">Contact Me</h2>

        <form ref={form} onSubmit={sendEmail} className="grid grid-cols-1 gap-4">
          <input
            type="text"
            name="to_name"
            placeholder="Your Name"
            required
            className="p-2 rounded bg-gray-800 text-white"
          />
          <input
            type="email"
            name="to_email"
            placeholder="Your Email"
            required
            className="p-2 rounded bg-gray-800 text-white"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="4"
            required
            className="p-2 rounded bg-gray-800 text-white"
          />
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 py-2 px-4 rounded w-fit">
            Send
          </button>
        </form>

        {sent && <p className="text-green-400 mt-4">Message sent successfully ✅</p>}
        <p className="text-gray-400 text-sm mt-10">© {new Date().getFullYear()} Mehar Patel. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer
