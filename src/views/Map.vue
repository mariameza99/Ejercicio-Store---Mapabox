<template lang="html">
  <div id="map-v">
    <Mapa id="map-component"/>
    <FloatingCard styles="top: 10px; left: 10px">
    </FloatingCard>

  </div>
</template>

<script>

import Mapa from "../components/Mapa.vue"
import FloatingCard from "../components/atomo/FloatingCard"

export default {
  name: 'Map',
  components: {
    Mapa,
    FloatingCard
  }
}
</script>

<style lang="css" scoped>

#map-v{
  font-family: Arial, Avenir, Helvetica, sans-serif;
  height: 100vh;
  width: 100vw;
}

</style>
