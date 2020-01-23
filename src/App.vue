<template>
  <div id="app" >
    <p>Akutalne wydarzenie: {{current.opis}}</p>
    <div style="display:flex;flex-wrap:wrap">
      <card :data="data" :index="index" v-for="(data,index) in datyboard"></card>
    </div>
    <p>Fails {{fails}}</p>  
  </div>
</template>

<script>
import Card from "./components/Card.vue";
import {mapState} from 'vuex';
import { HTTP } from './http-common';


export default {



  name: "app",
  components: {
    Card
  },
  data(){
    return {
      
    }
  },
  mounted(){
    this.$store.dispatch('draw');
  },
  computed:{
    ...mapState([
      'datyboard','daty','current','fails'
    ])
  }

};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
