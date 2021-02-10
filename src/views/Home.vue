<template>
  <div class="home">
    <img alt="Pairo logo" src="https://www.flaticon.com/svg/vstatic/svg/2289/2289661.svg?token=exp=1612943073~hmac=8a19b4e56bd3c02a4eac33968b81f3c8">
    <HelloWorld msg="Welcome to Pair-o"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

@Component({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {}
</script>
