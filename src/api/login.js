import axios from './config.js'

export function login(name,password) {

	const url = '/api/index.php?g=AdminApi&m=Login&a=login'

	const data = {
		username: name,
		password: password,
	};

	return axios.post(url,data);	

}