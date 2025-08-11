<template>
  <section
    class="min-h-screen w-full bg-background-linen px-8 py-16 flex flex-col justify-center items-center text-brand-primary font-elegant overflow-x-hidden"
  >
    <h1
      class="text-5xl font-bold mb-12 text-center max-w-4xl"
      data-aos="fade-down"
      data-aos-duration="800"
    >
      Sobre a Dra. Fabiana
    </h1>

    <div class="max-w-4xl text-lg leading-relaxed space-y-6">
      <p
        data-aos="fade-up"
        data-aos-duration="600"
        data-aos-delay="100"
        data-aos-anchor-placement="center-bottom"
      >
        A Dra. Fabiana é uma dentista dedicada e altamente qualificada, com ampla experiência em
        odontologia clínica e estética. Formada pela
        <strong class="text-brand-accent">Universidade [Nome da Universidade]</strong>, ela
        complementou sua formação com diversas especializações, incluindo implantes dentários,
        ortodontia avançada e reabilitação oral.
      </p>

      <p
        data-aos="fade-up"
        data-aos-duration="600"
        data-aos-delay="200"
        data-aos-anchor-placement="center-bottom"
      >
        Ao longo de sua carreira, Dra. Fabiana tem se destacado pela aplicação das técnicas mais
        modernas e seguras, aliando tecnologia de ponta e abordagem humanizada para garantir o
        conforto e a satisfação dos pacientes. Seu compromisso com a excelência faz com que cada
        tratamento seja planejado de forma personalizada, respeitando as necessidades individuais e
        buscando resultados funcionais e estéticos de alta qualidade.
      </p>

      <p
        data-aos="fade-up"
        data-aos-duration="600"
        data-aos-delay="300"
        data-aos-anchor-placement="center-bottom"
      >
        Além de sua prática clínica, Dra. Fabiana participa regularmente de cursos, congressos e
        workshops nacionais e internacionais, mantendo-se atualizada com as inovações do setor
        odontológico. Sua ética profissional e dedicação transformam cada consulta em uma
        experiência confiável e acolhedora.
      </p>

      <p
        data-aos="fade-up"
        data-aos-duration="600"
        data-aos-delay="400"
        data-aos-anchor-placement="center-bottom"
        class="font-semibold"
      >
        Para agendar uma consulta ou saber mais sobre os serviços oferecidos, entre em contato
        conosco. Dra. Fabiana está pronta para cuidar do seu sorriso com a máxima competência e
        carinho.
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
html,
body,
#app {
  height: 100%;
  margin: 0;
}

.text-brand-accent {
  color: #c17d5e;
}

.bg-background-linen {
  background-image: radial-gradient(circle at 10% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 20%),
    radial-gradient(circle at 90% 80%, rgba(255, 255, 255, 0.1) 0%, transparent 20%);
  background-attachment: fixed;
}

[data-aos='fade-up'] {
  opacity: 0;
  transform: translateY(20px);
  transition-property: opacity, transform;
}

[data-aos='fade-up'].aos-animate {
  opacity: 1;
  transform: translateY(0);
}

p {
  transition: all 0.5s ease;
  padding: 0.5rem 0;
}
</style>
