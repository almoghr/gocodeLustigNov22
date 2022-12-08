import React, { useEffect, useRef } from 'react'

const Login = () => {
    const refContainer = useRef(null)
    

    useEffect(()=>{refContainer.current.focus()},[])

    const afterRef = () => {
        refContainer.current.focus()
        refContainer.current.style.border = '3px solid pink'
        refContainer.current.style.height = '300px'
    } 

    
  return (
    <div>
        <input ref={refContainer}/>
        <button onClick={afterRef}>הגב</button>
    </div>
  )
}

export default Login