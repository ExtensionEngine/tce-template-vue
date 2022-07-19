<template>
    <v-col cols="5" class="background">
        <v-row class="edit-section">
            <v-col>
                <h1>Edit section</h1>
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