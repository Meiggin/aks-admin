

<template>
<Row class="margin-top-10">
            <Col span="24">
                <Card>
                    <p slot="title">
                        <!-- <Icon type="ios-keypad"></Icon> -->
                        订单详情
                    </p>
                    <Button type="success">订单信息</Button>
                        <Card class="margin-top-10">
                            <p class="margin-top-10">订单ID:<span class="margin-left-10">1111</span></p>
                            <p class="margin-top-10">订单编号:<span class="margin-left-10">1111</span></p>
                            <p class="margin-top-10">订单状态:<span class="margin-left-10">1111</span></p>
                            <p class="margin-top-10">商品总价:<span class="margin-left-10">1111</span></p>
                            <p class="margin-top-10">实付款金额:<span class="margin-left-10">1111</span></p>
                            <p class="margin-top-10">下单时间:<span class="margin-left-10">1111</span></p>
                            <p class="margin-top-10">支付状态:<span class="margin-left-10">1111</span></p>
                            <p class="margin-top-10">支付方式:<span class="margin-left-10">1111</span></p>
                            <p class="margin-top-10">支付时间:<span class="margin-left-10">1111</span></p>
                            <p class="margin-top-10">派送状态:<span class="margin-left-10">1111</span></p>
                            <p class="margin-top-10">派工状态:<span class="margin-left-10">1111</span></p>
                        </Card>
                    <Button type="success" class="margin-top-10">物流状态信息</Button>
                        <card class="margin-top-10">
                        <Table :columns="columns1" :data="data1"></Table>
                        </card>
                    <Button type="success" class="margin-top-10">商品信息</Button>
                        <card class="margin-top-10">
                        <Table :columns="columns1" :data="data1"></Table>
                        </card>
                    <Button type="success" class="margin-top-10">添加备注</Button>
                        <card class="margin-top-10">
                            <Input v-model="value5" type="textarea" placeholder="添加备注..."></Input>
                            <Button type="text">保存</Button>
                        </card>
                    <Button type="success" class="margin-top-10">备注信息</Button>
                        <card class="margin-top-10">
                        <Table :columns="columns2" :data="data2"></Table>
                        </card>
                    <Button type="success" class="margin-top-10">下单人信息</Button>
                        <Card class="margin-top-10">
                            <p class="margin-top-10">姓名:<span class="margin-left-10">1111</span></p>
                            <p class="margin-top-10">账户名:<span class="margin-left-10">1111</span></p>
                            <p class="margin-top-10">手机:<span class="margin-left-10">1111</span></p>
                            <p class="margin-top-10">昵称:<span class="margin-left-10">1111</span></p>
                            <p class="margin-top-10">角色:<span class="margin-left-10">1111</span></p>
                            <p class="margin-top-10">会员等级:<span class="margin-left-10">1111</span></p>
                            <p class="margin-top-10">买家留言:<span class="margin-left-10">1111</span></p>
                        </Card>
                    <Button type="success" class="margin-top-10">收获信息</Button>
                        <Card class="margin-top-10">
                            <p class="margin-top-10">姓名:<span class="margin-left-10">1111</span></p>
                            <p class="margin-top-10">手机:<span class="margin-left-10">1111</span></p>
                            <p class="margin-top-10">地址:<span class="margin-left-10">1111</span></p>
                        </Card>
                    <Button type="success" class="margin-top-10">发票信息</Button>
                        <Card class="margin-top-10">
                            <p class="margin-top-10">发票类型:<span class="margin-left-10">1111</span></p>
                            <p class="margin-top-10">类型:<span class="margin-left-10">1111</span></p>
                            <p class="margin-top-10">抬头:<span class="margin-left-10">1111</span></p>
                            <p class="margin-top-10">短信通知:<span class="margin-left-10">1111</span></p>
                        </Card>
                    <Button type="success" class="margin-top-10">物流信息</Button>
                        <Card class="margin-top-10">
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
