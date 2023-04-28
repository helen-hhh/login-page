<script setup lang="ts">
import showIcon from './icons/showIcon.vue';
import { ref } from 'vue';
import hideIcon from './icons/hideIcon.vue'
const showPassword = ref(false);

</script>

<template>
    <div class="passwordInput">
        <v-text-field ref="passwordField" class="text-black" label="Password" :type="showPassword ? 'text' : 'password'"
            variant="outlined" color='#0f0f11' name="input-10-1" autocomplete="current-password">
            <template v-slot:append-inner>
                <div @click="showPassword = !showPassword">
                    <showIcon v-if="!showPassword"></showIcon>
                    <hideIcon v-else></hideIcon>
                </div>
            </template>
        </v-text-field>
    </div>
</template>

<style scoped>
.passwordInput {
    margin-top: 30px;
}

.text-black input {
    color: #0f0f11 !important;
}
</style>