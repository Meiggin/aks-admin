<style lang="less">
    .show-edit-btn{ display: none; margin-left: -10px;}
    .ivu-table-cell:hover .show-edit-btn{display: inline-block;}
    .table_botom {margin: 25px 10px;}
    .table_botom .table_botom_l button{ margin: 5px 10px; }
    .ivu-page{ display: inline-block; }
</style>

<template>
    <div>
        <Table :ref="refs" :columns="columnsList" :data="thisTableData" :stripe="true" @on-selection-change="selectChange" disabled-hover></Table>
        <Row class="table_botom">
            
            <Col span="8" style="float: left;" class="table_botom_l">
                <slot name="bottom_left"></slot>
            </Col>
            
            
            <Col span="16" style="float: right; text-align:right;" class="table_botom_r" v-if="total !== 0">
                <Page size="small" :total="total" :current="current" placement="top" @on-change="changePage" @on-page-size-change="changePageSize" show-total show-elevator show-sizer></Page>
            </Col>
                
        </Row>  

        <Modal v-model="imgPrev.show">
            <p slot="header" style="color:#1c2438;text-align:center">预览图片</p>
            <img :src="imgPrev.src" alt="" v-if="imgPrev.show" style="width: 100%;">
            <!-- <div slot="footer"></div> -->
        </Modal>

    </div>
</template>

<script>

