import React, { useState } from "react";
import Style from "./../../styles/Notification.module.css";

const Notification = () => {
  const [Notifications, setNotifications] = useState([
    {
      id: 1,
      title: "New user registered 1",
      body: "A new user has registered",
      date: "2020-01-01",
    },
    {
      id: 2,
      title: "New user registered 2",
      body: "A new user has registered",
      date: "2020-01-01",
    },
    {
      id: 3,
      title: "New user registered 3",
      body: "A new user has registered Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam sint praesentium deleniti, obcaecati perferendis error aliquam quisquam illum placeat fugiat doloremque rerum corporis, iusto facere nemo molestiae maxime repellendus. Tenetur placeat molestiae, ad eum maxime corporis, eligendi consequatur, doloribus quia impedit fuga. Quaerat doloribus et, minus saepe animi quam neque.",
      date: "2020-01-01",
    },
    {
      id: 4,
      title: "New user registered 4",
      body: "A new user has registered",
      date: "2020-01-01",
    },
    {
      id: 5,
      title: "New user registered 5",
      body: "A new user has registered",
      date: "2020-01-01",
    },
    {
      id: 6,
      title: "New user registered 6",
      body: "A new user has registered",
      date: "2020-01-01",
    },
  ]);
  const removeNotification = (id) => {
    setNotifications(
      Notifications.filter((notification) => notification.id !== id)
    );
  };

  return (
    <div className={Style.Notifications_container}>
      {Notifications.length !== 0
        ? Notifications.map((Notification) => (
            <div key={Notification.id} className={Style.Notification_item}>
              <div className={Style.Notification_content}>
                <h4 className={Style.Notification_title}>
                  {Notification.title}
                </h4>
                <hr />
                <p className={Style.Notification_message}>
                  {Notification.body}
                </p>
                <small className={Style.Notification_date}>
                  {Notification.date}
                  
                </small>
              </div>
              <div
                className={Style.remove_notification}
                onClick={() => {
                  removeNotification(Notification.id);
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 12 12"
                >
                  <path
                    fill="currentColor"
                    d="M5 3h2a1 1 0 0 0-2 0ZM4 3a2 2 0 1 1 4 0h2.5a.5.5 0 0 1 0 1h-.441l-.443 5.17A2 2 0 0 1 7.623 11H4.377a2 2 0 0 1-1.993-1.83L1.941 4H1.5a.5.5 0 0 1 0-1H4Zm3.5 3a.5.5 0 0 0-1 0v2a.5.5 0 0 0 1 0V6ZM5 5.5a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5ZM3.38 9.085a1 1 0 0 0 .997.915h3.246a1 1 0 0 0 .996-.915L9.055 4h-6.11l.436 5.085Z"
                  />
                </svg>
              </div>
            </div>
          ))
        : "You have no notifications"}
    </div>
  );
};

export default Notification;
