export type Routine = {
  slug: string;
  name: string;
  heroSlug: string;
  summary: string;
  strength: number;
  fun: number;
  difficulty: number;
  hexes: string[];
  coreItems: string[];
  optionalItems: string[];
  playstyle: string;
  teamFit: string;
  counters: string;
  avoidWhen: string;
  isHot?: boolean;
};

export type Champion = {
  slug: string;
  name: string;
  title: string;
  avatar: string;
  roles: string[];
  intro: string;
  isHot?: boolean;
};

export const champions: Champion[] = [
  {
    slug: "yasuo",
    name: "亚索",
    title: "疾风剑豪",
    avatar: "https://ddragon.leagueoflegends.com/cdn/14.13.1/img/champion/Yasuo.png",
    roles: ["战士", "暴击", "收割"],
    intro: "高快乐上限的近战爆发位，吃进场时机和队友击飞配合。",
    isHot: true
  },
  {
    slug: "lux",
    name: "拉克丝",
    title: "光辉女郎",
    avatar: "https://ddragon.leagueoflegends.com/cdn/14.13.1/img/champion/Lux.png",
    roles: ["法师", "消耗", "控制"],
    intro: "远程消耗和保护能力兼备，适合稳健拉扯阵容。",
    isHot: true
  },
  {
    slug: "sett",
    name: "瑟提",
    title: "腕豪",
    avatar: "https://ddragon.leagueoflegends.com/cdn/14.13.1/img/champion/Sett.png",
    roles: ["坦克", "开团", "反打"],
    intro: "正面碰撞极强，适合吸收火力后用豪意值打出爆炸反手。",
    isHot: true
  },
  {
    slug: "jinx",
    name: "金克丝",
    title: "暴走萝莉",
    avatar: "https://ddragon.leagueoflegends.com/cdn/14.13.1/img/champion/Jinx.png",
    roles: ["射手", "收割", "后期"],
    intro: "团战启动后滚雪球能力强，需要队友提供空间。",
    isHot: true
  },
  {
    slug: "malphite",
    name: "墨菲特",
    title: "熔岩巨兽",
    avatar: "https://ddragon.leagueoflegends.com/cdn/14.13.1/img/champion/Malphite.png",
    roles: ["坦克", "开团", "爆发"],
    intro: "大招决定团战走势，可肉可法，简单直接但节奏关键。"
  },
  {
    slug: "veigar",
    name: "维迦",
    title: "邪恶小法师",
    avatar: "https://ddragon.leagueoflegends.com/cdn/14.13.1/img/champion/Veigar.png",
    roles: ["法师", "控制", "后期"],
    intro: "叠法强、圈地形、秒脆皮，越拖越可怕。"
  }
];

