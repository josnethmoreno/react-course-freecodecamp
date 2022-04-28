import '../stylesheets/Button.css'

function Button(props) {

	const isOperator = valor => {
		if(!isNaN(valor) || valor === '.') return 'Is-numeric';
		if(isNaN(valor) && valor !== '=' && valor !== 'Clear') return 'Is-operator';
		if(valor === '=') return 'Is-submit';
		return 'Is-clear'
	}

	return(
		<div 
			className={`Button ${isOperator(props.children)}`}
			onClick={() => props.handlerClick(props.children)}>
			{props.children}
		</div>
	);
}

export default Button