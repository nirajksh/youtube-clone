import logo from "../assets/youtube logo 1.jpg"
import menu from "../assets/menu icon.jpg"
import notification from "../assets/notification icon.jpg"
import avatar from "../assets/avatar.png"
import create from "../assets/create icon.png"
import { useDispatch } from "react-redux"
import { toggelMenu } from "../utils/appSlice"
const Header = () =>{
    const dispatch = useDispatch()
    const menuHandler = ()=>{
        dispatch(toggelMenu())

    }

    return(
        <div className=" p-3 shadow-lg bg-slate-100 grid grid-flow-col">
            <div className="flex mx-4 col-span-1 cursor-pointer">
                <img className="h-8"
                onClick={()=>menuHandler()} 
                src={menu} 
                alt="menu-icon"/>
                <a href="/">
                <img className="h-8 mx-4" src={logo} alt="logo"/>
                </a>

            </div>
            <div className="flex  w-full col-span-10 ">
                <input type="text" className="p-2 w-1/2 font-medium border border-gray-400 rounded-l-full" placeholder="Search"/>
               <button className="border border-gray-400 rounded-r-full p-2">search</button>
            </div>
            <div className="flex col-span-1 gap-2">
                <img className="h-6 " src={create} alt="create"/>
                <img className="h-8 " src={notification} alt="notification"/>
                <img className="h-8 " src={avatar} alt="avatar"/>

            </div>

        </div>
    )
}

export default Header