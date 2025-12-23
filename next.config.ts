import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          // Previne clickjacking (iframe embedding)
          { key: "X-Frame-Options", value: "DENY" },
          // Previne MIME type sniffing
          { key: "X-Content-Type-Options", value: "nosniff" },
          // Controla informações enviadas em Referer
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          // Habilita DNS prefetching para performance
          { key: "X-DNS-Prefetch-Control", value: "on" },
          // Força HTTPS (importante para produção)
          {
            key: "Strict-Transport-Security",
            value: "max-age=31536000; includeSubDomains",
          },
          // Permissões de features do browser
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
