import { useEffect, useState } from 'react';
import { FaShoppingCart } from "react-icons/fa";



const NavigationSrcBar = ({isOpen=false}) => {
const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const shouldShowMenu = windowWidth > 768 || isOpen;
  console.log(shouldShowMenu)

  return (
<div className='w-full cursor-pointe '>
      {shouldShowMenu ? (
        <nav className="hidden md:flex items-center gap-8 md:justify-center text-sm font-medium text-white/80">
          {["Games", "Whishlist", "Developers", "About"].map((item) => (
            <a
              key={item}
              href={item === "Whishlist" ? "/whishlist" : "#"}
              onClick={(e) => {
                if (item === "Games") {
                  e.preventDefault(); 
                  document.querySelector(".carouselDiv")?.scrollIntoView({ 
                    behavior: "smooth", 
                    block: "start" 
                  });
                } else if(item === "Developers" ||item === "About") {
                  e.preventDefault(); 
                  document.querySelector("footer")?.scrollIntoView({ 
                    behavior: "smooth", 
                    block: "start" 
                  });
                }
              }}
              id={item}
              className="relative group transition-colors duration-300 hover:text-white"
            > {item === "Whishlist" ? ( <span className="whishlisticon flex items-center gap-2">  Wishlist <FaShoppingCart /> </span>
        ) : (
          item
        )}
        <span className=" absolute left-0 -bottom-1 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
            </a>
        ))}
  </nav>
      ) : <nav className="navbar flex flex-col items-center gap-8 md:justify-center text-sm font-medium text-white/80">
      {["Games", "Whishlist", "Developers", "About"].map((item) => (
        <a
          key={item}
          href={item === "Whishlist" ? "/whishlist" : "#"}
          onClick={(e) => {
            if (item === "Games") {
              e.preventDefault(); 
              document.querySelector(".carouselDiv")?.scrollIntoView({ 
                behavior: "smooth", 
                block: "start" 
              });
            } else if(item === "Developers" ||item === "About") {
              e.preventDefault(); 
              document.querySelector("footer")?.scrollIntoView({ 
                behavior: "smooth", 
                block: "start" 
              });
            }
          }}
          id={item}
          className="relative group transition-colors duration-300 hover:text-white"
        >
          {item === "Whishlist" ? (
      <span className="whishlisticon flex items-center gap-2">
        Wishlist <FaShoppingCart />
      </span>
    ) : (
      item
    )}
          <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
        </a>
      ))}
    </nav>}
    </div>
  );
};

export default NavigationSrcBar
