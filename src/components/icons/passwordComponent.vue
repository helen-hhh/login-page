<script setup lang="ts">
import showIcon from './showIcon.vue';
</script>

<template>
    <div class="passwordInput">
        <v-text-field label="Password" type="password" variant="outlined" hint="www.example.com/page" color='#0f0f11'
            name="input-10-1" autocomplete="current-password">
            <template v-slot:append-inner>
                <showIcon></showIcon>
            </template>
        </v-text-field>
    </div>
</template>

<style scoped>
.passwordInput {
    margin-top: 30px;
}
</style>