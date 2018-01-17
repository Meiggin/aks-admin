<template>
    <div>
        <Row class="margin-top-10">

            <Col span="24">
                <Card>
                    <p slot="title">
                        <!-- <Icon type="ios-keypad"></Icon> -->
                       组合套购
                       <span class="title_right">
                            <Button type="primary">添加组合</Button>
                        </span>
                    </p>
                    <div class="searchBox" style="margin: 0px 0px 16px;">
                         <Row>
                            搜索：
                            <Select v-model="searchParamsList.type" style="width:150px" placeholder="全部">
                                <Option v-for="item in searchParamsList.typeList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                            </Select>
                            <Input v-model="searchParamsList.key" placeholder="分类名称" style="width: 150px"></Input>
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
                                        <Button type="success" @click="changeSelectIsSale(true)">上架</Button>
                                        <Button type="warning" @click="changeSelectIsSale(false)">下架</Button>
                                        <Button type="error" @click="changeIsSaleAll(true)">删除</Button>
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
    mixins: [commonPageSet,commonSelect],
    components: {
        canEditTable
    },
    data () {
        return {
            listColumns:[
                { 
                    title: '组合名称',
                    key: 'id',
                    align: 'center',
                },
                {
                    title: '商品',
                    key: 'typeName',
                    align: 'center',
                    
                },
                {
                    title: '组合价格',
                    key: 'typeText',
                    align: 'center',
                },
                {
                    title: '添加时间',
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
