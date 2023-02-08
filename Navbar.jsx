import React, { useRef } from 'react'
import logo from '../assets/logo.svg'
import { AiOutlineBars } from 'react-icons/ai'
import { ImCross } from 'react-icons/im'
import Button from './Button'


const navbar = () => {

    const OverlayMenuRef = useRef()
    function openOverlayMenu(e) {
        const kliklediyimYer = e.target

        if (kliklediyimYer.classList.contains('bars-icon')) {
            OverlayMenuRef.current.classList.add('aktiv')
        }

    }
    function closeOverlayMenu(e) {
        const kliklediyimYer = e.target

        if (kliklediyimYer.classList.contains('cross-icon')) {
            OverlayMenuRef.current.classList.remove('aktiv')
        }
    }


    return (
        <>
        <div className="overlay" ref={OverlayMenuRef}>
               <ImCross className='cross-icon' onClick={closeOverlayMenu} />

                <div className="nav-links">
                    <a href="">Home</a>
                    <a href="">About</a>
                    <a href="">Services</a>
                    <a href="">Blog</a>
                    <a href="">Contact</a>
                </div>
            </div>

            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand text-white" href="#"><img src={logo} alt="" /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" onClick={openOverlayMenu}>
                        <AiOutlineBars className='bars-icon' />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 mt-2 ms-5">
                            <li className="nav-item">
                                <a className="nav-link text-white" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" aria-current="page" href="#">Services</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" aria-current="page" href="#">Blog</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" aria-current="page" href="#">Contact</a>
                            </li>

                        </ul>
<Button buttonDeyeri="SIgn In" />

                    </div>
                </div>
            </nav>
        </>
    )
}

export default navbar