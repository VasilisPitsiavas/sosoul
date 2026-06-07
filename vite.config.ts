import path from "node:path";
import { fileURLToPath } from "node:url";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

const root = path.dirname(fileURLToPath(import.meta.url));

/** Files in /public referenced from index.html — need base prefix on GitHub Pages. */
const PUBLIC_HEAD_ASSETS = [
  "favicon-16x16.png",
  "favicon-32x32.png",
  "apple-touch-icon.png",
  "logo-so-soul-place.png",
];

export default defineConfig(({ command }) => {
  const base = command === "build" ? "/sosoul/" : "/";

  return {
    base,
    plugins: [
      react(),
      tailwindcss(),
      {
        name: "public-head-assets-base",
        transformIndexHtml(html: string) {
          let out = html;
          for (const asset of PUBLIC_HEAD_ASSETS) {
            out = out.replaceAll(`href="/${asset}"`, `href="${base}${asset}"`);
          }
          return out;
        },
      },
    ],
    resolve: {
      alias: { "@": path.join(root, "src") },
    },
  };
});
