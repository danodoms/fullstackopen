import { useEffect } from "react";

const Notification = ({ text, type, setNotification }) => {
  useEffect(() => {
    setTimeout(() => setNotification({}), 5000);
  }, [text, type]);

  const style =
    type == "success"
      ? "padded-container-success"
      : type == "error"
      ? "padded-container-error"
      : null;

  //   let style = null;

  //   if (type == "success") {
  //     style = "padded-container-success";
  //   } else if (type == "error") {
  //     style = "padded-container-error";
  //   }

  return (
    <div className={style}>
      <h2>{text}</h2>
    </div>
  );
};

export default Notification;
