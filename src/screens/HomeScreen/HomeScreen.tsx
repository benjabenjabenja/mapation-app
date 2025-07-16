import React from 'react'
//Components:
import { MapView } from './components';
import { ButtonLocation, InputSearch, LogoMapationApp } from '../../components';

const HomeScreen: React.FC = () => {
	return (
		<main className='container'>
			{/* INPUT SEARCH */}
			<InputSearch />

			{/* MAP VIEW */}
			<MapView />

			{/* BUTTON LOCATION */}
			<ButtonLocation />

			{/* LOGO */}
			<LogoMapationApp />
		</main>
	);
}

export default HomeScreen