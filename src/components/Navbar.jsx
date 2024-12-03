import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export const Navbar = () => {
  return <nav className="mb-20 flex items-center justify-between py-6">
    <div className="flex flex-shrink-0 items-center">
    <h1 style={{ fontSize: '50px', color: 'white', textAlign: 'center' }}>
    𝙶𝚖
    </h1> </div>
    <div className="m-8 flex items-center justify-center gap-4 text-2xl ">
        <a href="https://www.linkedin.com/in/giorgi-mantashashvili-379345229/"><FaLinkedin /> </a>
        <a href="https://github.com/mentesha11"><FaGithub /> </a>
        <a href="https://www.instagram.com/mmanttashaa/"><FaInstagram /> </a>
    </div>
  </nav>

    
  
};

export default Navbar;