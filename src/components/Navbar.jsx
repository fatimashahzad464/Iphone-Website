// import { appleImg, bagImg, searchImg } from '../utils';
// import { navLists } from '../constants';

// const Navbar = () => {
//   return (
//     <header className="w-full py-5 sm:px-10 px-5 flex justify-between items-center">
//       <nav className="flex w-full screen-max-width">
//         <img src={appleImg} alt="Apple" width={30} height={30} />

//         <div className="flex flex-1 justify-center max-sm:hidden">
//           {navLists.map((nav) => (
//             <div key={nav} className="px-10 text-sm cursor-pointer text-gray hover:text-white transition-all">
// //               {nav}
// //             </div>
// //           ))}
// //         </div>

// //         <div className="flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1">
// //           <img src={searchImg} alt="search" width={18} height={18} />
// //           <img src={bagImg} alt="bag" width={18} height={18} />
// //         </div>
// //       </nav>
// //     </header>
// //   )
// // }

// // export default Navbar

// import React from 'react';
// import { navLists } from '../constants';
// import { appleImg, searchImg, bagImg } from '../utils';
// const Navbar = () => {
//   return (
//     <header className="w-full py-5 sm:px-10 px-5 flex justify-between items-center fixed top-0 z-50 " >
//       <nav className="flex w-full screen-max-width">
//         {/* Apple logo */}
//         <img src={appleImg} alt="Apple" width={30} height={30} />

//         {/* Navbar links */}
//         <div className="flex flex-1 justify-center max-sm:hidden">
//           {navLists.map((nav) => (
//             <a 
//               key={nav}
//               href={`#${nav}`} 
//               className="px-10 text-lg cursor-pointer text-gray-200 hover:text-gray-500 transition-all"
//             >
//               {nav}
//             </a>
//           ))}
//         </div>

//         {/* Search and Bag icons */}
//         <div className="flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1">
//           <img src={searchImg} alt="search" width={18} height={18} />
//           <img src={bagImg} alt="bag" width={18} height={18} />
//         </div>

//         <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
//       <ion-icon name={open ? 'close':'menu'}></ion-icon>
//       </div>

//       <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ':'top-[-490px]'}`}>
//         {
//           Links.map((link)=>(
//             <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7'>
//               <a href={link.link} className='text-gray-800 hover:text-gray-400 duration-500'>{link.name}</a>
//             </li>
//           ))
//         }
//         </ul>
//       </nav>
//     </header>
//   );
// }
//  export default Navbar



// import React, { useState } from 'react';
// import { navLists } from '../constants';
// import { appleImg, searchImg, bagImg } from '../utils';

// const Navbar = () => {
//   const [open, setOpen] = useState(false);

//   return (
//     <header className="w-full py-5 sm:px-10 px-5 flex justify-between items-center fixed top-0 z-50">
//       <nav className="flex w-full screen-max-width">
//         {/* Apple logo */}
//         <img src={appleImg} alt="Apple" width={30} height={30} />

//         {/* Navbar links */}
//         <div className="flex flex-1 justify-center max-sm:hidden">
//           {navLists.map((nav) => (
//             <a
//               key={nav}
//               href={`#${nav}`}
//               className="px-10 text-lg cursor-pointer text-gray-200 hover:text-gray-500 transition-all"
//             >
//               {nav}
//             </a>
//           ))}
//         </div>

//         {/* Search and Bag icons */}
//         <div className="flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1">
//           <img src={searchImg} alt="search" width={18} height={18} />
//           <img src={bagImg} alt="bag" width={18} height={18} />
//         </div>

//         {/* Menu Icon */}
//         <div
//           onClick={() => setOpen(!open)}
//           className="text-3xl absolute right-8 top-6 cursor-pointer"
//           aria-label={open ? 'Close Menu' : 'Open Menu'}
//         >
//           <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
//         </div>

