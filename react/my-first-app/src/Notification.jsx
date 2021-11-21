const Notification = (props) => {
  const { text } = props;
  return (
    <div className="notifcation">
      <p className="notification-text">{text}</p>
    </div>
  );
};

export default Notification;
