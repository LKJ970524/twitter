import { useNavigate } from "react-router-dom";
import styles from "./Notification.module.scss";
import { NotificationProps } from "pages/notifications";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "firebaseApp";

export default function NotificationBox({
  notification,
}: {
  notification: NotificationProps;
}) {
  const navigate = useNavigate()

  const onClickNotification = async (url: string) => {
    // isRead 업데이트
    const ref = doc(db, 'notifications', notification.id)
    await updateDoc(ref, {
      isRead: true,
    });
    // URL 이동
    navigate(url)
  } 

  return (
    <div key={notification.id} className={styles.notification}>
      <div onClick={() => onClickNotification(notification?.url)}>
        <div className={styles.notification__flex}>
          <div className={styles.notification__createdAt}>
            {notification?.createdAt}
          </div>
          {notification?.isRead === false && (
            <div className={styles.notification__unread} />
          )}
        </div>
        <div className="notification__content">{notification.content}</div>
      </div>
    </div>
  );
}
