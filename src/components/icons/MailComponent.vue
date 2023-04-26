<script setup lang="ts">
import backArrow from './backArrow.vue';
import mailIcon from './mailIcon.vue';

const props = defineProps(["backtologin", "backmail", "backtopassword"])
const emit = defineEmits(["update:backtologin", "update:backmail", "update:backtopassword"])

function loginPageBack() {
    emit("update:backtologin", false);
    emit("update:backmail", false);
}

function backPassword() {
    emit("update:backtopassword", false);
}
</script>

<template>
    <div class="containerMail">
        <div class="mailIcon">
            <mailIcon></mailIcon>
        </div>
        <h1 class="loginHeading">Du hast Post!</h1>
        <p class="reset">Wir haben dir eine E-Mail mit dem Wieder-<br>herstellungslink für dein Passwort geschickt.</p>
        <button class="mailButton">Öffne E-Mail App
        </button>
        <div @click="loginPageBack()" class="backContainer">
            <backArrow></backArrow>
            <p class="back">Zurück zum Login</p>
        </div>
        <div class="divider"></div>
        <p class="alternative">Du hast keine E-Mail erhalten? Schau in deinen Spam<br>Ordner oder <span
                @click="backPassword()" class="altLink">versuche es mit
                einer
                anderen
                E-Mail Adresse</span></p>
    </div>
</template>

<style scoped>
.containerMail {
    background-color: white;
    width: fit-content;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 20px;
    padding: 45px 60px 45px 60px;
    box-shadow: 4px 4px 12px rgba(15, 15, 17, 0.3);
}

.mailIcon {
    width: 100%;
    justify-content: center;
    text-align: center;
}

.loginHeading {
    font-family: 'Rubik', sans-serif;
    font-weight: 600;
    font-size: 45px;
    color: #0F0F11;
    margin-bottom: 10px;
    text-align: center;
}

.reset {
    color: #878789;
    text-align: center;
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size: 15px;
}

.mailButton {
    background-color: #877EF7;
    border-radius: 35px;
    width: 100%;
    border: none;
    height: 56px;
    width: 350px;
    margin-top: 28px;
    color: white;
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

.divider {
    width: 100%;
    height: 1px;
    background-color: #878789;
    margin-top: 40px;
}

.alternative {
    text-align: center;
    font-size: 12px;
    color: #878789;
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    margin-top: 14px;
    letter-spacing: -0.1px;
}

.altLink {
    color: #877EF7;
    font-size: 12px;
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    letter-spacing: -0.1px;
    text-decoration: underline;
    cursor: pointer;
}
</style>