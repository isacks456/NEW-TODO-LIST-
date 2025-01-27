import { useState } from 'react'
import styles from './Todolist.module.scss'

export const Todolist = () => {

	const [value, setValue] = useState('');
	const [title, setTitle] = useState([]);

	const handleInput = (event) => {
		setValue(event.target.value);
	}

	const handleButton = () =>  {
		if (value.trim().length === 0) {
			alert('Task cannot be empty!')
			return;
		}
		if(value.length > 200) {
			alert('Task cannot exceed 200 characters!')
			setValue('')
			return;
		}

		setTitle((prevTitle) => [...prevTitle, value])
		setValue('');

	}

	const removeButton = (indexRemove) => {
			setTitle(title.filter((_, index) => index !== indexRemove))
	}

	return (
		<div className={styles.Todolist}>
			<div className={styles.Todolist1}>
				<div className={styles.subTodolist}>TODO-LIST</div>
				<div className={styles.blockTodolist}>
					<input type="text" placeholder='Write the tasks' onChange={handleInput} value={value} className={styles.inputTodolist} />
					<button onClick={handleButton} className={styles.buttonTodolist}>Add Task</button>
				</div>
			<ul className={styles.mainTodolist}>

				{title.map((el,index) => (
					<div className={styles.subBlock1}>
						<div className={styles.subBlock2}>
							<li key={index} className={styles.subBlock3}>{el}</li>
							<div className={styles.subBlock4}>
								<button onClick={() => removeButton(index)}>X</button>
							</div>
						</div>
					</div>
				))}

			</ul>
			</div>
		</div>
	)
}