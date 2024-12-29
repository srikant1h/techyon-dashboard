import React from 'react'
import { LuSearch } from "react-icons/lu";
import { LuSlidersHorizontal } from "react-icons/lu";
import { GrAnnounce } from "react-icons/gr";
import { MdNotificationsNone } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";


export default function Header() {
    return (
        <div className="header d-flex justify-between align-end">
            <div className='logo'>TECHYON</div>
            <div>
                <LuSearch className='header-icon'/>
                <LuSlidersHorizontal className='header-icon'/>
                <GrAnnounce className='header-icon'/>
                <MdNotificationsNone className='header-icon'/>
                <FaRegUserCircle className='header-icon'/>
                <FaAngleDown className='header-icon'/>
            </div>
        </div>
    )
}
