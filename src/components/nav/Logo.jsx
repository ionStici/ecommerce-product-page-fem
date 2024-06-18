import styles from './../../styles/nav.module.scss';

function Logo() {
  return (
    <a className={styles.btn_logo} href=".">
      <img src="images/logo.svg" alt="Sneakers Logo" width={132} height={20} />
    </a>
  );
}

export default Logo;
