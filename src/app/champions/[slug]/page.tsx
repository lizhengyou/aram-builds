import Image from "next/image";
import { notFound } from "next/navigation";
import { Badge } from "@/components/Badge";
import { RoutineCard } from "@/components/RoutineCard";
import { champions, getChampion, getChampionRoutines } from "@/lib/data";

type ChampionDetailPageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return champions.map((champion) => ({ slug: champion.slug }));
}

export function generateMetadata({ params }: ChampionDetailPageProps) {
  const champion = getChampion(params.slug);

  return {
    title: champion ? `${champion.name}套路 | 乱斗套路库` : "英雄详情 | 乱斗套路库"
  };
}

export default function ChampionDetailPage({ params }: ChampionDetailPageProps) {
  const champion = getChampion(params.slug);

  if (!champion) {
    notFound();
  }

  const heroRoutines = getChampionRoutines(champion.slug);

  return (
    <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <section className="grid gap-8 border border-white/10 bg-rift-800/80 p-6 shadow-glow md:grid-cols-[180px_1fr]">
        <div className="relative h-44 w-44 overflow-hidden border border-hex-gold/50 bg-rift-950">
          <Image src={champion.avatar} alt={champion.name} fill sizes="176px" className="object-cover" priority />
        </div>
        <div>
          <p className="text-sm font-black text-hex-cyan">{champion.title}</p>
          <h1 className="mt-2 text-4xl font-black text-white">{champion.name}</h1>
          <p className="mt-4 max-w-3xl text-base leading-7 text-slate-300">{champion.intro}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {champion.roles.map((role) => (
              <Badge key={role} tone="gold">
                {role}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-10">
        <div className="mb-6">
          <p className="text-sm font-black text-hex-pink">ROUTINES</p>
          <h2 className="mt-2 text-3xl font-black text-white">可选套路</h2>
        </div>
        <div className="grid gap-4 lg:grid-cols-3">
          {heroRoutines.map((routine) => (
            <RoutineCard key={routine.slug} routine={routine} />
          ))}
        </div>
      </section>
    </main>
  );
}
