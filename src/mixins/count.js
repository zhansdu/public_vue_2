export default{
    data(){
        return{
            count:1
        }
    },
    computed:{
        countDouble(){
            return this.count*this.count
        }
    },
    methods:{
        changeCount(){
          this.count+=1;
        }
      }
}