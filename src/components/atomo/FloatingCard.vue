<template lang="html">
  <div class="floating-card" :style="styles || ''">
    <searchBar></searchBar>
    <Card
    class="card-c"
    v-for="(lugar, lug) in mapResults" :key="lug"
    :name="lugar.name"
    :address="lugar.address"
    :img="lugar.img"
    :icon="lugar.icon"
    :longitud="lugar.lang"
    :latitud="lugar.lat"
    />

  </div>
</template>

<script>

import searchBar from "./../moleculas/searchBar"
import { mapState } from 'vuex'
import Card from './Card'

export default {
  name: "FloatingCard",
  props: ["styles"],
  components: {
    Card,
    searchBar
  },
  computed:{
    ...mapState(["mapResults"])
  }
}
</script>

<style lang="css" scoped>

  .floating-card{
    position: fixed;
    padding: 0;
    border-radius: 5px;
    background: white;
    width: 28%;
    min-height: 45px;
    max-height: 620px;
    margin-top: 10px;
    margin-left: 10px;
    overflow:hidden;
    overflow-x:hidden;
    overflow-y:scroll;
    overflow:-moz-scrollbars-vertical;

  }
  .card-c{
    margin-top: 50px;
  }

</style>
