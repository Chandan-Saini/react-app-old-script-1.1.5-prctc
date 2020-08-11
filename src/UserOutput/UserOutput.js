import React from "react"

const userOutput=(props)=>{

    return (
    <div>
        <p onClick={props.click} >this is {props.userName} </p>
        <p>i am 20 years old</p>
    </div>
    )
}

export default userOutput