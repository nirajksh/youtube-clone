import React from 'react'
import icon from "../assets/avatar.png"

const commetsData=[
  {
    name:"Niraj Kumar Singh",
    text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    replies:[
      {
        name:"Niraj Kumar Singh",
        text:"sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        replies:[]
      },
      {
        name:"Niraj Kumar Singh",
        text:"sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        replies:[
          {
            name:"Niraj Kumar Singh",
            text:"sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
            replies:[]
          },
          {
            name:"Niraj Kumar Singh",
            text:"sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
            replies:[
              {
                name:"Niraj Kumar Singh",
                text:"sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
                replies:[]
              },
              {
                name:"Niraj Kumar Singh",
                text:"sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
                replies:[
                  {
                    name:"Niraj Kumar Singh",
                    text:"sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
                    replies:[]
                  },
                  {
                    name:"Niraj Kumar Singh",
                    text:"sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
                    replies:[
                      {
                        name:"Niraj Kumar Singh",
                        text:"sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
                        replies:[]
                      },
                      {
                        name:"Niraj Kumar Singh",
                        text:"sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
                        replies:[
                          {
                            name:"Niraj Kumar Singh",
                            text:"sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
                            replies:[]
                          },
                          {
                            name:"Niraj Kumar Singh",
                            text:"sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
                            replies:[]
                          },
                        ]
                      },
                    ]
                  },
                ]
              },
            ]
          },
        ]
      },
    ],
  
  },
  {
     name:"Niraj Kumar Singh",
  text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  replies:[]
},
  { 
    name:"Niraj Kumar Singh",
  text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  replies:[]
},
  {
     name:"Niraj Kumar Singh",
  text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  replies:[]
},
  {
     name:"Niraj Kumar Singh",
  text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  replies:[]
},
  {
     name:"Niraj Kumar Singh",
  text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  replies:[]
},
]
const Comment = ({data})=>{

const {name,text,replies}=data
  return <div className='flex shadow-sm bg-gray-100 my-2'>
    <img className ="h-12 w-12"src={icon} alt="icon"/>
    <div className='px-3'>
      <p className='font-bold'>{name}</p>
      <p>{text}</p>
          </div>
  </div>
}

const CommentList = ({comments})=>{

  return comments.map((comment,index)=>(
   <div>
     <Comment key={index} data={comment}/>
     <div className='pl-4 border border-l-black ml-4'>
    <CommentList key={index} comments={comment.replies}/>
     </div>
   </div>
  ))
}

const Comments = () => {
  return (
    <div className="m-5 p-2">
   <h1 className='text-2xl font-bold'>Comments:-</h1>
   <CommentList comments={commetsData}/>
    </div>
  )
}

export default Comments