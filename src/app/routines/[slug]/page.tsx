import Link from "next/link";
import { notFound } from "next/navigation";
import { Badge } from "@/components/Badge";
import { StatBar } from "@/components/StatBar";
import { getRoutine, getRoutineChampion, routines } from "@/lib/data";

type RoutineDetailPageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return routines.map((routine) => ({ slug: routine.slug }));
}

export function generateMetadata({ params }: RoutineDetailPageProps) {
  const routine = getRoutine(params.slug);

  return {
    title: routine ? `${routine.name} | 乱斗套路库` : "套路详情 | 乱斗套路库"
  };
}

function InfoBlock({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="border border-white/10 bg-rift-800/75 p-5">
      <h2 className="text-lg font-black text-white">{title}</h2>
      <div className="mt-3 text-sm leading-7 text-slate-300">{children}</div>
    </section>
  );
}

export default function RoutineDetailPage({ params }: RoutineDetailPageProps) {
  const routine = getRoutine(params.slug);

  if (!routine) {
    notFound();
  }

  const champion = getRoutineChampion(routine);

  return (
    <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="grid gap-6 lg:grid-cols-[1fr_360px]">
        <section className="border border-white/10 bg-rift-800/80 p-6 shadow-glow">
          <div className="flex flex-wrap gap-2">
            {champion ? (
              <Link href={`/champions/${champion.slug}`}>
                <Badge tone="gold">{champion.name}</Badge>
              </Link>
            ) : null}
            <Badge tone="pink">套路详情</Badge>
          </div>
          <h1 className="mt-5 text-4xl font-black text-white">{routine.name}</h1>
          <p className="mt-4 max-w-3xl text-base leading-7 text-slate-300">{routine.summary}</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className="border border-hex-cyan/30 bg-hex-cyan/10 p-4">
              <p className="text-xs font-black text-hex-cyan">强度评分</p>
              <p className="mt-2 text-3xl font-black text-white">{routine.strength}</p>
            </div>
            <div className="border border-hex-pink/30 bg-hex-pink/10 p-4">
              <p className="text-xs font-black text-hex-pink">快乐指数</p>
              <p className="mt-2 text-3xl font-black text-white">{routine.fun}</p>
            </div>
            <div className="border border-hex-gold/30 bg-hex-gold/10 p-4">
              <p className="text-xs font-black text-hex-gold">操作难度</p>
              <p className="mt-2 text-3xl font-black text-white">{routine.difficulty}</p>
            </div>
          </div>
        </section>

        <aside className="border border-white/10 bg-rift-800/80 p-5">
          <h2 className="text-lg font-black text-white">评分雷达</h2>
          <div className="mt-5 space-y-4">
            <StatBar label="强度" value={routine.strength} tone="cyan" />
            <StatBar label="快乐" value={routine.fun} tone="pink" />
            <StatBar label="难度" value={routine.difficulty} tone="gold" />
          </div>
        </aside>
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <InfoBlock title="核心海克斯">
          <div className="flex flex-wrap gap-2">
            {routine.hexes.map((hex) => (
              <Badge key={hex} tone="cyan">
                {hex}
              </Badge>
            ))}
          </div>
        </InfoBlock>
        <InfoBlock title="核心装备">
          <div className="flex flex-wrap gap-2">
            {routine.coreItems.map((item) => (
              <Badge key={item} tone="gold">
                {item}
              </Badge>
            ))}
          </div>
        </InfoBlock>
        <InfoBlock title="备选装备">
          <div className="flex flex-wrap gap-2">
            {routine.optionalItems.map((item) => (
              <Badge key={item}>{item}</Badge>
            ))}
          </div>
        </InfoBlock>
        <InfoBlock title="适合阵容">{routine.teamFit}</InfoBlock>
        <InfoBlock title="打法思路">{routine.playstyle}</InfoBlock>
        <InfoBlock title="克制关系">{routine.counters}</InfoBlock>
        <InfoBlock title="什么时候不建议玩">{routine.avoidWhen}</InfoBlock>
      </div>
    </main>
  );
}
