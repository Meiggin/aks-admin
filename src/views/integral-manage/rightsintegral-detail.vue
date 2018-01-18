

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
                            <p class="margin-top-10">申请范围:<span class="margin-left-10">1111</span></p>
                            <p class="margin-top-10">申请时间:<span class="margin-left-10">1111</span></p>
                            <p class="margin-top-10">收件人姓名:<span class="margin-left-10">1111</span></p>
                            <p class="margin-top-10">联系方式:<span class="margin-left-10">1111</span></p>
                            <p class="margin-top-10">申请理由:<span class="margin-left-10">1111</span></p>
                            <p class="margin-top-10">售后图片:<span class="margin-left-10">1111</span></p>
                        
                            <Table :columns="columns1" :data="data1"></Table>
                            <Button type="success" class="margin-top-10">申请售后商品信息</Button>
                            <card class="margin-top-10">
                            <Table :columns="columns1" :data="data1"></Table>
                            </card>
                            <Button type="success" class="margin-top-10">物流状态信息</Button>
                            <card class="margin-top-10">
                            <Table :columns="columns1" :data="data1" class="margin-top-10"></Table>
                            </card>
                            <Button type="success" class="margin-top-10">协商记录</Button>
                            <card class="margin-top-10">
                            <span>添加协商记录:</span>
                            <Input v-model="value5" type="textarea"></Input>
                            <Button type="text">保存协商记录</Button>
                            <Table :columns="columns1" :data="data1"></Table>
                            </card>
                            <Button type="success" class="margin-top-10">备注信息</Button>
                            <card class="margin-top-10">
                            <span>添加备注记录:</span>
                            <Input v-model="value5" type="textarea" placeholder="添加备注..."></Input>
                            <Button type="text">保存协商记录</Button>
                            <Table :columns="columns1" :data="data1"></Table>
                            </card>
                            </Card>
                            <Button type="success" class="margin-top-10">订单信息</Button>
                            <Card class="margin-top-10">
                            <p class="margin-top-10">订单类型:<span class="margin-left-10">1111</span></p>
                            <p class="margin-top-10">订单内码:<span class="margin-left-10">1111</span></p>
                            <p class="margin-top-10">订单编号:<span class="margin-left-10">1111</span></p>
                            <p class="margin-top-10">订单状态:<span class="margin-left-10">1111</span></p>
                            <p class="margin-top-10">订单金额:<span class="margin-left-10">1111</span></p>
                            <p class="margin-top-10">实付积分:<span class="margin-left-10">1111</span></p>
                            <p class="margin-top-10">下单时间:<span class="margin-left-10">1111</span></p>
                            <p class="margin-top-10">支付状态:<span class="margin-left-10">1111</span></p>
                            <p class="margin-top-10">支付时间:<span class="margin-left-10">1111</span></p>
                        </Card>
                         <Button type="success" class="margin-top-10">商品信息</Button>
                        <card class="margin-top-10">
                            <Table :columns="columns1" :data="data1"></Table>
                        </card>
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
                            <p class="margin-top-10">手机:<span class="margin-left-10">1111</span></p>
                            <p class="margin-top-10">地址:<span class="margin-left-10">1111</span></p>
                        </Card>
                                     
            </Card>
        </Col>
    </Row>
</template>

<script>
    export default {
        data () {
            return {
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
