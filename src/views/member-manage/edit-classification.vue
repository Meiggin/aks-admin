

<template>
        <Row class="margin-top-10">
            <Col span="24">
                <Card>
                    <p slot="title">
                        <!-- <Icon type="ios-keypad"></Icon> -->
                        编辑分类群组
                    </p>
                    <Form :model="formItem" :label-width="90">
                        <FormItem label="分类群组名称">
                            <Input v-model="formItem.input" placeholder=""></Input>
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
