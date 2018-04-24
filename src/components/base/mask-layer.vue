<template>
  <div class="mask-layer-wrapper" v-show="ifopen">
  <span class="content">{{content}}</span>
  </div>
</template>

<script>
export default {
  props: {
    ifopen: {
      type: Boolean,
      default: false
    },
    content: {
      type: String,
      // default: false
    }
  }
}
</script>


<style scoped>
.mask-layer-wrapper {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: rgba(0,0,0, 0.8);
  z-index: 100;
}
.content{
  color: #fff;
  position: absolute;
  bottom: 200px;
  padding: 10px;
  border-radius: 5px;
  background-color:rgba(0,0,0,0.9);
}
</style>
