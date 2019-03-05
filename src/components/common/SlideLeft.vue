<template>
  <div class="slideLeft">
    <v-leftOne :inputN0ame="name" msg-father="dad无可奉告"></v-leftOne>
    <v-leftTwo></v-leftTwo>
    <v-leftThree></v-leftThree>
    <v-LeftFour></v-LeftFour>
  </div>
</template>

<script>
  import vLeftOne from './LeftOne'
  import vLeftTwo from './LeftTwo'
  import vLeftThree from './LeftThree'
  import vLeftFour from './LeftFour'

  export default {
    name: 'SlideLeft',
    data () {
      return {
        name: '张三'
      }
    },
    components: {
      vLeftOne, vLeftTwo, vLeftThree, vLeftFour
    }

  }
</script>

<style scoped>
  .slideLeft {
   float: left;
    width: 454px;
    height: fit-content;
    padding-left: 14px;
     overflow: hidden;
  }
  .slideLeft:after {
    content: "\0020";
    display: block;
    height: 0;
    clear: both;
  }


  /*.content{*/
  /*width: 454px;*/
  /*height: max-content;*/
  /*overflow: hidden;*/
  /*padding: 14px;*/
  /*border: 1px solid chartreuse;*/
  /*}*/
</style>
