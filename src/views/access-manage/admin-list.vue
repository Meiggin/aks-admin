
<template>
    <div>
        <Row class="margin-top-10">

            <Col span="24">
                <Card>
                    <p slot="title">
                        <!-- <Icon type="ios-keypad"></Icon> -->
                        管理员列表
                        <span class="title_right">
                            <Button type="primary" @click="handleReset('formCustom');formCustom.show = true;">新增</Button>
                        </span>
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

        <Modal v-model="formCustom.show">
            <p slot="header" style="color:#1c2438;text-align:center">
                <span>赠送积分</span>
            </p>
            <div style="text-align:center">
                <Form ref="formCustom" :model="formCustom" :rules="ruleCustom" :label-width="80" label-position="left" style="padding:0 15px;">
                    <FormItem label="用户账号">
                        <Row>
                            <Col span="20">
                                <Input width="120" type="text" v-model="formCustom.account" disabled></Input>
                            </Col>
                        </Row>
                    </FormItem>
                    <FormItem label="密码">
                        <Row>
                            <Col span="20">
                                <Select v-model="formCustom.action" placeholder="赠送">
                                    <Option v-for="item in formCustom.actionList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                                </Select>
                            </Col>
                        </Row>
                    </FormItem>
                    <FormItem label="手机号码" prop="score">
                        <Row>
                            <Col span="20">
                                <Input width="120" type="text" placehloder="请输入手机号" v-model="formCustom.tel"></Input>
                            </Col>
                        </Row>
                    </FormItem>
                    <FormItem label="所属角色" prop="tip">
                        <Row>
                            <Col span="20">
                                <Select v-model="formCustom.action" placeholder="赠送">
                                    <Option v-for="item in formCustom.actionList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                                </Select>
                            </Col>
                        </Row>
                    </FormItem>
                    <FormItem label="是否开启" prop="isOpen">
                        <Row>
                            <Col span="20">
                                
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
import commonPageSet from '@/libs/commonPageSet.js';

export default {
    name: 'brand-list',
    mixins: [commonPageSet],
    components: {
        canEditTable
    },
    data () {
        return {
            listColumns:[
                { 
                    title: '品牌ID',
                    key: 'id',
                    align: 'center',
                    width: 80,
                },
                {
                    title: '品牌名称',
                    key: 'typeName',
                    align: 'center',
                    
                },
                {
                    title: '品牌logo',
                    key: 'img',
                    align: 'center',
                    width: 120,
                    imgprev:true
                },
                {
                    title: '所属分类',
                    key: 'typeText',
                    align: 'center',
                },
                {
                    title: '排序',
                    key:"sort",
                    align: 'center',
                    render: (h, params) => {
                        return h('Button', {
                            props: {
                                type: 'ghost'
                            }
                        }, params.row.sort);
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
            formCustom: {
                show: false,
                account:'',
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
                ],
                tip: [
                    { required: true, message: '提示语不能为空', trigger: 'blur' }
                ],
                remark: [
                    { required: true, message: '备注不能为空', trigger: 'blur' }
                ],
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
        handleSubmit (name) {
            this.$refs[name].validate((valid) => {
               if (valid) {
                    this.giveScore();
               }
            })
        },
        handleReset (name) {
            this.$refs[name].resetFields();
        }
    },
    created () {
        this.getData();
    }
};
</script>
