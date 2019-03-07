<template>
  <div class="slideLeft">
    <v-leftOne :inputN0ame="name" msg-father="dad无可奉告"></v-leftOne>
    <v-leftTwo></v-leftTwo>
    <v-leftThree></v-leftThree>
    <v-LeftFour></v-LeftFour>
    <!--<template>-->
      <!--<div class="leftFltBox">-->
        <!--<ul>-->
          <!--<li v-for="(item,index) in lstArr" @click="check($event,item)"-->
              <!--:style="index==0?{borderTop:'1px solid #51A0F8'}:{borderTop:'none'}">-->
            <!--{{item.content}}-->
          <!--</li>-->
        <!--</ul>-->
      <!--</div>-->
    <!--</template>-->
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
        name: '张三',
        isC: false,
        lstArr: [{content: '1 item', isClicked: true}, {content: '1 item', isClicked: false}, {
          content: '1 item',
          isClicked: false
        }, {content: '1 item', isClicked: false}, {content: '1 item', isClicked: false}, {
          content: '1 item',
          isClicked: false
        }, {content: '1 item', isClicked: false}, {content: '1 item', isClicked: false}, {
          content: '1 item',
          isClicked: false
        }]
      }
    },
    methods: {
      check: (event, item) => {

      }
    },
    components: {
      vLeftOne, vLeftTwo, vLeftThree, vLeftFour
    }

  }
</script>

<style scoped>


  .slideLeft {
    /*float: left;*/
    position: absolute;
    left: 0;
    top: 100px;
    z-index: 1;
    width: 454px;
    height: fit-content;
    padding-left: 14px;
    /*overflow: hidden;*/
  }

  .slideLeft:after {
    content: "\0020";
    display: block;
    height: 0;
    clear: both;
  }

  ul {
    padding: 0;
    display: flex;
    flex-direction: column;
    margin: 0;
    list-style: none;
    width: 84px;
    height: 228px;
    position: absolute;
    z-index: 1;
    right: -116px;
    top: 30px;

  }

  li {
    width: 100%;
    flex: 1 1 auto;
    border: 1px solid #51A0F8;
    text-align: center;
    color: white;
    line-height: 32px;
    font-size: 12px;
    background-color: rgba(14,28,52,0.82);
    /*flex: 1;*/
  }


</style>
