import React from 'react'

export const  GiftItem=({title, url,id})=> {
    
  return (
    <div className="card">
        <h1>{title}</h1>
        <img src={url} alt={title} />
    </div>
  )
}

