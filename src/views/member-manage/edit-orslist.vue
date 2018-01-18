

<template>
    <Row class="margin-top-10">
            <Col span="24">
                <Card>
                    <p slot="title">
                        <!-- <Icon type="ios-keypad"></Icon> -->
                        编辑会员组
                    </p>
                    <Form :model="formItem" :label-width="80">
                        <FormItem label="会员组名称">
                            <Input v-model="formItem.input" placeholder="Enter something..."></Input>
                        </FormItem>
                        <FormItem label="会员组通道">
                            <Select v-model="formItem.select">
                                <Option value="beijing">New York</Option>
                                <Option value="shanghai">London</Option>
                                <Option value="shenzhen">Sydney</Option>
                            </Select>
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
                }
            }
        }
    }
</script>
