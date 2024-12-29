import type { Theme, SxProps } from '@mui/material';

import { Avatar } from '@mui/material';

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
        width: 40,
        height: 40,
        background: 'linear-gradient(45deg, #8BBDFF 0%, #3E83FF 100%)',
        ...sx,
      }}
    >
      <Iconify width={24} icon={icon} />
    </Avatar>
  );
}
