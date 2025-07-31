<template>
  <v-app-bar-title
    class="flex items-center text-white font-semibold tracking-wide cursor-pointer select-none ml-4 md:ml-8"
  >
    <router-link
      to="/"
      class="flex items-center space-x-3 hover:opacity-90 transition-opacity duration-300"
    >
      <div class="flex items-center justify-center bg-white rounded-full p-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-8 w-8 text-blue-700"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      </div>
      <div class="flex flex-col">
        <span class="font-bold text-xl md:text-2xl">OdontoClinic</span>
        <span class="text-xs font-light text-blue-100"
          >Excelência em saúde bucal</span
        >
      </div>
    </router-link>
  </v-app-bar-title>
</template>
