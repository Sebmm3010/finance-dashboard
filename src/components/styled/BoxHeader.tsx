import { FC, ReactNode } from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import { FlexBetween } from '.';

interface Props {
  icon?: ReactNode;
  title: string;
  sideText?: string;
  subTitle?: string;
}

export const BoxHeader: FC<Props> = ({ icon, title, subTitle, sideText }) => {
  const { palette } = useTheme();
  return (
    <FlexBetween color={palette.grey[400]} margin="1.5rem 1rem 0 1rem">
      <FlexBetween>
        {icon}
        <Box width="100%">
          <Typography variant="h4" mb="-0.1rem">
            {title}
          </Typography>
          <Typography variant="h6">{subTitle}</Typography>
        </Box>
      </FlexBetween>
      <Typography variant="h5" fontWeight="700" color={palette.secondary[500]}>
        {sideText}
      </Typography>
    </FlexBetween>
  );
};
