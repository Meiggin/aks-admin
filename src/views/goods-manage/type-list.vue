
<template>
    <div>
        <Row class="margin-top-10">

            <Col span="24">
                <Card>
                    <p slot="title">
                        <!-- <Icon type="ios-keypad"></Icon> -->
                        商品分类
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
                                    @on-delete="" 
                                    @on-selection-change=""
                                    :total="total"
                                    :current="1"
                                    @on-change="setPage"
                                    @on-page-size-change="setPageSize"
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
    }, currentRow.isShow ? '显示' : '不显示');
};

export default {
    name: 'type-list',
    mixins: [commonPageSet],
    components: {
        canEditTable
    },
    data () {
        return {
            listColumns:[
                { 
                    title: '分类ID',
                    key: 'id',
                    align: 'center',
                    width: 80,
                },
                {
                    title: '分类名称',
                    key: 'typeName',
                    align: 'center',
                    
                },
                {
                    title: '分类logo',
                    key: 'img',
                    align: 'center',
                    width: 120,
                    imgprev:true
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
                    title: '是否显示',
                    key:"isShow",
                    align: 'center',
                    
                    render: (h, params) => {
                        return h('div',[
                            isShowButton(this,h,params.row,params.index)
                        ]);
                    }
                },
                {
                    title: '操作',
                    align: 'center',
                    key: 'router',
                    width: 180,
                    button: ['edit','delete']
                }
            ]
        };
    },
    methods: {
        getData(){
            this.mockData(this.pageSize);
            this.total = 20;
        },
        mockData (pageSize) {
            let data = [];
            for (let i = 0; i < pageSize; i++) {
                data.push({
                    id: Math.floor(Math.random()*100),
                    typeName : Math.floor(Math.random()*1000000000),
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
