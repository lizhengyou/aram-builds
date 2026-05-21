"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

type SearchBoxProps = {
  defaultValue?: string;
  compact?: boolean;
};

export function SearchBox({ defaultValue = "", compact = false }: SearchBoxProps) {
  const router = useRouter();
  const [query, setQuery] = useState(defaultValue);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const keyword = query.trim();

    if (keyword) {
      router.push(`/search?q=${encodeURIComponent(keyword)}`);
    }
  }

  return (
    <form onSubmit={onSubmit} className={`flex w-full gap-2 ${compact ? "max-w-xl" : "max-w-2xl"}`}>
      <input
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="搜索英雄名或套路名"
        className="min-w-0 flex-1 border border-white/10 bg-rift-950/80 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-hex-cyan/70 focus:shadow-glow"
      />
      <button
        type="submit"
        className="border border-hex-cyan/60 bg-hex-cyan px-5 py-3 text-sm font-black text-rift-950 transition hover:bg-white"
      >
        搜索
      </button>
    </form>
  );
}
