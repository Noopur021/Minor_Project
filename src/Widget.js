import React from "react";
import "./css/widget.css"
import InfoIcon from '@mui/icons-material/Info';

 function Widget(){
    return(
        <div>
            <div className="widget">
                <div className="widget_top">
                    <div className="widget_header">
                        <h4>LinkedIn News</h4>
                        <InfoIcon />
                    </div>
                    <div className="widget_body">
                        <ul className="widget_options">
                            <li>
                                <h4>Slaying Job Seacrh Fees</h4>
                                <p>6d ago * 4,55 readers</p>
                            </li>

                            <li>
                                <h4>A Two pizza rule for eating</h4>
                                <p>2d ago * 6,12 readers</p>
                            </li>

                            <li>
                                <h4>How to handle workplace breakup</h4>
                                <p>3d ago * 455, readers</p>
                            </li>
                            <li>
                                <h4>Flexi leave is the new flexi</h4>
                                <p>4d ago * 3,45 readers</p>
                            </li>
                            <li>
                                <h4>Shorter hour boost productivity</h4>
                                <p>1d ago * 4,55 readers</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
 }

 export default Widget;