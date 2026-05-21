import { ChampionCard } from "@/components/ChampionCard";
import { champions } from "@/lib/data";

export const metadata = {
  title: "英雄列表 | 乱斗套路库"
};

export default function ChampionsPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8">
        <p className="text-sm font-black text-hex-cyan">CHAMPION INDEX</p>
        <h1 className="mt-2 text-4xl font-black text-white">英雄列表</h1>
        <p className="mt-3 max-w-2xl text-slate-300">按英雄查看可用套路、核心装备与适合阵容，第一版使用本地静态数据。</p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {champions.map((champion) => (
          <ChampionCard key={champion.slug} champion={champion} />
        ))}
      </div>
    </main>
  );
}
