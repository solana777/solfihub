import { Grid, Link } from '@mui/material';

import { paths } from 'src/routes/paths';

import { ComponentHero } from '../component-hero/component-hero';

const links = [
  { href: '/random-path-1', text: 'Solana Token Creator' },
  { href: '/random-path-2', text: 'Solana Token Generator' },
  { href: '/random-path-3', text: 'Solana Token Maker' },
  { href: '/random-path-4', text: 'Create Solana Token' },
  { href: '/random-path-5', text: 'Create SPL Token' },
  { href: '/random-path-6', text: 'Solana Token Multisender' },
  { href: '/random-path-7', text: 'Create Your Own Coin' },
  { href: '/random-path-8', text: 'Create My Token' },
  { href: '/random-path-9', text: 'How to Create Your Own Coin' },
  { href: '/random-path-10', text: 'Create Token' },
  { href: '/random-path-11', text: 'Token Mint' },
  { href: '/random-path-12', text: 'How to Create a Coin' },
  { href: '/random-path-13', text: 'Token Maker' },
  { href: '/random-path-14', text: 'Solana Snapshot Tool' },
  { href: '/random-path-15', text: 'How to Create Solana Token' },
  { href: '/random-path-16', text: 'Token Creator' },
  { href: '/random-path-17', text: 'Burn Tool' },
  { href: '/random-path-18', text: 'Snapshot Tool' },
  { href: '/random-path-19', text: 'Multisender' },
  { href: '/random-path-20', text: 'Bulk Sender' },
];

export default function CustomTypographyGrid() {
  return (
    <ComponentHero sx={{ py: 15 }}>
      <Grid container spacing={2}>
        {links.map((link, index) => (
          <Grid
            sx={{
              textAlign: { xs: 'center', md: 'left' },
            }}
            item
            xs={12}
            sm={6}
            md={3}
            key={index}
          >
            <Link
              sx={{
                color: 'text.secondary',
              }}
              href={link.href}
            >
              {link.text}
            </Link>
          </Grid>
        ))}
      </Grid>
    </ComponentHero>
  );
}
