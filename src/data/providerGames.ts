export type ProviderId = 'bng' | 'jili' | 'live' | 'slot' | 'bonza';

export interface GameCard {
  id: string;
  image: string;
}

/* ================= GLOBAL PROVIDER GAMES ================= */
/* BNG / JILI：所有公司共用 */

type GlobalProviderId = 'bng' | 'jili';

export const globalProviderGames: Record<GlobalProviderId, GameCard[]> = {
  bng: [
    { id: 'coin-volcano', image: '/games/bng/imgi_101_coin_volcano_hyptc.png' },
    { id: 'maya-lock', image: '/games/bng/imgi_2_maya_lock_nzbwq.jpg' },
    { id: 'thunder-coins', image: '/games/bng/imgi_5_thunder_coins_xxl_fjvoe.jpg' },
    { id: 'coin-express', image: '/games/bng/imgi_33_coin_express_eiuxg.jpg' },
    { id: 'super-pink-joker', image: '/games/bng/imgi_6_super_pink_joker_bxpbs.jpg' },
    { id: '3-hot-teapots', image: '/games/bng/imgi_7_3_hot_teapots_zwcem.jpg' },
  ],

  jili: [
    { id: '3-coin-treasures', image: '/games/jili/3-coin-treasures.png' },
    { id: 'fortune-coin', image: '/games/jili/fortune-coin.png' },
    { id: 'money-pot', image: '/games/jili/money-pot.jpg' },
    { id: 'posedon', image: '/games/jili/posedon.png' },
    { id: 'superace', image: '/games/jili/superace.png' },
    { id: 'zeus', image: '/games/jili/zeus.png' },
  ],
};

/* ================= COMPANY-SPECIFIC PROVIDER GAMES ================= */
/* LIVE / SLOT / BONZA：每个公司不同 */

export const companyProviderGames: Record<
  string,
  Partial<Record<'live' | 'slot' | 'bonza', GameCard[]>>
