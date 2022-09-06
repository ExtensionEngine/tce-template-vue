<template>
  <v-app>
    <v-app-bar>
      <v-app-bar-title>TCE preview</v-app-bar-title>
    </v-app-bar>
    <v-main>
      <v-container>
        <v-row>
          <EditPreview
            :element-data="elementData"
            @save="saveElementData"
            @delete="deleteElementData"
          />
          <DisplayPreview :element-data="elementData" />
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import DisplayPreview from "./components/DisplayPreview.vue";
import EditPreview from "./components/EditPreview.vue";
import type { ElementData } from "../packages/types";
import manifest from "../packages/edit/src/index";
import { ref } from "vue";

const elementData = ref<ElementData>(manifest.initState());

function saveElementData(data: ElementData) {
  elementData.value = data;
}

function deleteElementData() {
  elementData.value = {};
}
</script>
