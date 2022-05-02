import { useState } from 'react'
import Todo from './Todo.jsx'
import TodoForm from './TodoForm.jsx'
import '../stylesheets/TodoList.css'

export default function TodoList(){

	const [todos, setTodos] = useState([]);

  const addTodo = todo => {
    if (todo.text.trim()) {
      todo.text = todo.text.trim();
      const todosUpdate = [todo, ...todos];
      setTodos(todosUpdate);
    }
  }

  const removeTodo = id => {
  	const todosUpdate = todos.filter(todo => todo.id !== id);
  	setTodos(todosUpdate)
  }

	return(
		<>
			<TodoForm onSubmit={addTodo}/>
			<div className="TodoList">
				{
					todos.map((todo) => 
						<Todo
							key={todo.id}
							id={todo.id}
							text={todo.text}
							remove={removeTodo}
						/>
					)
				} 
			</div>
		</>
	);
}