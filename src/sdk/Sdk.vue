<template>
  <v-app>
    <v-app-bar>
      <v-app-bar-title>Tailor content element SDK</v-app-bar-title>
    </v-app-bar>
    <v-main>
      <v-container>
        <v-row class="sdk">
          <EditPreview />
          <DisplayPreview />
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import EditPreview from './components/EditPreview.vue';
import DisplayPreview from './components/DisplayPreview.vue';
</script>

<style scoped>
.sdk {
  height: 100vh;
}
</style>
