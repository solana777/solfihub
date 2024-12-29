import type { MotionProps } from 'framer-motion';
import type { StackProps } from '@mui/material/Stack';
import type { Theme, SxProps } from '@mui/material/styles';

import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import { varAlpha, textGradient } from 'src/theme/styles';

import { varFade } from 'src/components/animate';

// ----------------------------------------------------------------------

type TextProps = {
  sx?: SxProps<Theme>;
  title: React.ReactNode;
  variants?: MotionProps['variants'];
};

type Props = StackProps & {
  txtGradient?: string;
  title: React.ReactNode;
  caption?: React.ReactNode;
  description?: React.ReactNode;
  slotProps?: {
    title?: Omit<TextProps, 'title'>;
    caption?: Omit<TextProps, 'title'>;
    description?: Omit<TextProps, 'title'>;
  };
  gradientColors?: string | string[];
  gradientDirection?: string;
  isBr?: boolean;
  boxSx?: SxProps<Theme>;
};

export function SectionTitle({
  title,
  caption,
  slotProps,
  txtGradient,
  description,
  gradientColors,
  gradientDirection = 'to right',
  boxSx,
  isBr = false,
  ...other
}: Props) {
  const theme = useTheme();
  const defaultGradient = `${theme.vars.palette.text.primary}, ${varAlpha(theme.vars.palette.text.primaryChannel, 0.2)}`;

  return (
    <Stack spacing={3} {...other}>
      {caption && (
        <SectionCaption
          title={caption}
          variants={slotProps?.caption?.variants}
          sx={slotProps?.caption?.sx}
        />
      )}

      <Typography
        component={m.h2}
        variant="h2"
        fontFamily={theme.typography.fontFamily}
        variants={slotProps?.title?.variants ?? varFade({ distance: 24 }).inUp}
        sx={slotProps?.title?.sx}
      >
        {`${title} `}
        {isBr && <br />}
        <Box
          component="span"
          sx={{
            mr: 1,
            display: 'inline-block',
            ...textGradient(`${gradientDirection}, ${gradientColors ?? defaultGradient}`),
            ...boxSx,
          }}
        >
          {txtGradient}
        </Box>
      </Typography>

      {description && (
        <Typography
          component={m.p}
          variants={slotProps?.description?.variants ?? varFade({ distance: 24 }).inUp}
          sx={{ color: 'text.secondary', ...slotProps?.description?.sx }}
        >
          {description}
        </Typography>
      )}
    </Stack>
  );
}

// ----------------------------------------------------------------------

export function SectionCaption({ title, variants, sx }: TextProps) {
  return (
    <Stack
      component={m.span}
      variants={variants ?? varFade({ distance: 24 }).inUp}
      sx={{ typography: 'overline', color: 'text.disabled', ...sx }}
    >
      {title}
    </Stack>
  );
}
