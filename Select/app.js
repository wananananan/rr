
new Vue({
    el:"#root",
    data:{
        datas:[
            {
                id:1,
                title:4567,
            },
            {
                id:2,
                title:123,
            },
            {
                id:3,
                title:123456,
            },
            {
                id:4,
                title:12345,
            },
            {
                id:5,
                title:67890,
            },

        ],
        state:false,
        title:"",
    },
    methods:{
        aa(){
            this.state=true;
        },
        bb(val){
            this.title = val;
            this.state=false;
        }
    }
})