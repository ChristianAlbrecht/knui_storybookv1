import type { StorybookConfig } from "@storybook/vue3-vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/vue3-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  viteFinal: async (config) => {
    // Ensure PostCSS is used in Storybook
    if (config.css) {
      config.css.postcss = {
        plugins: [require("postcss-nesting")],
      };
    }
    return config;
  },
  staticDirs: ["../src"],
};

export default config;
