<script setup>
const links = [
  { name: 'Início', to: '/' },
  { name: 'Serviços', to: '/servicos' },
  { name: 'Equipe', to: '/equipe' },
  { name: 'Sobre Nós', to: '/sobre' },
  { name: 'Blog', to: '/blog' },
  { name: 'Contato', to: '/contato' },
];
</script>

<template>
  <nav class="hidden md:flex space-x-6 mr-8">
    <router-link
      v-for="(link, index) in links"
      :key="index"
      :to="link.to"
      class="font-medium px-3 py-2 relative group transition-colors duration-300 text-background-linen/80"
    >
      {{ link.name }}

      <span
        class="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-gradient group-hover:w-full transition-all duration-300"
      ></span>
    </router-link>
  </nav>
</template>
