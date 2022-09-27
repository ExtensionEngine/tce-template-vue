<template>
  <v-col cols="6">
    <h2 class="mb-5">Display preview</h2>
    <Display v-bind="displayProps" />
  </v-col>
</template>

<script setup lang="ts">
import { computed } from "vue";
import manifest from "../../packages/content-element";
import type { ElementData } from "../../packages/content-element/types";

const { Display } = manifest;

const props = defineProps<{
  elementData: ElementData;
}>();

const displayProps = computed(() => ({
  ...props.elementData,
}));
</script>
