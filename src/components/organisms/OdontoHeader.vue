<template>
  <v-app-bar
    app
    flat
    class="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 shadow-md"
    height="80"
  >
    <!-- Logo + Nome da Clínica -->
    <OdontoLogo />

    <v-spacer />

    <!-- Navegação desktop -->
    <div class="hidden md:flex items-center gap-4">
      <OdontoNavBar />
    </div>

    <!-- CTA desktop -->
    <div class="hidden md:flex items-center">
      <OdontoAc />
    </div>

    <!-- Botão Hambúrguer mobile -->
    <div class="flex md:hidden items-center">
      <OdontoHb />
    </div>
  </v-app-bar>
</template>

<script setup>
import { ref } from "vue";
import OdontoNavBar from "@/components/ui/header/OdontoNavBar.vue";
import OdontoAc from "@/components/ui/header/OdontoAc.vue";
import OdontoLogo from "@/components/ui/header/OdontoLogo.vue";
import OdontoHb from "@/components/ui/header/OdontoHb.vue";

const drawer = ref(false);
</script>

<style scoped>
.v-btn {
  text-transform: none;
  letter-spacing: normal;
}

.router-link-active {
  color: #fef08a;
}

.router-link-active span {
  width: 100% !important;
  background-color: #fef08a !important;
}
</style>
