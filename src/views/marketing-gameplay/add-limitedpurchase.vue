

<template>
    <Row class="margin-top-10">
        <Col span="24">
            <Card>
                <p slot="title">
                        <!-- <Icon type="ios-keypad"></Icon> -->
                    添加商品
                </p>
                <Form :model="formItem" :label-width="80">
                    <FormItem label="活动名称">
                        <Input v-model="formItem.input" placeholder="Enter something..."></Input>
                    </FormItem>
                    <FormItem label="活动备注">
                        <Input v-model="formItem.input" placeholder="Enter something..."></Input>
                    </FormItem>
                    
                    <FormItem label="活动时间:">
                        <Col span="24">
                            <DatePicker type="daterange" placement="bottom-end" placeholder="Select date" style="width: 200px"></DatePicker>
                        </Col>
                    </FormItem>
                    <FormItem label="是否上架">
                        <RadioGroup v-model="formItem.radio">
                            <Radio label="male">是</Radio>
                            <Radio label="female">否</Radio>
                        </RadioGroup>
                    </FormItem>
                    <FormItem label="是否积分抵价">
                        <RadioGroup v-model="formItem.radio">
                            <Radio label="male">是</Radio>
                            <Radio label="female">否</Radio>
                        </RadioGroup>
                    </FormItem>
                    <FormItem label="是否使用优惠卷">
                        <RadioGroup v-model="formItem.radio">
                            <Radio label="male">是</Radio>
                            <Radio label="female">否</Radio>
                        </RadioGroup>
                    </FormItem>
                    <FormItem label="适用商品">
                            <Select v-model="formItem.select">
                                <Option value="beijing">111</Option>
                                <Option value="shanghai">1111</Option>
                            </Select>
                        </FormItem>
                    <FormItem label="活动价格">
                        <Input v-model="formItem.input" placeholder="Enter something..."></Input>
                    </FormItem>
                    <FormItem label="官网挂牌价:">
                        <Row>
                            <Col span="12">
                                <Input v-model="formItem.input" placeholder="Enter something..." span="11"></Input>
                            </Col>
                            <Col span="6">
                                <Input v-model="formItem.input" placeholder="限购数量" span="6"></Input>
                            </Col>
                        </Row>
                    </FormItem>
                    <FormItem label="移动端价格:">
                        <Row>
                            <Col span="12">
                                <Input v-model="formItem.input" placeholder="Enter something..." span="11"></Input>
                            </Col>
                            <Col span="6">
                                <Input v-model="formItem.input" placeholder="限购数量" span="6"></Input>
                            </Col>
                        </Row>
                    </FormItem>
                    <FormItem label="青铜会员:">
                        <Row>
                            <Col span="12">
                                <Input v-model="formItem.input" placeholder="Enter something..." span="11"></Input>
                            </Col>
                            <Col span="6">
                                <Input v-model="formItem.input" placeholder="限购数量" span="6"></Input>
                            </Col>
                        </Row>
                    </FormItem>
                    <FormItem label="白银会员:">
                        <Row>
                            <Col span="12">
                                <Input v-model="formItem.input" placeholder="Enter something..." span="11"></Input>
                            </Col>
                            <Col span="6">
                                <Input v-model="formItem.input" placeholder="限购数量" span="6"></Input>
                            </Col>
                        </Row>
                    </FormItem>
                    <FormItem label="黄金高级会员:">
                        <Row>
                            <Col span="12">
                                <Input v-model="formItem.input" placeholder="Enter something..." span="11"></Input>
                            </Col>
                            <Col span="6">
                                <Input v-model="formItem.input" placeholder="限购数量" span="6"></Input>
                            </Col>
                        </Row>
                    </FormItem>
                    <FormItem label="铂金高级会员:">
                        <Row>
                            <Col span="12">
                                <Input v-model="formItem.input" placeholder="Enter something..." span="11"></Input>
                            </Col>
                            <Col span="6">
                                <Input v-model="formItem.input" placeholder="限购数量" span="6"></Input>
                            </Col>
                        </Row>
                    </FormItem>
                    <FormItem label="钻石高级会员:">
                        <Row>
                            <Col span="12">
                                <Input v-model="formItem.input" placeholder="Enter something..." span="11"></Input>
                            </Col>
                            <Col span="6">
                                <Input v-model="formItem.input" placeholder="限购数量" span="6"></Input>
                            </Col>
                        </Row>
                    </FormItem>
                    <FormItem label="铂金高级会员(内部员工):">
                        <Row>
                            <Col span="12">
                                <Input v-model="formItem.input" placeholder="Enter something..." span="11"></Input>
                            </Col>
                            <Col span="6">
                                <Input v-model="formItem.input" placeholder="限购数量" span="6"></Input>
                            </Col>
                        </Row>
                    </FormItem>
                    <FormItem label="铂金高级会员(内部员工):">
                        <Row>
                            <Col span="12">
                                <Input v-model="formItem.input" placeholder="Enter something..." span="11"></Input>
                            </Col>
                            <Col span="6">
                                <Input v-model="formItem.input" placeholder="限购数量" span="6"></Input>
                            </Col>
                        </Row>
                    </FormItem>
                    
                    <Button type="success" class="margin-top-10">提交</Button>
                </Form>
            </Card>
        </Col>
    </Row>
</template>

<script>
import Texteditor from "@/components/texteidt/text-editor.vue"
import Addsize from "@/components/addsize/addsize"
   export default {
       components: {
        Texteditor,
           Addsize
        },
        data () {
            return {
                index:1,
                formItem: {
                    input: '',
                    select: '',
                    radio: 'male',
                    checkbox: [],
                    switch: true,
                    date: '',
                    time: '',
                    slider: [20, 50],
                    textarea: '',
                    items: [
                        {
                            value: '',
                            index: 1,
                            status: 1
                        }
                    ]
                }
            }
        },
        methods: {
            handleSubmit (name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.$Message.success('Success!');
                    } else {
                        this.$Message.error('Fail!');
                    }
                })
            },
            handleReset (name) {
                this.$refs[name].resetFields();
            },
            handleAdd () {
                this.index++;
                this.formDynamic.items.push({
                    value: '',
                    index: this.index,
                    status: 1
                });
            },
            handleRemove (index) {
                this.formDynamic.items[index].status = 0;
            }
        }
    }
</script>