import { useState, useEffect } from 'react';
import { AiOutlineClose } from "react-icons/ai";
import { RxHamburgerMenu } from "react-icons/rx";
import NavigationSrcBar from '../components/NavigationSrcBar';
import { Link, useNavigate } from 'react-router-dom';

// header component
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  // Navigate to account or login depending on auth state
  function checkUser() {
    const user = localStorage.getItem("userName");
    if (user) {
      navigate("/account");
    } else {
      navigate("/login");
    }
  }

  const [siteScroll, setSiteScroll] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setSiteScroll(window.scrollY)
    }
  
    window.addEventListener("scroll", handleScroll)
    handleScroll() 
  
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

    return (
<header
  className={`fixed top-0 z-50 w-full h-[12vh]
  flex items-center justify-between
  px-4 md:px-8
  bg-black/10
  transition-all duration-300 ease-out
  ${siteScroll > 0 ? "backdrop-blur-xl shadow-sm" : "backdrop-blur-[5px]"}`}
>
  <button
    onClick={() => setIsOpen(!isOpen)}
    className="md:hidden p-2 rounded-md hover:bg-white/10 transition"
    aria-label="Toggle menu"
  >
    {isOpen ? <RxHamburgerMenu size={22} /> : < AiOutlineClose size={22} />}
  </button>

  <Link
    to="/"
    className="absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0"
  >
    <h1 className="text-2xl md:text-3xl font-semibold tracking-tight select-none">
      Bedrock Studios
    </h1>
  </Link>

  <div className="block w-[50%]  absolute left-[50%] -translate-[50%] top-10 justify-center md:flex">
    <NavigationSrcBar isOpen={isOpen} />
  </div>

  <button
    onClick={checkUser}
    className="p-2 rounded-md hover:bg-white/10 transition"
    aria-label="Account"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      fill="currentColor"
      viewBox="0 0 16 16"
    >
      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
    </svg>
  </button>
</header>

    );

};

export default Header;
