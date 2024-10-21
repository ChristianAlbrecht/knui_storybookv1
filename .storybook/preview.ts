import type { Preview } from "@storybook/vue3";
import { setup } from "@storybook/vue3";

// Import Roboto font
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

// Import design tokens
import "../src/styles/design-tokens.css";

setup((app) => {});

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: "light",
      values: [
        { name: "light", value: "#FAFAFA" },
        { name: "dark", value: "#1A1A1A" },
      ],
    },
  },
  decorators: [
    (story, context) => {
      const isDark = context.globals.backgrounds?.value === "#1A1A1A";
      document.documentElement.classList.toggle("dark", isDark);
      document.documentElement.style.colorScheme = isDark ? "dark" : "light";
      return story();
    },
  ],
};

export default preview;
