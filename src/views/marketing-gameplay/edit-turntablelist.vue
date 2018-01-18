

<template>
    <Row class="margin-top-10">
        <Col span="24">
            <Card>
                <p slot="title">
                            <!-- <Icon type="ios-keypad"></Icon> -->
                修改大转盘活动
                </p>
                    <Form :model="formItem" :label-width="80">
                        <FormItem label="活动名称">
                            <Input v-model="formItem.input" placeholder="Enter something..."></Input>
                        </FormItem>
                        <FormItem label="活动时间">
                            <Col span="12">
                                <DatePicker type="daterange" :options="options2" placement="bottom-end" placeholder="Select date" style="width: 200px"></DatePicker>
                            </Col>
                        </FormItem>
                        <FormItem label="是否开启">
                            <RadioGroup v-model="formItem.radio">
                                <Radio label="male">是</Radio>
                                <Radio label="female">否</Radio>
                            </RadioGroup>
                        </FormItem>
                        <FormItem label="奖项">
                            <CheckboxGroup v-model="formItem.checkbox">
                                <Checkbox label="积分"></Checkbox>
                                <Checkbox label="优惠卷"></Checkbox>
                                <Checkbox label="积分商品"></Checkbox>
                                <Checkbox label="大转盘商品"></Checkbox>
                            </CheckboxGroup>
                        </FormItem>
                        <FormItem label="积分奖品">
                            <Input v-model="formItem.input" placeholder="Enter something..."></Input>
                        </FormItem>
                        <FormItem label="中奖概率(%)">
                            <Input v-model="formItem.input" placeholder="Enter something..."></Input>
                        </FormItem>
                        <FormItem label="奖项2">
                            <CheckboxGroup v-model="formItem.checkbox">
                                <Checkbox label="积分"></Checkbox>
                                <Checkbox label="优惠卷"></Checkbox>
                                <Checkbox label="积分商品"></Checkbox>
                                <Checkbox label="大转盘商品"></Checkbox>
                            </CheckboxGroup>
                        </FormItem>
                        <FormItem label="积分商品奖品">
                            <Input v-model="formItem.input" placeholder="Enter something..."></Input>
                        </FormItem>
                        <FormItem label="中奖概率(1%)">
                            <Input v-model="formItem.input" placeholder="Enter something..."></Input>
                        </FormItem>
                        <Button type="success" class="margin-top-10">提交</Button>
                    </Form>
            </Card>
        </Col>
    </Row>
</template>

<script>
// import Upload from "@/marketing-gameplay/upload-list.vue"
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
