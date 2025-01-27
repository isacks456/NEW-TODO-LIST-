import { NavLink } from "react-router-dom"
import styles from './Header.module.scss'

export const Header = () => {
	return (
		<div className={styles.Header}>
			<div className={styles.subHeader}>ToDo-List</div>
			<span className={styles.spanHeader}>
				<NavLink to='/' className={styles.linkHeader}>Home</NavLink>
				<NavLink to='/aboutus' className={styles.linkHeader}>About Us</NavLink>
				<NavLink to='/todolist' className={styles.linkHeader}>ToDo-List</NavLink>
			</span>
		</div>
	)
}
