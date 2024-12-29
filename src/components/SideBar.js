import React from 'react'
import { IoMenu } from "react-icons/io5";
import { IoMdAddCircleOutline } from "react-icons/io";
import { MdOutlineHome } from "react-icons/md";
import { RiGalleryFill } from "react-icons/ri";
import { MdGridOn } from "react-icons/md";
import { TbGitBranch } from "react-icons/tb";
import { FaSearch } from "react-icons/fa";
import { FaCode } from "react-icons/fa6";
import { MdOutlineSimCard } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { FiGrid } from "react-icons/fi";
import { LuMessageCircleQuestion } from "react-icons/lu";
import { AiOutlineLike } from "react-icons/ai";



function SideBar() {
    return (
        <div className="side-bar">
            <IoMenu className='header-icon mt-10 white-color'/>
            <IoMdAddCircleOutline className='header-icon mt-10'/>
            <MdOutlineHome className='header-icon mt-10'/>
            <RiGalleryFill className='header-icon mt-10 white-color'/>
            <MdGridOn className='header-icon mt-10'/>
            <TbGitBranch className='header-icon mt-10'/>
            <FaSearch className='header-icon mt-10'/>
            <FaCode className='header-icon mt-10'/>
            <MdOutlineSimCard className='header-icon mt-10'/>
            <FaUsers className='header-icon mt-10'/>
            <FiGrid className='header-icon mt-10'/>
            <LuMessageCircleQuestion className='header-icon mt-10'/>
            <AiOutlineLike className='header-icon mt-10'/>
        </div>
    )
}

export default SideBar
