<script setup lang="ts">
import { ref } from 'vue';
import { useBackgroundStore } from "../stores/formState"

const store = useBackgroundStore();

const props = defineProps(["left", "top", "newTop", "newLeft"]);
</script>

<template>
    <div class="circle"
        :style="{ 'top': store.state ? props.newTop : props.top, 'left': store.state ? props.newLeft : props.left }">
    </div>
</template>

<style scoped>
.circle {
    transition: left 1s ease, top 1s ease;
    position: absolute;
    width: 25px;
    height: 25px;
    border-radius: 100%;
    background-color: #E0B3DF;
    /*  animation-timing-function: ease-in-out; */

}
</style>