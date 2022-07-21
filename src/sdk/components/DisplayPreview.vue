<template>
    <v-col cols="6" class="background">
        <h2>Display preview</h2>
        <Display />
    </v-col>
</template>

<script setup lang="ts">
import Display from '../../content-element/display/index.vue'
</script>

<style scoped>
.background {
    background-color: indianred;
    color: white;
}
</style>
