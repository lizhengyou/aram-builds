import Link from "next/link";
import { ChampionCard } from "@/components/ChampionCard";
import { RoutineCard } from "@/components/RoutineCard";
import { SearchBox } from "@/components/SearchBox";
import { champions, routines } from "@/lib/data";

export default function HomePage() {
  const hotChampions = champions.filter((champion) => champion.isHot);
  const hotRoutines = routines.filter((routine) => routine.isHot);

  return (
    <main>
      <section className="border-b border-white/10">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-20">
          <div>
            <p className="text-sm font-black tracking-[0.28em] text-hex-cyan">ARAM HEXTECH META</p>
            <h1 className="mt-5 max-w-3xl text-5xl font-black leading-tight text-white sm:text-6xl">
              乱斗套路库
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
              收录英雄联盟海克斯大乱斗里的快乐套路、强势出装、核心海克斯和阵容适配。少一点迷茫，多一点开局就想笑的胜率。
            </p>
            <div className="mt-8">
              <SearchBox />
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/champions" className="border border-hex-gold bg-hex-gold px-5 py-3 text-sm font-black text-rift-950 hover:bg-white">
                查看英雄列表
              </Link>
              <a href="#hot-routines" className="border border-white/15 bg-white/5 px-5 py-3 text-sm font-black text-white hover:border-hex-cyan hover:text-hex-cyan">
                热门套路
              </a>
            </div>
          </div>
          <div className="grid content-start gap-4">
            {[
              ["已收录英雄", champions.length],
              ["套路方案", routines.length],
              ["热门玩法", hotRoutines.length]
            ].map(([label, value]) => (
              <div key={label} className="border border-white/10 bg-rift-800/80 p-6 shadow-glow">
                <p className="text-sm font-bold text-slate-400">{label}</p>
                <p className="mt-2 text-4xl font-black text-white">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-black text-hex-pink">HOT CHAMPIONS</p>
            <h2 className="mt-2 text-3xl font-black text-white">热门英雄</h2>
          </div>
          <Link href="/champions" className="text-sm font-bold text-hex-cyan hover:text-white">
            全部英雄
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {hotChampions.map((champion) => (
            <ChampionCard key={champion.slug} champion={champion} />
          ))}
        </div>
      </section>

      <section id="hot-routines" className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="mb-6">
          <p className="text-sm font-black text-hex-gold">HOT ROUTINES</p>
          <h2 className="mt-2 text-3xl font-black text-white">热门套路</h2>
        </div>
        <div className="grid gap-4 lg:grid-cols-3">
          {hotRoutines.map((routine) => (
            <RoutineCard key={routine.slug} routine={routine} />
          ))}
        </div>
      </section>
    </main>
  );
}
