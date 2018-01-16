<style>
	.order_card_box{ text-align: center;}
	.order_card{width: 250px; float: left; text-align: center; padding: 15px; margin: 20px 25px;}
</style>

<template>
	<div>
		<Row class="margin-top-10">
			<Card>
				<p slot="title">订单统计</p>
				<Row class="order_card_box">
					<Card class="order_card" v-for="item in order">
						<h1>{{item}}</h1>
						<p>本月下单数</p>
					</Card>
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
					order1:30,
					order2:2256,
					order3:22,
					order4:26,
					order5:83,
					order6:199,
					order7:2222,
				}
			}
		}
	}
</script>