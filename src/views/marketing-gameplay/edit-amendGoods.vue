

<template>
        <Row class="margin-top-10">
            <Col span="24">
                <Card>
                    <p slot="title">
                        <!-- <Icon type="ios-keypad"></Icon> -->
                        修改商品
                    </p>
                    <Form :model="formItem" :label-width="80">
                        <FormItem label="活动名称">
                            <Input v-model="formItem.input" placeholder="Enter something..."></Input>
                        </FormItem>
                        <FormItem label="活动时间">
                            <Input v-model="formItem.input" placeholder="Enter something..."></Input>
                        </FormItem>
                        <FormItem label="是否上架">
                            <Select v-model="formItem.select">
                                <Option value="beijing">上架</Option>
                                <Option value="shanghai">下架</Option>
                            </Select>
                        </FormItem>
                        <FormItem label="商品库存">
                            <Input v-model="formItem.input" placeholder="Enter something..."></Input>
                        </FormItem>
                        <FormItem label="适用商品">
                            <Input v-model="formItem.input" placeholder="Enter something..."></Input>
                            <Button type="success" class="margin-top-10">搜索</Button>
                            <Select v-model="formItem.select">
                                <Option value="beijing">上架</Option>
                                <Option value="shanghai">下架</Option>
                            </Select>
                        </FormItem>
                        <FormItem label="官网挂牌价">
                            <Input v-model="formItem.input" placeholder="Enter something..."></Input>
                        </FormItem>
                        <FormItem label="活动特价">
                            <Input v-model="formItem.input" placeholder="Enter something..."></Input>
                        </FormItem>
                        <FormItem label="是否使用分销佣金">
                            <Select v-model="formItem.select">
                                <Option value="beijing">是</Option>
                                <Option value="shanghai">否</Option>
                            </Select>
                        </FormItem>
                    </Form>
                    <Button type="success" class="margin-top-10">搜索</Button>
                </Card>
            </Col>
        </Row>
</template>

<script>
    export default {
        data () {
            return {
                value5:'',
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

