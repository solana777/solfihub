'use client';

import { CREATE_TOKEN_FAQs } from 'src/content/faqs';

import { CustomFAQs } from 'src/components/custom-faqs/custom-faqs';
import CustomComponentHero from 'src/components/component-hero/custom-component-hero';

import SolanaTokenCreateForm from '../create-solana-token-form';

export default function CreateSolanaTokenView() {
  return (
    <>
      <CustomComponentHero
        heading="SPL TOKEN CREATOR"
        icon="ic:twotone-generating-tokens"
        title="Solana Token Creator"
        description={`Easily create your own SPL token with no coding required. Customize every detail, from the token name to supply, logo and token metadata.\n Get started quickly and create your Solana token.`}
      />
      <SolanaTokenCreateForm />

      <CustomFAQs faqs={CREATE_TOKEN_FAQs} />
      {/* <CustomTypographyGrid /> */}
    </>
  );
}
