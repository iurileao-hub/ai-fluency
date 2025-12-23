import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center py-12">
      <div className="container-guide text-center">
        {/* Ilustração */}
        <div className="mb-8">
          <span className="text-8xl">🧑‍🚀</span>
        </div>

        {/* Mensagem */}
        <h1 className="text-6xl font-bold text-guide-yellow mb-4">404</h1>
        <h2 className="text-2xl font-bold text-star-white mb-4">
          Mostly Harmless
        </h2>
        <p className="text-star-white/70 text-lg max-w-md mx-auto mb-8 leading-relaxed">
          Parece que você se perdeu no espaço. Esta página não existe — ou talvez
          tenha sido destruída para dar lugar a uma via expressa hiperespacial.
        </p>

        {/* Citação */}
        <blockquote className="bg-nebula-blue/20 border-l-4 border-guide-yellow rounded-r-lg p-6 max-w-lg mx-auto mb-8 text-left">
          <p className="text-star-white/80 italic mb-2">
            &quot;Space is big. Really big. You just won&apos;t believe how
            vastly, hugely, mind-bogglingly big it is.&quot;
          </p>
          <footer className="text-star-white/50 text-sm">
            — Douglas Adams
          </footer>
        </blockquote>

        {/* Ações */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 bg-guide-yellow !text-[#060A13] font-bold px-8 py-4 rounded-lg hover:bg-guide-yellow/90 transition-colors shadow-lg"
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
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            Voltar ao Início
          </Link>
          <Link
            href="/modulos"
            className="inline-flex items-center justify-center gap-2 border border-star-white/30 text-star-white font-medium px-8 py-4 rounded-lg hover:bg-star-white/5 transition-colors"
          >
            Ver Módulos
          </Link>
        </div>

        {/* Easter egg */}
        <p className="text-star-white/30 text-xs mt-12">
          A resposta para tudo é 42. Mas qual era a pergunta mesmo?
        </p>
      </div>
    </div>
  );
}
