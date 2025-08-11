<template>
  <section
    class="min-h-screen w-full bg-background-linen px-8 py-16 flex flex-col justify-center items-center text-brand-primary font-elegant overflow-x-hidden"
  >
    <h1
      class="text-5xl font-bold mb-12 text-center max-w-4xl"
      data-aos="fade-down"
      data-aos-duration="800"
    >
      Entre em Contato
    </h1>

    <div class="max-w-6xl w-full grid md:grid-cols-2 gap-12">
      <div class="bg-white rounded-xl shadow-lg p-8" data-aos="fade-right" data-aos-duration="600">
        <h2 class="text-3xl font-semibold mb-6">Agende sua Consulta</h2>

        <form class="space-y-6">
          <div>
            <label for="name" class="block text-lg mb-2">Nome Completo</label>
            <input
              type="text"
              id="name"
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent"
              placeholder="Seu nome"
            />
          </div>

          <div>
            <label for="email" class="block text-lg mb-2">E-mail</label>
            <input
              type="email"
              id="email"
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent"
              placeholder="seu@email.com"
            />
          </div>

          <div>
            <label for="phone" class="block text-lg mb-2">Telefone</label>
            <input
              type="tel"
              id="phone"
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent"
              placeholder="(00) 00000-0000"
            />
          </div>

          <div>
            <label for="message" class="block text-lg mb-2">Mensagem</label>
            <textarea
              id="message"
              rows="4"
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent"
              placeholder="Descreva o motivo do seu contato"
            ></textarea>
          </div>

          <button
            type="submit"
            class="w-full bg-brand-primary text-white py-3 px-6 rounded-lg hover:bg-brand-primary-dark transition duration-300 text-lg font-medium"
          >
            Enviar Mensagem
          </button>
        </form>
      </div>

      <div class="space-y-8" data-aos="fade-left" data-aos-duration="600" data-aos-delay="100">
        <div class="h-96 rounded-xl overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3659.238370075595!2d-46.5884159!3d-23.4523123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cef42c0a590367%3A0xb2c66ce27f0bda69!2sR.%20Apuana%2C%20118%20-%20Jardim%20Jacana%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2002318-050!5e0!3m2!1spt-BR!2sbr!4v1712345678900"
            width="100%"
            height="100%"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div class="bg-white rounded-xl shadow-lg p-8">
          <h3 class="text-2xl font-semibold mb-6">Informações</h3>

          <div class="space-y-4">
            <div class="flex items-start">
              <svg
                class="w-6 h-6 text-brand-primary mt-1 mr-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                ></path>
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                ></path>
              </svg>
              <p class="text-lg">Rua Apuanã, 118 - Jaçanã<br />São Paulo/SP - 02318-050</p>
            </div>

            <div class="flex items-center">
              <svg
                class="w-6 h-6 text-brand-primary mr-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                ></path>
              </svg>
              <p class="text-lg">(11) 1234-5678</p>
            </div>

            <div class="flex items-center">
              <svg
                class="w-6 h-6 text-brand-primary mr-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                ></path>
              </svg>
              <p class="text-lg">contato@drafabiana.com.br</p>
            </div>

            <div class="flex items-center">
              <svg
                class="w-6 h-6 text-brand-primary mr-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              <p class="text-lg">Segunda a Sexta: 08h às 18h<br />Sábado: 08h às 12h</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue';
import AOS from 'aos';
import 'aos/dist/aos.css';

onMounted(() => {
  AOS.init({
    once: false,
    easing: 'ease-in-out-quad',
    offset: 120,
    duration: 600,
  });
});
</script>

<style scoped>
[data-aos='fade-right'] {
  opacity: 0;
  transform: translateX(-20px);
  transition-property: opacity, transform;
}

[data-aos='fade-right'].aos-animate {
  opacity: 1;
  transform: translateX(0);
}

[data-aos='fade-left'] {
  opacity: 0;
  transform: translateX(20px);
  transition-property: opacity, transform;
}

[data-aos='fade-left'].aos-animate {
  opacity: 1;
  transform: translateX(0);
}

.brand-primary-dark {
  background-color: #a56953;
}
</style>
