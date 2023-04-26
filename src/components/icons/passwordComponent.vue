<script setup lang="ts">
import showIcon from './showIcon.vue';
import { ref } from 'vue';
import hideIcon from './hideIcon.vue'
const showPassword = ref(false);

</script>

<template>
    <div class="passwordInput">
        <v-text-field ref="passwordField" label="Password" :type="showPassword ? 'text' : 'password'" variant="outlined"
            color='#0f0f11' name="input-10-1" autocomplete="current-password">
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
</style>