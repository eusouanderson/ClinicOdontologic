<template>
  <footer class="bg-brand-gradient text-background-linen/90 pt-12 pb-6">
    <div class="container mx-auto px-4 md:px-8">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
        <!-- Coluna 1: Sobre a clínica -->
        <div class="md:col-span-2">
          <div class="flex items-center mb-4">
            <div class="flex items-center justify-center bg-background-linen rounded-full p-2 mr-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 text-brand-primary"
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
            <h3 class="text-xl font-bold text-background-linen">OdontoClinic</h3>
          </div>
          <p class="text-background-linen/90 mb-4">
            Nossa clínica odontológica oferece tratamentos de excelência com tecnologia de ponta e
            profissionais altamente qualificados, garantindo o melhor cuidado para sua saúde bucal.
          </p>
          <div class="flex space-x-4">
            <a
              href="https://www.tiktok.com/@dra.fabianabueno?_t=ZM-8ynVGKrqEsA&_r=1"
              target="_blank"
              class="text-background-linen/70 hover:text-brand-primary transition-colors duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-tiktok"
                viewBox="0 0 16 16"
              >
                <path
                  d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3z"
                />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/dra.fabianabueno?igsh=MWh3d212YXQ0MTVsNA=="
              target="_blank"
              class="text-background-linen/70 hover:text-brand-primary transition-colors duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                />
              </svg>
            </a>
          </div>
        </div>

        <!-- Coluna 2: Links rápidos -->
        <div>
          <h3
            class="text-lg font-semibold mb-4 border-b border-accent-sage/50 pb-2 text-background-linen"
          >
            Links Rápidos
          </h3>
          <ul class="space-y-2">
            <li>
              <a
                href="#"
                class="text-background-linen/90 hover:text-brand-primary transition-colors duration-300 flex items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4 mr-2"
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
                Início
              </a>
            </li>
            <li>
              <a
                href="#"
                class="text-background-linen/90 hover:text-brand-primary transition-colors duration-300 flex items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4 mr-2"
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
                Serviços
              </a>
            </li>
            <li>
              <a
                href="#"
                class="text-background-linen/90 hover:text-brand-primary transition-colors duration-300 flex items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4 mr-2"
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
                Equipe
              </a>
            </li>
            <li>
              <a
                href="#"
                class="text-background-linen/90 hover:text-brand-primary transition-colors duration-300 flex items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4 mr-2"
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
                Sobre Nós
              </a>
            </li>
            <li>
              <a
                href="#"
                class="text-background-linen/90 hover:text-brand-primary transition-colors duration-300 flex items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4 mr-2"
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
                Blog
              </a>
            </li>
            <li>
              <a
                href="#"
                class="text-background-linen/90 hover:text-brand-primary transition-colors duration-300 flex items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4 mr-2"
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
                Contato
              </a>
            </li>
          </ul>
        </div>

        <!-- Coluna 3: Horário de funcionamento -->
        <div>
          <h3
            class="text-lg font-semibold mb-4 border-b border-accent-sage/50 pb-2 text-background-linen"
          >
            Horário de Atendimento
          </h3>
          <ul class="space-y-2">
            <li class="flex justify-between text-background-linen/90">
              <span>Segunda - Sexta</span>
              <span>08:00 - 19:00</span>
            </li>
            <li class="flex justify-between text-background-linen/90">
              <span>Sábado</span>
              <span>09:00 - 14:00</span>
            </li>
            <li class="flex justify-between text-background-linen/90">
              <span>Domingo</span>
              <span>Fechado</span>
            </li>
          </ul>
          <div class="mt-6 bg-accent-sage/20 rounded-lg p-3">
            <p class="text-sm text-background-linen/80">* Horários especiais para emergências</p>
          </div>
        </div>

        <!-- Coluna 4: Contato -->
        <div>
          <h3
            class="text-lg font-semibold mb-4 border-b border-accent-sage/50 pb-2 text-background-linen"
          >
            Contato
          </h3>
          <ul class="space-y-3">
            <li class="flex items-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 text-brand-primary mr-3 mt-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span class="text-background-linen/90"
                >Rua Apuanã, 118<br />Bairro Jd. Jaçanã<br />São Paulo - SP, CEP 02318-050</span
              >
            </li>
            <li class="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 text-brand-primary mr-3"
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
              <span class="text-background-linen/90">(00) 1234-5678</span>
            </li>
            <li class="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 text-brand-primary mr-3"
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
              <span class="text-background-linen/90">contato@odontoclinic.com</span>
            </li>
            <li class="flex items-center mt-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 text-brand-primary mr-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span class="text-background-linen/90">Atendimento 24h para emergências</span>
            </li>
          </ul>
        </div>
      </div>

      <div class="border-t border-accent-sage/30 pt-6 mt-6">
        <div class="flex flex-col md:flex-row justify-between items-center">
          <p class="text-background-linen/70 text-sm mb-4 md:mb-0">
            &copy; 2023 OdontoClinic. Todos os direitos reservados.
          </p>
          <div class="flex space-x-6">
            <a
              href="#"
              class="text-background-linen/90 hover:text-brand-primary transition-colors duration-300 text-sm"
              >Política de Privacidade</a
            >
            <a
              href="#"
              class="text-background-linen/90 hover:text-brand-primary transition-colors duration-300 text-sm"
              >Termos de Uso</a
            >
            <a
              href="#"
              class="text-background-linen/90 hover:text-brand-primary transition-colors duration-300 text-sm"
              >Mapa do Site</a
            >
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter',
};
</script>

<style scoped>
footer {
  box-shadow: 0 -4px 6px -1px rgba(0, 0, 0, 0.1);
}

a:hover {
  transform: translateX(3px);
  transition: transform 0.3s ease;
}
</style>
