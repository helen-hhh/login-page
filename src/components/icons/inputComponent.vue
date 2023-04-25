<script setup lang="ts">
import closeIcon from './closeIcon.vue';
import warnIcon from './warnIcon.vue'
import { ref, computed } from "vue";
const email = ref("");
const emailHint = ref("");


const emailValidation = () => {
    const regex = /\S+@\S+\.\S+/;
    return regex.test(email.value)
};

const showError = computed(() => {
    return wrong.value && !emailValidation();
});

const wrong = ref(false);

const focusLeft = () => {
    wrong.value = false;
    if (email.value === "") {
        return;
    }
    if (!emailValidation()) {
        wrong.value = true;
        return;
    }

};



</script>

<template>
    <div class="emailInput">
        <v-text-field clearable v-bind:clear-icon="closeIcon" label=" E-Mail" variant="outlined" color='#0f0f11'
            autocomplete="email" :rules="[emailValidation]" v-model="email" v-on:focusout="focusLeft" persistent-hint
            :hint="showError ? 'Ungültige E-Mail Adresse' : ''" :append-inner-icon="showError ? warnIcon : ''"
            :error="showError">
        </v-text-field>
    </div>
</template>

<style scoped>
.emailInput {
    margin-top: 40px;
}
</style>