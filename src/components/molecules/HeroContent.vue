<template>
  <div class="text-center">
    <h1
      class="text-5xl md:text-6xl font-bold mb-4 text-brand-primary font-display uppercase tracking-wider text-shadow"
    >
      <slot name="title"></slot>
    </h1>
    <p class="text-xl md:text-2xl font-light text-background-linen/90 font-body tracking-wide">
      <slot name="subtitle"></slot>
    </p>
  </div>
</template>

<style scoped>
.text-shadow {
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.5);
}

.font-body {
  font-family: var(--font-body, 'Roboto', sans-serif);
}

.font-display {
  font-family: var(--font-display, 'Roboto', sans-serif);
}
</style>
