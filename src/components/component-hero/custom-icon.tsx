import type { Theme, SxProps } from '@mui/material';

import { Avatar } from '@mui/material';
import { alpha } from '@mui/material/styles';

import { Iconify } from '../iconify';

type Props = {
  icon: string;
  sx?: SxProps<Theme>;
};

// ----------------------------------------------------------------------

export default function CustomHeroIcon({ icon, sx }: Props) {
  return (
    <Avatar
      sx={{
        width: 56,
        height: 56,
        background: (theme) => `linear-gradient(135deg, ${theme.palette.primary.lighter} 0%, ${theme.palette.primary.light} 100%)`,
        ...sx,
      }}
    >
      <Iconify 
        width={28} 
        icon={icon}
        sx={{
          color: (theme) => alpha(theme.palette.grey[200], 0.95),
          filter: 'saturate(0.9)',
        }}
      />
    </Avatar>
  );
}
