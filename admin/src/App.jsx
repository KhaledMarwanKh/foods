// import React from 'react'
// import Navbar from './components/Navbar/Navbar'
// import Sidebar from './components/Sidebar/Sidebar'

// const App = () => {
//   return (

//     <div>
//       <Navbar/>
//       <hr />
//       <div className="app-content">
//         <Sidebar/>

//       </div>
//     </div>
//   )
// }

// export default App


// import React, { useEffect, useState } from 'react'
// import Navbar from './components/Navbar/Navbar'
// import Sidebar from './components/Sidebar/Sidebar'
// import {Routes, Route} from 'react-router-dom'
// import Add from './page/Add/Add'
// import List from './page/List/List.jsx'
// import Orders from './page/Orders/Orders'
// import {ToastContainer} from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const App = () => { 
//   const url="http://localhost:4000"
//   return (
//     <div>
//       <ToastContainer/>
//       <Navbar />
//       <hr />
//    <div className="app-content">
//    <Sidebar />
//    <Routes>
//     <Route path="/add" element={<Add url={url}/>}/>
//     <Route path="/list" element={<List url={url}/>}/>
//     <Route path="/orders" element={<Orders url={url}/>}/>
//    </Routes>
//    </div>
//       </div>
//   )
// }

// export default App







import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import Add from './page/Add/Add';
import List from './page/List/List';
import Orders from './page/Orders/Orders.jsx';

const App = () => {
  const url = "http://localhost:4000";

  return (
    <>
      <ToastContainer />
      <Navbar />
      <hr />
      <div className="app-content">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Navigate to="/list" />} />
          <Route path="/add" element={<Add url={url} />} />
          <Route path="/list" element={<List url={url} />} />
          <Route path="/orders" element={<Orders url={url} />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
