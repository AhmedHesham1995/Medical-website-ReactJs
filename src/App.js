
import './App.css';
import NavBar from './components/NavBar/NavBar'
import Home from './components/pages/Home';
import Footer from './components/Footer/Footer';
import Contact from './components/pages/Contact';
import Services from './components/pages/Services';
import { Route,Routes } from 'react-router-dom';
function App() {
  return (
    <>
      <NavBar/>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/services' element={<Services/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;





// //Dark
// import React, { useState } from "react";
// import { Route, Routes } from "react-router-dom";
// import NavBar from "./components/NavBar/NavBar";
// import Home from "./components/pages/Home";
// import Footer from "./components/Footer/Footer";
// import Contact from "./components/pages/Contact";
// import Services from "./components/pages/Services";
// import "./App.css";

// function App() {
//   const [theme, setTheme] = useState("light");

//   const toggleTheme = () => {
//     setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
//   };

//   return (
    
//       <div className={`App ${theme}`}>
//         <NavBar theme={theme} toggleTheme={toggleTheme} />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route path="/services" element={<Services />} />
//         </Routes>
//         <Footer />
//       </div>
    
//   );
// }

// export default App;








