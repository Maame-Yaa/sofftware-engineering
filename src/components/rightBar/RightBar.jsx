import React from 'react'
import "./rightBar.scss";


const RightBar = () => {
  return (
    <div className="rightBar">
      <div className="container">
        <div className="item">
          <span>Suggestions For You</span>
          <div className="user">
            <div className="userInfo">
                        <img src={require('./images/acity-about.jpg')} alt=""/>

              <span>Mary</span>
            </div>
            <div className="buttons">
              <button>follow</button>
              <button>dismiss</button>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
                        <img src={require('./images/download.png')} alt=""/>

              <span>Fiifi Mensah</span>
            </div>
            <div className="buttons">
              <button>follow</button>
              <button>dismiss</button>
            </div>
          </div>
        </div>
        <div className="item">
          <span>Latest Activities</span>
          <div className="user">
            <div className="userInfo">
                        <img src={require('./images/acity-finance.jpg')} alt=""/>

              <p>
                <span>Ben</span> changed their cover picture
              </p>
            </div>
            <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
                        <img src={require('./images/acity-about.jpg')} alt=""/>

              <p>
                <span>Aalimah</span> changed their cover picture
              </p>
            </div>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="item">
          <span>Online Friends</span>
          <div className="user">
            <div className="userInfo">
                        <img src={require('./images/acity-finance.jpg')} alt=""/>

              <div className="online" />
              <span>Dela</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
                        <img src={require('./images/international-students-acity.jpg')} alt=""/>

              <div className="online" />
              <span>Jim</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
                        <img src={require('./images/visit-ac.jpg')} alt=""/>

              <div className="online" />
              <span>Lisa</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
                        <img src={require('./images/yotube_video.jpg')} alt=""/>

              <div className="online" />
              <span>Jake</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
                        <img src={require('./images/acity-about.jpg')} alt=""/>

              <div className="online" />
              <span>Joseph</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
                        <img src={require('./images/N5A0282-540x304.jpg')} alt=""/>

              <div className="online" />
              <span>Derrick</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
                        <img src={require('./images/acity-about.jpg')} alt=""/>

              <div className="online" />
              <span>John</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RightBar