//         {/* Navbar Links */}
//         <ul
//           className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-500 md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
//             open ? 'top-20 ' : 'top-[-490px]'
//           }`}
//           role="navigation"
//           aria-label="Main Menu"
//         >
//           {navLists.map((link) => (
//             <li key={link} className="md:ml-8 text-xl md:my-0 my-7">
//               <a
//                 href={`#${link}`}
//                 className="text-gray-800 hover:text-gray-400 duration-500"
//               >
//                 {link}
//               </a>
//             </li>
//           ))}
//         </ul>
//       </nav>
//     </header>
//   );
// };

// export default Navbar;


// import React, { useState } from 'react';
// import { navLists } from '../constants';
// import { appleImg } from '../utils';

// const Navbar = () => {
//   const [open, setOpen] = useState(false);

//   return (
//     <header className="w-full py-5 sm:px-10 px-5 flex justify-between items-center fixed top-0 z-50">
//       <nav className="flex w-full screen-max-width">
//         {/* Apple logo */}
//         <img src={appleImg} alt="Apple" width={30} height={30} />

//         {/* Navbar links */}
//         <div className="hidden md:flex flex-1 justify-end">
//           {navLists.map((nav) => (
//             <a 
//               key={nav}
//               href={`#${nav}`} 
//               className=" px-10 text-lg cursor-pointer text-gray-200 hover:text-gray-500 transition-all"
//             >
//               {nav}
//             </a>
//           ))}
//         </div>

//         {/* Menu Icon */}
//         <div onClick={()=>setOpen(!open)} className='text-3xl md:hidden justify-end'>
//           <ion-icon name={open ? 'close':'menu'}></ion-icon>
//         </div>

      
//         {open && (
//           <ul className=" justify-end md:hidden fixed flex flex-col pl-10 w-100 bg-white top-20 right-0 md:pb-0 pb-12 absolute md:static  md:z-auto z-[-1]  w-full md:w-auto md:pl-0 ${open ? 'top-20 ':'top-[-490px]'}`} mr:30 ">
//             {/* md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ':'top-[-490px]'}`} */}
//             {navLists.map((link)=>(
//               <li key={link} className='my-4'>
//                 <a href={`#${link}`} className='text-gray-800 hover:text-gray-400 duration-500'>{link}</a>
//               </li>
//             ))}
//           </ul>
//         )}
//       </nav>
//     </header>
//   );
// }

// export default Navbar;



// import React, { useState } from 'react';
// import { navLists } from '../constants';
// import { appleImg } from '../utils';
// import '../components/navbar.css'; // CSS file import karna mat bhoolen

// const Navbar = () => {
//     const [open, setOpen] = useState(false);
  
//     return (
//       <header className="w-full py-5 sm:px-10 px-5 flex justify-between items-center fixed top-0 z-50">
//         <nav className="flex w-full screen-max-width">
//           {/* Apple logo */}
//           <img src={appleImg} alt="Apple" width={30} height={30} />


//           <div className="flex flex-1 justify-center max-sm:hidden">
//           {navLists.map((nav) => (
//             <a 
//               key={nav}
//               href={`#${nav}`} 
//               className="px-10 text-lg cursor-pointer text-gray-200 hover:text-gray-500 transition-all"
//             >
//               {nav}
//             </a>
//           ))}
//         </div>


//         {/* Menu Icon */}
//         <div onClick={()=>setOpen(!open)} className='menu-icon'>
//           <ion-icon name={open ? 'close':'menu'}></ion-icon>
//         </div>

//         {/* Navbar Links */}
//         <ul className={`nav-links ${open ? 'open' : ''}`}>
//           {navLists.map((link)=>(
//             <li key={link} className='nav-item'>
//               <a href={`#${link}`} className='nav-link'>{link}</a>
//             </li>
//           ))}
//         </ul>
//       </nav>
//     </header>
//   );
// }

// export default Navbar;

// import React, { useState } from 'react';
// import "../components/navbar.css";
// import { appleImg } from '../utils';
// const Navbar = () => {
//   const [toggleMenu, setToggleMenu] = React.useState(false);

