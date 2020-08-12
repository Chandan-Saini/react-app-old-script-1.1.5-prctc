import React from "react"

const validationComponent=(props)=>{
    let validText="Text too short"
   if (props.strLen >= 5) {
     let validText = "Text too long"
     }

    return <p>{validText}</p>
}

export default validationComponent