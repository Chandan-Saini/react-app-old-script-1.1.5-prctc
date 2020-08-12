import React from "react"

const validationComponent=(props)=>{
    let validText="Text too short"
   if (props.strlen >= 5) {
      validText = "Text too long"
     }

    return <p>{validText}</p>
}

export default validationComponent