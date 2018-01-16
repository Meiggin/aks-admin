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

                        <Col span="24">
                            <div class="edittable-table-height-con">
                                <can-edit-table 
                                    ref="listTable"
                                    :refs="'table'"
                                    v-model="goodsListDate" 
                                    @on-cell-change="" 
                                    @on-change=""  
                                    :editIncell="false" 
                                    :columns-list="goodsListColumns"
                                    @on-selection-change="selectChange"
                                    :total="total"
                                    :current="1"
                                    @on-change="setPage"
                                    @on-page-size-change="setPageSize"
                                    @on-delete="deteleGoods"
                                >
                                    <div slot="bottom_left">
                                        <Button type="success" @click="selectAll(true)">全选</Button>
                                        <Button type="warning" @click="selectAll(false)">取消</Button>
                                        <Button type="success" @click="changeSelectIsSale(true)">上架</Button>
                                        <Button type="warning" @click="changeSelectIsSale(false)">下架</Button>
                                        <Button type="success" @click="changeIsSaleAll(true)">一键上架</Button>
                                        <Button type="warning" @click="changeIsSaleAll(false)">一键下架</Button>
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
    }, currentRow.isSale ? '上架' : '下架');
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
                    width: 60
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
                            isSaleButton(this,h,params.row,params.index)
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
            pageSize:10,
            selectData:[]
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
        },
        selectList(){
            let arr1 = [],arr2 = [];
            for(let i in this.selectData){
                arr1.push(this.selectData[i].id)
            }
            for(let i in this.goodsListDate){
                if (arr1.indexOf(this.goodsListDate[i].id)!==-1) {
                    arr2.push(i)
                }
            }
            return arr2;
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
                    isSale: [true,false][Math.floor(Math.random()*2)],
                    router: {path: '/goodsManage/goodsList/editGoods', query: {id:2}}
                })
            }
            return data;
        },
        setPage (index) {
            this.currentPage = index;
            this.goodsListDate = this.mockData(this.pageSize);
        },
        setPageSize (index) {
            console.log(index);
            this.pageSize = index;
            this.goodsListDate = this.mockData(this.pageSize);
        },
        changeIsSale (index){
            const msg = this.$Message.loading({
                content: '加载中...',
                duration: 0
            });
            this.goodsListDate[index].isSale = !this.goodsListDate[index].isSale;
            this.$set(this.goodsListDate,[index],this.goodsListDate[index]);
            msg();
        },
        changeSelectIsSale (status){
            if(this.selectList.length !== 0){
                console.log(this.selectList);
                for(let i of this.selectList){
                    this.goodsListDate[i].isSale = status;
                }
                this.$set(this.goodsListDate,0,this.goodsListDate[0]);
                this.selectAll(false);
            }
        },
        changeIsSaleAll (status){
            if (status) {
                for(let i of this.isSaleFalseList){
                    this.goodsListDate[i].isSale = status;
                } 
            }else{
                for(let i of this.isSaleTrueList){
                    this.goodsListDate[i].isSale = status;
                } 
            }
            this.$set(this.goodsListDate,0,this.goodsListDate[0]);
        },
        editGoods (index){
            let query = {id: this.goodsListDate[index].id};
            this.$router.push({
                name: 'edit-goods',
                query: query
            });
        },
        deteleGoods (index){
            this.$Message.success('删除成功');
            this.setPage(this.currentPage);
        },
        selectAll (status){
           this.$refs.listTable.$refs.table.selectAll(status);
        },
        selectChange (selection){
            console.log(selection);
            this.selectData = selection;
        }
    },
    created () {
        this.getData();
    }
};
</script>
