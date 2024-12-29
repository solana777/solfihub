import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Container from '@mui/material/Container';

import { CONFIG } from 'src/config-global';
import { textGradient } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';
import { SvgColor } from 'src/components/svg-color';
import { varFade, MotionViewport } from 'src/components/animate';

import { FloatLine, FloatPlusIcon } from 'src/sections/home/components/svg-elements';

// ----------------------------------------------------------------------
type Props = {
  imgUrl: string;
  firstLine: string;
  secondLine?: string;
  thirdLine: string;
  description: string;
  buttonHref: string;
  buttonLabel: string;
  startIcon?: string;
  endIcon?: string;
};
// ----------------------------------------------------------------------

export function CustomAdvertisement({
  imgUrl,
  firstLine,
  secondLine,
  thirdLine,
  description,
  buttonHref,
  buttonLabel,
  startIcon,
  endIcon,

  ...other
}: Props) {
  const theme = useTheme();

  const renderLines = (
    <>
      <FloatPlusIcon sx={{ left: 72, top: '50%', mt: -1 }} />
      <FloatLine vertical sx={{ top: 0, left: 80, height: 'calc(50% + 64px)' }} />
      <FloatLine sx={{ top: '50%', left: 0 }} />
    </>
  );

  const renderDescription = (
    <Stack spacing={5} sx={{ zIndex: 9, px: 6 }}>
      <Box
        component={m.h2}
        variants={varFade({ distance: 24 }).inDown}
        sx={{ m: 0, color: 'common.white', typography: { xs: 'h2', md: 'h1' } }}
      >
        {firstLine}

        {secondLine && (
          <>
            <br />
            {secondLine}
          </>
        )}
        <Box
          component="span"
          sx={{
            ...textGradient(`to right, #D8EBFF, #8BBDFF`),
            ml: 1,
          }}
        >
          <br />
          {thirdLine}
        </Box>
      </Box>
      <Typography
        sx={{
          color: 'text.secondary',
        }}
      >
        {description.split('\n').map((line, index) => (
          <span key={index}>
            {line}
            <br />
          </span>
        ))}
      </Typography>
      <Stack
        spacing={2}
        direction="row"
        flexWrap="wrap"
        justifyContent={{ xs: 'center', md: 'flex-start' }}
      >
        <m.div variants={varFade({ distance: 24 }).inRight}>
          <Button
            color="primary"
            size="large"
            variant="contained"
            href={buttonHref}
            startIcon={<Iconify icon={startIcon ?? ''} />}
            endIcon={<Iconify icon={endIcon ?? ''} />}
          >
            {buttonLabel}
          </Button>
        </m.div>
      </Stack>
    </Stack>
  );

  const renderImg = (
    <m.div variants={varFade().inUp}>
      <Box
        component={m.img}
        animate={{ y: [-20, 0, -20] }}
        transition={{ duration: 4, repeat: Infinity }}
        alt="rocket"
        src={imgUrl}
        sx={{ zIndex: 9, width: 460, aspectRatio: '1/1' }}
      />
    </m.div>
  );

  const renderGridBg = (
    <m.div variants={varFade().in}>
      <SvgColor
        src={`${CONFIG.site.basePath}/assets/background/shape-grid.svg`}
        sx={{
          top: 0,
          left: 0,
          width: 1,
          height: 1,
          zIndex: 8,
          opacity: 0.08,
          color: 'grey.500',
          position: 'absolute',
          maskSize: 'auto 100%',
        }}
      />
    </m.div>
  );

  const renderBlur = (
    <Box
      sx={{
        top: 0,
        right: 0,
        zIndex: 7,
        width: 240,
        height: 240,
        bgcolor: 'grey.500',
        position: 'absolute',
        filter: 'blur(200px)',
      }}
    />
  );

  return (
    <Stack component="section" sx={{ position: 'relative', my: 5 }} {...other}>
      <MotionViewport>
        {renderLines}

        <Container sx={{ position: 'relative', zIndex: 9 }}>
          <Stack
            spacing={5}
            alignItems="center"
            direction={{ xs: 'column', md: 'row' }}
            sx={{
              py: 8,
              px: 5,
              borderRadius: 3,
              overflow: 'hidden',
              bgcolor: 'grey.900',
              position: 'relative',
              textAlign: { xs: 'center', md: 'left' },
              border: `solid 1px ${theme.vars.palette.grey[800]}`,
            }}
          >
            {renderDescription}
            {renderImg}

            {renderGridBg}

            {renderBlur}
          </Stack>
        </Container>
      </MotionViewport>
    </Stack>
  );
}
