<script setup lang="ts">
const props = defineProps(["left", "top"]);
console.log(props.left, props.top)
</script>

<template>
    <div class="circle" :style="{ 'top': props.top, 'left': props.left }"></div>
</template>

<style scoped>
.circle {
    position: relative;
    width: 25px;
    height: 25px;
    border-radius: 100%;
    background-color: #E0B3DF;
    animation-timing-function: ease-in-out;
}
</style>