<template>
  <div id="app">
      <!-- <v-header :seller="seller"></v-header>
       <div class="tab">
         <div class="tab-item border-1px">
           <router-link to="/goods">商品</router-link>
         </div>
         <div class="tab-item">
           <router-link to="/ratings">评论</router-link>
         </div>
         <div class="tab-item">
           <router-link to="/sell">商家</router-link>
         </div>
       </div> -->
       <h1>修改代码了哦</h1>
       <ul>
         <li v-for="(temp,index) in goods">
           {{temp.name}}|{{temp.age}}
           <button @click="addCart(index)">添加</button>         
           </li>
       </ul>
       <table border="1">
         <tr>
           <td>名称</td>
           <td>数量</td>
           <td>单价</td>
           <td>总价</td>
         </tr>
         <tr v-for="temp in cart">
           <th>{{temp.name}}</th>
           <th>{{temp.count}}</th>
           <th>{{temp.age}}</th>
           <th>{{temp.age*temp.count}}</th>
         </tr>
       </table>

    <router-view/>
  </div>
</template>

<script type="text/ecmascript-6">
import Header from './components/header/Header.vue'
const ERR_OK = 0;

export default {
  components:{
      'v-header':Header
  },
  data() {
      return{
          seller:{},
          goods:[
            {"name":"james","age":10},
             {"name":"wade","age":20},
              {"name":"bosh","age":30},
          ],
          cart:[]
            
          }
  },
  methods:{
    addCart(i){
        let good=this.goods[i];
        //find语法,空数组不返回,如果找到值，返回符合条件的当前项；
        let tempgood=this.cart.find(v=>v.name==good.name);
        if(tempgood){
           tempgood.count+=1;
        }else{
          this.cart.push({...good,count:1});
        }
  },
  },
  created() {
    this.$axios.get('/api/seller').then((res)=>{
                res = res.data;
                if(res.errno === ERR_OK){
                    this.seller = res.data;
                    
                }
    })  
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">

  @import "./common/stylus/mixin.styl"

    #app 
       .tab
         display flex
         width:100%
         height 40px
         line-height 40px
         border-1px(rgba(7,17,27,0.1))
         .tab-item
           flex:1
           text-align :center
           &>a
             display :block
             font-size: 14px
             color: rgb(77,85,93)
             &.active
               color:rgb(240,20,20)
</style>
