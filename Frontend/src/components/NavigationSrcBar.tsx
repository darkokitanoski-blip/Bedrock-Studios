import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import {
  NavigationMenu,
  NavigationMenuContent,
  // NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  // NavigationMenuViewport,
} from "./ui/navigation-menu"



const NavigationSrcBar = ({isOpen=false}) => {
const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const shouldShowMenu = windowWidth > 768 || isOpen;

  return (
<div className={` absolute w-full left-0 top-[8vh] bg-black z-40 flex flex-col items-center md:relative md:top-0 md:mt-0 md:w-auto md:bg-transparent md:flex-row md:block
`}>
      {shouldShowMenu ? (
        <NavigationMenu className='w-full bg-amber-100'>
<NavigationMenuList className="flex flex-col items-center bg-black md:flex-row md:items-start">
            <NavigationMenuItem>
              <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink>Link</NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
             <NavigationMenuItem>
              <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink>Link</NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>

 <NavigationMenuItem>
              <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink>Link</NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>


            <NavigationMenuLink asChild>
              <Link to="/docs">Documentation</Link>
            </NavigationMenuLink>
          </NavigationMenuList>
        </NavigationMenu>
      ) : null}
    </div>
  );
};

export default NavigationSrcBar
