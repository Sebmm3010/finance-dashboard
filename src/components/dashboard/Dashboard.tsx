import { Box, useMediaQuery } from '@mui/material';
import { gridTemplateLg, gridTemplateSm } from '@/constants';
import { Row1, Row2, Row3 } from '..';

export const Dashboard = () => {
  const isMdScreen = useMediaQuery('(min-width:1200px)');

  return (
    <Box
      width="100%"
      height="100%"
      display="grid"
      gap="1.5rem"
      sx={
        isMdScreen
          ? {
              gridTemplateColumns: 'repeat(3, minmax(370px, 1fr))',
              gridTempleteRows: 'repeat(10, minmax(60px, 1fr))',
              gridTemplateAreas: gridTemplateLg
            }
          : {
              gridAutoColumns: '1fr',
              gridAutoRows: '80px',
              gridTemplateAreas: gridTemplateSm
            }
      }
    >
      <Row1 />
      <Row2 />
      <Row3 />
    </Box>
  );
};
