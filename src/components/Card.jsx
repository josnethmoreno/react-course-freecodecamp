import '../stylesheets/Card.css';

function Card(props) {
	return (
		<div className='Card'>
			<img
				className='Card-img'
				src={props.img}
				alt='Foto de emma' />
			<div className='Card-wrapper'>
				<p className='Card-name'>{props.name} in {props.country}</p>
				<p className='Card-profile'>{props.profile} in {props.enterprise}</p>
				<p className='Card-text'>{props.text}</p>
			</div>
		</div>
	);
}

export default Card
