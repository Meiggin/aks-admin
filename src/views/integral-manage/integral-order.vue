<template>
    <div>
        <Row class="margin-top-10">

            <Col span="24">
                <Card>
                    <p slot="title">
                        <!-- <Icon type="ios-keypad"></Icon> -->
                        积分兑换订单
                        <span class="title_right">
                            <Button type="primary"> 物流信息录入</Button>
                            <Button type="primary">订单导出</Button>
                        </span>
                       
                    </p>
                    <div class="searchBox" style="margin: 0px 0px 16px;">
                        <Row>
                            搜索：
                            <Select v-model="searchParamsList.type" style="width:150px" placeholder="订单编号">
                                <Option v-for="item in searchParamsList.typeList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                            </Select>
                            <Input v-model="searchParamsList.key" placeholder="关键字" style="width: 150px"></Input>
                            <Button type="primary" icon="ios-search">搜索</Button>
                            <span style="margin:0 15px;cursor:pointer;">查看全部</span>
                        </Row>
                        <Row class="margin-top-10">
                            <Button type="ghost">待发货</Button>
                            <Button type="ghost">已发货</Button>
                            <Button type="ghost">已签收</Button>
                            <Button type="ghost">已取消</Button>
                            <Button type="ghost">已退货</Button>
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
    name: 'integral-order',
    mixins: [commonPageSet],
    components: {
        canEditTable
    },
    data () {
        return {
            listColumns:[
                { 
                    title: '订单编号',
                    key: 'id',
                    align: 'center',
                },
                {
                    title: '收货人',
                    key: 'typeName',
                    align: 'center',
                    
                },
                {
                    title: '联系电话',
                    key: 'typeText',
                    align: 'center',
                },
                {
                    title: '订单积分',
                    key: 'typeText',
                    align: 'center',
                },
                {
                    title: '商品积分',
                    key: 'typeText',
                    align: 'center',
                },
                 {
                    title: '订单状态',
                    key: 'typeText',
                    align: 'center',
                },
                {
                    title: '下单时间',
                    key: 'typeText',
                    align: 'center',
                },
                {
                    title: '操作',
                    align: 'center',
                    width: 270,
                    button: ['detail','delete']
                }	
            ],
            searchParamsList: {
                type:'',
                typeList:[],
                key:''
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