> = {
  ipay9: {
    live: [
      { id: 'ipay9-live-1', image: '/games/live/ipay9-ag.png' },
      { id: 'ipay9-live-2', image: '/games/live/ipay9-bg.png' },
      { id: 'ipay9-live-3', image: '/games/live/ipay9-ct855.png' },
      { id: 'ipay9-live-4', image: '/games/live/ipay9-pragmatic.png' },
      { id: 'ipay9-live-5', image: '/games/live/ipay9-sexy-baccarat.png' },
    ],
  },

  kingbet9: {
    live: [
      { id: 'kingbet9-live-1', image: '/games/live/k9-baccarat.png' },
      { id: 'kingbet9-live-2', image: '/games/live/k9-bg.png' },
      { id: 'kingbet9-live-3', image: '/games/live/k9-ct855.png' },
      { id: 'kingbet9-live-4', image: '/games/live/k9-pragmatic.png' },
    ],
  },

  bigpay77: {
    live: [
      { id: 'bigpay77-live-1', image: '/games/live/bp77-baccarat.png' },
      { id: 'bigpay77-live-2', image: '/games/live/bp77-dream-gaming.png' },
      { id: 'bigpay77-live-3', image: '/games/live/bp77-kenzo.png' },
      { id: 'bigpay77-live-4', image: '/games/live/bp77-pragmatic.png' },
      { id: 'bigpay77-live-5', image: '/games/live/bp77-simple-play.png' },
      { id: 'bigpay77-live-6', image: '/games/live/bp77-yeebet.png' },
    ],
  },

  me99: {
    live: [
      { id: 'me99-live-1', image: '/games/live/me99-ag.png' },
      { id: 'me99-live-2', image: '/games/live/me99-baccarat.png' },
      { id: 'me99-live-3', image: '/games/live/me99-bg.png' },
      { id: 'me99-live-4', image: '/games/live/me99-ct855.png' },
      { id: 'me99-live-5', image: '/games/live/me99-pragmatic.png' },
      { id: 'me99-live-6', image: '/games/live/me99-sv388.png' },
    ],
  },

  rolex9: {
    live: [
      { id: 'rolex9-live-1', image: '/games/live/rolex9-ct855.png' },
      { id: 'rolex9-live-2', image: '/games/live/rolex9-bg.png' },
      { id: 'rolex9-live-3', image: '/games/live/rolex9-dreamgaming.png' },
      { id: 'rolex9-live-4', image: '/games/live/rolex9-yeebet.png' },
      { id: 'rolex9-live-5', image: '/games/live/rolex9-baccarat.png' },
    ],
  },

  gucci9: {
    live: [
      { id: 'gucci9-live-1', image: '/games/live/gucci9-ct855.png' },
      { id: 'gucci9-live-2', image: '/games/live/gucci9-bg.png' },
      { id: 'gucci9-live-3', image: '/games/live/gucci9-alibet.png' },
      { id: 'gucci9-live-4', image: '/games/live/gucci9-gamingbet.png' },
      { id: 'gucci9-live-5', image: '/games/live/gucci9-pragmatic.png' },
    ],
  },

  mrbean9: {
    live: [
      { id: 'mrbean9-live-1', image: '/games/live/mrbean9-baccarat.png' },
      { id: 'mrbean9-live-2', image: '/games/live/mrbean9-ct855.png' },
      { id: 'mrbean9-live-3', image: '/games/live/mrbean9-playtech.png' },
      { id: 'mrbean9-live-4', image: '/games/live/mrbean9-spadegaming.png' },
      { id: 'mrbean9-live-5', image: '/games/live/mrbean9-youlian.png' },
    ],
  },

  pokemon13: {
    live: [
      { id: 'pokemon13-live-1', image: '/games/live/pokemon13-baccarat.png' },
      { id: 'pokemon13-live-2', image: '/games/live/pokemon13-bg.png' },
      { id: 'pokemon13-live-3', image: '/games/live/pokemon13-ct855.png' },
      { id: 'pokemon13-live-4', image: '/games/live/pokemon13-yeebet.png' },
    ],
  },

  spongebob13: {
    live: [
      { id: 'spongebob13-live-1', image: '/games/live/spongebob13-baccarat.png' },
      { id: 'spongebob13-live-2', image: '/games/live/spongebob13-ct855.png' },
      { id: 'spongebob13-live-3', image: '/games/live/spongebob13-fastspin.png' },
      { id: 'spongebob13-live-4', image: '/games/live/spongebob13-gamingbet.png' },
      { id: 'spongebob13-live-5', image: '/games/live/spongebob13-playtech.png' },
      { id: 'spongebob13-live-6', image: '/games/live/spongebob13-pragmatic.png' },
    ],
  },

  winnie13: {
    live: [
      { id: 'winnie13-live-1', image: '/games/live/winnie13-bg.png' },
      { id: 'winnie13-live-2', image: '/games/live/winnie13-ct855.png' },
      { id: 'winnie13-live-3', image: '/games/live/winnie13-ebet.png' },
      { id: 'winnie13-live-4', image: '/games/live/winnie13-sa-gaming.png' },
      { id: 'winnie13-live-5', image: '/games/live/winnie13-pragmatic.png' },
    ],
    slot: [
      { id: 'winnie13-slot-1', image: '/games/slot/winnie13-evo888.png' },
      { id: 'winnie13-slot-2', image: '/games/slot/winnie13-ace333.png' },
      { id: 'winnie13-slot-3', image: '/games/slot/winnie13-megah5.png' },
      { id: 'winnie13-slot-4', image: '/games/slot/winnie13-rich.png' },
      { id: 'winnie13-slot-5', image: '/games/slot/winnie13-we.png' },
    ],
    bonza: [
      { id: 'winnie13-bonza-1', image: '/games/bonza/winnie13-bite-fortune.png' },
      { id: 'winnie13-bonza-2', image: '/games/bonza/winnie13-jewel.png' },
      { id: 'winnie13-bonza-3', image: '/games/bonza/winnie13-perfect-seven.png' },
      { id: 'winnie13-bonza-4', image: '/games/bonza/winnie13-quest.png' },
    ],
  },
  
  queen13: {
    live: [
      { id: 'queen13-live-1', image: '/games/live/queen13-bg.png' },
      { id: 'queen13-live-2', image: '/games/live/queen13-blive.png' },
      { id: 'queen13-live-3', image: '/games/live/queen13-ct855.png' },
      { id: 'queen13-live-4', image: '/games/live/queen13-evolution.webp' },
      { id: 'queen13-live-5', image: '/games/live/queen13-gamingbet.png' },
      { id: 'queen13-live-6', image: '/games/live/queen13-pragmatic.png' },
    ],
    slot: [
      { id: 'queen13-slot-1', image: '/games/slot/queen13-afbgaming.png' },
      { id: 'queen13-slot-2', image: '/games/slot/queen13-ace333.png' },
      { id: 'queen13-slot-3', image: '/games/slot/queen13-megah5.png' },
      { id: 'queen13-slot-4', image: '/games/slot/queen13-vpower.png' },
      { id: 'queen13-slot-5', image: '/games/slot/queen13-pegasus.png' },
    ],
  },

  micky13: {
    live: [
      { id: 'micky13-live-1', image: '/games/live/micky13-bg.png' },
      { id: 'micky13-live-2', image: '/games/live/micky13-ct855.png' },
      { id: 'micky13-live-3', image: '/games/live/micky13-ebet.png' },
      { id: 'micky13-live-4', image: '/games/live/micky13-sa-gaming.png' },
    ],
    slot: [
      { id: 'micky13-slot-1', image: '/games/slot/micky13-evo888.png' },
      { id: 'micky13-slot-2', image: '/games/slot/micky13-ace333.png' },
      { id: 'micky13-slot-3', image: '/games/slot/micky13-megah5.png' },
      { id: 'micky13-slot-4', image: '/games/slot/micky13-rich.png' },
      { id: 'micky13-slot-5', image: '/games/slot/micky13-vpower.png' },
    ],
    bonza: [
      { id: 'micky13-bonza-1', image: '/games/bonza/micky13-fantasy.png' },
      { id: 'micky13-bonza-2', image: '/games/bonza/micky13-gold.png' },
      { id: 'micky13-bonza-3', image: '/games/bonza/micky13-jewel.png' },
      { id: 'micky13-bonza-4', image: '/games/bonza/micky13-minetowin.png' },
    ],
  },

  bybid9: {
    live: [
      { id: 'bybid9-live-1', image: '/games/live/bybid9-baccarat.png' },
      { id: 'bybid9-live-2', image: '/games/live/bybid9-bg.png' },
      { id: 'bybid9-live-3', image: '/games/live/bybid9-playtech.png' },
      { id: 'bybid9-live-4', image: '/games/live/bybid9-ct855.png' },
      { id: 'bybid9-live-5', image: '/games/live/bybid9-pragmatic.png' },
    ],
  },
};

/* ================= HELPER FUNCTION ================= */
/* 给页面用的统一取值方法 */

export const getProviderGames = (
  companyId: string,
  providerId: ProviderId
): GameCard[] => {
  if (providerId === 'bng' || providerId === 'jili') {
    return globalProviderGames[providerId] || [];
  }

  return companyProviderGames[companyId]?.[providerId] || [];
};
