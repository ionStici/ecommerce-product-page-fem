import styles from './../../styles/nav.module.scss';

const navs = ['Collections', 'Men', 'Women', 'About', 'Contact'];

function NavLinks() {
  return (
    <nav className={styles.nav}>
      <ul>
        {navs.map((nav) => {
          return (
            <li key={nav}>
              <a href=".">{nav}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default NavLinks;
