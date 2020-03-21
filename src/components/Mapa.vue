<template lang="html">
  <div :id="id" class="map-component"></div>
</template>

<script>

var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');
mapboxgl.accessToken = 'pk.eyJ1IjoibWFyaWFtZXphIiwiYSI6ImNrN2UyZjllcDA0OWYzcm14ZW02czl2czIifQ.Xc04peT2d2bj_L3kz0QfFg';
import {mapState} from "vuex"
export default {
  name: 'Mapa',
  props: ["id"],
data(){
  return{
    map: null,
    pin: new mapboxgl.Marker()
  };
},
computed:{
  ...mapState(["mapCoordenadas"])
},
watch:{
  mapCoordenadas(){

    this.pin.remove()
    this.pin = new mapboxgl.Marker({
      draggable: false
    })
    .setLngLat([this.mapCoordenadas[0].long,this.mapCoordenadas[0].lati])
    .addTo(this.map);

    this.map.flyTo({
      center: [this.mapCoordenadas[0].long, this.mapCoordenadas[0].lati],
      zoom: 16
    });

    console.log(this.mapCoordenadas[0].long)
    console.log(this.mapCoordenadas[0].lati)
  }
},
mounted(){
  this.map = new mapboxgl.Map({
    container: this.id,
    style: 'mapbox://styles/mariameza/ck80oyt9613mx1imyzkrxw94a'
  });
}
};

</script>

<style lang="css" scoped>

  .map-component{
    height: 100%;
    width: 100%;
  }

</style>
