import React from 'react';
import moment from "moment";

const Notifications = (props) => {
  const { notifications } = props;

  const notificationList = notifications ?
    notifications.map(notification => {
      return (
        <li key={notification.id} >
          <span className="red-text text-darken-4">{notification.user} </span>
          <span>{notification.content}</span>
          <div className="grey-text">
            {moment(notification.time.toDate()).fromNow()}
          </div>
        </li>);
    })
    :
    (<div className="center">Loading...</div>)

  return (
    <div className="section">
      <div className="card z-depth-0 smoke-effect">
        <div className="card-content">
          <span className="card-title">Notifications</span>
          <ul className="notifications">
            {notificationList}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Notifications;