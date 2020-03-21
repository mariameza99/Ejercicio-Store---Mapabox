<template lang="html">
  <div class="card">
<img class="img-c" :src="img" alt="">
    <div class="card-info">
      <p class="name-c">{{name}}</p>
      <p class="address-c">{{address}}</p>
    <div class="button-card">
      <button class="btn-c" @click="mostrarPin()" type="button" name="button">Ir</button>
    </div>
    </div>

  </div>
</template>

<script>

import {mapMutations} from "vuex";
export default {
  name: "Card",
  props: [
    "name",
    "address",
    "img",
    "latitud",
    "longitud"
  ],
  methods: {
    ...mapMutations(["SET_MAP_COORDENADAS"]),
    mostrarPin(){
      var ubicacion = [
        {
          lati: this.latitud,
          long: this.longitud
        }
      ]
      this.SET_MAP_COORDENADAS(ubicacion);
    }
  }
}
</script>

<style lang="css" scoped>
  .card {
    width: 100%;
    height: 160px;
    border-radius: 5px;
    background-color: white;
    margin-top: 10px;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
  }

  .img-c{
    width: 100%;
    height: 260px;
    margin-top: -40px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }

  .name-c{
    font-family: 'Montserrat';
    font-size: 15px;
    font-weight: 600;
    float: left;
    width: 80%;
    margin-left: 80px;
    color: #616161;
    position: relative;
  }

  .address-c{
    font-size: 15px;
    float: left;
    width: 80%;
    margin-top: -10px;
    margin-left: 80px;
    position: relative;
  }

  .card-info{
    width: 100%;
    background-color: white;
    height: 100px;
    margin-top: -100px;
    position: relative;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    border-bottom: solid 1px lightgrey;
  }

  .btn-c{
    font-family: 'Montserrat';
    font-weight: 600;
    font-size: 15px;
    background-color: white;
    float: right;
    margin-right: 10px;
    margin-top: -25px;
    height: 30px;
    width: 10%;
    border-radius: 35px;
    border: 1px solid #c9c9c9;
    position: relative;
  }
</style>
