

<template>
        <Row class="margin-top-10">
            <Col span="24">
                <Card>
                    <p slot="title">
                        <!-- <Icon type="ios-keypad"></Icon> -->
                        添加回复内容
                    </p>
                
            
            <Form :model="formItem" :label-width="80">
                <FormItem label="回复内容:">
                    <Button type="text">保存备注记录</Button>
                    
                </FormItem>
                <FormItem label="显示排序:">
                    <Input v-model="formItem.Brandname" placeholder=""></Input>
                </FormItem>
                <Button type="success" class="margin-top-10">提交</Button>
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
