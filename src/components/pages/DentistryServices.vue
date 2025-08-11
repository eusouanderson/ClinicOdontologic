<template>
  <section
    class="min-h-screen w-full bg-background-linen px-8 py-16 flex flex-col justify-center items-center text-brand-primary font-elegant overflow-x-hidden"
  >
    <h1
      class="text-5xl font-bold mb-12 text-center max-w-4xl"
      data-aos="fade-down"
      data-aos-duration="800"
    >
      Nossos Serviços
    </h1>

    <div class="max-w-6xl w-full grid md:grid-cols-2 gap-12">
      <article
        class="bg-brand-primary rounded-xl shadow-lg p-8 text-zinc-900 transition-all duration-500 hover:shadow-xl hover:-translate-y-2"
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-delay="100"
      >
        <h2 class="text-3xl font-semibold mb-4">Ortodontia Avançada</h2>
        <p class="text-lg leading-relaxed">
          Tratamentos ortodônticos com aparelhos fixos, alinhadores invisíveis e técnicas
          minimamente invasivas para alinhar seu sorriso com conforto e eficiência.
        </p>
      </article>

      <article
        class="bg-brand-primary rounded-xl shadow-lg p-8 text-zinc-900 transition-all duration-500 hover:shadow-xl hover:-translate-y-2"
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-delay="200"
      >
        <h2 class="text-3xl font-semibold mb-4">Implantes Dentários</h2>
        <p class="text-lg leading-relaxed">
          Colocação de implantes com tecnologia de última geração, garantindo recuperação rápida,
          funcionalidade e estética natural para seus dentes.
        </p>
      </article>

      <article
        class="bg-brand-primary rounded-xl shadow-lg p-8 text-zinc-900 transition-all duration-500 hover:shadow-xl hover:-translate-y-2"
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-delay="300"
      >
        <h2 class="text-3xl font-semibold mb-4">Odontologia Estética</h2>
        <p class="text-lg leading-relaxed">
          Clareamento dental, facetas de porcelana e restaurações estéticas para um sorriso bonito,
          saudável e alinhado às suas expectativas.
        </p>
      </article>

      <article
        class="bg-brand-primary rounded-xl shadow-lg p-8 text-zinc-900 transition-all duration-500 hover:shadow-xl hover:-translate-y-2"
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-delay="400"
      >
        <h2 class="text-3xl font-semibold mb-4">Tratamento Preventivo</h2>
        <p class="text-lg leading-relaxed">
          Consultas regulares, limpeza profissional e orientações personalizadas para manter sua
          saúde bucal em dia e prevenir doenças.
        </p>
      </article>
    </div>

    <section
      class="max-w-4xl mt-16 text-lg leading-relaxed text-brand-primary"
      data-aos="fade-in"
      data-aos-duration="1000"
      data-aos-delay="500"
    >
      <h2 class="text-4xl font-semibold mb-6">Por que escolher a Dra. Fabiana?</h2>
      <ul class="list-disc list-inside space-y-3">
        <li class="transition-all duration-300 hover:pl-2">
          Formação acadêmica sólida com especializações reconhecidas nacional e internacionalmente.
        </li>
        <li class="transition-all duration-300 hover:pl-2">
          Atualização constante nas técnicas mais modernas e seguras da odontologia.
        </li>
        <li class="transition-all duration-300 hover:pl-2">
          Atendimento personalizado, com foco no conforto e bem-estar do paciente.
        </li>
        <li class="transition-all duration-300 hover:pl-2">
          Equipamentos modernos e rigorosos protocolos de higiene e biossegurança.
        </li>
        <li class="transition-all duration-300 hover:pl-2">
          Resultados comprovados e milhares de pacientes satisfeitos.
        </li>
      </ul>
    </section>
  </section>
</template>

<script setup>
import { onMounted } from 'vue';
import AOS from 'aos';
import 'aos/dist/aos.css';

onMounted(() => {
  AOS.init({
    once: false, // As animações ocorrem apenas uma vez
    easing: 'ease-in-out-quad', // Curva de animação suave
    offset: 50, // Quando a animação deve ser acionada
  });
});
</script>

<style scoped>
html,
body,
#app {
  height: 100%;
  margin: 0;
}

.font-elegant {
  font-family: 'EB Garamond', serif;
}

.bg-brand-primary {
  background-color: #f8f3e9;
  transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
}

.bg-brand-primary:hover {
  background-color: #f0e6d2;
}

[data-aos] {
  opacity: 0;
  transition-property: opacity, transform;
}

[data-aos].aos-animate {
  opacity: 1;
}

.bg-background-linen {
  position: relative;
  overflow: hidden;
}

.bg-background-linen::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0) 100%);
  z-index: 0;
  pointer-events: none;
}
</style>
