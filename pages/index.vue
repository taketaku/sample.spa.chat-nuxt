<template lang="pug">
section
  h1.header Nuxt TypeScript Sass/pug Starter
  .cards
    Card(v-for="(person) in people"
      v-bind:key="person.id" v-bind:person="person")
</template>

<script lang="ts">
import {
  Component,
  Vue
} from 'nuxt-property-decorator';
import { State } from 'vuex-class';
import Card from '~/components/Card.vue';

@Component({
  components: {
    Card
  }
})
export default class extends Vue {
  @State people
}
</script>
<style lang="sass" scoped>
.header 
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;

.cards 
  display: flex;
  flex-wrap: wrap;
</style>