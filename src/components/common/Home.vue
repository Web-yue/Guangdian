<template>
  <div class="wrapper">
    <v-header msg-father="dad无可奉告"></v-header>
    <v-slideLeft></v-slideLeft>
    <v-slideRight></v-slideRight>
    <v-g-map></v-g-map>
  </div>
</template>

<script>
  import vHeader from './Header'
  import vSlideLeft from './SlideLeft'
  import vSlideRight from './SlideRight'
  import vGMap from './GMap'
  export default {
    name: 'Home',
    components:{
      vHeader,vSlideLeft,vSlideRight,vGMap
    },
  }
</script>

<style scoped>

</style>
