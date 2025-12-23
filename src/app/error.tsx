"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Opcional: Log do erro para serviço de monitoramento
    console.error("Erro na aplicação:", error);
  }, [error]);

  return (
    <div className="min-h-[60vh] flex items-center justify-center py-16">
      <div className="container-guide max-w-2xl text-center">
        {/* Ícone de erro */}
        <div className="text-8xl mb-6">🌌</div>

        {/* Título */}
        <h1 className="text-3xl md:text-4xl font-bold text-star-white mb-4">
          Algo deu errado na galáxia
        </h1>

        {/* Descrição */}
        <p className="text-star-white/70 text-lg mb-8 leading-relaxed">
          Parece que encontramos um buraco negro inesperado. Não se preocupe,
          isso acontece até com os melhores mochileiros intergalácticos.
        </p>

        {/* Botões de ação */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => reset()}
            className="inline-flex items-center justify-center gap-2 bg-guide-yellow !text-[#060A13] font-bold px-6 py-3 rounded-lg hover:bg-guide-yellow/90 transition-colors"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
            </svg>
            Tentar novamente
          </button>
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 border border-star-white/30 text-star-white font-medium px-6 py-3 rounded-lg hover:bg-star-white/5 transition-colors"
          >
            Voltar ao início
          </Link>
        </div>

        {/* Código de erro (para debug) */}
        {error.digest && (
          <p className="mt-8 text-star-white/40 text-xs font-mono">
            Código: {error.digest}
          </p>
        )}
      </div>
    </div>
  );
}
