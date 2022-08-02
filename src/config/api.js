import axios from 'axios';

const apiKey = 'at_vdDI9PD46NHl3Ru4k1cOpTScitxDZ';
const apiURL = `https://geo.ipify.org/api/v2/country,city,vpn?apiKey=${apiKey}`;
const IPRegex =
	/^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;

export const getIPInformation = v => {
	if (IPRegex.test(v)) {
		return axios.get(apiURL + `&ipAddress=${v}`);
	}
	return axios.get(apiURL + `&domain=${v}`);
};
