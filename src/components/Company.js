import ardown from '../images/icon-arrow-down.svg'
import arup from '../images/icon-arrow-up.svg'
import React, {useState} from 'react'
const Company=()=>{
    const [arrowposup,setArrowPos]=useState(false)
    const [showCompanyDrop,setCompanyDrop]=useState(true)
    return (
        <div onClick={()=>{setArrowPos(!arrowposup);setCompanyDrop(!showCompanyDrop)}} className="company shift">Company<img onClick={()=>{setArrowPos(!arrowposup);setCompanyDrop(!showCompanyDrop)}} className='arrdownicon' src={arrowposup?arup:ardown} alt='arrow'/>
           <div className={`company-drop ${!showCompanyDrop?'disblock':'disnone'}`}>
                <div>History</div>
                <div>Our Team</div>
                <div>Blog</div>
           </div>
        </div>
    )
}
export default Company