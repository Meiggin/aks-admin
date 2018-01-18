

<template>
        <Row class="margin-top-10">
            <Col span="24">
                <Card>
                    <p slot="title">
                        <!-- <Icon type="ios-keypad"></Icon> -->
                       修改SEO
                    </p>
                    <Form :model="formItem" :label-width="90">
                        <FormItem label="SEO标题">
                            <Input v-model="formItem.title" placeholder=""></Input>
                        </FormItem>
                        <FormItem label="SEO关键词">
                            <Input v-model="formItem.key" placeholder=""></Input>
                        </FormItem>
                        <FormItem label="SEO描述">
                            <Input v-model="formItem.depict" :rows="4" type="textarea" placeholder=""></Input>
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
