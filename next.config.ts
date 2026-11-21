import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  experimental: {
    // Lingui's macros (`useLingui` from `@lingui/react/macro`, `msg`), as Babel does in the game.
    swcPlugins: [["@lingui/swc-plugin", {}]],
  },
  images: {
    // The images in public/images are already sized and compressed (webp).
    unoptimized: true,
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
