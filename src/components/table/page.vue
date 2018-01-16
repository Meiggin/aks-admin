</style>

<template>
    <div>
        <Page size="small" :total="total" :current="current" placement="top" @on-change="changePage" @on-page-size-change="changePageSize" show-total show-elevator show-sizer></Page>
    </div>
</template>

<script>

export default {
    name: 'page',
    props: {
        refs: String,
        total: Number,
        current: Number
    },
    data () {
        return{

        }
    },
    created () {
        
    },
    methods: {
        changePage(currect){
            this.$emit('on-change',currect)
        },
        changePageSize(pagesize){
            this.$emit('on-page-size-change',pagesize)
        }
    },
    watch: {
        
    }
};
</script>
