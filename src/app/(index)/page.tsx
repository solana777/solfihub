import CreateSolanaTokenView from 'src/sections/token-creator/view/create-solana-token-view';

export const metadata = {
  title: 'Solana Token Creator | Solfihub',
  description:
    'Create your own SPL token with no coding required. Customize every detail, from the token name to supply, logo and token metadata. Get started quickly and create your Solana token.',
};

export default function Page() {
  return <CreateSolanaTokenView />;
}
