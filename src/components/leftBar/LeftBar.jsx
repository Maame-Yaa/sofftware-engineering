import React from 'react'
import Friends from "../../assets/1.png";
import Market from "../../assets/3.png";
import Messages from "../../assets/10.png";
import Discover from "../../assets/discover.png";
import Announcements from "../../assets/megaphone.png";
import Finance from "../../assets/dollar.png";
import Housing from "../../assets/home.png";
import Academics from "../../assets/education.png";
import Meals from "../../assets/breakfast.png";
import Feedback from "../../assets/feedback.png";
import New from "../../assets/plus.png";
import "./leftBar.scss";
import { AuthContext } from "../../context/authContext";
import { useContext } from "react";

const LeftBar = () => {

  const { currentUser } = useContext(AuthContext);

  return (
    <div className='leftBar'>
    <div className="container">
      <div className="menu">
      <div className="user">
          <img src={currentUser.profilePic} alt=""/>
          <span>{currentUser.name}</span>
        </div>
        {/* <div className="user">
            <img
              src={currentUser.profilePic}
              alt=""
            />
            <span>{currentUser.name}</span>
          </div> */}
        <div className="item">
            <img src={Friends} alt="" />
            <span>Friends</span>
          </div>
          <div className="item">
            <img src={Discover} alt="" />
            <span>Discover</span>
          </div>
          <div className="item">
            <img src={Market} alt="" />
            <span>Market</span>
          </div>
          <div className="item">
            <img src={Announcements} alt="" />
            <span>Announcements</span>
          </div>
          <div className="item">
            <img src={Messages} alt="" />
            <span>Messages</span>
          </div>
      </div>
      <hr/>
      <div className="menu">
          <div className="item">
            <img src={Finance} alt="" />
            <span>Finance</span>
          </div>
          <div className="item">
            <img src={Housing} alt="" />
            <span>Housing</span>
          </div>
          <div className="item">
            <img src={Academics} alt="" />
            <span>Academics</span>
          </div>
          <div className="item">
            <img src={Meals} alt="" />
            <span>Meals</span>
          </div>
        </div>
        <hr />
        <div className="menu">
          <div className="item">
            <img src={New} alt="" />
            <span>New</span>
          </div>
          <div className="item">
            <img src={Feedback} alt="" />
            <span>Feedback</span>
          </div>
        </div>

    </div>
  </div>
  )
}

export default LeftBar