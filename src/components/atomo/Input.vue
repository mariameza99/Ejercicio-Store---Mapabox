<template lang="html">
  <input id="input-search" ref="input" :value="value" @input="input" :placeholder="placeholder">
</template>

<script>
export default {
  name: 'Input',
  props: [
    "type",
    "value",
    "placeholder"
  ],
methods: {
  input(){
    this.$emit("input", this.$refs.input.value);
  }
}
}

</script>

<style lang="css" scoped>

#input-search{
  width: 200px;
  height: 26px;
  border: none;
  font-size: 15px;
  margin-left: 25px;
  margin-top: 18px;
}

</style>
