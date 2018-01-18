import axios from './config.js'


//官网-首页-轮播图列表
export function getBannerList() {
	const url = '/api/index.php?g=AdminApi&m=Pc&a=pcslide';
	return axios.post(url);
}

//官网-首页-商品分类
export function getGoodsType() {
    const url = '/api/index.php?g=AdminApi&m=Pc&a=cate';
	return axios.post(url);
}

//官网-首页-内容列表
export function getContent() {
	const url = '/api/index.php?g=AdminApi&m=Pc&a=content'
	return axios.post(url);
}
