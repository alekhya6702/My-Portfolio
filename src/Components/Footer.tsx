import { FaLinkedinIn, FaInstagram, FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-slate-950 text-white py-6 px-20 flex justify-between items-center">
      <p>© 2026 Alekhya Akireddy</p>

      <div className="flex gap-6">
        <a href="https://www.linkedin.com/login" target="_blank">
          <FaLinkedinIn className="text-2xl hover:text-blue-400" />
        </a>

        <a href="https://www.instagram.com/accounts/login/" target="_blank">
          <FaInstagram className="text-2xl hover:text-pink-400" />
        </a>

        <a href="https://github.com/login" target="_blank">
          <FaGithub className="text-2xl hover:text-gray-400" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;