
<template>
    <div>
        <Row class="margin-top-10">

            <Col span="24">
                <Card>
                    <p slot="title">
                        <!-- <Icon type="ios-keypad"></Icon> -->
                        回复内容
                        <span class="title_right">
                        	<Button type="primary">添加回复</Button>
                        </span>
                    </p>
					<div class="searchBox" style="margin: 0px 0px 16px;">
						<Row>
							搜索：
							<Input v-model="searchParamsList.key" placeholder="请输入订单号、收货人、收货人手机号码" style="width: 250px"></Input>
	                        下单时间：
	                        <DatePicker type="datetime" placeholder="起始时间" style="width: 200px" v-model="searchParamsList.startTime"></DatePicker>
	                        ~
	                        <DatePicker type="datetime" placeholder="截止时间" style="width: 200px" v-model="searchParamsList.endTime"></DatePicker>
	                        订单状态：
	                        <Select v-model="searchParamsList.orderStatus" style="width:150px" placeholder="全部">
 	                            <Option v-for="item in searchParamsList.orderStatusList" :value="item.value" :key="item.value">{{ item.label }}</Option>
	                        </Select>
							会员组:
	                        <Select v-model="searchParamsList.group" style="width:150px" placeholder="全部">
 	                            <Option v-for="item in searchParamsList.groupList" :value="item.value" :key="item.value">{{ item.label }}</Option>
	                        </Select>
	                        维权状态：
	                        <Select v-model="searchParamsList.safeguardStatus" style="width:150px" placeholder="全部">
 	                            <Option v-for="item in searchParamsList.safeguardStatusList" :value="item.value" :key="item.value">{{ item.label }}</Option>
	                        </Select>
	                        <Button type="primary" icon="ios-search">搜索</Button>
	                        <span style="margin:0 15px;cursor:pointer;">查看全部</span>
						</Row>
                    </div>
                    <Row :gutter="10">

                        <Col span="24">
                            <div>
                                <can-edit-table 
                                    ref="listTable"
                                    :refs="'table'"
                                    v-model="listData" 
                                    @on-cell-change="" 
                                    :editIncell="false" 
                                    :columns-list="listColumns"
                                    @on-selection-change=""
                                    :total="total"
                                    :current="1"
                                    @on-change="setPage"
                                    @on-page-size-change="setPageSize"
                                    @on-delete="" 
                                    @on-detail=""
                                    @on-send=""
                                >
                                    <div slot="bottom_left">
        
                                    </div>
                                </can-edit-table>
                            </div>
                        </Col>
                        
                    </Row>

                </Card>
            </Col>

        </Row>
    </div>
</template>

<script>

import canEditTable from '@/components/table/canEditTable.vue';
import commonPageSet from '@/libs/commonPageSet.js';

export default {
    name: 'reply-manage',
    mixins: [commonPageSet],
    components: {
        canEditTable
    },
    data () {
        return {
            listColumns:[
                { 
                    title: 'UID',
                    key: 'id',
                    align: 'center',
                    width: 120
                },
                {
                    title: '回复内容',
                    key: 'typeName',
                    align: 'center',
                    
                },
                {
                    title: '排序',
                    key: 'typeName',
                    align: 'center',
                    
                },
                {
                    title: '操作',
                    align: 'center',
                    width: 180,
                    button: ['edit','delete']
                }
            ],
            searchParamsList: {
                safeguardStatus:'',
                safeguardStatusList:[],
                key:'',
                group:'',
                groupList:[],
                startTime:null,
                endTime:null
            }
        };
    },
    methods: {
        getData(){
            this.mockData(this.pageSize);
            this.total = 22;
        },
        mockData (pageSize) {
            let data = [];
            for (let i = 0; i < pageSize; i++) {
                data.push({
                    id: Math.floor(Math.random()*100),
                    typeName : Math.floor(Math.random()*1000000000),
                    typeText : Math.floor(Math.random()*1000000000),
                    img: 'http://aks.unohacha.com/Data/upload/image/20170707/20170707141246_79625.png',
                    type: Math.floor(Math.random()*100),
                    price: Math.floor(Math.random()*1000),
                    color: ['红色','黄色','蓝色'][Math.floor(Math.random()*3)],
                    w: Math.floor(Math.random()*1000),
                    isShow: [true,false][Math.floor(Math.random()*2)],
                    sort: Math.floor(Math.random()*100),
                })
            }
            this.listData = data;
        },
    },
    created () {
        this.getData();
    }
};
</script>
