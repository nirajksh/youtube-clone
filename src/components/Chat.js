import React, { useEffect } from 'react'
import icon from '../assets/avatar.png'

const Chat =({name ,msg})=>{


   

    return (
        <div className='flex'>
            <img className='h-7 ' src={icon} alt='icon'/>
            <span className='font-bold ml-2 '>{name}</span>
            <span className='mx-3'>{msg}</span>
        </div>
    )
}
 export default Chat;