import React from 'react';
import { ReactComponent as Arrow } from '../../assets/icons/icon-arrow.svg';
import Box from '../box/Box';
import './search.scss';
const Search = ({ value, handleChange, handleClick, data }) => {
	return (
		<div className='wrapper'>
			<h1>IP Address Tracker</h1>
			<div className='search'>
				<input
					type='text'
					name='ip'
					id='ip'
					value={value}
					onChange={handleChange}
					onKeyPress={e => e.key === 'Enter' && handleClick()}
					placeholder='Search for any IP address or domain'
				/>
				<div className='arrow' onClick={handleClick}>
					<Arrow />
				</div>
			</div>
			<Box
				ipaddress={data?.ip || 'xxx'}
				location={data?.location?.city || 'xxx'}
				timezone={data?.location?.timezone || 'xxx'}
				isp={data?.isp || 'xxx'}
			/>
		</div>
	);
};

export default Search;
