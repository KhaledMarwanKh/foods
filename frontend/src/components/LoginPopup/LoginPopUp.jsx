// import React from 'react'
// import './LoginPopUp.css'
// import { assets } from '../../assets/assets.js';

// const LoginPopUp = (setShowLogin) => {
//     const [currState, setcurrState ]=useState("Sign Up")
//   return (
//     <div className='login-popup'>
//       <form action="" className="login-popup-container">
//         <div className="login-popup-title">
//             <h2>
//                 {currState}
//             </h2>
//             <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
//         </div>
//         <div className="login-popup-inputs">
//             <input type="text" placeholder='ادخل اسمك' required />
//             <input type="email" placeholder='******@gmail.com' required />
//             <input type="password" placeholder='ادخل كلمة السر' required />
//         </div>
//         <button>{currState==="Sign Up"?"انشاء حساب":"تسجيل دخول"}</button>
//       </form>
//     </div>
//   )
// }

// export default LoginPopUp;


import React, { useContext, useState } from 'react';
import './LoginPopUp.css';
import { assets } from '../../assets/assets';
import { StoreContext } from '../../context/StoreContext';
import axios from "axios";

const LoginPopUp = ({ setShowLogin }) => {
    const { url, setToken } = useContext(StoreContext);
    const [currState, setcurrState] = useState("تسجيل دخول");
    const [data, setData] = useState({
        name: "",
        email: "",
        password: "",
    });

    const onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData(data => ({ ...data, [name]: value }));
    };

    const onLogin = async (event) => {
        event.preventDefault();
        let newUrl = url;
        if (currState === "تسجيل دخول") {
            newUrl += "/api/user/login";
        } else {
            newUrl += "/api/user/register";
        }

        const sendData = {
            email: data.email,
            password: data.password,
        };
        if (currState === "انشاء حساب") {
            sendData.name = data.name;
        }

        try {
            const response = await axios.post(newUrl, sendData, {
                withCredentials: true, // ضروري لإرسال الكوكيز
            });

            if (response.data.success) {
                setToken(response.data.accessToken);
                localStorage.setItem("token", response.data.accessToken);
                setShowLogin(false);
            } else {
                alert(response.data.message);
            }
        } catch (error) {
            console.error('Error occurred during login:', error.response ? error.response.data : error.message);
            alert('حدث خطأ أثناء تسجيل الدخول أو إنشاء الحساب');
        }
    };

    return (
        <div className='login-popup'>
            <form onSubmit={onLogin} className="login-popup-container">
                <div className="login-popup-title">
                    <h2>{currState}</h2>
                    <img
                        onClick={() => setShowLogin(false)}
                        src={assets.cross_icon}
                        alt="إغلاق"
                    />
                </div>
                <div className="login-popup-inputs">
                    {currState === "تسجيل دخول" ? null : (
                        <input
                            name='name'
                            onChange={onChangeHandler}
                            value={data.name}
                            type="text"
                            placeholder='ادخل اسمك'
                            required
                        />
                    )}
                    <input
                        name='email'
                        onChange={onChangeHandler}
                        value={data.email}
                        type="email"
                        placeholder='******@gmail.com'
                        required
                    />
                    <input
                        name='password'
                        onChange={onChangeHandler}
                        value={data.password}
                        type="password"
                        placeholder='ادخل كلمة السر'
                        required
                    />
                </div>
                <button type='submit'>{currState === "انشاء حساب" ? "انشاء حساب" : "تسجيل دخول"}</button>
                <div className="login-popup-condition">
                    <input type="checkbox" required />
                    <p>هل انت موافق على الالتزام بشروطنا</p>
                </div>
                {currState === "تسجيل دخول" ? (
                    <p>انشاء حساب جديد؟ <span onClick={() => setcurrState("انشاء حساب")}>انقر هنا</span></p>
                ) : (
                    <p>هل لديك حساب بالفعل؟ <span onClick={() => setcurrState("تسجيل دخول")}>سجل هنا</span></p>
                )}
            </form>
        </div>
    );
};

export default LoginPopUp;



// import React, { useContext, useState } from 'react';
// import './LoginPopUp.css';
// import { assets } from '../../assets/assets';
// import { StoreContext } from '../../context/StoreContext';
// import axios from "axios";

// const LoginPopUp = ({ setShowLogin }) => {
//     const { url, setToken } = useContext(StoreContext);
//     const [currState, setcurrState] = useState("تسجيل دخول");
//     const [data, setData] = useState({
//         name: "",
//         email: "",
//         password: "",
//     });

//     const onChangeHandler = (event) => {
//         const { name, value } = event.target;
//         setData((prevData) => ({ ...prevData, [name]: value }));
//     };

//     const onLogin = async (event) => {
//         event.preventDefault();
//         const endpoint = currState === "تسجيل دخول" ? "/api/user/login" : "/api/user/register";

//         const sendData = {
//             email: data.email,
//             password: data.password,
//         };

//         if (currState === "انشاء حساب") {
//             sendData.name = data.name;
//         }

//         try {
//             const response = await axios.post(url + endpoint, sendData, {
//                 withCredentials: true,
//             });

//             if (response.data.success) {
//                 setToken(response.data.accessToken);
//                 localStorage.setItem("token", response.data.accessToken);
//                 setShowLogin(false);
//             } else {
//                 alert(response.data.message || "فشل العملية");
//             }
//         } catch (error) {
//             console.error('Error occurred during login:', error);
//             alert('حدث خطأ أثناء تسجيل الدخول أو إنشاء الحساب');
//         }
//     };

//     return (
//         <div className='login-popup'>
//             <form onSubmit={onLogin} className="login-popup-container">
//                 <div className="login-popup-title">
//                     <h2>{currState}</h2>
//                     <img
//                         onClick={() => setShowLogin(false)}
//                         src={assets.cross_icon}
//                         alt="إغلاق"
//                     />
//                 </div>

//                 <div className="login-popup-inputs">
//                     {currState === "انشاء حساب" && (
//                         <input
//                             name='name'
//                             onChange={onChangeHandler}
//                             value={data.name}
//                             type="text"
//                             placeholder='ادخل اسمك'
//                             required
//                         />
//                     )}
//                     <input
//                         name='email'
//                         onChange={onChangeHandler}
//                         value={data.email}
//                         type="email"
//                         placeholder='******@gmail.com'
//                         required
//                     />
//                     <input
//                         name='password'
//                         onChange={onChangeHandler}
//                         value={data.password}
//                         type="password"
//                         placeholder='ادخل كلمة السر'
//                         required
//                     />
//                 </div>

//                 <button type='submit'>
//                     {currState === "انشاء حساب" ? "انشاء حساب" : "تسجيل دخول"}
//                 </button>

//                 <div className="login-popup-condition">
//                     <input type="checkbox" required />
//                     <p>هل انت موافق على الالتزام بشروطنا</p>
//                 </div>

//                 {currState === "تسجيل دخول" ? (
//                     <p>
//                         انشاء حساب جديد؟{" "}
//                         <span onClick={() => setcurrState("انشاء حساب")}>انقر هنا</span>
//                     </p>
//                 ) : (
//                     <p>
//                         هل لديك حساب بالفعل؟{" "}
//                         <span onClick={() => setcurrState("تسجيل دخول")}>سجل هنا</span>
//                     </p>
//                 )}
//             </form>
//         </div>
//     );
// };

// export default LoginPopUp;

