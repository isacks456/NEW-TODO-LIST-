import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.scss';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={styles.Header}>
      <div className={styles.subHeader}>ToDo-List</div>
      <div className={`${styles.burgerIcon} ${isMenuOpen ? styles.open : ''}`} onClick={toggleMenu}>
  			<span className={`${styles.spanHeader2} ${isMenuOpen ? styles.open1 : ''}`}></span>
				<span className={`${styles.spanHeader2} ${isMenuOpen ? styles.open1 : ''}`}></span>
				<span className={`${styles.spanHeader2} ${isMenuOpen ? styles.open1 : ''}`}></span>
			</div>
      <span className={`${styles.spanHeader} ${isMenuOpen ? styles.open : ''}`}>
        <div className={styles.spanHeader1}>
          <NavLink to='/' className={styles.linkHeader} onClick={toggleMenu}>Home</NavLink>
          <NavLink to='/aboutus' className={styles.linkHeader} onClick={toggleMenu}>About Us</NavLink>
          <NavLink to='/todolist' className={styles.linkHeader} onClick={toggleMenu}>ToDo-List</NavLink>
        </div>
      </span>
    </div>
  );
};