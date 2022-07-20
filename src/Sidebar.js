import React from "react";
import "./css/sidebar.css"
import {Avatar} from "@mui/material";

function Sidebar() {
    return(
        <div className="sidebar">
            <div className="sidebar_profile">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRADTmsS8wh4et913FBqT8SDet-ahKO56bvLQ&usqp=CAU" />

                <div className="profile_details">
                    <Avatar />
                    <h4>Shridutt Vishwakarma</h4>
                    <p>Web Developer</p>
                </div>

                <div className = "profile_stats">
                    <span>Who viewed your profile</span>
                    <span className="stat_number">20</span>
                </div>

                <div className = "profile_stats">
                    <span>Connection<br /><b>Grow Your Network</b></span>
                    <span className="stat_number">150</span>
                </div>
            </div>

            <div className="sidebar_recent">
                <p>Recent</p>
                <p className="hash"><span>#</span>frontEnd</p>
                <p className="hash"><span>#</span>backEnd</p>
                <p className="hash"><span>#</span>fullstack</p>
                <p className="hash"><span>#</span>mongodb</p>
                <p className="hash"><span>#</span>javascript</p>
            </div>
        </div>
    )
}

export default Sidebar;