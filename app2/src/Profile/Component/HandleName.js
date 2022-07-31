
import React from 'react'

const HandleName = (props) => {
  return (
    <div>
    <button onClick={() => props.handleEvent()}>Click on me</button>
    </div>
  )
}

export default HandleName
 