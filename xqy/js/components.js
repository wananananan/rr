var Main=Vue.component("Main",{
    template:`
          <div>
               
               <div class="box">
                 <div class="left">
                   <router-view name="left"></router-view>
                 </div>
                 <div class="right">
                  <router-view name="right"></router-view>
                 </div>
                </div>
          </div>
    `,
})

var Left=Vue.component("Left",{
    template:`
      <div>
      <ul>
        <div v-for="item in data">
             <li><router-link :to="'#'+item.id">{{item.title}}</router-link> </li>
             <ul>
             <li v-for="item1 in item.child"><router-link :to="'#'+item1.id">{{item1.title}}</router-link> </li>
             </ul>
        </div>
        
       </ul>
      </div>
    `,
    data(){
        return {
            menu:[
            ]
        }
    },
    computed:{
        data(){
            var arr=[];
            for(var i in this.menu){
                if(this.menu[i].pid==0){
                    var obj=this.menu[i];
                    arr.push(obj);
                }else {
                    for(var j in arr){
                        if(this.menu[i].pid==arr[j].id){
                            if(arr[j].child){
                                arr[j].child.push(this.menu[i]);
                            }else {
                                arr[j].child=[];
                                arr[j].child.push(this.menu[i]);
                            }
                        }
                    }
                }
            }
            return arr;
        }


    },
     mounted(){
        fetch("./js/demo.text").then(function (e) {
            return e.json();
        }).then((e)=>{
            this.menu=e;
        })
     },
    watch:{
         $route(){
             var num=this.$route.hash.slice(1);
            var pos= (document.querySelector(".a"+num).offsetTop);
             function animate () {
                 if (TWEEN.update()) {
                     requestAnimationFrame(animate)
                 }
             }
             new TWEEN.Tween({ number: document.querySelector(".right").scrollTop })
                 .easing(TWEEN.Easing.Quadratic.Out)
                 .to({ number: pos }, 500)
                 .onUpdate(function () {
                     document.querySelector(".right").scrollTop = this.number.toFixed(0)
                 })
                 .start()

             animate()
         //////
         }
    }
    // methods:{
    //     parse(){
    //
    //     }
    // }
})
var Right=Vue.component("Right",{
    template:`
     <div class="markdown-body">
      <div v-html="data1"></div>
      </div>
    `,
    data(){
        return {
            data1:''
        }
    },
    mounted(){
        fetch("./js/demo2.text").then(function (e) {
            return e.text();
        }).then((e)=>{
            this.data1=e;
        })
    },
})

var Quick=Vue.component("Quick",{
    template:`<div>
    快速入门快速入门快速入门快速入门快速入门快速入门快速入门快速入门
</div>`

})