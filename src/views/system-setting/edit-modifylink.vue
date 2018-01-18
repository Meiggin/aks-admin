

<template>
        <Row class="margin-top-10">
            <Col span="24">
                <Card>
                    <p slot="title">
                        <!-- <Icon type="ios-keypad"></Icon> -->
                       修改友情链接
                    </p>
                    <Form :model="formItem" :label-width="90">
                        <FormItem label="链接标题">
                            <Input v-model="formItem.title" placeholder=""></Input>
                        </FormItem>
                        <FormItem label="链接地址">
                            <Input v-model="formItem.link" placeholder=""></Input>
                        </FormItem>
                        <FormItem label="链接排序">
                             <Input v-model="formItem.link" placeholder=""></Input>
                        </FormItem>
                         <FormItem label="是否显示">
                            <Select v-model="formItem.select">
                                <Option value="yes">显示</Option>
                                <Option value="no">隐藏</Option>
                            </Select>
                        </FormItem>
                        <FormItem label="链接logo">
                            
                            <Upload action="//jsonplaceholder.typicode.com/posts/">
        <Button type="ghost" icon="ios-cloud-upload-outline">Upload files</Button>
    </Upload>
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
