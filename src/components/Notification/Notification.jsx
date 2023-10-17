import css from 'components/Notification/Notification.module.css';
export default function Notification({ message }) {
  return <h2 className={css.notification}>{message}</h2>;
}
