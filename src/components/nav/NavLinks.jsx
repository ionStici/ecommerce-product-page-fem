import styles from './../../styles/nav.module.scss';

const navs = ['Collections', 'Men', 'Women', 'About', 'Contact'];

function NavLinks({ isOpen, toggleNav }) {
  const handleClick = ({ target }) => {
    if (isOpen && target.nodeName === 'NAV') toggleNav();
  };

  return (
    <nav className={styles.nav} onClick={handleClick}>
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
