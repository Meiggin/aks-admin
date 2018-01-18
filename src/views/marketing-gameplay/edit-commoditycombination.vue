

<template>
    <Row class="margin-top-10">
        <Col span="24">
            <Card>
                <p slot="title">
                        <!-- <Icon type="ios-keypad"></Icon> -->
                    商品组合
                </p>
                <Form :model="formDynamic" :label-width="80" ref="formDynamic">
                    <FormItem label="组合名称:">
                        <Input v-model="formDynamic.input" placeholder=""></Input>
                    </FormItem>
                    
                    <FormItem label="是否上架:">
                        <Select v-model="formDynamic.type">
                            <Option value="up">上架</Option>
                            <Option value="down">下架</Option>
                        </Select>
                    </FormItem>
                    <Row>
                        <Input v-model="searchConName3" placeholder="请输入姓名搜搜..." style="width: 200px" />
                        <span @click="handleSearch3" style="margin: 0 10px;"><Button type="primary" icon="search">搜索</Button></span>
                        <Button @click="handleCancel3" type="ghost" >取消</Button>
                    </Row>
                    <Row class="margin-top-10 searchable-table-con1">
                        <Table :columns="columns1" :data="data3"></Table>
                    </Row>
                    <FormItem label="已选择商品:">
                        <Table :columns="columns2" :data="data2"></Table>
                    </FormItem>
                    <FormItem label="组合原价:">
                        <Input v-model="formDynamic.input" placeholder=""></Input>
                    </FormItem>
                    <FormItem label="组合价格:">
                        <Input v-model="formDynamic.input" placeholder=""></Input>
                    </FormItem>
                    <FormItem label="组合库存:">
                        <Input v-model="formDynamic.input" placeholder=""></Input>
                    </FormItem>
                    <FormItem label="是否积分抵价:">
                        <Select v-model="formDynamic.type">
                            <Option value="up">否</Option>
                            <Option value="down">是</Option>
                        </Select>
                    </FormItem>
                    <FormItem label="是否使用优惠卷:">
                        <Select v-model="formDynamic.type">
                            <Option value="up">否</Option>
                            <Option value="down">是</Option>
                        </Select>
                    </FormItem>
                    <FormItem label="是否使用分销佣金:">
                        <Select v-model="formDynamic.type">
                            <Option value="up">否</Option>
                            <Option value="down">是</Option>
                        </Select>
                    </FormItem>
                    <FormItem label="序列号:">
                        <Input v-model="formDynamic.input" placeholder=""></Input>
                    </FormItem>
                    <Upload action="//jsonplaceholder.typicode.com/posts/">
                        <Button type="ghost">预览图片</Button>
                    </Upload>
                    
                    <FormItem>
                        <Button type="primary">提交</Button>
                        <Button type="ghost" style="margin-left: 8px">返回</Button>
                    </FormItem>
                     <FormItem label="细节图:">
                        <div class="demo-upload-list" v-for="item in uploadList">
                            <template v-if="item.status === 'finished'">
                                <img :src="item.url">
                                <div class="demo-upload-list-cover">
                                    <Icon type="ios-eye-outline" @click.native="handleView(item.name)"></Icon>
                                    <Icon type="ios-trash-outline" @click.native="handleRemove(item)"></Icon>
                                </div>
                            </template>
                            <template v-else>
                                <Progress v-if="item.showProgress" :percent="item.percentage" hide-info></Progress>
                            </template>
                        </div>
                        <Upload
                            ref="upload"
                            :show-upload-list="false"
                            :default-file-list="defaultList"
                            :on-success="handleSuccess"
                            :format="['jpg','jpeg','png']"
                            :max-size="2048"
                            :on-format-error="handleFormatError"
                            :on-exceeded-size="handleMaxSize"
                            :before-upload="handleBeforeUpload"
                            multiple
                            type="drag"
                            action="//jsonplaceholder.typicode.com/posts/"
                            style="display: inline-block;width:58px;">
                            <div style="width: 58px;height:58px;line-height: 58px;">
                                <Icon type="camera" size="20"></Icon>
                            </div>
                        </Upload>
                        <Modal title="View Image" v-model="visible">
                            <img :src="'https://o5wwk8baw.qnssl.com/' + imgName + '/large'" v-if="visible" style="width: 100%">
                        </Modal>
                    </FormItem>
                    <Texteditor></Texteditor>
                    <Button type="success" >提交</Button>
                </Form>
            </Card>
        </Col>
    </Row>
