import Image from "next/image";
import Link from "next/link";
import { Champion } from "@/lib/data";
import { Badge } from "./Badge";

type ChampionCardProps = {
  champion: Champion;
};

export function ChampionCard({ champion }: ChampionCardProps) {
  return (
    <Link
      href={`/champions/${champion.slug}`}
      className="group block border border-white/10 bg-rift-800/80 p-4 shadow-glow transition hover:-translate-y-1 hover:border-hex-cyan/70"
    >
      <div className="flex items-center gap-4">
        <div className="relative h-20 w-20 overflow-hidden border border-hex-gold/40 bg-rift-950">
          <Image src={champion.avatar} alt={champion.name} fill sizes="80px" className="object-cover" />
        </div>
        <div className="min-w-0">
          <p className="text-lg font-black text-white group-hover:text-hex-cyan">{champion.name}</p>
          <p className="mt-1 text-sm text-slate-400">{champion.title}</p>
        </div>
      </div>
      <p className="mt-4 line-clamp-2 text-sm leading-6 text-slate-300">{champion.intro}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {champion.roles.map((role) => (
          <Badge key={role} tone="muted">
            {role}
          </Badge>
        ))}
      </div>
    </Link>
  );
}
