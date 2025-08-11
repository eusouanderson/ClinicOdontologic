<template>
  <section
    class="min-h-screen w-full bg-background-linen px-8 py-16 flex flex-col justify-center items-center text-brand-primary font-elegant overflow-x-hidden"
  >
    <h1
      class="text-5xl font-bold mb-12 text-center max-w-4xl"
      data-aos="fade-down"
      data-aos-duration="800"
    >
      Nossa Equipe
    </h1>

    <div class="max-w-6xl w-full grid md:grid-cols-3 gap-8">
      <!-- Membro 1 -->
      <div
        class="bg-white rounded-xl shadow-md overflow-hidden"
        data-aos="fade-up"
        data-aos-duration="600"
        data-aos-delay="100"
      >
        <div class="h-64 bg-opacity-20 bg-brand-primary flex items-center justify-center">
          <svg
            class="w-32 h-32 text-brand-primary"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1"
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            ></path>
          </svg>
        </div>
        <div class="p-6">
          <h3 class="text-2xl font-semibold mb-2">Dra. Fabiana</h3>
          <p class="text-brand-primary text-opacity-80 mb-4">Dentista-Chefe</p>
          <p class="text-zinc-700">
            Especialista em Odontologia Estética e Implantodontia com mais de 15 anos de
            experiência.
          </p>
        </div>
      </div>

      <!-- Membro 2 -->
      <div
        class="bg-white rounded-xl shadow-md overflow-hidden"
        data-aos="fade-up"
        data-aos-duration="600"
        data-aos-delay="200"
      >
        <div class="h-64 bg-opacity-20 bg-brand-primary flex items-center justify-center">
          <svg
            class="w-32 h-32 text-brand-primary"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1"
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            ></path>
          </svg>
        </div>
        <div class="p-6">
          <h3 class="text-2xl font-semibold mb-2">Dr. Rafael</h3>
          <p class="text-brand-primary text-opacity-80 mb-4">Ortodontista</p>
          <p class="text-zinc-700">
            Especializado em Ortodontia Preventiva e Tratamentos com Alinhadores Invisíveis.
          </p>
        </div>
      </div>

      <!-- Membro 3 -->
      <div
        class="bg-white rounded-xl shadow-md overflow-hidden"
        data-aos="fade-up"
        data-aos-duration="600"
        data-aos-delay="300"
      >
        <div class="h-64 bg-opacity-20 bg-brand-primary flex items-center justify-center">
          <svg
            class="w-32 h-32 text-brand-primary"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1"
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            ></path>
          </svg>
        </div>
        <div class="p-6">
          <h3 class="text-2xl font-semibold mb-2">Dra. Carolina</h3>
          <p class="text-brand-primary text-opacity-80 mb-4">Periodontista</p>
          <p class="text-zinc-700">
            Especialista em Saúde Gengival e Tratamentos Periodontais Minimamente Invasivos.
          </p>
        </div>
      </div>
    </div>

    <div
      class="max-w-4xl mt-16 text-center"
      data-aos="fade-in"
      data-aos-duration="800"
      data-aos-delay="400"
    >
      <h2 class="text-3xl font-semibold mb-6">Nossa Filosofia</h2>
      <p class="text-lg leading-relaxed">
        Acreditamos em odontologia humanizada, onde tecnologia de ponta se une a um atendimento
        personalizado. Cada membro da nossa equipe compartilha o compromisso com excelência clínica
        e o bem-estar integral dos pacientes.
      </p>
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
/* Estilos consistentes com as outras seções */
[data-aos='fade-up'] {
  opacity: 0;
  transform: translateY(20px);
  transition-property: opacity, transform;
}

[data-aos='fade-up'].aos-animate {
  opacity: 1;
  transform: translateY(0);
}

[data-aos='fade-in'] {
  opacity: 0;
  transition-property: opacity;
}

[data-aos='fade-in'].aos-animate {
  opacity: 1;
}
</style>