//   return (
//     <nav className="app__navbar fixed-navbar"> {/* Added fixed-navbar class */}
//       <div className="app__navbar-logo">
//         <img src={appleImg} alt="app__logo" />
//       </div>
//       <ul className="app__navbar-links">
//         <li className="p__opensans"><a href="#home">Home</a></li>
//         <li className="p__opensans"><a href="#about">About</a></li>
//         <li className="p__opensans"><a href="#menu">Menu</a></li>
//         <li className="p__opensans"><a href="#awards">Awards</a></li>
        
//       </ul>
      
      {/* <div className="app__navbar-smallscreen">
        
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <div onClick={()=>setOpen(!open)} className='menu-icon'>
           <ion-icon name={open ? 'close':'menu'}></ion-icon>
         </div>
            <ul className="app__navbar-smallscreen_links">
              <li><a href="#home" onClick={() => setToggleMenu(false)}>Home</a></li>
              <li><a href="#about" onClick={() => setToggleMenu(false)}>About</a></li>
              <li><a href="#menu" onClick={() => setToggleMenu(false)}>Menu</a></li>
              <li><a href="#awards" onClick={() => setToggleMenu(false)}>Awards</a></li>
             
            </ul>
          </div>
        
      </div>
    </nav>
  );
};

export default Navbar; */}


{/* <div className="app__navbar-smallscreen">
        <div className= "app__navbar-smallscreen flex__center slide-bottom">
          <div onClick={() => setToggleMenu(!toggleMenu)} className='menu-icon'>
            <ion-icon name={toggleMenu ? 'close' : 'menu'}></ion-icon>
          </div>
          {toggleMenu && (
            <ul className="app__navbar-smallscreen_links">
              <li><a href="#home" onClick={() => setToggleMenu(false)}>Home</a></li>
              <li><a href="#about" onClick={() => setToggleMenu(false)}>About</a></li>
              <li><a href="#menu" onClick={() => setToggleMenu(false)}>Menu</a></li>
              <li><a href="#awards" onClick={() => setToggleMenu(false)}>Awards</a></li>
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;



 */}












{/* // import React, { useState } from 'react';
// import "../components/navbar.css";
// import { appleImg } from '../utils';

// const Navbar = () => { */}
{/* //   const [toggleMenu, setToggleMenu] = useState(false);

//   return (
//     <nav className="app__navbar fixed-navbar"> {/* Added fixed-navbar class */}
{/* //       <div className="app__navbar-logo">
//         <img src={appleImg} alt="app__logo" />
//       </div>
//       <ul className="app__navbar-links">
//         <li className="p__opensans"><a href="#home">Home</a></li>
//         <li className="p__opensans"><a href="#about">About</a></li>
//         <li className="p__opensans"><a href="#menu">Menu</a></li>
//         <li className="p__opensans"><a href="#awards">Awards</a></li>
//       </ul>
      
      /* <div className="app__navbar-smallscreen">
        <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
          <div onClick={() => setToggleMenu(!toggleMenu)} className='menu-icon'>
            <ion-icon name={toggleMenu ? 'close' : 'menu'}></ion-icon>
          </div>
          {toggleMenu && (
            <ul className="app__navbar-smallscreen_links">
              <li><a href="#home" onClick={() => setToggleMenu(false)}>Home</a></li>
              <li><a href="#about" onClick={() => setToggleMenu(false)}>About</a></li>
              <li><a href="#menu" onClick={() => setToggleMenu(false)}>Menu</a></li>
              <li><a href="#awards" onClick={() => setToggleMenu(false)}>Awards</a></li>
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 
 */} 





//  import React, { useState } from 'react';
// import "../components/navbar.css";
// import { appleImg } from '../utils';

// const Navbar = () => {
//   const [toggleMenu, setToggleMenu] = useState(false);

//   return (
//     <nav className="app__navbar fixed-navbar">
//       <div className="app__navbar-logo">
//         <img src={appleImg} alt="app__logo" />
//       </div>
//       <ul className="app__navbar-links">
//         <li className="p__opensans"><a href="#home">Home</a></li>
//         <li className="p__opensans"><a href="#about">About</a></li>
//         <li className="p__opensans"><a href="#menu">Menu</a></li>
//         <li className="p__opensans"><a href="#awards">Awards</a></li>
//       </ul>

