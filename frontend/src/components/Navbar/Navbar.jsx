// import React, { useState , useContext } from 'react'
// import './Navbar.css'
// import {assets} from '../../assets/assets.js'
// import { Link, useNavigate } from 'react-router-dom'; 
// import { StoreContext } from '../../context/StoreContext.jsx';


// const Navbar = ({setShowLogin}) => {
//     const [menu, setMenu]=useState("menu");
//     const {getTotalCartAmount, token, setToken}=useContext(StoreContext);
//     const navigate= useNavigate();
//     const logout= ()=>{
//       localStorage.removeItem("token");
//       setToken("");
//       navigate("/");
//     }
//   return (
//     <div className='navbar'>
//          <div className="navbar-right">
//             <img src={assets.search_icon} alt=""/>
//             <div className="navbar-search-icon">
//               <Link to='/cart'> <img src={assets.basket_icon} alt="" /> </Link>
//               <div className={getTotalCartAmount()===0?"":"dot"}>
//               </div>
//             </div>
//             {!token?  <button onClick={()=>setShowLogin(true)}>تسجيل دخول</button>:
//              <div className='navbar-profile'>
//               <img src={assets.profile_icon} alt="" />
//               <ul className='nav-profile-dropdown'>
//                 <li onClick={()=>{
//                   navigate('/myorders')
//                 }}><img src={assets.bag_icon} alt="" /><p>طلبات</p></li>
//                 <hr />
//                 <li onClick={logout}><img src={assets.logout_icon} alt="" /><p>تسجيل  الخروج</p></li>
//               </ul>
//               </div>
//               }
           
//         </div>
//         <ul className="navbar-menu">
//         <a href='#footer' onClick={()=>setMenu("contact-us")} className={menu==="contact-us"?"active":""}>تواصل معنا</a>
//         <a href='#explore-menu'  onClick={()=>setMenu("menu")} className={menu==="menu"?"active":""}>القائمة</a>
//         <a href='#app-download' onClick={()=>setMenu("mobile-app")} className={menu==="mobile-app"?"active":""}>تطبيقنا</a>
//         <Link to='/' onClick={()=>setMenu("home")} className={menu==="home"?"active":""}>الرئيسية</Link>
//         </ul>
//         {/* <img src ={assets.logo} alt='' className='logo'/> */}
//       <Link to='/'><img src={assets.logo} className='logo' alt="" /></Link>
//     </div>
//   )
// }

// export default Navbar;





// import React, { useState, useContext } from 'react';
// import './Navbar.css';
// import { assets } from '../../assets/assets.js';
// import { Link, useNavigate } from 'react-router-dom';
// import { StoreContext } from '../../context/StoreContext.jsx';

// const Navbar = ({ setShowLogin }) => {
//     const [menu, setMenu] = useState("menu");
//     const { getTotalCartAmount, token, setToken } = useContext(StoreContext);
//     const navigate = useNavigate();

//     const logout = () => {
//         localStorage.removeItem("token"); // إزالة التوكن من localStorage
//         setToken(""); // إعادة تعيين التوكن في الحالة
//         navigate("/"); // العودة إلى الصفحة الرئيسية
//     };

//     return (
//         <div className='navbar'>
//             <div className="navbar-right">
//                 <img src={assets.search_icon} alt="" />
//                 <div className="navbar-search-icon">
//                     <Link to='/cart'> <img src={assets.basket_icon} alt="" /> </Link>
//                     <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
//                 </div>
//                 {!token ? (
//                     <button onClick={() => setShowLogin(true)}>تسجيل دخول</button>
//                 ) : (
//                     <div className='navbar-profile'>
//                         <img src={assets.profile_icon} alt="" />
//                         <ul className='nav-profile-dropdown'>
//                             <li onClick={() => navigate('/myorders')}>
//                                 <img src={assets.bag_icon} alt="" />
//                                 <p>طلبات</p>
//                             </li>
//                             <hr />
//                             <li onClick={logout}>
//                                 <img src={assets.logout_icon} alt="" />
//                                 <p>تسجيل الخروج</p>
//                             </li>
//                         </ul>
//                     </div>
//                 )}
//             </div>
//             <ul className="navbar-menu">
//                 <a href='#footer' onClick={() => setMenu("contact-us")} className={menu === "contact-us" ? "active" : ""}>تواصل معنا</a>
//                 <a href='#explore-menu' onClick={() => setMenu("menu")} className={menu === "menu" ? "active" : ""}>القائمة</a>
//                 <a href='#app-download' onClick={() => setMenu("mobile-app")} className={menu === "mobile-app" ? "active" : ""}>تطبيقنا</a>
//                 <Link to='/' onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>الرئيسية</Link>
//             </ul>
//             <Link to='/'><img src={assets.logo} className='logo' alt="" /></Link>
//         </div>
//     );
// };

// export default Navbar;






import React, { useState, useContext } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets.js';
import { Link, useNavigate } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext.jsx';

const Navbar = ({ setShowLogin }) => {
    const [menu, setMenu] = useState("menu");
    const { getTotalCartAmount, token, setToken } = useContext(StoreContext);
    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem("token"); // إزالة التوكن من localStorage
        setToken(""); // إعادة تعيين التوكن في الحالة
        navigate("/"); // العودة إلى الصفحة الرئيسية
    };

    return (
        <div className='navbar'>
            <div className="navbar-right">
                <img src={assets.search_icon} alt="" />
                <div className="navbar-search-icon">
                    <Link to='/cart'> <img src={assets.basket_icon} alt="" /> </Link>
                    <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
                </div>
                {!token ? (
                    <button onClick={() => setShowLogin(true)}>تسجيل دخول</button>
                ) : (
                    <div className='navbar-profile'>
                        <img src={assets.profile_icon} alt="" />
                        <ul className='nav-profile-dropdown'>
                            <li onClick={() => navigate('/myorders')}>
                                <img src={assets.bag_icon} alt="" />
                                <p>طلبات</p>
                            </li>
                            <hr />
                            <li onClick={logout}>
                                <img src={assets.logout_icon} alt="" />
                                <p>تسجيل الخروج</p>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
            <ul className="navbar-menu">
                <a href='#footer' onClick={() => setMenu("contact-us")} className={menu === "contact-us" ? "active" : ""}>تواصل معنا</a>
                <a href='#explore-menu' onClick={() => setMenu("menu")} className={menu === "menu" ? "active" : ""}>القائمة</a>
                <a href='#app-download' onClick={() => setMenu("mobile-app")} className={menu === "mobile-app" ? "active" : ""}>تطبيقنا</a>
                <Link to='/' onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>الرئيسية</Link>
            </ul>
            <Link to='/'><img src={assets.logo} className='logo' alt="" /></Link>
        </div>
    );
};

export default Navbar;
