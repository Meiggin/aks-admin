

<template>
    <Row class="margin-top-10">
        <Col span="24">
            <Card>
                <p slot="title">
                        <!-- <Icon type="ios-keypad"></Icon> -->
                    编辑预售活动
                </p>
                <Form :model="formDynamic" :label-width="80" ref="formDynamic">
                    <FormItem label="活动商品:">
                        <Select v-model="formDynamic.type">
                            <Option value="up">挂机</Option>
                            <Option value="down">柜机</Option>
                        </Select>
                    </FormItem>
                    <FormItem label="开始售卖时间:">
                        <Col span="24">
                            <DatePicker type="daterange" placement="bottom-end" placeholder="Select date" style="width: 200px"></DatePicker>
                        </Col>
                    </FormItem>
                    <FormItem label="定金过期时间:">
                        <Col span="24">
                            <DatePicker type="daterange" placement="bottom-end" placeholder="Select date" style="width: 200px"></DatePicker>
                        </Col>
                    </FormItem>
                    <FormItem label="预付定金:">
                        <Input v-model="formDynamic.input" placeholder=""></Input>
                    </FormItem>
                    <FormItem label="预售数量:">
                        <Input v-model="formDynamic.input" placeholder=""></Input>
                    </FormItem>
                    <FormItem label="是否使用分销佣金:">
                        <RadioGroup v-model="formDynamic.radio">
                            <Radio label="male">否</Radio>
                            <Radio label="female">是</Radio>
                        </RadioGroup>
                    </FormItem>
                    <FormItem>
                        <Button type="primary">提交</Button>
                        <Button type="ghost" style="margin-left: 8px">返回</Button>
                    </FormItem>
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
                formDynamic: {
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