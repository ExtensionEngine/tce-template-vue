<template>
  <v-app>
    <v-app-bar>
      <v-app-bar-title>Tailor content element SDK</v-app-bar-title>
    </v-app-bar>
    <v-main>
      <v-container>
        <v-row class="sdk">
          <EditPreview :common-props="commonProps" @update-common="updateCommonProps"/>
          <DisplayPreview :common-props="commonProps" @update-common="updateCommonProps"/>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import EditPreview from './components/EditPreview.vue';
import DisplayPreview from './components/DisplayPreview.vue';

// Props shared between edit and display components
const commonProps = ref({});

function updateCommonProps(data: any) {
  commonProps.value = data;
}
</script>

<style scoped>
.sdk {
  height: 100vh;
}
</style>
