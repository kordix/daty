<template>
<div style="display:flex" @mouseover="hovered=true" @mouseleave="hovered=false">
  <div class="card" @click="check">
    <p>{{data.date}}</p>
    <p>{{data.opis}}</p>
  </div>
  <div class="card" style="opacity:0.2" v-if="hovered"> </div>
</div>  
</template>

<script>
import { mapState } from "vuex";

export default {
  props: ["data", "index"],
  computed: {
    ...mapState(["datyboard", "daty", "current"])
  },
  data(){
    return {
      hovered:false
    }
  },
  methods: {
    check() {
      try {
        console.log(this.index);
        if (this.index + 1 == this.datyboard.length) {
          if (this.$store.state.current.date > this.datyboard[this.index].date) {
            this.datyboard.splice(this.index + 1, 0, this.current);
            this.$store.dispatch('draw');
          } else {
            this.$store.state.fails++;
          }
        } else if (
          this.current.date < this.datyboard[this.index + 1].date &&
          this.current.date > this.datyboard[this.index].date
        ) {
          this.datyboard.splice(this.index + 1, 0, this.current);
          this.$store.dispatch('draw');
        } else {
          this.$store.state.fails++;

          
        }
      } catch (e) {
        console.log(e.message)
      }
    }
  }
};
</script>

<style scoped>
.card {
  padding: 5px;
  border: 1px black solid;
  height: 170px;
  width: 200px;
  border-radius: 4%;
  width: 120px;
  margin-right: 5px;
  margin-bottom: 15px;
}
</style>