import { Card, Stack, Divider, Typography } from '@mui/material';

import CustomHeroIcon from 'src/components/component-hero/custom-icon';

type Props = {
  children: React.ReactNode;
  icon: string;
  description: string;
  title: string;
};

export default function CustomCardHeader({ children, icon, description, title }: Props) {
  const renderHead = (
    <Stack alignItems="center" direction="row">
      <CustomHeroIcon
        sx={{
          mx: 2,
        }}
        icon={icon}
      />
      <Stack justifyContent="center" direction="column">
        <Typography variant="h5">{title}</Typography>
        <Typography
          variant="body2"
          sx={{
            color: 'text.secondary',
          }}
        >
          {description}
        </Typography>
      </Stack>
    </Stack>
  );

  return (
    <Card
      sx={{
        p: 2.618,
        my: 4,
        width: { xs: '100%', sm: '80%', md: '50%' },
      }}
    >
      {renderHead}
      <Divider sx={{ my: 2 }} />
      {children}
    </Card>
  );
}
