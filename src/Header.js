import React from 'react'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import HeaderOptions from "./HeaderOptions"
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsIcon from '@mui/icons-material/Notifications';
import {Avatar} from "@mui/material";
import {useSelector} from 'react-redux';
import {selectUser} from './features/UserSlice'

function Header() {

    const user=useSelector(selectUser);


    return(
        <div className="header">
            <div className = "header_left">
                <div className = "header_logo">
                    <img src="https://cdn-icons-png.flaticon.com/512/2111/2111499.png"></img>
                </div>
                <div className="header_search">
                    <SearchOutlinedIcon />
                    <input type="text" placeholder="Search"></input>
                </div>
            </div>
            <div className = "header_right">
                <HeaderOptions Icon={HomeIcon} title="Home" />
                <HeaderOptions Icon={PeopleIcon} title="My Network" />
                <HeaderOptions Icon={BusinessCenterIcon} title="Jobs" />
                <HeaderOptions Icon={MessageIcon} title="Messaging" />
                <HeaderOptions Icon={NotificationsIcon} title="Notifications" />
                <HeaderOptions avatar={Avatar} title="Shridutt" />

            </div>
        </div>
    )
}

export default Header;