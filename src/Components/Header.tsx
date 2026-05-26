import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="bg-[#03112b] h-20 flex justify-between items-center px-56">
      
      {/* Name */}
      <h1 className="text-white text-3xl font-bold">
        Alekhya Akireddy
      </h1>

      {/* Links */}
      <div className="flex gap-10">
        
        <Link
          to="/"
          className="text-white text-xl hover:text-gray-300 transition"
        >
          About
        </Link>
         <Link
           to="/Projects"
           className="text-white text-lg hover:text-yellow-300"
>
            Projects
          </Link>

        <Link
          to="/skills"
          className="text-white text-xl hover:text-gray-300 transition"
        >
          Skills
        </Link>

      

        <Link
          to="/contact"
          className="text-white text-xl hover:text-gray-300 transition"
        >
          Contact
        </Link>

      </div>
    </nav>
  );
}

export default Header;