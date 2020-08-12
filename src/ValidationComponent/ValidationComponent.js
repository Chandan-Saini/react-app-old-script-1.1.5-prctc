import React from "react"

const userInput=(props)=>{
    const style={
        border:"2px solid red",
        width:"200px",
        margin:"20px auto"

    }

    return <input style={style} type="text" onChange={props.change} value={props.curName} />
}

export default userInput