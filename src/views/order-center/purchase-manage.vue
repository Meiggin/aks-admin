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
                        商品分类
                    </p>
					<div class="searchBox" style="margin: 0px 0px 16px;">
						<Row>
							搜索：
							姓名：
							<Input v-model="searchKey" placeholder="姓名" style="width: 150px"></Input>
	                        公司：
	                        <Input v-model="searchKey" placeholder="公司" style="width: 150px"></Input>
	                        联系电话：
	                       <Input v-model="searchKey" placeholder="联系电话：" style="width: 150px"></Input>
	                        申请状态：
	                        <Select v-model="applyStatus" style="width:150px" placeholder="全部">
 	                            <Option v-for="item in applyStatusList" :value="item.value" :key="item.value">{{ item.label }}</Option>
	                        </Select>
	                        <Button type="primary" icon="ios-search">搜索</Button>
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
import commonPageSet from '@/template/commonPageSet.js';

const isDealButton = (vm, h, currentRow , index) => {
    return h('Button', {
        props: {
            type: currentRow.isDeal ? 'success' : 'warning'
        },
        style: {
            margin: '0 5px',
            minWidth: '40px'
        },
        on: {
            'click': () => {
                vm.changeisDeal(index);
            }
        }
    }, currentRow.isDeal ? '已处理' : '未处理');
};

export default {
    name: 'finance-order',
    mixins: [commonPageSet],
    components: {
        canEditTable
    },
    data () {
        return {
            listColumns:[
                { 
                    title: '姓名',
                    key: 'name',
                    align: 'center',
                },
                {
                    title: '公司名称',
                    key: 'typeName',
                    align: 'center',
                    
                },
                {
                    title: '联系电话',
                    key: 'typeName',
                    align: 'center',
                    
                },
                {
                    title: '所在地区',
                    key: 'typeText',
                    align: 'center',
                },
                {
                    title: '采购数量(台)',
                    key: 'typeText',
                    align: 'center',
                },
                {
                    title: '采购金额(万)',
                    key: 'typeText',
                    align: 'center',
                },
                {
                    title: '留言信息',
                    key: 'typeText',
                    align: 'center',
                },
                {
                    title: '提交时间',
                    key: 'typeText',
                    align: 'center',
                },
                {
                    title: '处理时间',
                    key: 'typeText',
                    align: 'center',
                },
                {
                    title: '是否处理',
                    key: 'typeText',
                    align: 'center',
                    width: 90,
                    render: (h, params) => {
                        return h('div',[
                            isDealButton(this,h,params.row,params.index)
                        ]);
                    }
                },
                {
                    title: '操作',
                    align: 'center',
                    width: 90,
                    button: ['delete']
                }
            ]
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
                    name: Math.floor(Math.random()*100),
                    typeName : Math.floor(Math.random()*1000000000),
                    typeText : Math.floor(Math.random()*1000000000),
                    img: 'http://aks.unohacha.com/Data/upload/image/20170707/20170707141246_79625.png',
                    type: Math.floor(Math.random()*100),
                    price: Math.floor(Math.random()*1000),
                    color: ['红色','黄色','蓝色'][Math.floor(Math.random()*3)],
                    w: Math.floor(Math.random()*1000),
                    isDeal: [true,false][Math.floor(Math.random()*2)],
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
