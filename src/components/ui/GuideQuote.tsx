interface GuideQuoteProps {
  children: React.ReactNode;
  source?: string;
}

export function GuideQuote({ children, source }: GuideQuoteProps) {
  return (
    <blockquote className="relative bg-nebula-blue/20 border-l-4 border-guide-yellow rounded-r-lg p-6 my-6">
      {/* Ícone do Guia */}
      <div className="flex items-center gap-2 text-guide-yellow/80 text-sm font-medium mb-3">
        <span className="text-lg">📖</span>
        <span className="uppercase tracking-wider">Entrada do Guia</span>
      </div>

      {/* Conteúdo */}
      <div className="text-star-white/90 italic leading-relaxed">
        {children}
      </div>

      {/* Fonte (opcional) */}
      {source && (
        <footer className="mt-3 text-star-white/50 text-sm">— {source}</footer>
      )}
    </blockquote>
  );
}
