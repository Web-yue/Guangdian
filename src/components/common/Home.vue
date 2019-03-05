<script type="text/javascript" src="https://webapi.amap.com/maps?v=1.3&key=4cb80a196a9ac498bb2ba39e0d72f9e8"></script>

<template>
  <div class="wrapper">
    <v-header msg-father="dad无可奉告"></v-header>
    <v-slideLeft></v-slideLeft>
    <v-slideRight></v-slideRight>
    <v-gmap></v-gmap>
  </div>
</template>

<script>
  import vHeader from './Header'
  import vSlideLeft from './SlideLeft'
  import vSlideRight from './SlideRight'
  import vGmap from './Gmap'
  export default {
    name: 'Home',
    components:{
      vHeader,vSlideLeft,vSlideRight,vGmap
    },
  }
</script>

<style scoped>

</style>
