import React from 'react'
 

const Message = ({
    createdAt = null,
    text = '',
    displayName = ''
})=>{
    return(
        
        <div className="">
<p>{text}</p>

        </div>
    )
}

export default Message
