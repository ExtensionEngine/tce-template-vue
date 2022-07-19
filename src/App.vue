<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <v-app>
    <v-app-bar>
      <v-app-bar-title>Tailor content element SDK</v-app-bar-title>
    </v-app-bar>
    <v-main>
      <v-container>
        <v-row>
          <v-col cols="2"></v-col>
          <v-col cols="5"></v-col>
          <v-col cols="5"></v-col>
        </v-row>
      </v-container>
      <HelloWorld msg="Hello from Tailor custom element 😃"/>
    </v-main>
  </v-app>
</template>
