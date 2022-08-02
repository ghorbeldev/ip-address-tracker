import axios from 'axios';
import { useEffect, useState } from 'react';
import MapLocation from './components/map-location/MapLocation';
import Search from './components/search/Search';
import { getIPInformation } from './config/api';
import './scss/_globals.scss';
function App() {
	useEffect(() => {
		const getIPData = async () => {
			try {
				const ip = await axios.get('https://api.ipify.org');
				const response = await getIPInformation(ip.data);
				console.log(response);
				setData(response.data);
			} catch (err) {
				console.log(err);
			}
		};
		getIPData();
	}, []);
	const [value, setValue] = useState('');
	const [data, setData] = useState([]);
	const handleChange = e => setValue(e.target.value);
	const handleClick = async () => {
		try {
			const response = await getIPInformation(value);
			setData(response.data);
			console.log(response.data);
		} catch (err) {
			console.log(err);
		}
	};
	return (
		<div className='App'>
			<Search
				value={value}
				handleChange={handleChange}
				handleClick={handleClick}
				data={data}
			/>

			{data.length !== 0 ? (
				<MapLocation
					position={[data.location.lat, data.location.lng]}
					name={data.isp}
				/>
			) : (
				<div className='map-wrapper'>
					Please Enter any IP address or domain in the Search field
				</div>
			)}
		</div>
	);
}

export default App;
