import ardown from '../images/icon-arrow-down.svg'
import arup from '../images/icon-arrow-up.svg'
import calendar from '../images/icon-calendar.svg'
import todo from '../images/icon-todo.svg'
import planning from '../images/icon-planning.svg'
import reminder from '../images/icon-reminders.svg'
import React, {useState} from 'react'
const Feature=()=>{
    const [arrowposup,setArrowPos]=useState(false)
    const [showFeatureDrop,setFeatureDrop]=useState(true)
    // function arrowToggle(){
    //     se
    // }
    return (
        <div onClick={()=>{setArrowPos(!arrowposup);setFeatureDrop(!showFeatureDrop)}} className='feature'>Features<img onClick={()=>{setArrowPos(!arrowposup);setFeatureDrop(!showFeatureDrop)}} className='arrdownicon' src={arrowposup?arup:ardown} alt='arrow'/>
            <div className={`feature-drop ${!showFeatureDrop?'disblock':'disnone'}`}>
                <div><img className='arrdownicon' src={todo} alt='arrow'/>Todo List</div>
                <div><img className='arrdownicon' src={calendar} alt='arrow'/>Calendar</div>
                <div><img className='arrdownicon' src={reminder} alt='arrow'/>Reminders</div>
                <div><img className='arrdownicon' src={planning} alt='arrow'/>Planners</div>
            </div>
        </div>
    )
}
export default Feature