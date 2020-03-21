<template lang="html">
  <button id="btn-search" @click="action"><slot/></button>
</template>

<script>
export default {
  name: "Button",
  props: ["action"]
}
</script>

<style lang="css" scoped>

#btn-search{
  width: 30px;
  height: 30px;
  border-radius: 200px 200px 200px 200px;
-moz-border-radius: 200px 200px 200px 200px;
-webkit-border-radius: 200px 200px 200px 200px;
border: 0px solid #000000;
background: white;
margin-right: 20px;
margin-top: 19px;
float: right;
}
</style>
