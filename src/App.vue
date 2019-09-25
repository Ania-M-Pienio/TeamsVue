<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase">
        <span class="tealText">PROJECT</span>
        <span class="font-weight-light">PORTAL</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        text
        href="https://vuetifyjs.com/en/"
        target="_blank"
      >
        <span class="mr-2">using Vuetify.js</span>
      </v-btn>
    </v-app-bar>
    <div style="height: 50px;"></div>
      <app-box> 
      </app-box>
    </v-app>
</template>

<style scoped>
.tealText {
  color: teal;
}

</style>

<script>
import AppBox from './components/AppBox';

export default {
  name: 'App',
  components: {
    AppBox
  },
  data: () => ({

  }),
  
};
</script>
