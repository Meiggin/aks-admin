<template>
    <div>
        <Row class="margin-top-10">

            <Col span="24">
                <Card>
                    <p slot="title">
                        <!-- <Icon type="ios-keypad"></Icon> -->
                       大转盘商品列表
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
                                    @on-selection-change="selectChange"
                                    :total="total"
                                    :current="1"
                                    @on-change="setPage"
                                    @on-page-size-change="setPageSize"
                                    @on-delete="deteleGoods"
                                    @on-edit="editGoods"
                                >
                                    <div slot="bottom_left">
                                        <Button type="success" @click="selectAll(true)">全选</Button>
                                        <Button type="warning" @click="selectAll(false)">取消</Button>
                                        <Button type="success" @click="selectAll(true)">开启</Button>
                                        <Button type="warning" @click="selectAll(false)">关闭</Button>
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

const isShowButton = (vm, h, currentRow , index) => {
    return h('Button', {
        props: {
            type: currentRow.isShow ? 'success' : 'warning'
        },
        style: {
            margin: '0 5px',
            minWidth: '40px'
        },
        on: {
            'click': () => {
                vm.changeIsShow(index);
            }
        }
    }, currentRow.isShow ? '上架' : '下架');
};

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
                    key:"sort",
                    align: 'center',
                    render: (h, params) => {
                        console.log(params)
                        return h('Button', {
                            props: {
                                type: 'ghost'
                            }
                        }, params.row.sort);
                    }
                },
                 {
                    title: '添加时间 / 修改时间库存',
                    key: 'typeText',
                    align: 'center',
                },
                {
                    title: '操作',
                    align: 'center',
                    width: 270,
                    button: ['edit','delete']
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
