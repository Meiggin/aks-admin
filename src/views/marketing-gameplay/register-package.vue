<template>
    <div>
        <Row class="margin-top-10">

            <Col span="24">
                <Card>
                    <p slot="title">
                        <!-- <Icon type="ios-keypad"></Icon> -->
                        注册礼包列表
                        <span class="title_right">
                            <Button type="primary">领取记录列表</Button>
                             <Button type="primary">添加注册礼包</Button>
                        </span>

                    </p>

                     <div class="searchBox" style="margin: 0px 0px 16px;">
                        <Row>
                                <Option v-for="item in searchParamsList.typeList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                            </Select>
                            <Input v-model="searchParamsList.key" placeholder="注册礼包名称关键字" style="width: 300px"></Input>
                            <Button type="primary" icon="ios-search">搜索</Button>

                            <Button type="ghost">所有开启</Button>
                             <Button type="ghost">所有禁用</Button>
                            <Button type="ghost">查看全部</Button>
                               
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

const isSaleButton = (vm, h, currentRow , index) => {
    return h('Button', {
        props: {
            type: currentRow.isSale ? 'success' : 'warning'
        },
        style: {
            margin: '0 5px',
            minWidth: '40px'
        },
        on: {
            'click': () => {
                vm.changeIsSale(index);
            }
        }
    }, currentRow.isSale ? '开启' : '禁用');
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
                    title: '注册礼包名称',
                    key: 'typeName',
                    align: 'center',
                },
                {
                    title: '应用平台',
                    key: 'typeText',
                    align: 'center',
                    
                },
                {
                    title: '领取人数',
                    key: 'typeText',
                    align: 'center',
                },
                {
                    title: '更新时间',
                    key: 'typeText',
                    align: 'center',
                },
                {
                    title: '状态',
                    key:"isSale",
                    align: 'center',
                    width: 90,
                    render: (h, params) => {
                        return h('div',[
                            isSaleButton(this,h,params.row,params.index)
                        ]);
                    }
                },
                {
                    title: '操作',
                    align: 'center',
                    width: 270,
                    button: ['detail','record','delete']
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
                    isSale: [true,false][Math.floor(Math.random()*2)],
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
