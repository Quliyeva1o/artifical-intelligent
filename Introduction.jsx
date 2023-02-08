import React from 'react'
import introductionImg from '../assets/introduction.svg'
import Button from './Button'
import PlayIcon from '../assets/playIcon.svg'

const Introduction = () => {
  return (
    <div className='introduction row'><div className="left-side col-12 col-md-6 "><h6>Next genaretion platform</h6>
    <h1>Artificial intelligence<br/> & Syber security</h1>
    <p>Lorem ipsum is placeholder text commonly used in the graphic,<br/> print, and publishing industries for previewing layouts and<br/> visual mockups.</p>
    <div className="button-groups mt-5" >
      <Button buttonDeyeri="Get Started" />
      <Button buttonDeyeri="Watch video" icon={PlayIcon} />
    </div>
    
    
    
    
    </div>
    <div className="right-side col-12 col-md-6 d-flex justify-content-end"><img src={introductionImg} className="w-100" /></div></div>
  )
}

export default Introduction
