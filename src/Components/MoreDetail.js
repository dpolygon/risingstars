import React, { useState} from 'react'
import './MoreDetail.css'
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";



export default function MoreDetail(props) {
    const [click, setClick] = useState(false)
    const handleClick = () => {
        setClick(!click)
        console.log("clicked")
    }
    const checkData = props.title != "" ? "block" : "none"

    return (
        <div style={{display: checkData, background: '#e5e5ea', borderRadius: '25px', cursor: 'grab', marginTop: '10px'}} onClick={handleClick} onCopy="">
            <div style={{display: 'flex', flexDirection: 'column', padding: '25px'}}>
                <div style={{display: 'flex', flexDirection: 'horizontal', justifyContent: 'space-between', alignItems: 'center'}}>
                    <h3>{props.title}</h3>
                    {click ? <IoIosArrowUp/> : <IoIosArrowDown/>}
                </div>
                {click ? <p className='miles'>{props.insideText}</p> : <p></p>}
            </div>
        </div>
    )
}