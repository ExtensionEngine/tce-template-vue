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
import Edit from "../../packages/edit/src/components/index.vue";
import type { ElementData } from "../../packages/types";
import SideToolbar from "../../packages/edit/src/components/SideToolbar.vue";
import TopToolbar from "../../packages/edit/src/components/TopToolbar.vue";

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
