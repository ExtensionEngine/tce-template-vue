<template>
    <v-col cols="6" class="background">
        <v-row class="edit-section">
            <v-col>
                <h2>Edit preview</h2>
                <Edit/>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <h1>Configuration section</h1>
            </v-col>
        </v-row>
    </v-col>
</template>

<script setup lang="ts">
import Edit from '../../content-element/edit/index.vue'
</script>

<style scoped>
.background {
    background-color: indigo;
    color: white;
    border-right: 2px white dashed;
}

.edit-section {
    height: 50vh;
    border-bottom: 1px white dashed;
}
</style>
