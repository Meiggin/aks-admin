<style>
	.order_card_box{ text-align: center; font-size: 0;padding: 0 5%;}
	.order_card{width: 25%; min-width: 180px; float: left; text-align: center; padding: 15px 30px;}
</style>

<template>
	<div>
		<Row class="margin-top-10">
			<Card>
				<p slot="title">
					订单统计
				</p>
				<Row class="order_card_box">
					<div class="order_card" v-for="item in order">
						<Card :padding="30">
							<h1 :style="{color:item.color}" style="fontSize:32px;fontWeight:400;">{{item.num}}</h1>
							<p style="color:#00a854;">{{item.text}}</p>
						</Card>
					</div>
				</Row>
			</Card>
		</Row>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				order:{
					monthOrderCount:{
						text:'本月下单数',
						color:'#2d8cf0',
						num: 30
					},
					noPayOrderCount:{
						text:'待付款',
						color:'#ff9900',
						num: 30231
					},
					noSendOrderCount:{
						text:'未发货(24h)',
						color:'#ff9900',
						num: 22
					},	
					saleOrderCount:{
						text:'售后订单',
						color:'#ed3f14',
						num: 33
					},	
					vipOrderCount:{
						text:'VIP订单',
						color:'#19be6b',
						num: 30
					},	
					purchaseOrderCount:{
						text:'企业采购',
						color:'#ff9900',
						num: 30
					},	
					makeOrderCount:{
						text:'预约订单',
						color:'#ff9900',
						num: 30
					}		
				}
			}
		}
	}
</script>