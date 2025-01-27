import { Link } from 'react-router-dom'
import styles from './Home.module.scss'


export const Home = () => {
	return (
		<div className={styles.Home}>
			<div className={styles.subHome}>
				<h1 className={styles.title1}>Welcome to the task list</h1>
				<Link to='/todolist' className={styles.linkHome}>Create Tasks</Link>
			</div>
		</div>
	)
}