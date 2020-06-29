import {request} from './request'

export function getHomeBanner() {
	return request({
		url: '/x/web-show/res/loc?pf=7&id=1695'
	})
}

export function getHomeData(tid, pn) {
	return request({
		url: '/archive_rank/getarchiverankbypartion&tid=' + tid + '&pn=' + pn,
	})
}