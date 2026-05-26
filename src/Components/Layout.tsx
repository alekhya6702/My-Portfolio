import { Link } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

type LayoutProps = {
  children: React.ReactNode;
};

function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <nav className="bg-gradient-to-r from-indigo-950 via-purple-900 to-pink-900 h-20 flex justify-between items-center px-20 shadow-lg">
        <h1 className="text-white text-3xl font-extrabold">
          Alekhya Akireddy
        </h1> 
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
          to="/Certificates"
          className="text-white text-xl hover:text-gray-300 transition"
        >
          Certificates
        </Link>
      

        <Link
          to="/contact"
          className="text-white text-xl hover:text-gray-300 transition"
        >
          Contact
        </Link>

      </div>
      </nav>

      <main className="flex-1">{children}</main>

      <Footer />
    </div>
  );
}

export default Layout;