<script setup lang="ts">
import backArrow from './backArrow.vue';
import inputComponent from './inputComponent.vue'

const props = defineProps(["sendToMail", "backtologin"])
const emit = defineEmits(["update:sendToMail", "update:backtologin"])

function setMail() {
    emit("update:sendToMail", true);
}

function loginPageBack() {
    emit("update:backtologin", false)
}

</script>

<template>
    <div class="containerReset">
        <h1 class="passwordHeading">Passwort <br> zurücksetzen</h1>
        <inputComponent></inputComponent>
        <button @click="setMail()" class="resetButton">
            <div class="buttonReset">
                <span class="resetText">E-Mail zum Zurücksetzen senden</span>
            </div>
        </button>
        <div @click="loginPageBack()" class="backContainer">
            <backArrow></backArrow>
            <p class="back">Zurück zum Login</p>
        </div>
    </div>
</template>

<style scoped>
.containerReset {
    background-color: white;
    width: fit-content;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 20px;
    padding: 35px 60px 45px 60px;
    box-shadow: 4px 4px 12px rgba(15, 15, 17, 0.3);
}

.passwordHeading {
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

.backContainer {
    width: 350px;
    display: flex;
    margin-top: 15px;
}

.back {
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size: 12px;
    text-decoration: underline;
    color: #0F0F11;
    text-align: center;
    margin-right: 36%;
    display: inline-block;
    white-space: nowrap;
    cursor: pointer;
}

.resetButton {
    background-color: #877EF7;
    border-radius: 35px;
    width: 100%;
    border: none;
    height: 56px;
    width: 350px;
    margin-top: 28px;
}

.buttonReset {
    display: flex;
    justify-content: center;
    text-align: center;
}

.resetText {
    color: white;
    text-align: center;
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size: 15px;
}
</style>