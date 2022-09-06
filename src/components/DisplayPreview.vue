<template>
  <v-col cols="6">
    <h2 class="mb-5">Display preview</h2>
    <Display v-bind="displayProps" />
  </v-col>
</template>

<script setup lang="ts">
import { computed } from "vue";
import Display from "../../packages/display/src/components/index.vue";
import type { ElementData } from "../../packages/types";

const props = defineProps<{
  elementData: ElementData;
}>();

const displayProps = computed(() => ({
  ...props.elementData,
}));
</script>
