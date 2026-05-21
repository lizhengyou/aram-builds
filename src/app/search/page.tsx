import Link from "next/link";
import { ChampionCard } from "@/components/ChampionCard";
import { RoutineCard } from "@/components/RoutineCard";
import { SearchBox } from "@/components/SearchBox";
import { searchAll } from "@/lib/data";

type SearchPageProps = {
  searchParams: {
    q?: string;
  };
};

export const metadata = {
  title: "搜索 | 乱斗套路库"
};

export default function SearchPage({ searchParams }: SearchPageProps) {
  const query = searchParams.q ?? "";
  const result = searchAll(query);
  const total = result.champions.length + result.routines.length;

  return (
    <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8">
        <p className="text-sm font-black text-hex-cyan">SEARCH</p>
        <h1 className="mt-2 text-4xl font-black text-white">搜索套路库</h1>
        <p className="mt-3 text-slate-300">输入英雄名、套路名或定位标签，快速找到想玩的方案。</p>
        <div className="mt-6">
          <SearchBox defaultValue={query} />
        </div>
      </div>

      {query.trim() ? (
        <p className="mb-6 text-sm text-slate-400">
          “{query}” 找到 <span className="font-black text-white">{total}</span> 个结果
        </p>
      ) : null}

      {query.trim() && total === 0 ? (
        <div className="border border-white/10 bg-rift-800/80 p-8 text-slate-300">
          没有找到匹配内容，试试搜索 <Link href="/search?q=亚索" className="text-hex-cyan">亚索</Link>、<Link href="/search?q=炮台" className="text-hex-cyan">炮台</Link> 或 <Link href="/search?q=坦克" className="text-hex-cyan">坦克</Link>。
        </div>
      ) : null}

      {result.champions.length > 0 ? (
        <section>
          <h2 className="mb-4 text-2xl font-black text-white">英雄</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {result.champions.map((champion) => (
              <ChampionCard key={champion.slug} champion={champion} />
            ))}
          </div>
        </section>
      ) : null}

      {result.routines.length > 0 ? (
        <section className="mt-10">
          <h2 className="mb-4 text-2xl font-black text-white">套路</h2>
          <div className="grid gap-4 lg:grid-cols-3">
            {result.routines.map((routine) => (
              <RoutineCard key={routine.slug} routine={routine} />
            ))}
          </div>
        </section>
      ) : null}
    </main>
  );
}
