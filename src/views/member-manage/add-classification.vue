

<template>
        <Row class="margin-top-10">
            <Col span="24">
                <Card>
                    <p slot="title">
                        <!-- <Icon type="ios-keypad"></Icon> -->
                        添加分类群组
                    </p>
                    <Form :model="formItem" :label-width="80">
                        
                        <FormItem label="通道分类">
                            <Select v-model="formItem.select">
                                <Option value="beijing">New York</Option>
                                <Option value="shanghai">London</Option>
                                <Option value="shenzhen">Sydney</Option>
                            </Select>
                        </FormItem>
                        <FormItem label="等级名称">
                            <Input v-model="formItem.input" placeholder="Enter something..."></Input>
                        </FormItem>
                        <FormItem label="级别">
                            <Input v-model="formItem.input" placeholder="Enter something..."></Input>
                        </FormItem>
                        <FormItem label="消费金额">
                            <Input v-model="formItem.input" placeholder="Enter something..."></Input>
                        </FormItem>
                        <FormItem label="积分倍数">
                            <Input v-model="formItem.input" placeholder="Enter something..."></Input>
                        </FormItem>
                    </Form>
                    <Button type="success">提交</Button>
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
                }
            }
        }
    }
</script>
