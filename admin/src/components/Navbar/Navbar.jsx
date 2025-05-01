import React from 'react'
import "./Navbar.css"
import {assets} from '../../assets/assets'

const Navbar = () => {
  return (
    <div className='navbar'>
      <img className='logo'  src={assets.logo} alt="" />
      <img className='profile' src={assets.profile_image} alt="" />
    </div>
  )
}
export default Navbar


// import React, { useState, useEffect } from 'react';
// import './Navbar.css';
// import { assets } from '../../assets/assets';

// const Navbar = () => {
//   const [isDark, setIsDark] = useState(false);

//   useEffect(() => {
//     const savedTheme = localStorage.getItem('theme');
//     if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
//       document.documentElement.classList.add('dark');
//       setIsDark(true);
//     }
//   }, []);

//   const toggleTheme = () => {
//     const root = document.documentElement;
//     root.classList.toggle('dark');
//     const newTheme = root.classList.contains('dark') ? 'dark' : 'light';
//     localStorage.setItem('theme', newTheme);
//     setIsDark(newTheme === 'dark');
//   };

//   return (
//     <div className='navbar'>
//       <img className='logo' src={assets.logo} alt="logo" />

//       <div className="navbar-right">
//         <label className="theme-switch" onClick={toggleTheme}>
//           <span className="icon">{isDark ? '🌙' : '🌞'}</span>
//           <input type="checkbox" checked={isDark} onChange={toggleTheme} />
//         </label>
        
//       </div>
//       <img className='profile' src={assets.profile_image} alt="profile" />
//     </div>
//   );
// };

// export default Navbar;
