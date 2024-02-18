import React from 'react'

const Button = ({name}) => {
   // console.log(name)
  return (
    <div className='m-1 px-5 py-2 rounded-md bg-slate-100'>{name}</div>
  )
}

export default Button