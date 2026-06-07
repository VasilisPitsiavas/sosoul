import path from "node:path";
import { fileURLToPath } from "node:url";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

const root = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig(({ command }) => {
  const base = command === "build" ? "/sosoul/" : "/";

  return {
    base,
    plugins: [
      react(),
      tailwindcss(),
      {
        name: "favicon-base",
        transformIndexHtml(html: string) {
          return html.replaceAll(
            'href="/logo-so-soul-place.png"',
            `href="${base}logo-so-soul-place.png"`,
          );
        },
      },
    ],
    resolve: {
      alias: { "@": path.join(root, "src") },
    },
  };
});