export const routines: Routine[] = [
  {
    slug: "yasuo-crit-windwall",
    heroSlug: "yasuo",
    name: "双风暴暴击流",
    summary: "围绕攻速、暴击和机动海克斯打持续进场，快乐和上限都很高。",
    strength: 8.5,
    fun: 10,
    difficulty: 8,
    hexes: ["无尽之力", "风暴聚集", "战斗法师", "暗影冲刺"],
    coreItems: ["海妖杀手", "无尽之刃", "不朽盾弓"],
    optionalItems: ["死亡之舞", "守护天使", "多米尼克领主的致意"],
    playstyle: "前期用小兵和雪球寻找踏前斩角度，不要第一个进场。等敌方关键控制交出后，用击飞接大招切后排，风墙优先挡远程爆发。",
    teamFit: "适合有击飞、硬控或前排开路的阵容，例如墨菲特、奥恩、娜美。",
    counters: "怕点控、沉默和高爆发集火，遇到潘森、丽桑卓、玛尔扎哈要更保守。",
    avoidWhen: "己方没有前排、没有击飞，且对面控制链很密时不建议硬玩。",
    isHot: true
  },
  {
    slug: "yasuo-tank-bruiser",
    heroSlug: "yasuo",
    name: "半肉搅局流",
    summary: "牺牲部分秒人能力，换取更强容错，适合乱战反复进出。",
    strength: 7.8,
    fun: 8,
    difficulty: 6,
    hexes: ["巨像勇气", "不屈意志", "治疗护盾强化"],
    coreItems: ["破败王者之刃", "斯特拉克的挑战护手", "死亡之舞"],
    optionalItems: ["振奋盔甲", "兰顿之兆", "智慧末刃"],
    playstyle: "把自己当副前排，先处理冲脸目标，再利用踏前斩追击残血。风墙用于保护己方核心输出。",
    teamFit: "适合队伍缺少近战承伤，但已有稳定后排伤害时选择。",
    counters: "怕百分比真伤和持续灼烧，面对薇恩、火男、提莫会很难受。",
    avoidWhen: "队伍完全缺输出时不要转半肉，否则团战会打不死人。"
  },
  {
    slug: "lux-laser-poke",
    heroSlug: "lux",
    name: "极光炮台流",
    summary: "超远距离消耗和收割，技能命中就是团战门票。",
    strength: 9,
    fun: 9,
    difficulty: 5,
    hexes: ["法术弹射", "终极刷新", "巫术大师", "易损"],
    coreItems: ["卢登的伙伴", "影焰", "灭世者的死亡之帽"],
    optionalItems: ["虚空之杖", "视界专注", "中娅沙漏"],
    playstyle: "站在兵线侧翼用 E 技能压血量，Q 不要随便交。敌方半血后用 QER 连招找击杀，团战后期大招可用于清线和收尾。",
    teamFit: "适合有前排拖时间或多远程消耗的阵容。",
    counters: "怕刺客强开和雪球贴脸，劫、阿卡丽、凯隐会压缩输出空间。",
    avoidWhen: "己方全是后排且没人能吃雪球开团时，拉克丝生存压力很大。",
    isHot: true
  },
  {
    slug: "sett-haymaker-tank",
    heroSlug: "sett",
    name: "一拳清屏流",
    summary: "堆生命值和韧性，吃伤害后用蓄意轰拳打出反杀名场面。",
    strength: 8.7,
    fun: 9,
    difficulty: 4,
    hexes: ["巨像勇气", "复苏之风", "战争交响曲", "生命熔炉"],
    coreItems: ["心之钢", "斯特拉克的挑战护手", "焚天"],
    optionalItems: ["振奋盔甲", "荆棘之甲", "亡者的板甲"],
    playstyle: "雪球或闪现进场抱回敌方核心，尽量在人群里承伤叠满豪意值。W 要朝脆皮方向释放，真伤命中比追残血更重要。",
    teamFit: "适合缺少前排、需要强开和反打的阵容。",
    counters: "怕风筝、重伤和位移多的后排，被持续拉开会很难摸到人。",
    avoidWhen: "对面五个长手且己方没有加速、控制补链时，进场会变成单程票。",
    isHot: true
  },
  {
    slug: "jinx-reset-carry",
    heroSlug: "jinx",
    name: "启动收割流",
    summary: "保住第一轮输出，拿到被动后接管残局。",
    strength: 8.3,
    fun: 8,
    difficulty: 6,
    hexes: ["致命节奏", "射手专注", "攻速溢出", "处刑节奏"],
    coreItems: ["海妖杀手", "卢安娜的飓风", "无尽之刃"],
    optionalItems: ["饮血剑", "守护天使", "凡性的提醒"],
    playstyle: "前期用鱼骨头蹭伤害，团战站位比输出更重要。等敌方突进技能交掉后再全力输出，击杀或助攻触发被动立刻向侧翼拉开。",
    teamFit: "适合有保护、护盾、强控制的阵容。",
    counters: "怕强突脸和绕后，尤其是青钢影、劫、魔腾这类直达后排英雄。",
    avoidWhen: "己方没有任何保护且对面刺客多时，不建议承担主 C 压力。"
  },
  {
    slug: "malphite-ap-comet",
    heroSlug: "malphite",
    name: "核弹石头流",
    summary: "用 AP 爆发把开团变成点名删除，但容错较低。",
    strength: 8,
    fun: 9,
    difficulty: 3,
    hexes: ["终极刷新", "法术暴击", "先发制人"],
    coreItems: ["卢登的伙伴", "风暴狂涌", "灭世者的死亡之帽"],
    optionalItems: ["中娅沙漏", "虚空之杖", "女妖面纱"],
    playstyle: "大招只交给敌方核心或多人站位，没大时用 Q 消耗并保持距离。进场后立刻补 E 和中娅，等队友接上控制。",
    teamFit: "适合队伍有后续 AOE 或能快速跟进的阵容。",
    counters: "怕女妖、夜之锋刃和位移预判，对手分散站位会降低收益。",
    avoidWhen: "己方没人能跟伤害，或者对面全是坦克时，AP 石头人很容易后继无力。"
  },
  {
    slug: "veigar-cage-control",
    heroSlug: "veigar",
    name: "笼中灭团流",
    summary: "用事件视界封路，叠法强后把残局变成处刑台。",
    strength: 8.6,
    fun: 8,
    difficulty: 5,
    hexes: ["法术弹射", "巫术大师", "技能急速", "易损"],
    coreItems: ["时光之杖", "灭世者的死亡之帽", "虚空之杖"],
    optionalItems: ["中娅沙漏", "女妖面纱", "影焰"],
    playstyle: "前中期优先用 Q 补兵和蹭人叠层，E 技能用于反开或切断走位。后期不要急着 R 满血目标，留给被队友压低的核心。",
    teamFit: "适合有消耗、拉扯和反手能力的阵容。",
    counters: "怕高机动刺客和魔免护盾，面对希维尔、莫甘娜要注意骗盾。",
    avoidWhen: "己方需要你前期就硬开时，小法师节奏会偏慢。"
  }
];

export function getChampion(slug: string) {
  return champions.find((champion) => champion.slug === slug);
}

export function getRoutine(slug: string) {
  return routines.find((routine) => routine.slug === slug);
}

export function getChampionRoutines(heroSlug: string) {
  return routines.filter((routine) => routine.heroSlug === heroSlug);
}

export function getRoutineChampion(routine: Routine) {
  return getChampion(routine.heroSlug);
}

export function searchAll(query: string) {
  const keyword = query.trim().toLowerCase();

  if (!keyword) {
    return { champions: [], routines: [] };
  }

  return {
    champions: champions.filter((champion) =>
      [champion.name, champion.title, ...champion.roles].some((value) =>
        value.toLowerCase().includes(keyword)
      )
    ),
    routines: routines.filter((routine) => {
      const champion = getRoutineChampion(routine);

      return [routine.name, routine.summary, champion?.name ?? ""].some((value) =>
        value.toLowerCase().includes(keyword)
      );
    })
  };
}
