export default function Loading() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center">
        {/* Animação de carregamento */}
        <div className="relative inline-block">
          {/* Círculo externo */}
          <div className="w-16 h-16 border-4 border-nebula-blue/30 rounded-full" />
          {/* Círculo animado */}
          <div className="absolute top-0 left-0 w-16 h-16 border-4 border-transparent border-t-guide-yellow rounded-full animate-spin" />
        </div>

        {/* Texto */}
        <p className="mt-6 text-star-white/60 text-sm font-medium">
          Carregando...
        </p>
      </div>
    </div>
  );
}
