<template>
    <v-col cols="6" class="background">
        <v-row class="edit-section">
            <v-col>
                <h2 class="mb-5">Edit preview</h2>
                <Edit v-bind="editProps" @update="onUpdate"/>
            </v-col>
        </v-row>
         <v-row class="toolbar">
            <v-col>
               <Toolbar v-bind="toolbarProps"/>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <h2>Configuration section</h2>
            </v-col>
        </v-row>
    </v-col>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import Edit from '../../content-element/edit/index.vue';
import Toolbar from '../../content-element/edit/Toolbar.vue';

const props = defineProps(['commonProps']);
const emit = defineEmits(['update-common']);

// Should be set based on specific component's interface
const editProps = ref({});
const toolbarProps = ref({});

function onUpdate(data: any) {
    emit('update-common', data);
}
</script>

<style scoped>
.background {
    border-right: 1.5px black dashed;
}

.edit-section {
    height: 50vh;
    border-bottom: 1px black dashed;
}

.toolbar {
    height: 7vh;
    border-bottom: 1px black dashed;
}
</style>
