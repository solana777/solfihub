import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { useTheme } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { CONFIG } from 'src/config-global';
import { varAlpha, stylesMode } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';

import { SectionTitle } from 'src/sections/home/components/section-title';
import { CircleSvg, FloatLine, FloatPlusIcon } from 'src/sections/home/components/svg-elements';

// ----------------------------------------------------------------------

export type ContentItem = {
  icon: string;
  title: string;
  description: string;
};
type Props = {
  sectionCaption: string;
  sectionTitle: string;
  sectionGradientText: string;
  content: ContentItem[];
};
// ----------------------------------------------------------------------

export function CustomOverview({
  sectionCaption,
  sectionTitle,
  sectionGradientText,
  content,
  ...other
}: Props) {
  const theme = useTheme();
  const renderLines = (
    <>
      <FloatPlusIcon sx={{ top: 72, left: 72 }} />
      <FloatPlusIcon sx={{ bottom: 72, left: 72 }} />
      <FloatLine sx={{ top: 80, left: 0 }} />
      <FloatLine sx={{ bottom: 80, left: 0 }} />
      <FloatLine vertical sx={{ top: 0, left: 80 }} />
    </>
  );

  const renderDescription = (
    <>
      <SectionTitle
        caption={sectionCaption}
        title={sectionTitle}
        txtGradient={sectionGradientText}
        gradientColors={[`${theme.palette.primary.light}`, `${theme.palette.primary.lighter}`]}
        sx={{ mb: { xs: 5, md: 8 }, textAlign: { xs: 'center', md: 'left' } }}
      />

      <Stack
        spacing={6}
        sx={{
          maxWidth: { sm: 560, md: 400 },
          mx: { xs: 'auto', md: 'unset' },
        }}
      >
        {content.map((item) => (
          <Box
            component={m.div}
            key={item.title}
            variants={varFade({ distance: 24 }).inUp}
            gap={3}
            display="flex"
          >
            <Iconify icon={item.icon} color="primary.main" sx={{ width: 40, height: 40 }} />
            <Stack spacing={1}>
              <Typography variant="h6" component="h6">
                {item.title}
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                {item.description}
              </Typography>
            </Stack>
          </Box>
        ))}
      </Stack>
    </>
  );

  const renderImg = (
    <Stack
      component={m.div}
      variants={varFade({ distance: 24 }).inRight}
      alignItems="center"
      justifyContent="center"
      sx={{ height: 1, position: 'relative' }}
    >
      <Box
        sx={{
          left: 0,
          width: 720,
          borderRadius: 2,
          position: 'absolute',
          bgcolor: 'background.default',
          boxShadow: `-40px 40px 80px 0px ${varAlpha(theme.vars.palette.info.mainChannel, 0.16)}`,
          [stylesMode.dark]: {
            boxShadow: `-40px 40px 80px 0px ${varAlpha(theme.vars.palette.common.blackChannel, 0.16)}`,
          },
        }}
      >
        <Box
          component="img"
          alt="create-solana-token"
          src={`${CONFIG.site.basePath}/assets/images/home/highlight-darkmode.png`}
          sx={{ width: 720 }}
        />
      </Box>
    </Stack>
  );

  return (
    <Stack
      component="section"
      sx={{
        overflow: 'hidden',
        position: 'relative',
        py: { xs: 10, md: 20 },
      }}
      {...other}
    >
      <MotionViewport>
        {renderLines}

        <Container sx={{ position: 'relative' }}>
          <Grid container columnSpacing={{ xs: 0, md: 8 }} sx={{ position: 'relative', zIndex: 9 }}>
            <Grid xs={12} md={6} lg={8}>
              {renderDescription}
            </Grid>

            <Grid md={6} lg={4} sx={{ display: { xs: 'none', md: 'block' } }}>
              {renderImg}
            </Grid>
          </Grid>

          <CircleSvg variants={varFade().in} sx={{ display: { xs: 'none', md: 'block' } }} />
        </Container>
      </MotionViewport>
    </Stack>
  );
}

// ----------------------------------------------------------------------
