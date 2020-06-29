import {request} from './request'

export function getBiliBiliFan() {
	return request({
		url: 'https://bird.ioliu.cn/v1?url=https://api.bilibili.com/x/relation/stat?vmid=487550002'
	})
}

export function getYouTubeFan() {
	return request({
		url: 'https://www.googleapis.com/youtube/v3/channels?part=statistics&key=AIzaSyCKUgefjpXwiUEQUU8x6AxdEVJKRPKE3s8&id=UCflNPJUJ4VQh1hGDNK7bsFg'
	})
}
