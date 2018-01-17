export default {
	data(){
		return{
			listData : [],
			currentPage:1,
			total:0,
			pageSize:10
		}
	},
	methods:{
		setPage (index) {
            this.currentPage = index;
            this.listData = this.getData();
        },
        setPageSize (index) {
            this.pageSize = index;
            this.listData = this.getData();
        }
	}
}	
