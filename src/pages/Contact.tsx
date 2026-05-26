import { useRef } from "react";
import emailjs from "@emailjs/browser";

function Contact() {

  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm(
        "service_8wmfn9q",
        "template_qwwuiwt",
        form.current,
        "aTyP0UgeL3TZzsgcV"
      )
      .then(
        () => {
          alert("Message Sent Successfully!");
        },
        () => {
          alert("Failed to Send Message");
        }
      );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-orange-100 to-yellow-100 flex justify-center items-center px-6">

      <div className="bg-white w-[500px] p-10 rounded-3xl shadow-2xl">

        <h1 className="text-4xl font-extrabold text-center text-pink-600 mb-8">
          Contact Me
        </h1>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col gap-5"
        >

          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            className="border-2 border-pink-200 p-3 rounded-xl outline-none focus:border-pink-500"
            required
          />

          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            className="border-2 border-pink-200 p-3 rounded-xl outline-none focus:border-pink-500"
            required
          />

          <textarea
            name="message"
            placeholder="Message"
            rows={5}
            className="border-2 border-pink-200 p-3 rounded-xl outline-none resize-none focus:border-pink-500"
            required
          />

          <button
            type="submit"
            className="bg-gradient-to-r from-pink-500 to-orange-500 text-white py-3 rounded-xl font-bold hover:scale-105 transition"
          >
            Send Message
          </button>

        </form>
      </div>
    </div>
  );
}

export default Contact;