//       <div className="app__navbar-smallscreen">
//         <div className="app__navbar-smallscreen_overlay flex__center slide-bottom" style={{ display: toggleMenu ? 'flex' : 'none' }}>
//           <div onClick={() => setToggleMenu(!toggleMenu)} className='menu-icon'>
//             <ion-icon name={toggleMenu ? 'close' : 'menu'}></ion-icon>
//           </div>
//           <ul className="app__navbar-smallscreen_links">
//             <li><a href="#home" onClick={() => setToggleMenu(false)}>Home</a></li>
//             <li><a href="#about" onClick={() => setToggleMenu(false)}>About</a></li>
//             <li><a href="#menu" onClick={() => setToggleMenu(false)}>Menu</a></li>
//             <li><a href="#awards" onClick={() => setToggleMenu(false)}>Awards</a></li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;










// import React, { useState } from 'react';
// import '../components/navbar.css'; // CSS file for navbar styling
// import {  appleImg } from '../utils'; // Importing logo image from utils

// const Navbar = () => {
//   const [toggleMenu, setToggleMenu] = useState(false);

//   return (
//     <nav className="app__navbar">
//       <div className="app__navbar-logo">
//         <img src={ appleImg} alt="Logo" />
//       </div>
//       <div className="app__navbar-links">
//         <ul>
//           <li><a href="#home">Home</a></li>
//           <li><a href="#services">Services</a></li>
//           <li><a href="#about">About</a></li>
//           <li><a href="#contact">Contact</a></li>
//         </ul>
//       </div>
//       <div className="menu-icon" onClick={() => setToggleMenu(!toggleMenu)}>
//         <ion-icon name={toggleMenu ? 'close' : 'menu'}></ion-icon>
//       </div>
//       {toggleMenu && (
//         <div className="app__navbar-smallscreen_overlay">
//           <ul className="app__navbar-smallscreen_links">
//             <li><a href="#home" onClick={() => setToggleMenu(false)}>Home</a></li>
//             <li><a href="#services" onClick={() => setToggleMenu(false)}>Services</a></li>
//             <li><a href="#about" onClick={() => setToggleMenu(false)}>About</a></li>
//             <li><a href="#contact" onClick={() => setToggleMenu(false)}>Contact</a></li>
//           </ul>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;




// import React, { useState } from 'react';

// import '../components/navbar.css'; // CSS file for navbar styling
// import {  appleImg } from '../utils'; // Importing logo image from utils

// function Navbar() {
//   const [active, setActive] = useState("nav__menu");
//   const [icon, setIcon] = useState("nav__toggler");
//   const navToggle = () => {
//     if (active === "nav__menu") {
//       setActive("nav__menu nav__active");
//     } else setActive("nav__menu");

//     // Icon Toggler
//     if (icon === "nav__toggler") {
//       setIcon("nav__toggler toggle");
//     } else setIcon("nav__toggler");
//   };
  
//   return (
//     <nav className="nav">
//       <div className="app__navbar-logo">
//         <img src={ appleImg} alt="Logo" />
//        </div>
//       <ul className={active}>
//         <li className="nav__item">
//           <a href="#home" className="nav__link">
//             Home
//           </a>
//         </li>
//         <li className="nav__item">
//           <a href="#about" className="nav__link">
//             Store
//           </a>
//         </li>
//         <li className="nav__item">
//           <a href="#services" className="nav__link">
//             iPhone
//           </a>
//         </li>
//         <li className="nav__item">
//           <a href="#contact" className="nav__link">
//             Support
//           </a>
//         </li>
        
//       </ul>
//       <div onClick={navToggle} className={icon}>
//         <div className="line1"></div>
//         <div className="line2"></div>
//         <div className="line3"></div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;


// import React, { useState } from 'react';
// import { appleImg } from '../utils';
// import '../components/navbar.css'; 

// function Navbar() {
//   const [active, setActive] = useState("nav__menu");
//   const [icon, setIcon] = useState("nav__toggler");

