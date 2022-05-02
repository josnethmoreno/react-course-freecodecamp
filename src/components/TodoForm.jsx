import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import '../stylesheets/TodoForm.css'

export default function TodoForm(props) {

	const [input, setInput] = useState('')

	const handlerInput = (e) => {
		setInput(e.target.value)
	}

	const handlerSubmit = (e) => {
		e.preventDefault()
		const form = e.target;
		form.reset()

		const newTodo = {
			id: uuidv4(),
			text: input,
			completed: 'false'
		}

		props.onSubmit(newTodo)
	}

	return(
		<form 
			className="TodoForm" 
			onSubmit={handlerSubmit} >
			<input 
				className="TodoInput" 
				type="text" 
				placeholder="Add new task!"
				onChange={handlerInput}
				required
			/>
			<button className="TodoSubmit">
				Add Task!
			</button>
		</form>
	);
}