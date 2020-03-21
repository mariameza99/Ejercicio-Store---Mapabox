<template lang="html">
  <div class="div-s">
    <img id="img-barra" src="./../../assets/barra.png">
    <Input v-model="busqueda" placeholder="Buscar en Google Maps"/>
    <Button :action="search"><img id="img-lupa" src="./../../assets/lupa.png"></Button>
  </div>
</template>

<script>
import Input from "../atomo/Input"
import Button from "../atomo/Button"
import axios from "axios"
import {mapMutations} from "vuex"

export default {
  name: "searchBar",
  components:{
    Input,
    Button
  },
  data(){
    return{
      busqueda: ""
    };
  },
  methods: {
    ...mapMutations(["SET_MAP_RESULTS"]),
    search(){
      console.log(this.busqueda);
      axios
        .get("http://localhost:3000/busqueda/", {
          params: {
            search: this.busqueda
          }
        })
        .then(response => {
          this.SET_MAP_RESULTS(response.data.data);
          console.log(response.data);
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};

</script>

<style lang="css" scoped>

.div-s{
  width: 100%;
  margin-top: -10px;
  display: block;
  margin-bottom: 20px;
}
#img-lupa{
  width: 20px;
  height: 20px;
}

#img-barra{
  margin-top: 19px;
  float: left;
  margin-left: 10px;
}

.card-info{
  width: 100%;
}
</style>
