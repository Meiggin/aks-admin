<template>
    <div>
        <Row class="margin-top-10">

            <Col span="24">
                <Card>
                    <p slot="title">
                        <!-- <Icon type="ios-keypad"></Icon> -->
                       疯狂砍价活动列表
                       <span class="title_right">
                            <Button type="primary">添加活动</Button>
                            <Button type="primary"> 活动提示语列表</Button>
                        </span>
                    </p>
                    <div class="searchBox" style="margin: 0px 0px 16px;">
                         <Row>
                            <Option v-for="item in searchParamsList.typeList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                            </Select>
                            <Input v-model="searchParamsList.key" placeholder="关键字" style="width: 300px"></Input>
                            <Button type="primary" icon="ios-search">搜索</Button>

                            <Button type="ghost">开启</Button>
                             <Button type="ghost">禁用</Button>
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
                                        <Button type="warning" @click="changeSelectIsSale(false)">禁用</Button>
                                        <Button type="success" @click="changeSelectIsSale(true)">开启</Button>
                                        <Button type="success" @click="changeIsSaleAll(true)">删除</Button>
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
import commonSelect from '@/libs/commonSelect.js';

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
    mixins: [commonPageSet,commonSelect],
    components: {
        canEditTable
    },
    data () {
        return {
            listColumns:[
                {
                    title: '活动名称',
                    key: 'typeName',
                    align: 'center',
                    
                },
                {
                    title: '商品库存',
                    key: 'typeText',
                    align: 'center',
                },
                {
                    title: '商品底价',
                    key: 'typeText',
                    align: 'center',
                },
                {
                    title: '参与总人数',
                    key: 'typeText',
                    align: 'center',
                },
                 {
                    title: '砍价区间',
                    key: 'typeText',
                    align: 'center',
                },
                 {
                    title: '是否开启',
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
                    title: '开始时间',
                    key: 'typeText',
                    align: 'center',
                },
                 {
                    title: '结束时间',
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
            formItem: {
                    input: '',
                    select: '',
                    radio: 'male',
                    checkbox: [],
                    switch: true,
                    date: '',
                    time: '',
                    slider: [20, 50],
                    textarea: ''
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
