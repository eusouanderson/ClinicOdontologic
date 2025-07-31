<script lang="js">
const links = [
  { name: "Início", to: "/" },
  { name: "Serviços", to: "/servicos" },
  { name: "Equipe", to: "/equipe" },
  { name: "Sobre Nós", to: "/sobre" },
  { name: "Blog", to: "/blog" },
  { name: "Contato", to: "/contato" },
];
</script>

<template>
  <nav class="hidden md:flex space-x-6 mr-8">
    <router-link
      v-for="(link, index) in links"
      :key="index"
      :to="link.to"
      class="text-white font-medium hover:text-blue-100 transition-colors duration-300 px-3 py-2 relative group"
    >
      {{ link.name }}
      <span
        class="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 group-hover:w-full transition-all duration-300"
      ></span>
    </router-link>
  </nav>
</template>

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
