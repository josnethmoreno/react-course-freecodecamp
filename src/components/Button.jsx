import '../stylesheet/Button.css'

function Button({ text, btnClick, handlerClick }){
	return(
		<button 
			className={ btnClick ? 'Button-click' : 'Button-reset' }
			onClick={handlerClick} >
			{text}
		</button>
	);
}

export default Button