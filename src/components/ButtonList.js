import React from 'react'
import Button from './Button'

const Lists = ["All","Mixes","Music","Bollywood","Live","Cricket","Hollywood","Bhojpuri", "GAming", "Technology","A.I"]
const ButtonList = () => {

 
  

  return (
   <div className='flex'>
 {Lists.map((list,key)=>(<Button key={key} name={list}/>))}
   </div> 
  )
}

export default ButtonList