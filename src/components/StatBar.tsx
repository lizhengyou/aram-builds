type StatBarProps = {
  label: string;
  value: number;
  max?: number;
  tone?: "cyan" | "gold" | "pink";
};

const toneClass = {
  cyan: "bg-hex-cyan",
  gold: "bg-hex-gold",
  pink: "bg-hex-pink"
};

export function StatBar({ label, value, max = 10, tone = "cyan" }: StatBarProps) {
  const width = `${Math.min(100, Math.max(0, (value / max) * 100))}%`;

  return (
    <div>
      <div className="mb-1 flex items-center justify-between text-xs font-bold text-slate-400">
        <span>{label}</span>
        <span className="text-white">{value}</span>
      </div>
      <div className="h-2 bg-rift-950">
        <div className={`h-full ${toneClass[tone]}`} style={{ width }} />
      </div>
    </div>
  );
}
