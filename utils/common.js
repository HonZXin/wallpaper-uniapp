export function timeAgo(timestamp) {
    const now = Date.now();
    const diff = now - timestamp;

    const minute = 60 * 1000; // 毫秒
    const hour = 60 * minute;
    const day = 24 * hour;
    const month = 30 * day; // 近似一个月
    const threeMonths = 3 * month;

    if (diff < minute) {
        return "1分钟";
    } else if (diff < hour) {
        const minutes = Math.floor(diff / minute);
        return `${minutes}分钟`;
    } else if (diff < day) {
        const hours = Math.floor(diff / hour);
        return `${hours}小时`;
    } else if (diff < month) {
        const days = Math.floor(diff / day);
        return `${days}天`;
    } else if (diff < threeMonths) {
        const months = Math.floor(diff / month);
        return `${months}个月`;
    } else {
        return null;
    }
}


export function gotoHome(){
	uni.showModal({
		title:"提示",
		content:"页面有误将返回首页",
		showCancel:false,
		success:(res) => {
			if(res.confirm){
				uni.reLaunch({
					url:"/pages/index/index"
				})
			}
		}
	})
}

