
<template>
    <div>
        <Row class="margin-top-10">

            <Col span="24">
                <Card>
                    <p slot="title">
                        <!-- <Icon type="ios-keypad"></Icon> -->
                        商品列表
                    </p>
                    <div class="searchBox" style="margin: 0px 0px 16px;">
                        搜索：
                        <Select v-model="typeKey" style="width:150px">
                            <Option v-for="item in typeList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                        </Select>
                         <Select v-model="brandKey" style="width:150px">
                            <Option v-for="item in brandList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                        </Select>
                         <Select v-model="activityTypeKey" style="width:150px">
                            <Option v-for="item in activityTypeList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                        </Select>
                         <Select v-model="isSaleKey" style="width:150px">
                            <Option v-for="item in isSale" :value="item.value" :key="item.value">{{ item.label }}</Option>
                        </Select>
                        <Input v-model="searchKey" placeholder="请输入..." style="width: 120px"></Input>
                        <Button type="primary" icon="ios-search">搜索</Button>
                        <span style="margin-left:15px;cursor:pointer;">查看全部</span>
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
                                        <Button type="success" @click="changeSelectStatus(true,getBannerList)">上架</Button>
                                        <Button type="warning" @click="changeSelectStatus(false,getBannerList)">下架</Button>
                                        <Button type="success" @click="changeStatusAll(true,getBannerList)">一键上架</Button>
                                        <Button type="warning" @click="changeStatusAll(false,getBannerList)">一键下架</Button>
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
import commonChangeStatus from '@/libs/commonChangeStatus.js';
import { getBannerList } from '@/api/website/home-page.js';

const isButton = (vm, h, currentRow , index) => {
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
                vm.changeStatus(index,vm.getBannerList);
            }
        }
    }, currentRow.isSale ? '上架' : '下架');
};

export default {
    name: 'goods-list',
    mixins: [commonPageSet,commonSelect,commonChangeStatus],
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
                    width: 80
                },
                {
                    title: '商品型号',
                    key: 'goodId',
                    align: 'center',
                    // width: 180
                },
                {
                    title: '预览图片',
                    key: 'img',
                    align: 'center',
                    width: 120,
                    imgprev:true
                },
                {
                    title: '所属分类',
                    key: 'type',
                    align: 'center',
                    // width: 120
                },
                {
                    title: '所属系列',
                    key: 'type',
                    align: 'center',
                    // width: 120
                },
                {
                    title: '品牌',
                    key: 'type',
                    align: 'center',
                    // width: 120
                },
                {
                    title: '零售价格',
                    key: 'price',
                    align: 'center',
                    // width: 120
                },
                {
                    title: '颜色',
                    key: 'color',
                    align: 'center',
                    // width: 80
                },
                {
                    title: '功率',
                    key: 'w',
                    align: 'center',
                    // width: 80
                },
                {
                    title: '是否上架',
                    key:"isSale",
                    align: 'center',
                    width: 90,
                    render: (h, params) => {
                        return h('div',[
                            isButton(this,h,params.row,params.index)
                        ]);
                    }
                },
                {
                    title: '操作',
                    align: 'center',
                    width: 180,
                    button: ['edit','delete']
                }
            ],
            statusName: 'isSale',
            typeList:[],
            brandList:[
                {
                    value: 'aks',
                    label: '奥克斯'
                }
            ],
            activityTypeList:[],
            isSale:[],
            typeKey:null,
            brandKey:null,
            activityTypeKey:null,
            isSaleKey:null,
            searchKey:null,
            currentPage:1,
            total:0,
            pageSize:10,
        };
    },
    computed: {
        getBannerList(){
            return getBannerList;
        }
    },
    methods: {
        getData () {
            this.listData = this.mockData(this.pageSize);
            this.total = 520;
            this.typeList = [{
                value: '1',
                label: '1'
            }],
            this.brandList = [{
                value: '1',
                label: '1'
            }]
            this.activityTypeList = [{
                value: '1',
                label: '1'
            }]
            this.isSale = [{
                value: '1',
                label: '1'
            }]
        },
        mockData (pageSize) {
            let data = [];
            for (let i = 0; i < pageSize; i++) {
                data.push({
                    id: Math.floor(Math.random()*100),
                    goodId : Math.floor(Math.random()*1000000000),
                    img: 'http://aks.unohacha.com/Data/upload/image/20170707/20170707141246_79625.png',
                    type: Math.floor(Math.random()*100),
                    price: Math.floor(Math.random()*1000),
                    color: ['红色','黄色','蓝色'][Math.floor(Math.random()*3)],
                    w: Math.floor(Math.random()*1000),
                    isSale: [true,false][Math.floor(Math.random()*2)]
                })
            }
            return data;
        },
        editGoods (data,index){
            let query = {id: this.listData[index].id};
            this.$router.push({
                name: 'edit-goods',
                query: query
            });
        },
        deteleGoods (data,index){
            this.listData.splice(index, 1);
            this.$Message.success('删除成功');
            this.getData();
        }
    },
    created () {
        this.getData();
    }
};
</script>
