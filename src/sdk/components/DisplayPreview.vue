<template>
  <v-col cols="6">
    <h2 class="mb-5">Display preview</h2>
    <Display @update="onUpdate" v-bind="displayProps" />
  </v-col>
</template>

<script setup lang="ts">
import Display from '../../content-element/display/index.vue';
import { ref } from 'vue';

const props = defineProps<{
  commonProps: object
}>();
const emit = defineEmits(['update-common']);

// Should be set based on specific component's interface
const displayProps = ref({
  ...props.commonProps
});

function onUpdate(data: any) {
  emit('update-common', data);
}
</script>

<style scoped>

</style>
