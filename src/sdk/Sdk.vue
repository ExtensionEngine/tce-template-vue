<template>
  <v-app>
    <v-app-bar>
      <v-app-bar-title>Tailor content element SDK</v-app-bar-title>
    </v-app-bar>
    <v-main>
      <v-container>
        <v-row class="sdk">
          <EditPreview @update-common="updateCommonProps" :common-props="commonProps" />
          <DisplayPreview @update-common="updateCommonProps" :common-props="commonProps" />
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import DisplayPreview from './components/DisplayPreview.vue';
import EditPreview from './components/EditPreview.vue';
import { ref } from 'vue';

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
