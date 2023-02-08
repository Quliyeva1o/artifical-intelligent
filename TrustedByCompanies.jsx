import React from 'react'
import Company from './Company'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import shirket1 from "../assets/companies/partner1.svg"
import shirket2 from "../assets/companies/partner2.svg"
import shirket3 from "../assets/companies/partner3.svg"
import shirket4 from "../assets/companies/partner4.svg"
const TrustedByCompanies = () => {
  return (
    <div className='companies'>
<Company shekil={shirket1}/>
<Company shekil={shirket2}/>
<Company shekil={shirket3}/>
<Company shekil={shirket4}/>
    </div>
  )
}

export default TrustedByCompanies