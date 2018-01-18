export default {
	data(){
		return{

		}
	},
	computed:{
		statusTrueList(){
            let arr = [];
            for(let i in this.listData){
                if (this.listData[i][this.statusName] == true) {
                    arr.push(i);
                }
            }
            return arr;
        },
        statusFalseList(){
            let arr = [];
            for(let i in this.listData){
                if (this.listData[i][this.statusName] == false) {
                    arr.push(i);
                }
            }
            return arr;
        }
	},
	methods:{
		changeStatus (index,changeStatusFunction){
            if (typeof changeStatusFunction !== "function") {
                console.warn('请输入函数名');
                return;
            }
            changeStatusFunction().then((res)=>{
                this.$Message.success('操作成功 !');
                this.listData[index][this.statusName] = !this.listData[index][this.statusName];
                this.$set(this.listData,[index],this.listData[index]);
            }) 
        },
        changeSelectStatus (status,changeStatusFunction){
            if(this.selectList.length !== 0){
                if (typeof changeStatusFunction !== "function") {
                    console.warn('请输入函数名');
                    return;
                }
                changeStatusFunction().then((res)=>{
                    this.$Message.success('操作成功 !');
                    for(let i of this.selectList){
                        this.listData[i][this.statusName] = status;
                    }
                    this.$set(this.listData,0,this.listData[0]);
                    this.selectAll(false);
                })
            }
        },
        changeStatusAll (status,changeStatusFunction){
            changeStatusFunction().then((res)=>{
                this.$Message.success('操作成功 !');
                if (status) {
                    for(let i of this.statusFalseList){
                        this.listData[i][this.statusName] = status;
                    } 
                }else{
                    for(let i of this.statusTrueList){
                        this.listData[i][this.statusName] = status;
                    } 
                }
                console.log(this.listData)
                this.$set(this.listData,0,this.listData[0]);
            })  
        }
    }
}	


