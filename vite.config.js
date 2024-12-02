import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { viteStaticCopy } from "vite-plugin-static-copy";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: "public/_redirects", // Ruta del archivo _redirects en la carpeta public
          dest: ".", // Copia a la raíz de la carpeta dist
        },
      ],
    }),
  ],
});
