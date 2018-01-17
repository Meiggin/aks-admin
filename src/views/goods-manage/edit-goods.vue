<template>
<Row class="margin-top-10">
            <Col span="24">
                <Card>
                    <p slot="title">
                        <!-- <Icon type="ios-keypad"></Icon> -->
                        商品修改
                    </p>
                    
        <Form :model="formItem" :label-width="80">
        <FormItem label="商品编号:">
            <Input v-model="formItem.input" placeholder=""></Input>
        </FormItem>
        <FormItem label="3W货品ID:">
            <Input v-model="formItem.input" placeholder=""></Input>
        </FormItem>
        <FormItem label="描述:">
            <Input v-model="formItem.input" placeholder=""></Input>
        </FormItem>
        <FormItem label="所属品牌:">
            <Select v-model="formItem.brand">
                <Option value="beijing">New York</Option>
                <Option value="shanghai">London</Option>
                <Option value="shenzhen">Sydney</Option>
            </Select>
        </FormItem>
        <FormItem label="所属系列:">
            <Select v-model="formItem.series">
                <Option value="beijing">New York</Option>
                <Option value="shanghai">London</Option>
                <Option value="shenzhen">Sydney</Option>
            </Select>
        </FormItem>
        <FormItem label="颜色:">
            <RadioGroup v-model="formItem.color">
                <Radio label="white">白色</Radio>
            </RadioGroup>
        </FormItem>
        <FormItem label="频率:">
            <RadioGroup v-model="formItem.conver">
                <Radio label="conversion">变频</Radio>
            </RadioGroup>
        </FormItem>
        <FormItem label="匹数:">
            <RadioGroup v-model="formItem.num">
                <Radio label="pnumber15">大1.5匹</Radio>
                <Radio label="pnumber1">大1匹</Radio>
            </RadioGroup>
        </FormItem>
        <FormItem label="能效等级:">
            <RadioGroup v-model="formItem.cla">
                <Radio label="classA">一级</Radio>
                <Radio label="classB">二级</Radio>
            </RadioGroup>
        </FormItem>
        <FormItem label="所属分类:">
            <Select v-model="formItem.classification">
                <Option value="beijing">变频挂机</Option>
                <Option value="shanghai">London</Option>
                <Option value="shenzhen">Sydney</Option>
            </Select>
        </FormItem>
        <FormItem label="是否上架:">
            <Select v-model="formItem.yesorno">
                <Option value="up">上架</Option>
                <Option value="down">下架</Option>
            </Select>
        </FormItem>
        <FormItem label="类型:">
            <Select v-model="formItem.type">
                <Option value="up">挂机</Option>
                <Option value="down">柜机</Option>
            </Select>
        </FormItem>
        <FormItem label="是否智能:">
            <Select v-model="formItem.intelligence">
                <Option value="y">是</Option>
                <Option value="n">否</Option>
            </Select>
        </FormItem>
        <FormItem label="使用场景:">
            <CheckboxGroup v-model="formItem.scene">
                <Checkbox label="书房(10-12m)"></Checkbox>
                <Checkbox label="Sleep"></Checkbox>
                <Checkbox label="Run"></Checkbox>
                <Checkbox label="Movie"></Checkbox>
            </CheckboxGroup>
        </FormItem>
        <FormItem label="标签:">
            <CheckboxGroup v-model="formItem.Label">
                <Checkbox label="5"></Checkbox>
                <Checkbox label="Sleep"></Checkbox>
                <Checkbox label="Run"></Checkbox>
                <Checkbox label="Movie"></Checkbox>
            </CheckboxGroup>
        </FormItem>
        <FormItem label="必抢:">
            <CheckboxGroup v-model="formItem.Rush">
                <Checkbox label="是"></Checkbox>
            </CheckboxGroup>
        </FormItem>
        <FormItem label="官网挂牌价:">
            <Input v-model="formItem.input" placeholder=""></Input>
        </FormItem>
        <FormItem label="移动端价格:">
            <Input v-model="formItem.input" placeholder=""></Input>
        </FormItem>
        <FormItem label="青铜会员:">
            <Input v-model="formItem.input" placeholder=""></Input>
        </FormItem>
        <FormItem label="白银会员:">
            <Input v-model="formItem.input" placeholder=""></Input>
        </FormItem>
        <FormItem label="黄金高级会员:">
            <Input v-model="formItem.input" placeholder=""></Input>
        </FormItem>
        <FormItem label="铂金高级会员:">
            <Input v-model="formItem.input" placeholder=""></Input>
        </FormItem>
        <FormItem label="钻石高级会员:">
            <Input v-model="formItem.input" placeholder=""></Input>
        </FormItem>
        <FormItem label="铂金高级会员(内部员工):">
            <Input v-model="formItem.input" placeholder=""></Input>
        </FormItem>
        <FormItem label="钻石会员(内部员工):">
            <Input v-model="formItem.input" placeholder=""></Input>
        </FormItem>

        <FormItem label="分销佣金:">
            <Select v-model="formItem.Commission">
                <Option value="y">是</Option>
                <Option value="n">否</Option>
            </Select>
        </FormItem>
        <FormItem label="分销佣金:">
            <Input v-model="formItem.input" placeholder=""></Input>
        </FormItem>
        <FormItem label="一级佣金:">
            <Input v-model="formItem.input" placeholder=""></Input>
        </FormItem>
        <FormItem label="二级佣金:">
            <Input v-model="formItem.input" placeholder=""></Input>
        </FormItem>
        <FormItem label="赠送积分:">
            <Input v-model="formItem.input" placeholder=""></Input>
        </FormItem>
        <FormItem label="序列号:">
            <Input v-model="formItem.input" placeholder=""></Input>
        </FormItem>
        <Upload action="//jsonplaceholder.typicode.com/posts/">
            <Button type="ghost">预览图片</Button>
        </Upload>   
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
        <FormItem label="商品介紹:">
            <texteditor></texteditor>
        </FormItem>
        <FormItem label="基础参数:">
            <texteditor1></texteditor1>
        </FormItem>
        <FormItem label="技术参数:">
            <texteditor2></texteditor2>
        </FormItem>
        <FormItem label="尺寸规格:">
            <texteditor3></texteditor3>
        </FormItem>
        <FormItem label="包装清单:">
            <texteditor4></texteditor4>
        </FormItem>
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
import texteditor from "../goods-manage/text-editor.vue"
import texteditor1 from "../goods-manage/text-editor.1.vue"
import texteditor2 from "../goods-manage/text-editor.2.vue"
import texteditor3 from "../goods-manage/text-editor.3.vue"
import texteditor4 from "../goods-manage/text-editor.4.vue"
    export default {
        components: {
        texteditor,
        texteditor1,
        texteditor2,
        texteditor3,
        texteditor4,
    },
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
                    textarea: '',
                    
                },
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
                uploadList: []
            }
        },
         methods: {
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