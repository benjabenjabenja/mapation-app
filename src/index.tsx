import React from 'react';
import ReactDOM from 'react-dom/client';
//ROOT Component:
import MapationApp from './MapationApp';
//Helpers:
import { MENSAJE_NO_GEOLOCATION } from './helpers';
//Mapbox:
import mapboxgl from 'mapbox-gl';
// TO MAKE THE MAP APPEAR YOU MUST
// ADD YOUR ACCESS TOKEN FROM
// https://account.mapbox.com
mapboxgl.accessToken = process.env.VITE_MAPBOX_ACCESS_TOKEN || 'pk.eyJ1IjoiYWxleG9uZ2VyIiwiYSI6ImNtYW10Z211MjAwdG0ycXNtYmZ1Z2Z1Z2kifQ.MY_ACCESS_TOKEN_MAPBOX';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);

if(!navigator.geolocation) {
	alert(MENSAJE_NO_GEOLOCATION);
	throw new Error(MENSAJE_NO_GEOLOCATION);
}

root.render(
	<React.StrictMode>
		<MapationApp />
	</React.StrictMode>
);

