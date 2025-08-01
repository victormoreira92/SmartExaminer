import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from 'vitest/config';
import tsconfigPaths from "vite-tsconfig-paths";
import flowbiteReact from "flowbite-react/plugin/vite";

export default defineConfig({
  plugins: [tailwindcss(), !process.env.VITEST && reactRouter(), tsconfigPaths(), flowbiteReact()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/setupTests.ts'],
    css: true,
  },
});