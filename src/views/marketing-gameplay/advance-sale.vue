<template>
    <div>
        <Row class="margin-top-10">

            <Col span="24">
                <Card>
                    <p slot="title">
                        <!-- <Icon type="ios-keypad"></Icon> -->
                        预售活动列表
                        <span class="title_right">
                            <Button type="primary">添加预售活动</Button>
                        </span>
                    </p>
                    
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
    name: 'order-vip',
    mixins: [commonPageSet],
    components: {
        canEditTable
    },
    data () {
        return {
            listColumns:[
                { 
                    title: '活动商品名',
                    key: 'id',
                    align: 'center',
                },
                {
                    title: '开始售卖时间',
                    key: 'typeName',
                    align: 'center',
                    
                },
                {
                    title: '定金过期时间',
                    key: 'typeText',
                    align: 'center',
                },
                {
                    title: '预付定金',
                    key: 'typeText',
                    align: 'center',
                },
                {
                    title: '预售数量',
                    key: 'typeText',
                    align: 'center',
                },
                {
                    title: '购买总量数量',
                    key: 'typeText',
                    align: 'center',
                },
                
                {
                    title: '操作',
                    align: 'center',
                    width: 270,
                    button: ['activity']
                }
            ],
            searchParamsList: {
                type:'',
                typeList:[],
                key:''
            },
            
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
