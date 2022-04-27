import Button from './Button.jsx'
import '../stylesheets/Nav.css'

function Nav() {
	return (
		<nav className='Nav'>
			<div className='Nav-left'>
				<input className='Nav-input' type='text' placeholder='Search +8000 tutorials' />
			</div>
			<div className='Nav-middle'>
				<a className='Nav-brand' href='#'>freeCodeCamp</a>
			</div>
			<div className='Nav-right'>
				<Button text='Menu'/>
			</div>
		</nav>
	)
}

export default Nav