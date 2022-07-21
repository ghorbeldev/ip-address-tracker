import React from 'react';
import './box.scss';
const Box = ({ ipaddress, location, timezone, isp }) => {
	return (
		<div className='box-wrapper'>
			<div>
				<h6>IP ADDRESS</h6>
				<h3>{ipaddress}</h3>
			</div>
			<div>
				<h6>LOCATION</h6>
				<h3>{location}</h3>
			</div>
			<div>
				<h6>TIMEZONE</h6>
				<h3>{timezone}</h3>
			</div>
			<div>
				<h6>ISP</h6>
				<h3>{isp}</h3>
			</div>
		</div>
	);
};

export default Box;
