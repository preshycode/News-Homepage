import React from 'react'
import './component.css'

const Component = (props) => {
  return (
    <div className='component__container'>
        <div className="component__img"><img src={props.img} width="120px" height="150px" alt="" /></div>
        <div className="component__text">
            <big>{props.num}</big>
            <h3>{props.title}</h3>
            <p>{props.text}</p>
        </div>
    </div>
  )
}

export default Component