import { useState } from 'react';
import {
  Box,
  Button,
  Typography,
  useMediaQuery,
  useTheme
} from '@mui/material';
import {
  CartesianGrid,
  Label,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from 'recharts';
import { useData } from '@/hooks';
import { DashboardBox, FlexBetween } from '..';

export const ProjectionPlot = () => {
  const [isPredictions, setIsPredictions] = useState(false);
  const isMdScreen = useMediaQuery('(min-width: 1200px)');
  const { palette } = useTheme();
  const { formattedData } = useData();

  const show = !isMdScreen
    ? 'Mostrar'
    : 'Mostrar predicciones de ingresos para el siguiente año';
  const hide = !isMdScreen
    ? 'Ocultar'
    : 'Ocultar predicciones de ingresos para el siguiente año';

  return (
    <DashboardBox width="100%" height="100%" p="1rem" overflow="hidden">
      <FlexBetween m="1rem 2.5rem" gap="0.5rem">
        <Box>
          <Typography variant="h3" color={palette.primary[200]}>
            Ingresos y proyecciones
          </Typography>
          {isMdScreen && (
            <Typography variant="h5">
              Ingresos y proyecciones basados en un modelo de regresión lineal
              simple.
            </Typography>
          )}
        </Box>
        <Button
          sx={{
            color: palette.grey[200],
            backgroundColor: palette.secondary[500],
            boxShadow: '0.1rem 0.1rem 0.1rem 0.1rem rgba(0,0,0,.4)',
            ':hover': {
              color: palette.grey[300],
              backgroundColor: palette.secondary[300]
            }
          }}
          onClick={() => setIsPredictions(!isPredictions)}
        >
          {!isPredictions ? show : hide}
        </Button>
      </FlexBetween>
      {/* Grafica */}
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={formattedData}
          margin={{
            top: 20,
            right: 75,
            left: 20,
            bottom: 80
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke={palette.grey[800]} />
          <XAxis dataKey="name" tickLine={false} style={{ fontSize: '10px' }}>
            <Label value="Meses" offset={-5} position="insideBottom" />
          </XAxis>
          <YAxis
            domain={[12000, 26000]}
            axisLine={{ strokeWidth: '0' }}
            style={{ fontSize: '10px' }}
            tickFormatter={(v) => `$${v}`}
          >
            <Label
              value="Ingresos en USD"
              angle={-90}
              offset={-5}
              position="insideLeft"
            />
          </YAxis>
          <Tooltip
            contentStyle={{ backgroundColor: '#1f2026' }}
            labelStyle={{ color: palette.grey[200], textAlign: 'center' }}
          />
          <Legend verticalAlign="top" />
          <Line
            type="monotone"
            dataKey="Ingresos actuales"
            stroke={palette.primary.main}
            strokeWidth={0}
            dot={{ strokeWidth: 5 }}
          />
          <Line
            type="monotone"
            dataKey="Regresion"
            stroke="#8884d8"
            dot={false}
          />
          {isPredictions && (
            <Line
              strokeDasharray="5 5"
              dataKey="Prediccion de ingresos"
              stroke={palette.secondary[500]}
            />
          )}
        </LineChart>
      </ResponsiveContainer>
    </DashboardBox>
  );
};
