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
                        会员列表
                        <span class="title_right">
                            <Button type="primary">新增</Button>
                        </span>
                    </p>
					<div class="searchBox" style="margin: 0px 0px 16px;">
						<Row>
                            群组：
                            <Select v-model="searchParamsList.group" style="width:150px" placeholder="所有">
                                <Option v-for="item in searchParamsList.groupList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                            </Select>
							状态：
							<Select v-model="searchParamsList.status" style="width:150px" placeholder="账户名">
 	                            <Option v-for="item in searchParamsList.statusList" :value="item.value" :key="item.value">{{ item.label }}</Option>
	                        </Select>
                            名称：
	                        <Input v-model="searchParamsList.Key" placeholder="" style="width: 150px"></Input>
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
                                    @on-selection-change=""
                                    :total="total"
                                    :current="1"
                                    @on-change="setPage"
                                    @on-page-size-change="setPageSize"
                                    @on-delete="" 
                                    @on-detail=""
                                    @on-send=""
                                    @on-give-score="giveScoreShow"
                                >
                                    <div slot="bottom_left">
        
                                    </div>
                                </can-edit-table>
                            </div>
                        </Col>
                        
                    </Row>


                    <Row>
                        <Form ref="formCustom" :model="formCustom" :rules="ruleCustom" :label-width="100">
                            <FormItem label="选择群组">
                                <Row>
                                    <Col span="5">
                                        <Select v-model="formCustom.group" placeholder="">
                                            <Option v-for="item in formCustom.groupList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                                        </Select>
                                    </Col>
                                </Row>
                            </FormItem>
                            <FormItem label="特权码名称" prop="tqmName">
                                <Row>
                                    <Col span="5">
                                        <Input v-model="formCustom.tqmName" placeholder=""></Input>
                                    </Col>
                                </Row>
                            </FormItem>
                            <FormItem>
                                <Button type="primary" @click="handleSubmit('formCustom')">添加特权码</Button>
                                <Button type="ghost" @click="handleReset('formCustom')" style="margin-left: 8px">重置</Button>
                            </FormItem>
                        </Form>
                    </Row>
                </Card>
            </Col>

        </Row>

    </div>
</template>

<script>

import canEditTable from '@/components/table/canEditTable.vue';
import commonPageSet from '@/template/commonPageSet.js';

const checkSort = (rule, value, callback) => {
    let g = /^[1-9]*[1-9][0-9]*$/;  
    if (g.test(value)) {
        callback();
    }else{
        callback(new Error('请输入正整数'));
    }
};

export default {
    name: 'privileged-code',
    mixins: [commonPageSet],
    components: {
        canEditTable
    },
    data () {
        return {
            listColumns: [
                { 
                    title: 'UID',
                    key: 'id',
                    align: 'center',
                    width: 120
                },
                {
                    title: '名称',
                    key: 'typeName',
                    align: 'center',
                    
                },
                {
                    title: '群组',
                    key: 'typeText',
                    align: 'center',
                },
                {
                    title: '添加时间',
                    key: 'typeText',
                    align: 'center',
                },
                {
                    title: '状态',
                    key: 'typeText',
                    align: 'center',
                    render: (h, params) => {
                        if (params.row.isActive) {
                            return h('span','激活'); 
                       }else{
                            return h('span','未激活');
                       }
                        
                    }
                },
                {
                    title: '操作',
                    align: 'center',
                    width: 270,
                    button: ['active']
                }
            ],
            formCustom: {
                group: 1,
                groupList:[ 
                    {
                        value: 1,
                        label: '赠送'
                    },
                    {
                        value: 2,
                        label: '扣除'
                    }
                ],
                tqmName:''
            },
            ruleCustom: {
                tqmName: [
                    { required: true, message: '备注不能为空', trigger: 'blur' }
                ],
            },
            searchParamsList: {
                group:'',
                groupList:[],
                status:'',
                statusList:[],
                key:''
            }
        }
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
                    isActive: [true,false][Math.floor(Math.random()*2)],
                    sort: Math.floor(Math.random()*100),
                })
            }
            this.listData = data;
        },
        handleSubmit (name) {
            this.$refs[name].validate((valid) => {
               if (valid) {
                    
               }
            })
        },
        handleReset (name) {
            this.$refs[name].resetFields();
        },
    },
    created () {
        this.getData();
    },
    mounted(){
        console.log(this)
    }
};
</script>
