'use client';

import { m } from 'framer-motion';

import { Stack, Typography } from '@mui/material';

import CustomHeroIcon from './custom-icon';
import { ComponentHero } from './component-hero';
import { varFade, MotionContainer } from '../animate';

type Props = {
  heading: string;
  icon: string;
  title: string;
  description: string;
};

// ----------------------------------------------------------------------

export default function CustomComponentHero({ heading, icon, title, description }: Props) {
  return (
    <ComponentHero sx={{ py: 15 }}>
      <MotionContainer sx={{ textAlign: 'center' }}>
        <Stack alignItems="center" spacing={3}>
          <m.div variants={varFade().inUp}>
            <Typography
              sx={{
                color: 'text.disabled',
              }}
              variant="overline"
            >
              {heading}
            </Typography>
          </m.div>
          <m.div variants={varFade().inUp}>
            <CustomHeroIcon icon={icon} />
          </m.div>

          <m.div variants={varFade().inUp}>
            <Typography variant="h1">{title}</Typography>
          </m.div>

          <m.div variants={varFade().inUp}>
            <Typography sx={{ color: 'text.secondary' }}>
              {description.split('\n').map((line, index) => (
                <span key={index}>
                  {line}
                  <br />
                </span>
              ))}
            </Typography>
          </m.div>
        </Stack>
      </MotionContainer>
    </ComponentHero>
  );
}
