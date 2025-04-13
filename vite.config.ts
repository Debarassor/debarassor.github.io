import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  base: "", // <-- important
  plugins: [react(), tailwindcss(), reactRouter(), tsconfigPaths()],
});

