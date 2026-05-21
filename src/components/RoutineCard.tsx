import Link from "next/link";
import { getRoutineChampion, Routine } from "@/lib/data";
import { Badge } from "./Badge";
import { StatBar } from "./StatBar";

type RoutineCardProps = {
  routine: Routine;
};

export function RoutineCard({ routine }: RoutineCardProps) {
  const champion = getRoutineChampion(routine);

  return (
    <Link
      href={`/routines/${routine.slug}`}
      className="group block border border-white/10 bg-rift-800/80 p-5 transition hover:-translate-y-1 hover:border-hex-gold/70 hover:shadow-gold"
    >
      <div className="flex flex-wrap items-center gap-2">
        <Badge tone="gold">{champion?.name ?? "未知英雄"}</Badge>
        {routine.isHot ? <Badge tone="pink">热门</Badge> : null}
      </div>
      <h3 className="mt-4 text-xl font-black text-white group-hover:text-hex-gold">{routine.name}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-300">{routine.summary}</p>
      <div className="mt-5 space-y-3">
        <StatBar label="强度" value={routine.strength} max={10} tone="cyan" />
        <StatBar label="快乐" value={routine.fun} max={10} tone="pink" />
        <StatBar label="难度" value={routine.difficulty} max={10} tone="gold" />
      </div>
    </Link>
  );
}
