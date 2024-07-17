import logo from "../assets/logo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";



const Navbar = () => {
    return (<nav className="mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
            <a href="/">
                <img className="mx-2 w-10"
                    src={logo}
                    alt="logo"
                >
                </img>
            </a>
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl text-white">
            <a href="https://www.linkedin.com/in/abhinav-rajaram/" target="_blank">
                <FaLinkedin />
            </a>
            <a href="https://github.com/AbhinavDevelops" target="_blank">
                <FaGithub />
            </a>
        </div>

    </nav>);

};

export default Navbar;
