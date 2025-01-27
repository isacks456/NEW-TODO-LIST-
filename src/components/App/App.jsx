import { Route, Routes } from 'react-router-dom'
import styles from './App.module.scss'
import { Home } from '../pages/home/Home'
import { AboutUs } from '../pages/AboutUs/AboutUs'
import { Todolist } from '../pages/ToDoList/Todolist'
import { NotfoundPage } from '../pages/NotFoundPage/Notfoundpage'
import { Header } from '../Header/Header'

function App() {

  return (
		<div>
			<Header/>
			<div className='container'>
			<Routes>
				<Route path='/' element={<Home/>} />
				<Route path='/aboutus' element={<AboutUs/>} />
				<Route path='/todolist' element={<Todolist/>} />
				<Route path='*' element={<NotfoundPage/>} />
			</Routes>
			</div>
		</div>
  )
}

export default App
