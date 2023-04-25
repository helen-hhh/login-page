<script setup lang="ts">
import NadarLogo from './components/icons/NadarLogo.vue';
import LoginComponent from './components/icons/LoginComponent.vue';
import ResetPasswordComponent from './components/icons/ResetPasswordComponent.vue';
import MailComponent from './components/icons/MailComponent.vue';
import animationComponent from './components/icons/animationComponent.vue';
import { ref } from 'vue';

let passwordreset = ref(false);
let mail = ref(false);
</script>

<template>
  <div class="container">
    <NadarLogo></NadarLogo>
    <animationComponent></animationComponent>
    <LoginComponent v-if="!passwordreset" v-model:passwordreset="passwordreset"></LoginComponent>
    <ResetPasswordComponent v-else-if="!mail" v-model:sendToMail="mail" v-model:backtologin="passwordreset">
    </ResetPasswordComponent>
    <MailComponent v-else v-model:backtologin="passwordreset" v-model:backmail="mail" v-model:backtopassword="mail">
    </MailComponent>
    <a href="" class="impressum">Impressum</a>
  </div>
</template>

<style scoped>
.container {
  background-color: #274E2B;
  width: 100vw;
  height: 100vh;
  margin: 0%;
  padding: 0%;
}

.impressum {
  position: fixed;
  bottom: 0;
  right: 0;
  margin-bottom: 2vh;
  margin-right: 4vw;
  color: white;
  text-decoration: underline;
}
</style>