const editButton = (vm, h, currentRow, index) => {
    return h('Button', {
        props: {
            type: currentRow.editting ? 'success' : 'primary',
            loading: currentRow.saving
        },
        style: {
            margin: '0 5px'
        },
        on: {
            'click': () => {
                if (!currentRow.editting) {
                    if (currentRow.edittingCell) {
                        for (let name in currentRow.edittingCell) {
                            currentRow.edittingCell[name] = false;
                            vm.edittingStore[index].edittingCell[name] = false;
                        }
                    }
                    vm.edittingStore[index].editting = true;
                    vm.thisTableData = JSON.parse(JSON.stringify(vm.edittingStore));
                } else {
                    vm.edittingStore[index].saving = true;
                    vm.thisTableData = JSON.parse(JSON.stringify(vm.edittingStore));
                    let edittingRow = vm.edittingStore[index];
                    edittingRow.editting = false;
                    edittingRow.saving = false;
                    vm.thisTableData = JSON.parse(JSON.stringify(vm.edittingStore));
                    vm.$emit('input', vm.handleBackdata(vm.thisTableData));
                    vm.$emit('on-change', vm.handleBackdata(vm.thisTableData), index);
                }
            }
        }
    }, currentRow.editting ? '保存' : '编辑');
};
const deleteButton = (vm, h, currentRow, index) => {
    return h('Poptip', {
        props: {
            confirm: true,
            title: '您确定要删除这条数据吗?',
            transfer: true
        },
        on: {
            'on-ok': () => {
                vm.thisTableData.splice(index, 1);
                vm.$emit('input', vm.handleBackdata(vm.thisTableData));
                vm.$emit('on-delete', vm.handleBackdata(vm.thisTableData), index);
            }
        }
    }, [
        h('Button', {
            style: {
                margin: '0 5px'
            },
            props: {
                type: 'error',
                placement: 'top'
            }
        }, '删除')
    ]);
};
const incellEditBtn = (vm, h, param) => {
    if (vm.hoverShow) {
        return h('div', {
            'class': {
                'show-edit-btn': vm.hoverShow
            }
        }, [
            h('Button', {
                props: {
                    type: 'text',
                    icon: 'edit'
                },
                on: {
                    click: (event) => {
                        vm.edittingStore[param.index].edittingCell[param.column.key] = true;
                        vm.thisTableData = JSON.parse(JSON.stringify(vm.edittingStore));
                    }
                }
            })
        ]);
    } else {
        return h('Button', {
            props: {
                type: 'text',
                icon: 'edit'
            },
            on: {
                click: (event) => {
                    vm.edittingStore[param.index].edittingCell[param.column.key] = true;
                    vm.thisTableData = JSON.parse(JSON.stringify(vm.edittingStore));
                }
            }
        });
    }
};
const saveIncellEditBtn = (vm, h, param) => {
    return h('Button', {
        props: {
            type: 'text',
            icon: 'checkmark'
        },
        on: {
            click: (event) => {
                vm.edittingStore[param.index].edittingCell[param.column.key] = false;
                vm.thisTableData = JSON.parse(JSON.stringify(vm.edittingStore));
                vm.$emit('input', vm.handleBackdata(vm.thisTableData));
                vm.$emit('on-cell-change', vm.handleBackdata(vm.thisTableData), param.index, param.column.key);
            }
        }
    });
};
const cellInput = (vm, h, param, item) => {
    return h('Input', {
        props: {
            src: 'text',
            value: vm.edittingStore[param.index][item.key]
        },
        on: {
            'on-change' (event) {
                let key = item.key;
                vm.edittingStore[param.index][key] = event.target.value;
            }
        }
    });
};
const my_deleteButton = (vm, h, currentRow , index) => {
    return h('Poptip', {
        props: {
            confirm: true,
            title: '您确定要删除这条数据吗?',
            transfer: true
        },
        on: {
            'on-ok': () => {
                vm.$emit('input', vm.handleBackdata(vm.thisTableData));
                vm.$emit('on-delete', vm.handleBackdata(vm.thisTableData), index);
            }
        }
    }, [
    h('Button', {
        style: {
            margin: '0 5px',
            minWidth: '40px'
        },
        props: {
            type: 'error',
            placement: 'top'
        }
    }, '删除')
    ]);
};
const my_otherButton = (vm, h, name , currentRow , index) => {
    
    let buttonName,popTitle,type;
    switch(name){
        case 'send':
        buttonName = "发货";
        popTitle = "确认发货?"
        type= "warning"
        break;
        case 'edit':
        buttonName = "编辑";
        type= "success"
        break;
        case 'detail':
        buttonName = "详情";
        type= "success"
        break;
        case 'delete':
        buttonName = "删除";
        popTitle = "确认删除?"
        type= "error"
        break;
        case 'give-score':
        buttonName = "送积分";
        type= "success"
        break;
        case 'active':
        buttonName = "激活";
        type= "success"
        break;
        case 'see':
        buttonName = "查看";
        type= "success"
        break;


    }
    if (popTitle) {
        return h('Poptip', {

            props: {
                confirm: true,
                title: popTitle,
                transfer: true
            },
            on: {
                'on-ok': () => {
                    vm.$emit('on-'+ name, vm.handleBackdata(vm.thisTableData), index);
                }
            }
        }, [
        h('Button', {
            style: {
                margin: '0 5px',
                minWidth: '40px'
            },
            props: {
                type: type,
                placement: 'top'
            }
        }, buttonName)
        ]);
    }else{
        return h('Button', {
            props: {
                type: type        
            },
            style: {
                margin: '0 5px',
                minWidth: '40px'
            },
            on: {
                'click': () => {
                   vm.$emit('on-' + name, vm.handleBackdata(vm.thisTableData), index);
               }
           }
       }, buttonName);
    }
};
export default {
    name: 'canEditTable',
    props: {
        total: {
            type: Number,
            default: 0
        },
        current: Number,
        refs: String,
        columnsList: Array,
        value: Array,
        url: String,
        editIncell: {
            type: Boolean,
            default: false
        },
        hoverShow: {
            type: Boolean,
            default: false
        }
    },
    data () {
        return {
            columns: [],
            thisTableData: [],
            edittingStore: [],
            imgPrev:{
                show:false,
                src:null  
            }
        };
    },
    created () {
        this.init();
    },
    methods: {
        init () {
            let vm = this;
            let editableCell = this.columnsList.filter(item => {
                if (item.editable) {
                    if (item.editable === true) {
                        return item;
                    }
                }
            });
            let cloneData = JSON.parse(JSON.stringify(this.value));
            let res = [];
            res = cloneData.map((item, index) => {
                let isEditting = false;
                if (this.thisTableData[index]) {
                    if (this.thisTableData[index].editting) {
                        isEditting = true;
                    } else {
                        for (const cell in this.thisTableData[index].edittingCell) {
                            if (this.thisTableData[index].edittingCell[cell] === true) {
                                isEditting = true;
                            }
                        }
                    }
                }
                if (isEditting) {
                    return this.thisTableData[index];
                } else {
                    this.$set(item, 'editting', false);
                    let edittingCell = {};
                    editableCell.forEach(item => {
                        edittingCell[item.key] = false;
                    });
                    this.$set(item, 'edittingCell', edittingCell);
                    return item;
                }
            });
            this.thisTableData = res;
            this.edittingStore = JSON.parse(JSON.stringify(this.thisTableData));
            this.columnsList.forEach(item => {
                if (item.editable) {
                    item.render = (h, param) => {
                        let currentRow = this.thisTableData[param.index];
                        if (!currentRow.editting) {
                            if (this.editIncell) {
                                return h('Row', {
                                    props: {
                                        type: 'flex',
                                        align: 'middle',
                                        justify: 'center'
                                    }
                                }, [
                                    h('Col', {
                                        props: {
                                            span: '22'
                                        }
                                    }, [
                                        !currentRow.edittingCell[param.column.key] ? h('span', currentRow[item.key]) : cellInput(this, h, param, item)
                                    ]),
                                    h('Col', {
                                        props: {
                                            span: '2'
                                        }
                                    }, [
                                        currentRow.edittingCell[param.column.key] ? saveIncellEditBtn(this, h, param) : incellEditBtn(this, h, param)
                                    ])
                                ]);
                            } else {
                                return h('span', currentRow[item.key]);
                            }
                        } else {
                            return h('Input', {
                                props: {
                                    type: 'text',
                                    value: currentRow[item.key]
                                },
                                on: {
                                    'on-change' (event) {
                                        let key = param.column.key;
                                        vm.edittingStore[param.index][key] = event.target.value;
                                    }
                                }
                            });
                        }
                    };
                }
                if (item.handle) {
                    item.render = (h, param) => {
                        let currentRowData = this.thisTableData[param.index];
                        if (item.handle.length === 2) {
                            return h('div', [
                                editButton(this, h, currentRowData, param.index),
                                deleteButton(this, h, currentRowData, param.index)
                            ]);
                        } else if (item.handle.length === 1) {
                            if (item.handle[0] === 'edit') {
                                return h('div', [
                                    editButton(this, h, currentRowData, param.index)
                                ]);
                            } else {
                                return h('div', [
                                    deleteButton(this, h, currentRowData, param.index)
                                ]);
                            }
                        }
                    };
                }
                if (item.imgprev) {
                    item.render = (h, param) => {
                       return h('img',{
                            attrs:{
                                src:param.row[param.column.key]
                            },
                            style: {
                                height: param.column.width/2 + 'px',
                                width: '100%'
                            },
                            on: {
                                'click':()=>{
                                    this.imgPrev.src = param.row[param.column.key];
                                    this.imgPrev.show = true;
                                }
                            }
                        })   
                    };
                }
                if (item.button) {
                    item.render = (h, param) => {
                        let currentRowData = this.thisTableData[param.index];
                        let arr = [];
                        for(let i in item.button){
                            arr.push(my_otherButton(this, h, item.button[i] , currentRowData, param.index))
                        }
                        return h('div',arr);
                    };
                }
            });
        },
        handleBackdata (data) {
            let clonedData = JSON.parse(JSON.stringify(data));
            clonedData.forEach(item => {
                delete item.editting;
                delete item.edittingCell;
                delete item.saving;
            });
            return clonedData;
        },
        selectChange(selection){
            this.$emit('on-selection-change',selection)
        },
        changePage(currect){
            this.$emit('on-change',currect)
        },
        changePageSize(pagesize){
            this.$emit('on-page-size-change',pagesize)
        }
    },
    watch: {
        value (data) {
            this.init();
        }
    }
};
</script>
