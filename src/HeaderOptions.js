import { Avatar } from "@mui/material";
import React from "react";
import "./css/header.css"
import {useSelector} from 'react-redux';
import {auth} from './firebase'
import {selectUser} from './features/UserSlice'
function HeaderOptions({Icon, title, avatar}){

    const user=useSelector(selectUser);
    return(
        <div className="header_options">
            {
                Icon && <Icon></Icon>
            }
            {
                avatar && <Avatar name = {avatar} src={user.photoURl} onClick={e=>auth.signOut()}/>
            }
            <span>{title}</span>
        </div>
    )
}

export default HeaderOptions;