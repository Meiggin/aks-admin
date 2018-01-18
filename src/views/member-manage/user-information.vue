

<template>
<Row class="margin-top-10">
            <Col span="24">
                <Card>
                    <p slot="title">
                        <!-- <Icon type="ios-keypad"></Icon> -->
                        用户信息管理
                    </p>
                    <Button type="ghost">用户资料</Button>
                    <card class="margin-top-10">
                    <Form :model="formItem" :label-width="80">
                        <FormItem label="用户头像">
                            
                        </FormItem>
                        <FormItem label="登录账户">
                            <Input v-model="formItem.input" placeholder="Enter something..."></Input>
                        </FormItem>
                        <FormItem label="修改密码">
                            <Input v-model="formItem.input" placeholder="Enter something..."></Input>
                        </FormItem>
                        <FormItem label="用户姓名">
                            <Input v-model="formItem.input" placeholder="Enter something..."></Input>
                        </FormItem>
                        <FormItem label="会员组">
                            <Select v-model="formItem.select">
                                <Option value="beijing">青铜会员</Option>
                                <Option value="shanghai">London</Option>
                                <Option value="shenzhen">Sydney</Option>
                            </Select>
                        </FormItem>
                        <FormItem label="角色">
                            <Select v-model="formItem.select">
                                <Option value="beijing">青铜会员</Option>
                                <Option value="shanghai">London</Option>
                                <Option value="shenzhen">Sydney</Option>
                            </Select>
                        </FormItem>
                        <FormItem label="手机号码">
                            <Input v-model="formItem.input" placeholder="Enter something..."></Input>
                        </FormItem>
                    </Form>
                    </card>
                    <Button type="ghost" class="margin-top-10">微信资料</Button>
                        <Card class="margin-top-10">
                            <p class="margin-top-10">微信Openid:<span class="margin-left-10">1111</span></p>
                            <p class="margin-top-10">性别:<span class="margin-left-10">1111</span></p>
                            <p class="margin-top-10">微信昵称:<span class="margin-left-10">1111</span></p>
                        </Card>
                        <Button type="ghost" class="margin-top-10">用户优惠</Button>
                        <Card class="margin-top-10">
                            <Form :model="formItem" :label-width="80">
                                <FormItem label="积分">
                                    <Input v-model="formItem.input" placeholder="Enter something..."></Input>
                                    <Button type="success">明细导出</Button>
                                </FormItem>
                               <FormItem label="积分">
                                    <Button type="ghost">备注信息</Button>
                                </FormItem>
                                <FormItem label="积分">
                                    <Button type="success">添加备注</Button>
                                     <Table :columns="columns2" :data="data2"></Table>
                                </FormItem>
                            </Form>     
                        </Card>
                         <Button type="success" class="margin-top-10">提交</Button>
                </Card>
            </Col>
        </Row>
</template>

<script>
    export default {
        data () {
            return {
                formItem: {
                    input: '',
                    select: '',
                    radio: 'male',
                    checkbox: [],
                    switch: true,
                    date: '',
                    time: '',
                    slider: [20, 50],
                    textarea: ''
                },
                value5:'',
                columns1: [
                    {
                        title: '物流状态',
                        key: 'logisticsstate'
                    },
                    {
                        title: '操作人',
                        key: 'name'
                    },
                    {
                        title: '操作时间',
                        key: 'operationtime'
                    }
                ],
                columns2: [
                    {
                        title: '操作员',
                        key: 'name'
                    },
                    {
                        title: '操作时间',
                        key: 'operationtime'
                    },
                    {
                        title: '备注信息',
                        key: 'noteinformation'
                    }
                ],
                data1: [
                    {
                        name: 'John Brown',
                        logisticsstate: 'New York No. 1 Lake Park',
                        operationtime: '2016-10-03'
                    },
                    {
                        name: 'Jim Green',
                        logisticsstate: 'London No. 1 Lake Park',
                        operationtime: '2016-10-01'
                    },
                    {
                        name: 'Joe Black',
                        logisticsstate: 'Sydney No. 1 Lake Park',
                        operationtime: '2016-10-02'
                    },
                    {
                        name: 'Jon Snow',
                        logisticsstate: 'Ottawa No. 2 Lake Park',
                        operationtime: '2016-10-04'
                    }
                ],
                data2: [
                    {
                        name: 'John Brown',
                        logisticsstate: 'New York No. 1 Lake Park',
                        operationtime: '2016-10-03'
                    },
                    {
                        name: 'Jim Green',
                        logisticsstate: 'London No. 1 Lake Park',
                        operationtime: '2016-10-01'
                    },
                    {
                        name: 'Joe Black',
                        logisticsstate: 'Sydney No. 1 Lake Park',
                        operationtime: '2016-10-02'
                    },
                    {
                        name: 'Jon Snow',
                        logisticsstate: 'Ottawa No. 2 Lake Park',
                        operationtime: '2016-10-04'
                    }
                ]
            }
        }
    }
</script>
