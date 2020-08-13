import React from "react"

const charComp=(props)=>{
   style={
       display:"inline-block",
       border:"2px solid black",
       width:"40px",
       height:"40px",
       textAlign:"center",
       padding:"5px"
   }

    return <p style={style}>{props.strng} </p>
}

export default charComp