<script setup lang="ts">
import forestLine from './forestLine.vue';


//40 Kreise in Begrenzung
for (let i = 0; i < 40; i++) {

};
</script>

<template>
    <forestLine></forestLine>
    <div class="circle"></div>
</template>

<style scoped>
.circle {
    width: 25px;
    height: 25px;
    border-radius: 100%;
    background-color: #E0B3DF;
    animation-timing-function: ease-in-out;
}
</style>