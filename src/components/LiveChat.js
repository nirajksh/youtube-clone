import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { generate } from "../utils/helper";
import { generateRandomMessage } from "../utils/helper";

import Chat from "./Chat";
import { addMessage } from "../utils/chatSlice";
const LiveChat = ()=>{
    const [messages, setMessages] = useState("")
    console.log(messages)
    const dispatch = useDispatch()

    const chatMessage = useSelector((store)=>store.chat.messages)


    useEffect (()=>{
        const timer=  setInterval(()=>{
            dispatch(addMessage({
                name:generate(),
                message:generateRandomMessage(20)+"😎"
            }))
  
          },3000)
          return ()=>clearInterval(timer)
  
      },[])
    return (<><div className=" w-[350px] mt-2 bg-slate-100 border border-black h-[425px] rounded-lg overflow-y-scroll">
        <h1>LiveChat</h1>
       { chatMessage.map((c,i)=><Chat key={i} name={c.name} msg={c.message}/>)}

        
    </div>
    <form className=" w-full border mt-2 ml-1 border-black rounded-md bg-slate-100" onSubmit={(e)=>{
        e.preventDefault()
        dispatch(addMessage({
            name:"Niraj Singh",
            message:messages,
        }))
        setMessages("")
    }}>
        <input  className = "w-[300px] bg-slate-100"type="text"onChange={(e)=>setMessages(e.target.value)} 
        value={messages}
        />
        <button className="p-1 rounded-lg bg-green-100">Send</button>
    </form>
    </>
    )
}
export default LiveChat;