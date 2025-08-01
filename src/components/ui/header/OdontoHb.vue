<template>
  <!-- 
    1. BOTÃO HAMBÚRGUER ATUALIZADO:
    - O texto (cor do ícone) agora é `text-text-graphite` para ter contraste
      com o header claro (`bg-background-linen`).
  -->
  <v-app-bar-nav-icon
    class="md:hidden text-text-graphite mr-2"
    @click="toggleDrawer"
    aria-label="Abrir menu"
  >
    <!-- O SVG interno herda a cor do pai, então não precisa de classes -->
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

  <!-- 
    2. DRAWER MOBILE ATUALIZADO:
    - O fundo agora é `bg-text-graphite` e o texto é `text-background-linen`,
      criando consistência com o footer.
    - O overlay (fundo semi-transparente) agora usa o `text-graphite`
      para uma aparência mais coesa.
  -->
  <v-navigation-drawer
    v-model="drawer"
    temporary
    right
    class="bg-text-graphite text-background-linen"
    width="280"
    :overlay-color="'rgb(var(--color-text-graphite))'"
    overlay-opacity="0.8"
  >
    <div class="flex justify-end p-4">
      <v-btn icon @click="toggleDrawer" class="text-background-linen">
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
      <!-- 
        3. LISTA DE LINKS ATUALIZADA:
        - O hover agora usa a cor de destaque com opacidade (`hover:bg-accent-sage/20`).
        - O ícone do link agora usa a cor primária da marca.
      -->
      <v-list-item
        v-for="(link, index) in links"
        :key="index"
        :to="link.to"
        link
        @click="toggleDrawer"
        class="hover:bg-accent-sage/20 transition-colors duration-300 rounded-lg px-4 py-3 mb-1"
      >
        <v-list-item-title class="font-medium text-lg flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 mr-3 text-brand-primary"
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

      <!-- 
        4. BOTÃO DE AÇÃO (CTA) ATUALIZADO:
        - Removemos a cor do Vuetify (`color="yellow-darken-1"`).
        - Usamos classes do Tailwind para aplicar o fundo com a cor de destaque
          e garantir o texto claro (`bg-accent-sage text-background-linen`).
      -->
      <v-list-item class="mt-4 px-4">
        <v-btn block @click="agendarConsulta" class="bg-accent-sage text-background-linen">
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

    <!-- 
      5. INFORMAÇÕES DE CONTATO ATUALIZADAS:
      - Usamos a paleta de cores para texto e ícones.
      - O texto de menos importância usa opacidade (`text-background-linen/70`).
      - Ícones de destaque usam a cor primária (`text-brand-primary`).
    -->
    <div class="px-6 py-8 mt-auto">
      <div class="text-background-linen/70 text-sm mb-4">Entre em contato:</div>

      <div class="flex items-center mb-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5 mr-3 text-brand-primary"
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
        <span class="text-background-linen">(XX) XXXX-XXXX</span>
      </div>

      <div class="flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5 mr-3 text-brand-primary"
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
        <span class="text-background-linen">contato@odontoclinic.com</span>
      </div>
    </div>
  </v-navigation-drawer>
</template>

<script setup>
import { ref } from 'vue';

const drawer = ref(false);

const toggleDrawer = () => {
  drawer.value = !drawer.value;
};

const agendarConsulta = () => {
  // lógica para redirecionar ou abrir modal
  console.log('Agendar consulta clicado');
};

// Dados de exemplo para os links de navegação.
// Você deve substituir isso pelos seus dados reais.
const links = ref([
  { name: 'Início', to: '/' },
  { name: 'Serviços', to: '/servicos' },
  { name: 'Equipe', to: '/equipe' },
  { name: 'Sobre Nós', to: '/sobre' },
  { name: 'Blog', to: '/blog' },
  { name: 'Contato', to: '/contato' },
]);
</script>
