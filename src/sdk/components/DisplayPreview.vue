<template>
    <v-col cols="6">
        <h2 class="mb-5">Display preview</h2>
        <Display v-bind="displayProps" @update="onUpdate"/>
    </v-col>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Display from '../../content-element/display/index.vue';

const props = defineProps(['commonProps']);
const emit = defineEmits(['update-common']);

// Should be set based on specific component's interface
const displayProps = ref({});

function onUpdate(data: any) {
    emit('update-common', data);
}
</script>

<style scoped>

</style>
