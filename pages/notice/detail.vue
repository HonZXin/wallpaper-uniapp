<template>
	<view class="noticeLayout">
		<view class="title">
			<view class="tag" v-if="detail.select">
				<uni-tag inverted text="置顶" type="error" />
			</view>
			<view class="font">{{detail.title}}</view>
		</view>
		
		<view class="info">
			<view class="item">{{detail.author}}</view>
			<view class="item">
				<uni-dateformat :date="detail.publish_date" format="yyyy-MM-dd hh:mm:ss"></uni-dateformat>
			</view>
		</view>
		
		<view class="content">
			<mp-html :content="detail.content" />
		</view>
		
		<view class="count">
			阅读 {{detail.view_count}}
		</view>
		
	</view>
</template>

<script setup>
import { ref } from "vue"
import {apiGetNoticeDetail} from "@/api/apis.js"
import {onLoad} from "@dcloudio/uni-app"

const detail = ref({})
let noticeId
onLoad((e)=>{
	noticeId = e.id
	getNoticeDetail();
})

const getNoticeDetail = ()=>{
	apiGetNoticeDetail({
		id:noticeId
	}).then(res=>{
		detail.value = res.data
	})
}


</script>

<style lang="scss" scoped>
.noticeLayout {
	padding: 30rpx;
	.title {
		font-size: 40rpx;
		color: #111;
		line-height: 1.6em;
		padding-bottom: 30rpx;
		display: flex;
		.tag {
			transform: scale(0.8);
			transform-origin: left center; 
			flex-shrink: 0;
		}
		.font {
			padding-left: 6rpx;
		}
	}
	.info {
		display: flex;
		align-items: center;
		color: #999;
		font-size: #999;
		.item {
			padding-right: 20rpx;
		}
	}
	.content {
		padding: 50rpx 0;
	}
	.count {
		color: #999;
		font-size: 28rpx;
	}
}
</style>
