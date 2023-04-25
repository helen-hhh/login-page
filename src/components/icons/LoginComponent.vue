<script setup lang="ts">
import loginArrow from './loginArrow.vue';
import inputComponent from './inputComponent.vue'
import passwordComponent from './passwordComponent.vue';

const props = defineProps(["passwordreset"])
const emit = defineEmits(["update:passwordreset"])

function setPasswordReset() {
    emit("update:passwordreset", true);
}
</script>

<template>
    <div class="containerLogin">
        <h1 class="loginHeading">Login</h1>
        <p class="explain">Bitte gib deine E-Mail Adresse und dein <br> Passwort ein, um dich anzumelden.</p>
        <inputComponent></inputComponent>
        <passwordComponent></passwordComponent>
        <p @click="setPasswordReset()" class="forgotPassword">Passwort vergessen?</p>
        <button class="loginButton">
            <div class="buttonContent">
                <span class="loginText">Anmelden</span>
                <loginArrow></loginArrow>
            </div>
        </button>
    </div>
</template>

<style scoped>
.containerLogin {
    background-color: white;
    width: fit-content;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 20px;
    padding: 35px 60px 45px 60px;
}

.loginHeading {
    font-family: 'Rubik', sans-serif;
    font-weight: 600;
    font-size: 45px;
    color: #0F0F11;
    margin-bottom: 20px;
    text-align: center;
}

.explain {
    color: #878789;
    text-align: center;
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size: 15px;
}

.forgotPassword {
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size: 12px;
    text-decoration: underline;
    text-align: right;
    margin-right: 14px;
    color: #0F0F11;
    cursor: pointer;
}

.loginButton {
    background-color: #877EF7;
    border-radius: 35px;
    width: 100%;
    border: none;
    height: 56px;
    width: 350px;
    margin-top: 28px;
}

.buttonContent {
    display: flex;
    justify-content: center;
    text-align: center;
}

.loginText {
    color: white;
    text-align: center;
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size: 15px;
    margin-left: 37%;
}
</style>