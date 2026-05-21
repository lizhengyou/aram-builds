import Link from "next/link";
import { SearchBox } from "./SearchBox";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-rift-950/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center border border-hex-cyan bg-hex-cyan text-xl font-black text-rift-950">
            乱
          </span>
          <span>
            <span className="block text-lg font-black text-white">乱斗套路库</span>
            <span className="block text-xs text-slate-400">ARAM HEXTECH BUILDS</span>
          </span>
        </Link>
        <nav className="flex items-center gap-5 text-sm font-bold text-slate-300">
          <Link href="/" className="hover:text-hex-cyan">
            首页
          </Link>
          <Link href="/champions" className="hover:text-hex-cyan">
            英雄
          </Link>
        </nav>
        <div className="w-full lg:max-w-md">
          <SearchBox compact />
        </div>
      </div>
    </header>
  );
}
