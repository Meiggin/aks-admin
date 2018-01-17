export default {
	data(){
		return{
			selectData:[]
		}
	},
	computed:{
		selectList(){
            let arr1 = [],arr2 = [];
            for(let i in this.selectData){
                arr1.push(this.selectData[i].id)
            }
            for(let i in this.listData){
                if (arr1.indexOf(this.listData[i].id)!==-1) {
                    arr2.push(i)
                }
            }
            return arr2;
        }
	},
	methods:{
		selectAll (status){
           this.$refs.listTable.$refs.table.selectAll(status);
        },
        selectChange (selection){
            this.selectData = selection;
        }
	},
    created(){
        console.log(this.listColumns)
        this.listColumns.unshift({
            type: 'selection',
            align: 'center',
            width: 60
        })
    }
}	


