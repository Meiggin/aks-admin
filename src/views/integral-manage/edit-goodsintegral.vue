

<template>
    <Row class="margin-top-10">
        <Col span="24">
            <Card>
                <p slot="title">
                        <!-- <Icon type="ios-keypad"></Icon> -->
                    编辑商品信息
                </p>
                <Form :model="formDynamic" :label-width="80" ref="formDynamic">
                    <FormItem label="商品类型:">
                        <Select v-model="formDynamic.type">
                            <Option value="up">挂机</Option>
                            <Option value="down">柜机</Option>
                        </Select>
                    </FormItem>
                    <FormItem label="关联类型:">
                        <Select v-model="formDynamic.type">
                            <Option value="up">挂机</Option>
                            <Option value="down">柜机</Option>
                        </Select>
                    </FormItem>
                    <FormItem label="关联优惠卷:">
                        <Select v-model="formDynamic.type">
                            <Option value="up">挂机</Option>
                            <Option value="down">柜机</Option>
                        </Select>
                    </FormItem>
                    <FormItem label="商品编码:">
                        <Input v-model="formDynamic.input" placeholder=""></Input>
                    </FormItem>
                    <FormItem label="商品名称:">
                        <Input v-model="formDynamic.input" placeholder=""></Input>
                    </FormItem>
                    <FormItem label="商品名称:">
                        <Input v-model="formDynamic.input" placeholder=""></Input>
                    </FormItem>
                    <FormItem label="商品简介:">
                        <Input v-model="formDynamic.input" placeholder=""></Input>
                    </FormItem>
                    <FormItem label="是否上架:">
                        <Select v-model="formDynamic.brand">
                            <Option value="beijing">上架</Option>
                            <Option value="shanghai">下架</Option>
                        </Select>
                    </FormItem>
                    <FormItem label="排序:">
                        <Input v-model="formDynamic.input" placeholder=""></Input>
                    </FormItem>
                    <FormItem label="标签">
                        <CheckboxGroup v-model="formDynamic.checkbox">
                            <Checkbox label="Eat"></Checkbox>
                            <Checkbox label="Sleep"></Checkbox>
                            <Checkbox label="Run"></Checkbox>
                            <Checkbox label="Movie"></Checkbox>
                        </CheckboxGroup>
                    </FormItem>
                     <FormItem label="库存数量:">
                        <Input v-model="formDynamic.input" placeholder=""></Input>
                    </FormItem>
                    <FormItem label="市场价格:">
                        <Input v-model="formDynamic.input" placeholder=""></Input>
                    </FormItem>
                    <FormItem label="零售价格:">
                        <Input v-model="formDynamic.input" placeholder=""></Input>
                    </FormItem>

                    <FormItem
                        v-for="(item, index) in formDynamic.items"
                        v-if="item.status"
                        :key="index"
                        :label="'颜色 ' + item.index"
                        :prop="'items.' + index + '.value'"
                        :rules="{required: true, message: 'Item ' + item.index +' can not be empty', trigger: 'blur'}">
                        <Row>
                            <Col span="18">
                                <Input type="text" v-model="item.value" placeholder="Enter something..."></Input>
                            </Col>
                            <Col span="4" offset="1">
                                <Button type="ghost" @click="handleRemove(index)">删除</Button>
                            </Col>
                        </Row>
                    </FormItem>
                    <FormItem>
                        <Row>
                            <Col span="12">
                                <Button type="dashed" long @click="handleAdd" icon="plus-round">添加颜色</Button>
                            </Col>
                        </Row>
                    </FormItem>
                    <Addsize></Addsize>
                    <Upload action="//jsonplaceholder.typicode.com/posts/">
                        <Button type="ghost">预览图片</Button>
                    </Upload>
                    <Texteditor></Texteditor>
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