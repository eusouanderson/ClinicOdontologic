<template>
  <!-- Botão hambúrguer -->
  <v-app-bar-nav-icon
    class="md:hidden text-white mr-2"
    @click="toggleDrawer"
    aria-label="Abrir menu"
  >
    <template #default>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
    </template>
  </v-app-bar-nav-icon>

  <!-- Drawer mobile -->
  <v-navigation-drawer
    v-model="drawer"
    temporary
    right
    class="bg-gradient-to-b from-blue-700 to-blue-800 text-white"
    width="280"
    overlay-color="black"
    overlay-opacity="0.8"
  >
    <div class="flex justify-end p-4">
      <v-btn icon @click="toggleDrawer" class="text-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </v-btn>
    </div>

    <v-list nav dense class="px-4">
      <v-list-item
        v-for="(link, index) in links"
        :key="index"
        :to="link.to"
        link
        @click="toggleDrawer"
        class="hover:bg-blue-600 transition-colors duration-300 rounded-lg px-4 py-3 mb-1"
      >
        <v-list-item-title class="font-medium text-lg flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 mr-3 text-blue-200"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
          {{ link.name }}
        </v-list-item-title>
      </v-list-item>

      <v-list-item class="mt-4 px-4">
        <v-btn
          block
          color="yellow-darken-1"
          @click="agendarConsulta"
          class="text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 mr-2"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z"
              clip-rule="evenodd"
            />
          </svg>
          Agendar Consulta
        </v-btn>
      </v-list-item>
    </v-list>

    <div class="px-6 py-8 mt-auto">
      <div class="text-blue-200 text-sm mb-4">Entre em contato:</div>

      <div class="flex items-center mb-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5 mr-3 text-yellow-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        </svg>
        <span class="text-white">(XX) XXXX-XXXX</span>
      </div>

      <div class="flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5 mr-3 text-yellow-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
        <span class="text-white">contato@odontoclinic.com</span>
      </div>
    </div>
  </v-navigation-drawer>
</template>

<script setup>
import { ref } from "vue";

const drawer = ref(false);

const toggleDrawer = () => {
  drawer.value = !drawer.value;
};

const agendarConsulta = () => {
  // lógica para redirecionar ou abrir modal
  console.log("Agendar consulta clicado");
};
</script>
