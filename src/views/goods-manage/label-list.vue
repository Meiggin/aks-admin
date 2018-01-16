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
                    
                    <Row>
                        <Form ref="formCustom" :model="formCustom" :rules="ruleCustom" :label-width="80">
                            
                            <FormItem label="名称" prop="name">
                                <Row>
                                    <Col span="5">
                                        <Input width="120" type="text" placehloder="请输入名称" v-model="formCustom.name"></Input>
                                    </Col>
                                </Row>
                            </FormItem>
                            <FormItem label="排序" prop="sort">
                                <Row>
                                    <Col span="5">
                                        <Input type="text" placehloder="请输入排序" v-model="formCustom.sort"></Input>
                                    </Col>
                                </Row>
                            </FormItem>
                            <FormItem>
                                <Button type="primary" @click="handleSubmit('formCustom')">提交</Button>
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
    setTimeout(() => {
        let g = /^[1-9]*[1-9][0-9]*$/;  
        if (g.test(value)) {
            callback();
        }else{
            callback(new Error('请输入正整数'));
        }
    }, 1000);
};

export default {
    name: 'label-list',
    mixins: [commonPageSet],
    components: {
        canEditTable
    },
    data () {
        return {
            listColumns: [
                { 
                    title: 'ID',
                    key: 'id',
                    align: 'center',
                    width: 80,
                },
                {
                    title: '标签名称',
                    key: 'labelName',
                    align: 'center',
                    
                },
                {
                    title: '排序',
                    key:"sort",
                    align: 'center',
                    sortable: true,
                    render: (h, params) => {
                        console.log(params)
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
                name:'',
                sort:''
            },
            ruleCustom: {
                name: [
                        { required: true, message: '名称不能为空', trigger: 'blur' }
                    ],
                sort: [
                        { required: true, message: '排序不能为空', trigger: 'blur' },
                        { validator: checkSort, trigger: 'blur' }
                    ]    
            }
        };
    },
    methods: {
        getData(){
            this.mockData(this.pageSize);
            this.total = 1;
        },
        mockData (pageSize) {
            let data = [];
            for (let i = 0; i < pageSize; i++) {
                data.push({
                    id: Math.floor(Math.random()*100),
                    typeName : Math.floor(Math.random()*1000000000),
                    labelName : Math.floor(Math.random()*1000000000),
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
                    this.$Message.success('提交成功 !');
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
