<style lang="less">
    @import '../../styles/common.less';
    @import '../../components/table/table.less';
</style>

<template>
    <div>
        <Row class="margin-top-10">
            <Col span="24">
                <Card>
                    <p slot="title">
                        <!-- <Icon type="ios-keypad"></Icon> -->
                        商品列表
                    </p>
                    <div class="searchBox" style="margin: 0px 0px 15px;">
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
                       <!--  <Col span="2">
                            <Row type="flex" justify="center" align="middle" class="edittable-table-get-currentdata-con">
                                <Button type="primary" @click="getCurrentData">当前数据</Button>
                            </Row>
                        </Col> -->
                        <Col span="24">
                            <div class="edittable-table-height-con">
                                <can-edit-table 
                                    refs="table" 
                                    v-model="goodsListDate" 
                                    @on-cell-change="" 
                                    @on-change=""  
                                    :editIncell="false" 
                                    :columns-list="goodsListColumns"
                                ></can-edit-table>
                            </div>
                        </Col>
                        <!-- <Modal :width="900" v-model="showCurrentTableData">
                            <can-edit-table refs="table5" v-model="editInlineAndCellData" :columns-list="showCurrentColumns"></can-edit-table>
                        </Modal> -->
                    </Row>
                    <div style="margin: 25px 10px;overflow: hidden">
                        <div style="float: left;">
                            <Button type="success" @click="changeIsSaleTrueAll">全部上架</Button>
                            <Button type="success" @click="changeIsSaleFalseAll">全部下架</Button>
                        </div>
                        <div style="float: right;">
                           <Page :total="total" :current="1" @on-change="setPage" @on-page-size-change="setPageSize"></Page>
                        </div>
                    </div>
                </Card>
            </Col>

        </Row>
    </div>
</template>

<script>

import canEditTable from '@/components/table/canEditTable.vue';

const editButton = (vm, h , index) => {
    return h('Button', {
        props: {
            type: 'primary',
        },
        style: {
            margin: '0 5px'
        },
        on: {
            'click': () => {
                vm.editGoods(index);
            }
        }
    }, '编辑');
};
const deleteButton = (vm, h, index) => {
    return h('Poptip', {
        props: {
            confirm: true,
            title: '您确定要删除这条数据吗?',
            transfer: true
        },
        on: {
            'on-ok': () => {
                vm.deteleGoods(index);
            }
        }
    }, [
    h('Button', {
        style: {
            margin: '0 5px'
        },
        props: {
            type: 'error',
            placement: 'top'
        }
    }, '删除')
    ]);
};
const isSaleButton = (vm, h, currentRow , index) => {
    return h('Button', {
        props: {
            type: currentRow.isSale ? 'warning' : 'success'
        },
        style: {
            margin: '0 5px'
        },
        on: {
            'click': () => {
                vm.changeIsSale(index);
            }
        }
    }, currentRow.isSale ? '下架' : '上架');
};
export default {
    name: 'goods-list',
    components: {
        canEditTable
    },
    data () {
        return {
            goodsListColumns:[
                {
                    type: 'selection',
                    align: 'center',
                    width: 80
                },
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
                    width: 180
                },
                {
                    title: '预览图片',
                    key: 'img',
                    align: 'center',
                    width: 100,
                    render: (h, params) => {
                        return h('img',{
                            attrs:{
                                src:params.row.img
                            },
                            style: {
                                maxHeight: '50px',
                                width: '100%'
                            },
                            on: {
                                'click':()=>{

                                }
                            }
                        })    
                    }
                },
                {
                    title: '所属分类',
                    key: 'type',
                    align: 'center',
                    width: 120
                },
                {
                    title: '所属系列',
                    key: 'type',
                    align: 'center',
                    width: 120
                },
                {
                    title: '品牌',
                    key: 'type',
                    align: 'center',
                    width: 120
                },
                {
                    title: '零售价格',
                    key: 'price',
                    align: 'center',
                    width: 120
                },
                {
                    title: '颜色',
                    key: 'color',
                    align: 'center',
                    width: 80
                },
                {
                    title: '功率',
                    key: 'w',
                    align: 'center',
                    width: 80
                },
                {
                    title: '是否上架',
                    key:"isSale",
                    align: 'center',
                    width: 100,
                    render: (h, params) => {
                        return h('div', [
                            isSaleButton(this,h,params.row,params.index)
                        ]);
                    }
                },
                {
                    title: '操作',
                    align: 'center',
                    width: 180,
                    key: 'handle',
                    render: (h, params) => {
                        return h('div', [
                            editButton(this,h,params.index),
                            deleteButton(this,h,params.index)
                        ]);
                    }
                }
            ],
            goodsListDate:[],
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
            pageSize:10
        };
    },
    computed: {
        isSaleTrueList(){
            let arr = [];
            for(let i in this.goodsListDate){
                if (this.goodsListDate[i].isSale == true) {
                    arr.push(i);
                }
            }
            return arr;
        },
        isSaleFalseList(){
            let arr = [];
            for(let i in this.goodsListDate){
                if (this.goodsListDate[i].isSale == false) {
                    arr.push(i);
                }
            }
            return arr;
        }
    },
    methods: {
        getData () {
            this.goodsListDate = this.mockData(this.pageSize);
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
        setPage (index) {
            this.goodsListDate = this.mockData(this.pageSize);
        },
        setPageSize (index) {
            console.log(index);
            this.pageSize = index;
            this.goodsListDate = this.mockData(this.pageSize);
        },
        changeIsSale(index){
            const msg = this.$Message.loading({
                content: '加载中...',
                duration: 0
            });
            this.goodsListDate[index].isSale = !this.goodsListDate[index].isSale;
            this.$set(this.goodsListDate,[index],this.goodsListDate[index]);
            msg();
        },
        changeIsSaleTrueAll(){
            if (this.isSaleFalseList.length !== 0) {
                for(let i of this.isSaleFalseList){
                    this.goodsListDate[i].isSale = true;
                }
                this.$set(this.goodsListDate,0,this.goodsListDate[0]);
            }
        },
        changeIsSaleFalseAll(){
            if (this.isSaleTrueList.length !== 0) {
                for(let i of this.isSaleTrueList){
                    this.goodsListDate[i].isSale = false;
                }
                this.$set(this.goodsListDate,0,this.goodsListDate[0]);
            }
        },
        editGoods(index){
            let query = {shopping_id: this.goodsListDate[index].id};
            this.$router.push({
                name: 'edit-goods',
                query: query
            });
        },
        deteleGoods(index){
            console.log(index)
            this.goodsListDate.splice(index,1);
            this.$Message.success('删除成功');
            if (this.goodsListDate.length == 0) {
                setPage(1);
            }
        }
    },
    created () {
        this.getData();
    }
};
</script>

<style type="text/css">
    .edittable-table-height-con { height: auto; }
    .ivu-page-options-elevator { height: auto; }
    .ivu-page-options-elevator input{ text-align: center; }
    /*.ivu-table-header thead tr th{background-color: #fff;}
    .ivu-table-row:nth-child(odd) td{background-color: #f3f3f3;}*/
</style>
