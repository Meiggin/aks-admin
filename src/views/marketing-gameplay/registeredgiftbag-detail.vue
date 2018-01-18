

<template>
        <Row class="margin-top-10">
            <Col span="24">
                <Card>
                    <p slot="title">
                        <!-- <Icon type="ios-keypad"></Icon> -->
                        注册礼包配置
                    </p>
                    <Form :model="formItem" :label-width="90">
                        <FormItem label="注册礼包名称">
                            <Input v-model="formItem.input" placeholder=""></Input>
                        </FormItem>
                        <FormItem label="赠送积分">
                            <Input v-model="formItem.input" placeholder=""></Input>
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
                        <FormItem label="[id:38迁移Boss]35GW/BpTYC19+1优惠卷个数">
                            <Input v-model="formItem.input" placeholder=""></Input>
                        </FormItem>
                        <FormItem label="[id:39迁移Boss]35GW/BpTYC19+1优惠卷个数">
                            <Input v-model="formItem.input" placeholder=""></Input>
                        </FormItem>
                        <FormItem label="是否启用">
                            <RadioGroup v-model="formItem.radio">
                                <Radio label="male">禁用</Radio>
                                <Radio label="female">启用</Radio>
                            </RadioGroup>
                        </FormItem>
                        <FormItem label="应用平台">
                            <RadioGroup v-model="formItem.radio">
                                <Radio label="male">仅微信端</Radio>
                                <Radio label="female">仅PC端</Radio>
                                <Radio label="female">微信端或PC端</Radio>
                            </RadioGroup>
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
