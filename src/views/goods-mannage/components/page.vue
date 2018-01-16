<style lang="less">

</style>

<template>
    <div>
        <Page :total="totalPage" :current="currentPage" @on-change="changePage" show-total show-elevator show-sizer></Page>
    </div>
</template>

<script>

export default {
    name: 'page',
    props: {
        refs: String,
        totalPage: Number,
    },
    data () {
        return {
            currentPage:1
        }
    },
    created () {
        
    },
    methods: {
        changePage:function(){
            this.$emit('changePage');
        }  
    },
    watch: {
        
    }
};
</script>
