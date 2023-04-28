<script setup lang="ts">
import closeIcon from './icons/closeIcon.vue';
import warnIcon from './icons/warnIcon.vue'
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
        <v-text-field clearable type="email" v-bind:clear-icon="closeIcon" label=" E-Mail" variant="outlined"
            color='#0f0f11' base-color="#f00" autocomplete="email" :rules="[emailValidation]" v-model="email"
            v-on:focusout="focusLeft" persistent-hint :hint="showError ? 'Ungültige E-Mail Adresse' : ''"
            :append-inner-icon="showError ? warnIcon : ''" :error="showError">
            <template v-slot:clear-icon>
                <closeIcon></closeIcon>
            </template>
        </v-text-field>
    </div>
</template>

<style scoped>
.emailInput {
    margin-top: 40px;
}
</style>