import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "AI Fluency — Curso de Fluência em IA",
    template: "%s | AI Fluency",
  },
  description:
    "Curso prático de fluência em Inteligência Artificial usando o Framework 4D: Delegation, Description, Discernment e Diligence.",
  keywords: [
    "inteligência artificial",
    "IA",
    "curso",
    "fluência",
    "4D Framework",
    "prompts",
    "LLM",
  ],
  authors: [{ name: "Dr. Iuri Almeida" }],
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    title: "AI Fluency — Curso de Fluência em IA",
    description:
      "Curso prático de fluência em Inteligência Artificial usando o Framework 4D.",
    siteName: "AI Fluency",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
