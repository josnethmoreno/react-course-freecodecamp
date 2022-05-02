import '../stylesheets/Todo.css'
import { GoX } from "react-icons/go";

export default function Todo({ id, text, remove }) {

	return(
		<div className="Todo">
			<div 
				className="Todo-text" >
				{text}
			</div>
			<div 
				className="Todo-icon"
				onClick={() => remove(id)} >
				<GoX />
			</div>
		</div>
	);
}