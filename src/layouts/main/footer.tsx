import type { Theme, SxProps, Breakpoint } from '@mui/material/styles';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import { useTheme } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { Logo } from 'src/components/logo';
import { SocialIcon } from 'src/components/iconify';

// ----------------------------------------------------------------------

const SOCIALS = [
  {
    name: 'Twitter',
    path: 'https://twitter.com/solfihub_ag',
    value: 'twitter'
  },
  {
    name: 'Discord',
    path: 'https://discord.gg/solfihub',
    value: 'discord'
  },
  {
    name: 'Telegram',
    path: 'https://t.me/solfihub',
    value: 'telegram'
  }
];

const LINKS = [

  {
    headline: 'Company',
    children: [
      { name: 'Docs', href: paths.todo },
      { name: 'Affiliate Program', href: paths.todo },
      { name: 'FAQs', href: paths.faqs },
    ],
  },
  {
    headline: 'Legal',
    children: [
      { name: 'Terms of Service', href: '#' },
      { name: 'Privacy Policy', href: '#' },
    ],
  },
  {
    headline: 'Contact',
    children: [{ name: 'info@solfihub.com', href: 'mailto:info@solfihub.com' }],
  },
];

// ----------------------------------------------------------------------

export type FooterProps = {
  layoutQuery: Breakpoint;
  sx?: SxProps<Theme>;
};

export function Footer({ layoutQuery, sx }: FooterProps) {
  const theme = useTheme();

  return (
    <Box component="footer" sx={{ position: 'relative', bgcolor: 'background.default', ...sx }}>
      <Divider />

      <Container
        sx={{
          pb: 5,
          pt: 10,
          textAlign: 'center',
          [theme.breakpoints.up(layoutQuery)]: { textAlign: 'unset' },
        }}
      >
        <Logo />

        <Grid
          container
          sx={{
            mt: 3,
            justifyContent: 'center',
            [theme.breakpoints.up(layoutQuery)]: { justifyContent: 'space-between' },
          }}
        >
          <Grid {...{ xs: 12, [layoutQuery]: 3 }}>
            <Typography
              variant="body2"
              sx={{
                mx: 'auto',
                maxWidth: 280,
                [theme.breakpoints.up(layoutQuery)]: { mx: 'unset' },
              }}
            >
              Solfihub is the ultimate Solana token creator, perfect for easily creating and
              managing SPL tokens. Whether you&apos;re exploring how to create your own Solana token or
              need a reliable token creation platform, Solfihub has you covered.
            </Typography>

            <Stack
              direction="row"
              sx={{
                mt: 3,
                mb: 5,
                justifyContent: 'center',
                [theme.breakpoints.up(layoutQuery)]: { mb: 0, justifyContent: 'flex-start' },
              }}
            >
              {SOCIALS.map((social: { name: string; path: string; value: string }) => (
                <Link
                  key={social.name}
                  href={social.path}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconButton>
                    <SocialIcon icon={social.value} />
                  </IconButton>
                </Link>
              ))}
            </Stack>
          </Grid>

          <Grid {...{ xs: 12, [layoutQuery]: 8 }}>
            <Stack
              spacing={5}
              sx={{
                flexDirection: 'column',
                [theme.breakpoints.up(layoutQuery)]: { flexDirection: 'row' },
              }}
            >
              {LINKS.map((list) => (
                <Stack
                  key={list.headline}
                  spacing={2}
                  sx={{
                    width: 1,
                    alignItems: 'center',
                    [theme.breakpoints.up(layoutQuery)]: { alignItems: 'flex-start' },
                  }}
                >
                  <Typography component="div" variant="overline">
                    {list.headline}
                  </Typography>

                  {list.children.map((link) => (
                    <Link
                      key={link.name}
                      component={RouterLink}
                      href={link.href}
                      color="inherit"
                      variant="body2"
                    >
                      {link.name}
                    </Link>
                  ))}
                </Stack>
              ))}
            </Stack>
          </Grid>
        </Grid>

        <Typography variant="body2" sx={{ mt: 10 }}>
          © 2024 Solfihub.ag. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
}

// ----------------------------------------------------------------------

export type HomeFooterProps = {
  sx?: SxProps<Theme>;
};

export function HomeFooter({ sx }: HomeFooterProps) {
  return (
    <Box
      component="footer"
      sx={{
        py: 5,
        textAlign: 'center',
        position: 'relative',
        bgcolor: 'background.default',
        ...sx,
      }}
    >
      <Container>
        <Logo />
        <Box sx={{ mt: 1, typography: 'caption' }}>
          © 2024 Solfihub.com All rights reserved.
          <Link sx={{ pl: 0.25 }} color="secondary" href="https://multisender.co/">
            Solfihub.com
          </Link>
        </Box>
      </Container>
    </Box>
  );
}
