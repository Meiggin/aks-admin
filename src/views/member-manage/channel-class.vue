
<template>
    <div>
        <Row class="margin-top-10">

            <Col span="24">
                <Card>
                    <p slot="title">
                        <!-- <Icon type="ios-keypad"></Icon> -->
                        会员列表
                        <span class="title_right">
                            <Button type="primary">新增分类</Button>
                            <Button type="primary">新增等级</Button>
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
                                    @on-selection-change=""
                                    :total="total"
                                    :current="1"
                                    @on-change="setPage"
                                    @on-page-size-change="setPageSize"
                                    @on-delete="" 
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
import commonPageSet from '@/libs/commonPageSet.js';
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
                    title: '群组名称',
                    key: 'id',
                    align: 'center',
                    width: 200
                },
                {
                    title: '等级',
                    key: 'typeName',
                    align: 'center',
                    
                },
                {
                    title: '创建时间',
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
    }
};
</script>
