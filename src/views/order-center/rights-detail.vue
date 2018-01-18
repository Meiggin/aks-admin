

<template>
<Row class="margin-top-10">
            <Col span="24">
                <Card>
                    <p slot="title">
                        <!-- <Icon type="ios-keypad"></Icon> -->
                        维权详情
                    </p>
                     <Button type="success" class="margin-top-10">退款申请</Button>
                        <Card class="margin-top-10">
                            <p class="margin-top-10">处理状态:<span class="margin-left-10">1111</span></p>
                            <p class="margin-top-10">申请类型:<span class="margin-left-10">1111</span></p>
                            <p class="margin-top-10">申请范围:<span class="margin-left-10">1111</span></p>
                            <p class="margin-top-10">申请时间:<span class="margin-left-10">1111</span></p>
                            <p class="margin-top-10">申请人姓名:<span class="margin-left-10">1111</span></p>
                            <p class="margin-top-10">联系方式:<span class="margin-left-10">1111</span></p>
                            <p class="margin-top-10">申请理由:<span class="margin-left-10">1111</span></p>
                            <p class="margin-top-10">售后图片:<span class="margin-left-10">1111</span></p>
                            <p class="margin-top-10">预约姓名:<span class="margin-left-10">1111</span></p>
                            <p class="margin-top-10">联系方式:<span class="margin-left-10">1111</span></p>
                            <p class="margin-top-10">预约时间:<span class="margin-left-10">1111</span></p>
                            <hr class="margin-top-10">
                            <Form :model="formItem" :label-width="80">
                                <FormItem label="处理结果">
                                    <Select v-model="formItem.select">
                                        <Option value="beijing">同意</Option>
                                        <Option value="shanghai">驳回</Option>
                                    </Select>
                                </FormItem>
                                <FormItem label="是否扣除购买积分">
                                    <RadioGroup v-model="formItem.radio">
                                        <Radio label="male">是</Radio>
                                        <Radio label="female">否</Radio>
                                    </RadioGroup>
                                </FormItem>
                                <FormItem label="是否返回抵现积分">
                                    <RadioGroup v-model="formItem.radio">
                                        <Radio label="male">是</Radio>
                                        <Radio label="female">否</Radio>
                                    </RadioGroup>
                                </FormItem>
                                <FormItem label="是否扣除购买佣金">
                                    <RadioGroup v-model="formItem.radio">
                                        <Radio label="male">是</Radio>
                                        <Radio label="female">否</Radio>
                                    </RadioGroup>
                                </FormItem>
                                <FormItem label="是否重置优惠卷">
                                    <RadioGroup v-model="formItem.radio">
                                        <Radio label="male">是</Radio>
                                        <Radio label="female">否</Radio>
                                    </RadioGroup>
                                </FormItem>
                                <FormItem label="提交理由">
                                    <Input v-model="formItem.textarea" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="Enter something..."></Input>
                                </FormItem>
                            </Form>
                        <Button type="success" class="margin-top-10">提交处理结果</Button>
                                <card class="margin-top-10">
                                <Table :columns="columns2" :data="data2"></Table>
                                </card>
                        <hr>
                        <Button type="success" class="margin-top-10">申请售后商品信息</Button>
                                <card class="margin-top-10">
                                <Table :columns="columns2" :data="data2"></Table>
                                </card>
                                <Button type="success" class="margin-top-10">添加收件员信息</Button>
                                <card class="margin-top-10">
                                    <Form :model="formItem" :label-width="80">
                                        <FormItem label="取件员">
                                            <Input v-model="formItem.input" placeholder="Enter something..."></Input>
                                        </FormItem>
                                        <FormItem label="联系方式">
                                            <Input v-model="formItem.input" placeholder="Enter something..."></Input>
                                        </FormItem>
                                        <FormItem label="取件时间">
                                            <Input v-model="formItem.input" placeholder="Enter something..."></Input>
                                        </FormItem>
                                    </Form>
                                </card>
                                 <Button type="success" class="margin-top-10">物流状态</Button>
                                <card class="margin-top-10">
                                <Table :columns="columns2" :data="data2"></Table>
                                </card>
                                <Button type="success" class="margin-top-10">写上记录</Button>
                                    <card class="margin-top-10">
                                    <Table :columns="columns2" :data="data2"></Table>
                                    </card>
                                <Button type="success" class="margin-top-10">协商记录</Button>
                                    <card class="margin-top-10">
                                        <Form :model="formItem" :label-width="80">
                                            <FormItem label="添加协商记录">
                                                <Input v-model="formItem.textarea" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="Enter something..."></Input>
                                                <Button type="text">保存协商记录</Button>
                                                <Table :columns="columns2" :data="data2"></Table>
                                            </FormItem>
                                        </Form>
                                    </card>
                        <Button type="success" class="margin-top-10">备注信息</Button>
                                <card class="margin-top-10">
                                        <Form :model="formItem" :label-width="80">
                                            <FormItem label="添加备注">
                                                <Input v-model="formItem.textarea" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="Enter something..."></Input>
                                                <Button type="text">保存备注记录</Button>
                                                <Table :columns="columns2" :data="data2"></Table>
                                            </FormItem>
                                        </Form>
                                    </card>
                        <Button type="success" class="margin-top-10">订单信息</Button>
                        <Card class="margin-top-10">
                            <p class="margin-top-10">订单类型:<span class="margin-left-10">1111</span></p>
                            <p class="margin-top-10">订单内码:<span class="margin-left-10">1111</span></p>
                            <p class="margin-top-10">订单编号:<span class="margin-left-10">1111</span></p>
                            <p class="margin-top-10">订单状态:<span class="margin-left-10">1111</span></p>
                            <p class="margin-top-10">订单金额:<span class="margin-left-10">1111</span></p>
                            <p class="margin-top-10">实付金额:<span class="margin-left-10">1111</span></p>
                            <p class="margin-top-10">下单时间:<span class="margin-left-10">1111</span></p>
                            <p class="margin-top-10">支付状态:<span class="margin-left-10">1111</span></p>
                            <p class="margin-top-10">支付方式:<span class="margin-left-10">1111</span></p>
                            <p class="margin-top-10">支付时间:<span class="margin-left-10">1111</span></p>
                        </Card>
                        <Button type="success" class="margin-top-10">商品信息</Button>
                        <Card class="margin-top-10">
                            <Table :columns="columns2" :data="data2"></Table>
                        </Card>
                        <Button type="success" class="margin-top-10">会员信息</Button>
                        <Card class="margin-top-10">
                            <p class="margin-top-10">账户名:<span class="margin-left-10">1111</span></p>
                            <p class="margin-top-10">手机号:<span class="margin-left-10">1111</span></p>
                            <p class="margin-top-10">微信Openid:<span class="margin-left-10">1111</span></p>
                            <p class="margin-top-10">会员组:<span class="margin-left-10">1111</span></p>
                        </Card>
                        <Button type="success" class="margin-top-10">收货信息</Button>
                        <Card class="margin-top-10">
                            <p class="margin-top-10">姓名:<span class="margin-left-10">1111</span></p>
                            <p class="margin-top-10">手机号:<span class="margin-left-10">1111</span></p>
                            <p class="margin-top-10">地址:<span class="margin-left-10">1111</span></p>
                        </Card>
                    </Card>
                </Card>
            </Col>
        </Row>
</template>

<script>
    export default {
        data () {
            return {
                columns2: [
                    {
                        title: '处理前订单状态',
                        key: 'Processing'
                    },
                    {
                        title: '操作员',
                        key: 'name'
                    },
                    {
                        title: '操作时间',
                        key: 'Processingtime'
                    },
                    {
                        title: '提交理由',
                        key: 'Submission'
                    }
                ],
                data2: [
                    {
                        Processing: '售后处理中',
                        name: 'admin',
                        Processingtime: '2016-10-03',
                        Submission: '1234215'
                    },
                    {
                        Processing: '售后处理中',
                        name: 'admin',
                        Processingtime: '2016-10-03',
                        Submission: '1234215'
                    },
                    {
                        Processing: '售后处理中',
                        name: 'admin',
                        Processingtime: '2016-10-03',
                        Submission: '1234215'
                    },
                    {
                        Processing: '售后处理中',
                        name: 'admin',
                        Processingtime: '2016-10-03',
                        Submission: '1234215'
                    }
                ],
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
                }
            }
        }
    }
</script>
