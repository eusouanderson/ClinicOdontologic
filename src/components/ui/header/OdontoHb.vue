<template>
  <div>
    <v-app-bar-nav-icon
      class="md:hidden text-text-graphite hover:text-brand-primary mr-2 transition-colors duration-300"
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

    <!-- Modal do Menu para Mobile -->
    <v-dialog
      v-model="drawer"
      fullscreen
      transition="dialog-bottom-transition"
      overlay-color="brand-primary"
      overlay-opacity="0.9"
      persistent
    >
      <template #activator="{ on, attrs }"></template>

      <v-card class="bg-brand-gradient bg-background-linen flex flex-col h-full">
        <!-- Header com botão fechar -->
        <v-toolbar dense flat class="justify-end p-4 bg-brand-primary">
          <v-btn
            icon
            @click="toggleDrawer"
            class="hover:bg-brand-primary/20 transition-colors duration-300"
          >
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
        </v-toolbar>

        <!-- Lista de links -->
        <v-list nav dense class="px-4 flex-grow overflow-auto">
          <v-list-item
            v-for="(link, index) in links"
            :key="index"
            :to="link.to"
            link
            @click="toggleDrawer"
            class="hover:bg-brand-primary/10 transition-colors duration-300 rounded-lg px-4 py-3 mb-1 group"
          >
            <v-list-item-title class="font-serif font-medium text-lg flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 mr-3 text-brand-primary group-hover:translate-x-1 transition-transform duration-300"
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
              <span class="group-hover:text-brand-primary transition-colors duration-300">
                {{ link.name }}
              </span>
            </v-list-item-title>
          </v-list-item>

          <!-- Botão CTA -->
          <v-list-item class="mt-8 px-4">
            <v-btn
              block
              @click="agendarConsulta"
              class="bg-brand-primary hover:bg-accent-sage text-background-linen font-serif font-bold py-4 transition-colors duration-300 shadow-md hover:shadow-lg"
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

        <!-- Informações de contato -->
        <div class="px-6 py-8 bg-accent-sage/5 border-t border-brand-primary/10">
          <div class="mb-4 font-serif text-brand-primary">Entre em contato:</div>

          <div class="flex items-center mb-3 group">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 mr-3 text-brand-primary group-hover:scale-110 transition-transform duration-300"
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
            <span class="text-ellipsis decoration-text-graphite transition-colors duration-300"
              >(11) 99636-8999</span
            >
          </div>

          <div class="flex items-center group">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 mr-3 text-brand-primary group-hover:scale-110 transition-transform duration-300"
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
            <span class="group-hover:text-brand-primary transition-colors duration-300"
              >contato@odontoclinic.com</span
            >
          </div>
        </div>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const drawer = ref(false);

const toggleDrawer = () => {
  drawer.value = !drawer.value;
  console.log('Botão hambúrguer clicado');
};

const agendarConsulta = () => {
  console.log('Agendar consulta clicado');
};

const links = ref([
  { name: 'Início', to: '/' },
  { name: 'Serviços', to: '/servicos' },
  { name: 'Equipe', to: '/equipe' },
  { name: 'Sobre Nós', to: '/sobre' },
  { name: 'Blog', to: '/blog' },
  { name: 'Contato', to: '/contato' },
]);
</script>
