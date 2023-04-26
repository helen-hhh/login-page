<script setup lang="ts">
import showIcon from './showIcon.vue';
import { ref } from 'vue';
import hideIcon from './hideIcon.vue'
const passwordFieldType = ref('password');

function togglePasswordVisibility() {
    console.log("öizc");
    passwordFieldType.value = passwordFieldType.value === 'password' ? 'text' : 'password';

}
</script>

<template>
    <div class="passwordInput">
        <v-text-field ref="passwordField" label="Password" type="password" variant="outlined" hint="www.example.com/page"
            color='#0f0f11' name="input-10-1" autocomplete="current-password">
            <template v-slot:append-inner>
                <showIcon @click="togglePasswordVisibility"></showIcon>
            </template>
        </v-text-field>
    </div>
</template>

<style scoped>
.passwordInput {
    margin-top: 30px;
}
</style>