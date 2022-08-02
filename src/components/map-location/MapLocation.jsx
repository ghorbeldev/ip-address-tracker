import React, { useEffect } from 'react';
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet';
import './map-location.scss';
import 'leaflet/dist/leaflet.css';
// import L from 'leaflet';
function ChangeMapView({ coords }) {
	const map = useMap();
	map.setView(coords, map.getZoom());

	return null;
}
const MapLocation = ({ position, name }) => {
	// const map = useMap();
	// map.setView(position, map.getZoom());
	console.log(position);
	useEffect(() => {
		const L = require('leaflet');

		delete L.Icon.Default.prototype._getIconUrl;

		L.Icon.Default.mergeOptions({
			iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
			iconUrl: require('leaflet/dist/images/marker-icon.png'),
			shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
		});
	}, []);
	return (
		<div className='map-wrapper'>
			<MapContainer center={position} zoom={13} scrollWheelZoom={true}>
				<TileLayer
					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
					url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
				/>
				<ChangeMapView coords={position} />
				<Marker position={position}>
					<Popup>{name}</Popup>
				</Marker>
			</MapContainer>
		</div>
	);
};

export default MapLocation;
