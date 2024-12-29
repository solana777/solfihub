// ----------------------------------------------------------------------

const ROOTS = {
  AUTH: '/auth',
  DASHBOARD: '/dashboard',
  TOOLS: '/tools',
};

// ----------------------------------------------------------------------

export const paths = {
  faqs: '/faqs',
  minimalStore: 'https://mui.com/store/items/minimal-dashboard/',
  about: '/about',
  contact: '/contact',
  createToken: '/solana-token-creator',
  multisender: '/solana-multisender',
  todo: '/todo',
  tools: {
    root: `${ROOTS.TOOLS}/`,
    burn: `${ROOTS.TOOLS}/solana-burn-token`,
    createTokenPage: `${ROOTS.TOOLS}/solana-create-token-page`,
    freezeToken: `${ROOTS.TOOLS}/solana-freeze-token`,
    immutable: `${ROOTS.TOOLS}/solana-immutable-token`,
    mintToken: `${ROOTS.TOOLS}/solana-mint-token`,
    revokeFreeze: `${ROOTS.TOOLS}/solana-revoke-freeze`,
    revokeMint: `${ROOTS.TOOLS}/solana-revoke-mint`,
    snapshot: `${ROOTS.TOOLS}/solana-snapshot-tool`,
    thawToken: `${ROOTS.TOOLS}/solana-thaw-token`,
  },
  p: '/p',

  // AUTH
  auth: {
    amplify: {
      signIn: `${ROOTS.AUTH}/amplify/sign-in`,
      verify: `${ROOTS.AUTH}/amplify/verify`,
      signUp: `${ROOTS.AUTH}/amplify/sign-up`,
      updatePassword: `${ROOTS.AUTH}/amplify/update-password`,
      resetPassword: `${ROOTS.AUTH}/amplify/reset-password`,
    },
    jwt: {
      signIn: `${ROOTS.AUTH}/jwt/sign-in`,
      signUp: `${ROOTS.AUTH}/jwt/sign-up`,
    },
    firebase: {
      signIn: `${ROOTS.AUTH}/firebase/sign-in`,
      verify: `${ROOTS.AUTH}/firebase/verify`,
      signUp: `${ROOTS.AUTH}/firebase/sign-up`,
      resetPassword: `${ROOTS.AUTH}/firebase/reset-password`,
    },
    auth0: {
      signIn: `${ROOTS.AUTH}/auth0/sign-in`,
    },
    supabase: {
      signIn: `${ROOTS.AUTH}/supabase/sign-in`,
      verify: `${ROOTS.AUTH}/supabase/verify`,
      signUp: `${ROOTS.AUTH}/supabase/sign-up`,
      updatePassword: `${ROOTS.AUTH}/supabase/update-password`,
      resetPassword: `${ROOTS.AUTH}/supabase/reset-password`,
    },
  },
  // DASHBOARD
  dashboard: {
    root: ROOTS.DASHBOARD,
    two: `${ROOTS.DASHBOARD}/two`,
    three: `${ROOTS.DASHBOARD}/three`,
    group: {
      root: `${ROOTS.DASHBOARD}/group`,
      five: `${ROOTS.DASHBOARD}/group/five`,
      six: `${ROOTS.DASHBOARD}/group/six`,
    },
  },
};
