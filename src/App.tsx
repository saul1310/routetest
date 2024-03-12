import React from "react";
import { Link, Outlet } from "react-router-dom"; // Make sure to import from 'react-router-dom'
import "./App.css";


function App() {
  return (
    <>

        <Link to="/company">Go to Company Page</Link>
        <br></br>
        <Link to ="/"> App tsx</Link>
        <br></br>
        <Link to="/search"> Search Page</Link>
        


     
        
      
 
      <Outlet />
    </>
  );
}

export default App;
