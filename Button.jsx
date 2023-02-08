import React from 'react'

const Button = ({buttonDeyeri,icon}) => {
  return (
    
    <a href='' className='my-custom-btn text-white mt-2' ><img src={icon} alt="" />{buttonDeyeri}</a>
  )
}

export default Button