//   const handleLinkClick = (sectionId) => {
//     // Close the navbar menu
//     setActive("nav__menu");
//     setIcon("nav__toggler");

//     // Scroll to the clicked section
//     const section = document.getElementById(sectionId);
//     section.scrollIntoView({ behavior: "smooth" });
//   };

//   const navToggle = () => {
//     setActive(active === "nav__menu" ? "nav__menu nav__active" : "nav__menu");
//     setIcon(icon === "nav__toggler" ? "nav__toggler toggle" : "nav__toggler");
//   };

//   return (
//     <nav className="nav">
//       <div className="app__navbar-logo">
//         <img src={appleImg} alt="Logo" />
//       </div>
//       <ul className={active}>
//         <li className="nav__item">
//           <button onClick={() => handleLinkClick("home")} className="nav__link">
//             Home
//           </button>
//         </li>
//         <li className="nav__item">
//           <button onClick={() => handleLinkClick("highlights")} className="nav__link">
//             Store
//           </button>
//         </li>
//         <li className="nav__item">
//           <button onClick={() => handleLinkClick("iphone")} className="nav__link">
//             iPhone
//           </button>
//         </li>
//         <li className="nav__item">
//           <button onClick={() => handleLinkClick("support")} className="nav__link">
//             Support
//           </button>
//         </li>
//       </ul>
//       <div onClick={navToggle} className={icon}>
//         <div className="line1"></div>
//         <div className="line2"></div>
//         <div className="line3"></div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;

import React, { useState } from 'react';
import { appleImg } from '../utils';
import '../components/navbar.css'; 

function Navbar() {
  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");

  const handleLinkClick = (sectionId) => {
    // Close the navbar menu
    setActive("nav__menu");
    setIcon("nav__toggler");

    // Scroll to the clicked section
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: "smooth" });
  };

  const navToggle = () => {
    setActive(active === "nav__menu" ? "nav__menu nav__active" : "nav__menu");
    setIcon(icon === "nav__toggler" ? "nav__toggler toggle" : "nav__toggler");
  };

  return (

    
  <nav className="app__navbar">
    <div className="app__navbar-logo">
      <img src={appleImg} alt="Logo" />
    </div>
    <ul className={active}>
      <li className="nav__item">
        <button  onClick={() => handleLinkClick("Store")} className="nav__link">
          Home
        </button>
      </li>
      <li className="nav__item">
        <button onClick={() => handleLinkClick("Highlights")} className="nav__link">
          Store
        </button>
      </li>
      <li className="nav__item">
        <button onClick={() => handleLinkClick("iPhone")} className="nav__link">
          iPhone
        </button>
      </li>
      <li className="nav__item">
        <button onClick={() => handleLinkClick("Support")} className="nav__link">
          Support
        </button>
      </li>
    </ul>
    <div onClick={navToggle} className={icon}>
      <div className="line1"></div>
      <div className="line2"></div>
      <div className="line3"></div>
    </div>
  </nav>


    
    // <nav className="app__navbar">
    //   <div className="app__navbar-logo">
    //     <img src={appleImg} alt="Logo" />
    //   </div>
    //   <ul className={active}>
    //     <li className="nav__item">
    //       <button onClick={() => handleLinkClick("Store")} className="nav__link">
    //         Home
    //       </button>
    //     </li>
    //     <li className="nav__item">
    //       <button onClick={() => handleLinkClick("Highlights")} className="nav__link">
    //         Store
    //       </button>
    //     </li>
    //     <li className="nav__item">
    //       <button onClick={() => handleLinkClick("iPhone")} className="nav__link">
    //         iPhone
    //       </button>
    //     </li>
    //     <li className="nav__item">
    //       <button onClick={() => handleLinkClick("Support")} className="nav__link">
    //         Support
    //       </button>
    //     </li>
    //   </ul>
    //   <div onClick={navToggle} className={icon}>
    //     <div className="line1"></div>
    //     <div className="line2"></div>
    //     <div className="line3"></div>
    //   </div>
    // </nav>
    
  );
}

export default Navbar;
