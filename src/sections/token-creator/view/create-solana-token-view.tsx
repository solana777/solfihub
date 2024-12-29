'use client';

import { CONFIG } from 'src/config-global';
import { CREATE_TOKEN_FAQs } from 'src/content/faqs';
import { CREATE_SOLANA_TOKEN_CONTENT } from 'src/content/overview-content';

import { CustomFAQs } from 'src/components/custom-faqs/custom-faqs';

import { CustomOverview } from 'src/components/custom-overview/custom-overview';
import CustomComponentHero from 'src/components/component-hero/custom-component-hero';
import { CustomAdvertisement } from 'src/components/custom-advertisement/custom-advertisement';
import CustomTypographyGrid from 'src/components/custom-typography-grid/custom-typography-grid';
import SolanaTokenCreateForm from '../create-solana-token-form';

export default function CreateSolanaTokenView() {
  return (
    <>
      <CustomComponentHero
        heading="SPL TOKEN CREATOR"
        icon="iconoir:flash"
        title="Solana Token Creator"
        description={`Easily create your own SPL token with no coding required. Customize every detail, from\n the token name to supply, logo and token metadata. Get started quickly and create your\n Solana token.`}
      />
      <SolanaTokenCreateForm />
      <CustomOverview
        sectionCaption="WHY USE SOLANA TOKEN CREATOR BY PARACHUTE.AG"
        sectionTitle="Create Your Own SPL Token"
        sectionGradientText="with Parachute’s Solana Token Creator"
        content={CREATE_SOLANA_TOKEN_CONTENT}
      />
      <CustomAdvertisement
        firstLine="Ready to"
        secondLine="Create Your"
        thirdLine="Own Token?"
        imgUrl={`${CONFIG.site.basePath}/assets/images/home/cryptocurrencies.png`}
        buttonHref="/tools/create-token-profile-page"
        startIcon="iconoir:flash"
        buttonLabel="Create My Solana Token"
        description={`Create your own SPL token now with Parachute’s\n easy-to-use token creation tool. No coding\n required—just your vision brought to life.`}
      />

      <CustomFAQs faqs={CREATE_TOKEN_FAQs} />
      <CustomTypographyGrid />
    </>
  );
}
