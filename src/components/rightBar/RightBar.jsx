import React from 'react';
import './rightbar.scss';
import * as Sentry from '@sentry/react';

const RightBar = () => {
  return (
    <div className="rightBar">
      <div className="container">
        {/** suggested friends **/}
        <div className="item">
          <span>Suggested Friends</span>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/2007647/pexels-photo-2007647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
              <span>zombie Mee</span>
            </div>
            <div className="buttons">
              <button className="follow">Follow</button>
              <button className="dismiss">Dismiss</button>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/2007647/pexels-photo-2007647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
              <span>zombie Mee</span>
            </div>
            <div className="buttons">
              <button className="follow">Follow</button>
              <button className="dismiss">Dismiss</button>
            </div>
          </div>
        </div>

        {/** Latest activities **/}
        <div className="item">
          <span>Latest Activities</span>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/2007647/pexels-photo-2007647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
              <p>
                <span>zombie Mee </span>
                changed their status
              </p>
            </div>
            <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
              <p>
                <span>Kyran Lane </span>
                changed his profile picture
              </p>
            </div>
            <span>3 mins ago</span>
          </div>
        </div>

        {/** online friends **/}
        <div className="item">
          <span>Online Friends</span>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/532220/pexels-photo-532220.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <div className="online" />
              <span>Maxi Perez</span>
            </div>
            <div className="Chatbuttons">
              <button className="chat">Chat</button>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <div className="online" />
              <span>Leo Neo</span>
            </div>
            <div className="Chatbuttons">
              <button className="chat">Chat</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sentry.withProfiler(RightBar, { name: 'RightBar' });
