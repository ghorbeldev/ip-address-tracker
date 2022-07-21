import axios from 'axios';

const apiKey = 'at_YPEINM16QgpZW68CJrWFo03D6H39v';
const apiURL = `https://geo.ipify.org/api/v2/country,city,vpn?apiKey=${apiKey}`;
const IPRegex =
	/^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;

export const getIPInformation = v => {
	if (IPRegex.test(v)) {
		return axios.get(apiURL + `&ipAdress=${v}`);
	}
	return axios.get(apiURL + `&domain=${v}`);
};
