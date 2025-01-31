import styles from './About.module.scss'

export const AboutUs = () => {
	return (
		<div className={styles.AboutUs}>
			<div className={styles.subAboutUs}>
				On this site you can create tasks.
			</div>
			<div className={styles.subAboutUs1}>
				<div className={styles.subAboutUs2}>
					This is my GitHub
					<a href="https://github.com/isacks456" className={styles.linkAboutUs}><img src="/public/github-logo.png" alt="GitHub" className={styles.imageAboutUs} />GitHub</a>
				</div>
			</div>
		</div>
	)
}
