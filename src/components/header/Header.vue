<template>
   <div class='header'>
     <div class="content-wrapper">
       <div class="avatar">
         <img width="64" height="64" :src="seller.avatar">
       </div>
       <div class="content">
         <div class="title">
           <span class="brand"></span>
           <span class="name">{{seller.name}}</span>
         </div>
         <div class="description">
           {{seller.description}}/{{seller.deliveryTime}}分钟送达
         </div>
         <div class="support" v-if="seller.supports">
           <span class="icon" :class="classMap[seller.supports[0].type]"></span>
           <span class="text">{{seller.supports[0].description}}</span>
         </div>
       </div>
       <div class="content-count" v-if="seller.supports">
         <span class="count">{{seller.supports.length}}</span>
         <i class="icon-keyboard_arrow_right"></i>
       </div>
     </div>
     <div class="bulletin-wrapper"></div>
   </div>
</template>

<script>


export default {
 props: {
   seller: {
     type: Object
   }
 },
components: {
 
},

data() {
  return {

  };
},
methods: {

},

mounted() {

},
created() {
  this.classMap = ['decrease','discount','special','invoice','guarantee']
}
}
</script>
<style lang="stylus" rel="styleshrrt/stylus">
@import "../../common/stylus/mixin.styl"
   .header
      color: #fff
      background: gray
      .content-wrapper
        padding:24px 12px 18px 24px
        font-size:0
        position:relative
        .avatar
          display :inline-block
          vertical-align :top
          img 
            border-radius:2px
        .content
          display :inline-block
          margin-left:16px
          font-size:14px
          .title
            margin: 2px 0 8px 0
            .brand
              display :inline-block
              vertical-align :top
              width: 30px
              height: 18px
              bg-image('brand')
              background-size: 30px 18px
              background-repeat: no-repeat
            .name
              margin-left :6px
              font-size: 16px
              line-height: 18px
              font-weight: bold
          .description
            margin-bottom: 10px
            line-height: 12px
            font-size: 12px
          .support
            .icon
             display :inline-block
             width: 12px
             height: 12px
             vertical-align :top
             margin-right: 4px
             background-size: 12px 12px
             background-repeat: no-repeat
             &.decrease
               bg-image('decrease_1')
             &.discount
                bg-image('discount_1')
             &.guarantee
                bg-image('guarantee_1')
             &.invoice
                bg-image('invoice_1')
             &.special
                bg-image('special_1')
            .text
              line-height:12px
              font-size:12px
        .content-count
          position:absolute
          right: 12px
          bottom: 18px
          padding: 0 8px
          height: 24px
          line-height: 24px
          border-radius: 14px
          background: rgba(0,0,0,0.2)
          text-align :center
          .count
            vertical-align :top
            font-size 10px
          .icon-keyboard_arrow_right 
            margin-left: 2px
            line-height:24px
            font-size:10px
</style>