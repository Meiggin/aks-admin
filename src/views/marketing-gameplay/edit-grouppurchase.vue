

<template>
    <Row class="margin-top-10">
        <Col span="24">
            <Card>
                <p slot="title">
                        <!-- <Icon type="ios-keypad"></Icon> -->
                    团购活动配置
                </p>
                <Form :model="formItem" :label-width="80">
                    <FormItem label="活动名称">
                        <Input v-model="formItem.input" placeholder="Enter something..."></Input>
                    </FormItem>
                    <FormItem label="适用商品">
                        <Poptip placement="right" width="400">
                        <Button type="ghost">选择</Button>
                        <div class="api" slot="content">
                            <table>
                                <thead>
                                    <tr>
                                        <th>版本号</th>
                                        <input type="txt"/>
                                        <th>更新时间</th>
                                        <th>说明</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>0.9.5</td>
                                        <td>2016-10-26</td>
                                        <td>新增信息提示组件 <code>Tooltip</code>和<code>Poptip</code></td>
                                    </tr>
                                    <tr>
                                        <td>0.9.4</td>
                                        <td>2016-10-25</td>
                                        <td>新增对话框组件 <code>Modal</code></td>
                                    </tr>
                                    <tr>
                                        <td>0.9.2</td>
                                        <td>2016-09-28</td>
                                        <td>新增选择器组件 <code>Select</code></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </Poptip>
                    </FormItem>
                    
                    <FormItem label="活动图片:">
                        <Upload action="//jsonplaceholder.typicode.com/posts/">
                        <Button type="ghost">预览图片</Button>
                        </Upload>
                    </FormItem>
                    <FormItem label="拼团价格:">
                        <Input v-model="formItem.input" placeholder="Enter something..."></Input>
                    </FormItem>
                    <FormItem label="拼团人数:">
                        <Input v-model="formItem.input" placeholder="Enter something..."></Input>
                    </FormItem>
                    <FormItem label="虚拟结束时间(秒):">
                        <Input v-model="formItem.input" placeholder="Enter something..."></Input>
                        <p>(注:不输入描述默认不自动成团)</p>
                    </FormItem>
                    <FormItem label="下单是否使用优惠卷">
                        <RadioGroup v-model="formItem.radio">
                            <Radio label="male">禁用</Radio>
                            <Radio label="female">启用</Radio>
                        </RadioGroup>
                    </FormItem>
                    <FormItem label="下单是否使用积分:">
                        <RadioGroup v-model="formItem.radio">
                            <Radio label="male">禁用</Radio>
                            <Radio label="female">启用</Radio>
                        </RadioGroup>
                    </FormItem>
                    <FormItem label="是否启用:">
                        <RadioGroup v-model="formItem.radio">
                            <Radio label="male">禁用</Radio>
                            <Radio label="female">启用</Radio>
                        </RadioGroup>
                    </FormItem>
                    <FormItem label="活动开始时间:">
                        <Input v-model="formItem.input" placeholder="Enter something..."></Input>
                    </FormItem>
                    <FormItem label="活动结束时间:">
                        <Input v-model="formItem.input" placeholder="Enter something..."></Input>
                    </FormItem>
                    <FormItem label="活动排序:">
                        <Input v-model="formItem.input" placeholder="Enter something..."></Input>
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