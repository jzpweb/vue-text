<template>
   <div id="container">
      <v-header></v-header>
       <div class="tab">
         <div class="tab-item">
           <router-link to="/goods">商品</router-link>
         </div>
         <div class="tab-item">评论</div>
         <div class="tab-item">商家</div>
       </div>
   </div>
</template>

<script>
   import Header from '../header/Header.vue'

    export default{
      components:{
        'v-header':Header
      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
    #container
       .tab
         display flex
         width:100%
         height 40px
         line-height 40px
         .tab-item
           flex:1
           text-align :center

</style>
