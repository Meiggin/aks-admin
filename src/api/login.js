import axios from 'axios'
import qs from 'qs'

export function login(name,password) {

	const url = '/api/index.php?g=AdminApi&m=Login&a=login'

	const data = qs.stringify({
		username: 'admin',
		password: 1,
	});

	return axios.post(url,data).then((res) => {
		return Promise.resolve(res.data)
	}).catch(()=>{
		return Promise.reject()
	})

}