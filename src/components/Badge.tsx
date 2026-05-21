type BadgeProps = {
  children: React.ReactNode;
  tone?: "cyan" | "gold" | "pink" | "lime" | "muted";
};

const toneClass = {
  cyan: "border-hex-cyan/40 bg-hex-cyan/10 text-hex-cyan",
  gold: "border-hex-gold/40 bg-hex-gold/10 text-hex-gold",
  pink: "border-hex-pink/40 bg-hex-pink/10 text-hex-pink",
  lime: "border-hex-lime/40 bg-hex-lime/10 text-hex-lime",
  muted: "border-white/10 bg-white/5 text-slate-300"
};

export function Badge({ children, tone = "muted" }: BadgeProps) {
  return (
    <span className={`inline-flex items-center border px-2.5 py-1 text-xs font-semibold ${toneClass[tone]}`}>
      {children}
    </span>
  );
}
