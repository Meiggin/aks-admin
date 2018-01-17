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
                            <Button type="primary">导出会员</Button>
                            <Button type="primary">赠送积分导出</Button>
                        </span>
                    </p>
					<div class="searchBox" style="margin: 0px 0px 16px;">
						<Row>
                            平台：
                            <Select v-model="searchParamsList.registerType" style="width:150px" placeholder="注册平台">
                                <Option v-for="item in searchParamsList.registerTypeList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                            </Select>
							搜索：
							<Select v-model="searchParamsList.type" style="width:150px" placeholder="账户名">
 	                            <Option v-for="item in searchParamsList.typeList" :value="item.value" :key="item.value">{{ item.label }}</Option>
	                        </Select>
	                        <Input v-model="searchParamsList.Key" placeholder="关键字" style="width: 150px"></Input>
                            <Select v-model="searchParamsList.group" style="width:150px" placeholder="所有">
                                <Option v-for="item in searchParamsList.groupList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                            </Select>
	                        注册时间：
	                        <DatePicker type="datetime" placeholder="起始时间" style="width: 200px"></DatePicker>
	                        ~
	                        <DatePicker type="datetime" placeholder="截止时间" style="width: 200px"></DatePicker>
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
                    
                </Card>
            </Col>

        </Row>

        <Modal v-model="formCustom.show">
            <p slot="header" style="color:#1c2438;text-align:center">
                <span>赠送积分</span>
            </p>
            <div style="text-align:center">
                <Form ref="formCustom" :model="formCustom" :rules="ruleCustom" :label-width="80" label-position="left" style="padding:0 15px;">
                    <FormItem label="账户名">
                        <Row>
                            <Col span="20">
                                <Input width="120" type="text" v-model="formCustom.name" disabled></Input>
                            </Col>
                        </Row>
                    </FormItem>
                    <FormItem label="操作">
                        <Row>
                            <Col span="20">
                                <Select v-model="formCustom.action" placeholder="赠送">
                                    <Option v-for="item in formCustom.actionList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                                </Select>
                            </Col>
                        </Row>
                    </FormItem>
                    <FormItem label="积分数" prop="score">
                        <Row>
                            <Col span="20">
                                <Input width="120" type="text" placehloder="请输入分数" v-model="formCustom.score"></Input>
                            </Col>
                        </Row>
                    </FormItem>
                    <FormItem label="提示语" prop="tip">
                        <Row>
                            <Col span="20">
                                <Input type="text" placehloder="请输入提示语" v-model="formCustom.tip"></Input>
                            </Col>
                        </Row>
                    </FormItem>
                    <FormItem label="备注" prop="remark">
                        <Row>
                            <Col span="20">
                                <Input v-model="formCustom.remark" type="textarea" :autosize="{minRows: 3,maxRows: 6}" placeholder="请输入备注"></Input>
                            </Col>
                        </Row>
                    </FormItem>
                </Form>
            </div>
            <div slot="footer">
                <Button type="primary" @click="handleSubmit('formCustom')">提交</Button>
                <Button type="ghost" @click="handleReset('formCustom')" style="margin-left: 8px">重置</Button>
            </div>
        </Modal>

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
    name: 'order-make',
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
                    width:120
                },
                {
                    title: '账户名',
                    key: 'typeName',
                    align: 'center',
                    
                },
                {
                    title: '手机号',
                    key: 'typeText',
                    align: 'center',
                },
                {
                    title: '会员等级',
                    key: 'typeText',
                    align: 'center',
                },
                {
                    title: '昵称',
                    key: 'typeText',
                    align: 'center',
                },
                {
                    title: '注册平台',
                    key: 'typeText',
                    align: 'center',
                },
                {
                    title: '注册时间',
                    key: 'typeText',
                    align: 'center',
                },
                {
                    title: '操作',
                    align: 'center',
                    width: 270,
                    button: ['detail','edit','give-score']
                }
            ],
            formCustom: {
                show: false,
                name:'',
                action:1,
                actionList:[ 
                    {
                        value: 1,
                        label: '赠送'
                    },
                    {
                        value: 2,
                        label: '扣除'
                    }
                ],
                score:null,
                tip:'',
                remark:''
            },
            ruleCustom: {
                score: [
                    { required: true, message: '积分不能为空', trigger: 'blur' },
                    { validator: checkSort, trigger: 'blur' }
                ],
                tip: [
                    { required: true, message: '提示语不能为空', trigger: 'blur' }
                ],
                remark: [
                    { required: true, message: '备注不能为空', trigger: 'blur' }
                ],
            },
            searchParamsList: {
                registerType:'',
                registerTypeList:[],
                type:'',
                typeList:[],
                key:'',
                group:'',
                groupList:[]
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
                    isShow: [true,false][Math.floor(Math.random()*2)],
                    sort: Math.floor(Math.random()*100),
                })
            }
            this.listData = data;
        },
        handleSubmit (name) {
            this.$refs[name].validate((valid) => {
               if (valid) {
                    this.giveScore();
               }
            })
        },
        handleReset (name) {
            this.$refs[name].resetFields();
        },
        giveScoreShow(data,index){
            this.handleReset('formCustom');
            this.formCustom.name = data[index].typeName;
            this.formCustom.show = true;
        },
        giveScore(){
            this.$Message.success('提交成功 !');
            this.formCustom.show = false;
        }
    },
    created () {
        this.getData();
    },
    mounted(){
        console.log(this)
    }
};
</script>
