import '../stylesheets/Calculator.css'
import Button from './Button.jsx'

function Calculator({ input, addInput, clearInput, evalInput }){
	return (
		<div className="Calculator">
			<div className="Calculator-screen">
				{input}
			</div>
			<div className="Calculator-buttons">
				<Button handlerClick={addInput}>1</Button>
				<Button handlerClick={addInput}>2</Button>
				<Button handlerClick={addInput}>3</Button>
				<Button handlerClick={addInput}>+</Button>
				<Button handlerClick={addInput}>4</Button>
				<Button handlerClick={addInput}>5</Button>
				<Button handlerClick={addInput}>6</Button>
				<Button handlerClick={addInput}>-</Button>
				<Button handlerClick={addInput}>7</Button>
				<Button handlerClick={addInput}>8</Button>
				<Button handlerClick={addInput}>9</Button>
				<Button handlerClick={addInput}>*</Button>
				<Button handlerClick={evalInput}>=</Button>
				<Button handlerClick={addInput}>0</Button>
				<Button handlerClick={addInput}>.</Button>
				<Button handlerClick={addInput}>/</Button>
				<Button handlerClick={clearInput}>Clear</Button>
			</div>
		</div>
	);
}

export default Calculator