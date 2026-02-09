import { useState, useEffect } from 'react';
import { AiOutlineClose } from "react-icons/ai";
import { RxHamburgerMenu } from "react-icons/rx";
import NavigationSrcBar from '../components/NavigationSrcBar';
import { Link, useSearchParams, useNavigate } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const token = searchParams.get('token');
  console.log(token)

  useEffect(() => {
    if (token) {
      localStorage.setItem('authToken', token);
      console.log('Token captured from URL and saved.');
      const url = new URL(window.location.href);
      url.searchParams.delete('token');
      window.history.replaceState({}, document.title, url.toString());
    }
  }, [token]);

  // Navigate to account or login depending on auth state
  function checkUser() {
    const user = localStorage.getItem("userName");
    const token1 = localStorage.getItem("authToken");
    console.log("Checking user:", token1);
    console.log(token1)
    if (user || token1) {
      navigate("/account");
    } else {
      navigate("/login");
    }
  }

  return (
    <header className='bg-black w-full z-50 sticky top-0 h-[8vh] flex items-center p-[20px] justify-between'>
      <div className='md:hidden cursor-pointer'>
        {isOpen ? (
          <AiOutlineClose size={24} onClick={() => setIsOpen(false)} />
        ) : (
          <RxHamburgerMenu size={24} onClick={() => setIsOpen(true)} />
        )}
      </div>
      
      <Link to="/">
        <h1 className='text-4xl cursor-pointer'>Bedrock Studios</h1>
      </Link>
      <NavigationSrcBar isOpen={isOpen}></NavigationSrcBar>

      <a onClick={checkUser}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-fill" viewBox="0 0 16 16">
          <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
        </svg>
      </a>
    </header>
  );
};

export default Header;
