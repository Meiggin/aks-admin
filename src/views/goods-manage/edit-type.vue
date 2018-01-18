

<template>
    <Row class="margin-top-10">
        <Col span="24">
        <Card>
            <p slot="title">
                编辑分类
            </p>


            <Form :model="formItem" :label-width="80">
                <FormItem label="品牌名称:">
                    <Input v-model="formItem.Brandname" placeholder=""></Input>
                </FormItem>
                <FormItem label="上级分类:">
                    <Select v-model="formItem.Categoryparent">
                        <Option value="beijing">New York</Option>
                        <Option value="shanghai">London</Option>
                        <Option value="shenzhen">Sydney</Option>
                    </Select>
                </FormItem>
                <Upload action="//jsonplaceholder.typicode.com/posts/">
                    <Button type="ghost">预览图片</Button>
                </Upload> 
                <FormItem label="首页显示:">
                    <Select v-model="formItem.Frontpagedisplays">
                        <Option value="beijing">显示</Option>
                        <Option value="shanghai">隐藏</Option>
                    </Select>
                </FormItem>
                <FormItem label="显示排序:">
                    <Input v-model="formItem.Displaysort" placeholder=""></Input>
                </FormItem>
            </Form>
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
