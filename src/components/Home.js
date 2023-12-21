import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
	return (
		<div className="home">
			<Link className="home-link" to="/nasaphoto">Direktor von NASA SS Obergruppen Fuhrer Dr. Hans Kammler Welcomes you!</Link>
		</div>
	);
}
