// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
    vite: {
        plugins: [tailwindcss()],
    },
    image: {
        // domains: ["https://urbancms.up.railway.app"],
    },
    // Configuración para permitir rutas dinámicas sin generación estática
    output: "static",
    trailingSlash: "ignore",
    build: {
        format: "file"
    }
});

