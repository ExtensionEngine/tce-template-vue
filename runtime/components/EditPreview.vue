<template>
  <v-col cols="6" class="background">
    <v-row>
      <v-col>
        <h2 class="mb-5">Edit preview</h2>
        <Edit v-bind="editProps" @save="onSave" @delete="onDelete" />
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <h3>Top toolbar</h3>
        <TopToolbar />
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <h3>Top toolbar</h3>
        <SideToolbar />
      </v-col>
    </v-row>
  </v-col>
</template>

<script setup lang="ts">
import { computed } from "vue";
import manifest from "../../packages/content-element";
import type { ElementData } from "../../packages/content-element/types";

const { Edit, SideToolbar, TopToolbar } = manifest;

const props = defineProps<{
  elementData: ElementData;
}>();
const emit = defineEmits(["save", "delete"]);

// Should be set based on specific component's interface
const editProps = computed(() => ({
  ...props.elementData,
}));

function onSave(data: ElementData) {
  emit("save", data);
}

function onDelete() {
  emit("delete");
}
</script>
