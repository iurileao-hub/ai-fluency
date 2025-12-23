interface ExerciseBlockProps {
  title: string;
  duration: string;
  children: React.ReactNode;
}

export function ExerciseBlock({
  title,
  duration,
  children,
}: ExerciseBlockProps) {
  return (
    <div className="bg-nebula-blue/30 border border-nebula-blue/50 rounded-xl p-6 my-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-4 pb-3 border-b border-nebula-blue/50">
        <div className="flex items-center gap-2">
          <span className="text-2xl">🎯</span>
          <h4 className="text-guide-yellow font-bold">{title}</h4>
        </div>
        <div className="flex items-center gap-1 text-star-white/60 text-sm">
          <span>⏱️</span>
          <span>{duration}</span>
        </div>
      </div>

      {/* Conteúdo */}
      <div className="text-star-white/80 text-sm leading-relaxed">
        {children}
      </div>
    </div>
  );
}
