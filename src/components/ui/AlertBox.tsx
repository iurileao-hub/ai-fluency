interface AlertBoxProps {
  children: React.ReactNode;
  variant?: "panic" | "success" | "info";
  title?: string;
}

const variants = {
  panic: {
    bg: "bg-panic-red/10",
    border: "border-panic-red/30",
    icon: "⚠️",
    defaultTitle: "DON'T PANIC",
    titleColor: "text-panic-red",
  },
  success: {
    bg: "bg-towel-green/10",
    border: "border-towel-green/30",
    icon: "✓",
    defaultTitle: "LEMBRE-SE",
    titleColor: "text-towel-green",
  },
  info: {
    bg: "bg-galaxy-purple/10",
    border: "border-galaxy-purple/30",
    icon: "💡",
    defaultTitle: "DICA",
    titleColor: "text-galaxy-purple",
  },
};

export function AlertBox({
  children,
  variant = "panic",
  title,
}: AlertBoxProps) {
  const config = variants[variant];

  return (
    <div
      className={`${config.bg} ${config.border} border rounded-lg p-5 my-6`}
    >
      {/* Header */}
      <div className={`flex items-center gap-2 ${config.titleColor} font-bold text-sm mb-2`}>
        <span>{config.icon}</span>
        <span className="uppercase tracking-wider">
          {title || config.defaultTitle}
        </span>
      </div>

      {/* Conteúdo */}
      <div className="text-star-white/80 text-sm leading-relaxed">
        {children}
      </div>
    </div>
  );
}
