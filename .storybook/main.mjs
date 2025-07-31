import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';
import { mergeConfig } from 'vite';
import vuetify from 'vite-plugin-vuetify';

// Para resolver __dirname em módulos ES
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/** @type { import('@storybook/vue3-vite').StorybookConfig } */
const config = {
  stories: [
    // Aponta para os diretórios de Atomic Design dentro de src/components
    '../src/components/atoms/**/*.stories.@(js|jsx|mjs|ts|tsx|vue)',
    '../src/components/molecules/**/*.stories.@(js|jsx|mjs|ts|tsx|vue)',
    '../src/components/organisms/**/*.stories.@(js|jsx|mjs|ts|tsx|vue)',
    '../src/components/templates/**/*.stories.@(js|jsx|mjs|ts|tsx|vue)',
    // Opcional: Se você quiser criar histórias para as suas páginas (geralmente mais para documentação de fluxo)
    // '../src/pages/**/*.stories.@(js|jsx|mjs|ts|tsx|vue)',

    // Mantém o suporte para arquivos MDX de documentação
    '../src/**/*.mdx',
  ],
  addons: [
    '@chromatic-com/storybook',
    '@storybook/addon-docs',
    '@storybook/addon-onboarding',
    '@storybook/addon-a11y',
    '@storybook/addon-vitest',
    // Adicione este addon essencial que inclui muitos recursos úteis como controls, actions, viewport, backgrounds etc.
    '@storybook/addon-essentials',
  ],
  framework: {
    name: '@storybook/vue3-vite',
    options: {},
  },

  // Esta função é CRUCIAL para integrar as configurações do Vite do seu projeto com o Storybook.
  // Ela garante que o Storybook compile seus componentes Vue e Vuetify corretamente.
  async viteFinal(storybookConfig) {
    return mergeConfig(storybookConfig, {
      plugins: [
        // Adicione o plugin do Vuetify para que o Storybook possa processar corretamente
        // os componentes e estilos do Vuetify.
        vuetify({
          autoImport: true, // Importa automaticamente componentes do Vuetify
          // Se você tem um arquivo SCSS/CSS personalizado para variáveis ou overrides do Vuetify,
          // aponte para ele aqui. Ex: `configFile: resolve(__dirname, '../src/styles/vuetify-variables.scss')`
          // Se seus estilos Vuetify são importados via `main.js` ou `plugins/vuetify.js`,
          // muitas vezes `autoImport: true` já é suficiente ou `styles: { inject: true }`.
          // Baseado no seu `tree` anterior, você tem `src/assets/main.css` e `src/plugins/vuetify.js`.
          // Se os estilos globais são gerenciados pelo `vuetify.js` e/ou `main.css`, você pode
          // não precisar de `configFile` aqui ou pode apontar para `main.css` se for o caso.
          // Para a maioria dos casos com `autoImport`, os estilos padrão são injetados.
        }),
      ],
      resolve: {
        alias: {
          // Certifique-se de que os aliases (como '@') funcionem no Storybook como no seu projeto Vite.
          // Isso é comum para importar de `src/` usando `@/componentes/MeuComponente.vue`.
          '@': resolve(__dirname, '../src'),
        },
      },
      css: {
        // Se você usa PostCSS (e Tailwind CSS normalmente usa), certifique-se que o Storybook o reconheça.
        // O Vite geralmente faz isso automaticamente se você tiver um postcss.config.js na raiz.
        // Se tiver problemas de estilo com Tailwind no Storybook, pode ser necessário configurar manualmente aqui.
      },
    });
  },
  docs: {
    autodocs: 'tag',
  },
};

export default config;
