<template>
    <div>
        <Row class="margin-top-10">

            <Col span="24">
                <Card>
                    <p slot="title">
                        <!-- <Icon type="ios-keypad"></Icon> -->
                        商品列表
                        <span class="title_right">
                            <Button type="primary">新增</Button>
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
    name: 'integral-goods',
    mixins: [commonPageSet],
    components: {
        canEditTable
    },
    data () {
        return {
            listColumns:[
                { 
                    title: '商品ID',
                    key: 'id',
                    align: 'center',
                },
                {
                    title: '商品名称',
                    key: 'typeName',
                    align: 'center',
                    
                },
                {
                    title: '缩略图',
                    key: 'img',
                    align: 'center',
                    width: 120,
                    imgprev:true

                },
                {
                    title: '订单积分',
                    key: 'typeText',
                    align: 'center',
                },
                {
                    title: '零售价格',
                    key: 'typeText',
                    align: 'center',
                },
                {
                    title: '库存',
                    key: 'typeText',
                    align: 'center',
                },
                 {
                    title: '是否上架',
                   key:"isShow",
                    align: 'center',
                    
                    render: (h, params) => {
                        return h('div',[
                            isShowButton(this,h,params.row,params.index)
                        ]);
                    }
                },
                {
                    title: '排序',
                    key: 'typeText',
                    align: 'center',
                },
                 {
                    title: '添加时间 / 修改时间',
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