</template>

<script>
import Texteditor from "@/components/texteidt/text-editor.vue"
import Addsize from "@/components/addsize/addsize.vue"
import * as table from './data/search';
   export default {
       components: {
        Texteditor,
           Addsize
        },
        data () {
            return {
                index:1,
                searchConName3: '',
                columns1: table.columns1,
                data3: [],
                initTable3: [],
                defaultList: [
                    {
                        'name': 'a42bdcc1178e62b4694c830f028db5c0',
                        'url': 'https://o5wwk8baw.qnssl.com/a42bdcc1178e62b4694c830f028db5c0/avatar'
                    },
                    {
                        'name': 'bc7521e033abdd1e92222d733590f104',
                        'url': 'https://o5wwk8baw.qnssl.com/bc7521e033abdd1e92222d733590f104/avatar'
                    }
                ],
                imgName: '',
                visible: false,
                uploadList: [],
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
            init () {
                this.data1 = this.initTable1 = table.searchTable1;
                this.data2 = this.initTable2 = table.searchTable2;
                this.data3 = this.initTable3 = table.searchTable3;
            },
            search (data, argumentObj) {
                let res = data;
                let dataClone = data;
                for (let argu in argumentObj) {
                    if (argumentObj[argu].length > 0) {
                        res = dataClone.filter(d => {
                            return d[argu].indexOf(argumentObj[argu]) > -1;
                        });
                        dataClone = res;
                    }
                }
                return res;
            },
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
            handleSearch3 () {
                this.data3 = this.initTable3;
                this.data3 = this.search(this.data3, {name: this.searchConName3});
            },
            handleCancel3 () {
                this.data3 = this.initTable3;
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
            },
            handleView (name) {
                this.imgName = name;
                this.visible = true;
            },
            handleRemove (file) {
                const fileList = this.$refs.upload.fileList;
                this.$refs.upload.fileList.splice(fileList.indexOf(file), 1);
            },
            handleSuccess (res, file) {
                file.url = 'https://o5wwk8baw.qnssl.com/7eb99afb9d5f317c912f08b5212fd69a/avatar';
                file.name = '7eb99afb9d5f317c912f08b5212fd69a';
            },
            handleFormatError (file) {
                this.$Notice.warning({
                    title: 'The file format is incorrect',
                    desc: 'File format of ' + file.name + ' is incorrect, please select jpg or png.'
                });
            },
            handleMaxSize (file) {
                this.$Notice.warning({
                    title: 'Exceeding file size limit',
                    desc: 'File  ' + file.name + ' is too large, no more than 2M.'
                });
            },
            handleBeforeUpload () {
                const check = this.uploadList.length < 5;
                if (!check) {
                    this.$Notice.warning({
                        title: 'Up to five pictures can be uploaded.'
                    });
                }
                return check;
            }
        },
        mounted () {
            this.init();
            this.uploadList = this.$refs.upload.fileList;
        }
    }
</script>

<style>
 .demo-upload-list{
        display: inline-block;
        width: 60px;
        height: 60px;
        text-align: center;
        line-height: 60px;
        border: 1px solid transparent;
        border-radius: 4px;
        overflow: hidden;
        background: #fff;
        position: relative;
        box-shadow: 0 1px 1px rgba(0,0,0,.2);
        margin-right: 4px;
    }
    .demo-upload-list img{
        width: 100%;
        height: 100%;
    }
    .demo-upload-list-cover{
        display: none;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: rgba(0,0,0,.6);
    }
    .demo-upload-list:hover .demo-upload-list-cover{
        display: block;
    }
    .demo-upload-list-cover i{
        color: #fff;
        font-size: 20px;
        cursor: pointer;
        margin: 0 2px;
    }
</style>
