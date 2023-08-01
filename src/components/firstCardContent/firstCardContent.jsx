import React from 'react'
import './firstCardContent.css'
function FirstCardContent({className,data}) {
  const {content}=data[0].firstCardContent
  return (
    <div 
    className={className}>
   <p>{content}</p>
    </div>
  )
}

export default FirstCardContent