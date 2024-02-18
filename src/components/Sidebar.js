import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


const Sidebar = () => {
 const isMenuOpen = useSelector((store)=>store.app.isMenuOpen)
//  if(!isMenuOpen)
//  return null
  return !isMenuOpen ? null :(
    <div className="w-48 mt-0 bg-slate-50">
     <div className="p-5 ">
     <ul className="mx-5 text-lg font-normal font-sans">
       <Link to="/"><li>Home</li></Link>
        <li>Shorts</li>
        <li>Subscription</li>
       
      </ul>
     </div>
     <hr></hr>
     <div>
     <ul className="p-5 mx-5 text-lg font-normal font-sans">
     <li>Library</li>
        <li>History</li>
        <li>Your Videos</li>
        <li>Watch Later</li>
        <li>Like Videoes</li>
     </ul>

     </div>
     <hr>
     </hr>
    </div>
  );
};

export default Sidebar;
