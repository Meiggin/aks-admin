import axios from './config.js'
import qs from 'qs'

export function getTopList() {

  const url = 'https://c.y.qq.com/v8/fcg-bin/fcg_myqq_toplist.fcg'

  const data = qs.stringify({
  	currentPage: "0",
  	pageSize: "10",
  	type: "1",
  });

  return axios.post(url,data).then((res)=>{

  })

}
