import styles from './../../styles/nav.module.scss';

function Profile() {
  return (
    <button className={styles.btn_user_photo} aria-label="Profile">
      <img src="/images/image-avatar.png" alt="User Photo" />
    </button>
  );
}

export default Profile;
