import { IconButton, useColorScheme } from '@mui/material';

import { Iconify } from 'src/components/iconify';

export default function ThemeChangeButton() {
  const { mode, setMode } = useColorScheme();

  const handleToggleTheme = () => {
    setMode(mode === 'light' ? 'dark' : 'light');
  };
  return (
    <IconButton onClick={handleToggleTheme}>
      {mode === 'light' ? (
        <Iconify icon="material-symbols-light:nights-stay" />
      ) : (
        <Iconify icon="ant-design:sun-outlined" />
      )}
    </IconButton>
  );
}
