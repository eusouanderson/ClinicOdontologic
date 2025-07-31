<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" app temporary location="right">
      <v-list>
        <v-list-item
          v-for="item in menu"
          :key="item.to"
          @click="drawer = false"
        >
          <NuxtLink :to="item.to" class="text-decoration-none text-body">
            {{ item.label }}
          </NuxtLink>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar color="primary" dark flat app>
      <v-app-bar-title class="text-h6 font-weight-bold">
        <NuxtLink to="/" class="text-white text-decoration-none"
          >Odonto Clínica</NuxtLink
        >
      </v-app-bar-title>

      <v-spacer />

      <v-app-bar-nav-icon @click="drawer = !drawer" class="d-md-none" />

      <v-toolbar-items class="d-none d-md-flex">
        <NuxtLink
          v-for="item in menu"
          :key="item.to"
          :to="item.to"
          class="text-white mx-3"
          exact
        >
          {{ item.label }}
        </NuxtLink>
      </v-toolbar-items>
    </v-app-bar>

    <v-main>
      <NuxtPage />
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import { ref } from "vue";

const drawer = ref(false);

const menu = [
  { label: "Início", to: "/" },
  { label: "Serviços", to: "/servicos" },
  { label: "Sobre", to: "/sobre" },
  { label: "Contato", to: "/contato" },
];
</script>
