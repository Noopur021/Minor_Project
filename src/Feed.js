import React, { useEffect } from "react"
import { Avatar} from "@mui/material"
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import MovieIcon from '@mui/icons-material/Movie';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import "./css/feed.css"
import Post from "./Post"
import firebase from 'firebase/compat/app'; //older version"
import {db} from "./firebase";
import  {useState } from "react";
// import { SettingsInputAntenna } from "@mui/icons-material";


 
function Feed(){
    const[posts,setPost]=useState([]);
    const [input,setInput]=useState();
    const submitPost=(e)=>{
        e.preventDefault();
        alert(input);

   db.collection("posts").add({
       name:'Varnit Parashar',
       description:"THis is test Description",
       message:input,
       photoURL:"https://www.agoravoyages.com/uploads/categoryimage/1530211382.jpg",
       timestamp:firebase.firestore.FieldValue.serverTimestamp(),
   });
   

  
   setInput("");
    }

    useEffect(()=>{
db.collection("posts").orderBy("timestamp","desc").onSnapshot(snapshot=>{
    setPost(snapshot.docs.map(doc=>({
        id:doc.id,
        data:doc.data()
    })))
})    },[])
    return(
        <div className = "feed">
            <div className="feed_input">
                <div className="feed_form">
                    <Avatar />
                    <form onSubmit={submitPost}>
                        <input type = "text" placeholder="Start a post" value={input}
                        onChange={e=>setInput(e.target.value)}/>
                        <input type="submit" />
                    </form>
                </div>
            

            <div className="feed_options">
                <div className="option">
                <InsertPhotoIcon style={{color:'#70b5f9'}}/>
                    <span>Photo</span>
                </div>

                <div className="option">
                <MovieIcon style={{color:'7fc15e'}}/>
                    <span>Video</span>
                </div>

                <div className="option">
                <CalendarMonthIcon style={{color:'e7a33e'}}/>
                    <span>Event</span>
                </div>

                <div className="option">
                <DriveFileRenameOutlineIcon style={{color:'fc9295'}}/>
                    <span>Write Article</span>
                </div>
            </div>
            </div>

            {/* <Post name="Shridutt" description="ReactJS" message="This is a test." photoURL=""/>
            <Post name="Shridutt" description="ReactJS" message="This is a test." photoURL=""/>
            <Post name="Shridutt" description="ReactJS" message="This is a test." photoURL=""/> */
            posts.map(({id,data:{name,description,message,photoURL}})=>{
                return <Post key={id} name={name} descritption={description} message={message} photoURL={photoURL}/>
            })}

        </div>
    )
}

export default Feed;