<template>
<Row class="margin-top-10">
            <Col span="24">
                <Card>
                    <p slot="title">
                        <!-- <Icon type="ios-keypad"></Icon> -->
                        编辑品牌
                    </p>
                    
                    <Form :model="formItem" :label-width="80">
                        <FormItem label="品牌名称:">
                            <Input v-model="formItem.Brandname" placeholder=""></Input>
                        </FormItem>
                        <FormItem label="所属分类">
                            <CheckboxGroup v-model="formItem.classlogo">
                                <Checkbox label="空调"></Checkbox>
                                <Checkbox label="Sleep"></Checkbox>
                                <Checkbox label="Run"></Checkbox>
                                <Checkbox label="Movie"></Checkbox>
                            </CheckboxGroup>
                        </FormItem>
                        <Upload action="//jsonplaceholder.typicode.com/posts/">
                            <Button type="ghost">预览图片</Button>
                        </Upload>
                        <FormItem label="显示排序:">
                            <Input v-model="formItem.Brandname" placeholder=""></Input>
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
