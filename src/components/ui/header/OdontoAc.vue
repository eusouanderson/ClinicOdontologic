<script lang="js">
import { handleAction } from '@/services';
</script>

<template>
  <v-btn
    class="hidden md:inline-flex bg-yellow-400 text-blue-900 font-semibold hover:bg-yellow-300 transition-colors duration-300 rounded-lg px-6 py-3 shadow-lg mr-4"
    elevation="4"
    @click="handleAction"
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
</template>
