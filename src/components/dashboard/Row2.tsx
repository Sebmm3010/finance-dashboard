import { useData } from '@/hooks';
import { BoxHeader, DashboardBox, FlexBetween } from '..';
import {
  CartesianGrid,
  Cell,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Scatter,
  ScatterChart,
  Tooltip,
  XAxis,
  YAxis,
  ZAxis
} from 'recharts';
import { useTheme, Box, Typography } from '@mui/material';

export const Row2 = () => {
  const { palette } = useTheme();
  const pieColors = [palette.primary[800], palette.primary[300]];
  const { operationalExpenses, pieData, productExpenseData } = useData();
  return (
    <>
      <DashboardBox gridArea="d">
        <BoxHeader
          title="Gastos operativos versus no operativos"
          sideText="+4%"
        />
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            width={500}
            height={400}
            data={operationalExpenses}
            margin={{
              top: 20,
              right: 0,
              left: -10,
              bottom: 55
            }}
          >
            <CartesianGrid vertical={false} stroke={palette.grey[800]} />
            <XAxis
              dataKey="name"
              tickLine={false}
              style={{ fontSize: '10px' }}
            />
            <YAxis
              yAxisId="right"
              orientation="right"
              tickLine={false}
              axisLine={false}
              style={{ fontSize: '10px' }}
            />
            <YAxis
              yAxisId="left"
              orientation="left"
              tickLine={false}
              axisLine={false}
              style={{ fontSize: '10px' }}
            />
            <Tooltip
              contentStyle={{ backgroundColor: '#1f2026' }}
              labelStyle={{ color: palette.grey[200], textAlign: 'center' }}
            />
            <Line
              yAxisId="left"
              type="monotone"
              dataKey="nonOperationalExpenses"
              stroke={palette.tertiary[500]}
            />
            <Line
              yAxisId="right"
              type="monotone"
              dataKey="operationalExpenses"
              stroke={palette.primary.main}
            />
          </LineChart>
        </ResponsiveContainer>
      </DashboardBox>
      {/* segunda columna segunda grafica */}
      <DashboardBox gridArea="e">
        <BoxHeader title="Campañas y objetivos" sideText="+4%" />
        <FlexBetween mt="0.25rem" gap="1.5rem" pr="1rem">
          <PieChart
            width={110}
            height={100}
            margin={{
              top: 0,
              right: -10,
              left: 10,
              bottom: 0
            }}
          >
            <Pie
              stroke="none"
              data={pieData}
              innerRadius={18}
              outerRadius={38}
              paddingAngle={5}
              dataKey="value"
            >
              {pieData.map((item, i) => (
                <Cell key={`cell-${i}`} fill={pieColors[i]} />
              ))}
            </Pie>
          </PieChart>
          <Box ml="-0.7rem" flexBasis="40%" textAlign="center">
            <Typography variant="h5">Ventas objetivo</Typography>
            <Typography variant="h3" m="0.3rem 0" color={palette.primary[400]}>
              76
            </Typography>
            <Typography variant="h6">
              Objetivos financieros para la campaña.
            </Typography>
          </Box>
          <Box flexBasis="40%">
            <Typography variant="h5">Pérdidas de ingresos</Typography>
            <Typography variant="h6">Las pérdidas han bajado un 15%</Typography>
            <Typography variant="h5" mt="0.4rem">
              Margen de beneficio
            </Typography>
            <Typography variant="h6">
              Los márgenes de ingresos aumentaron un 35% respecto al mes pasado.
            </Typography>
          </Box>
        </FlexBetween>
      </DashboardBox>
      {/* Tercera columna segunda grafica */}
      <DashboardBox gridArea="f">
        <BoxHeader title="Precios de productos vs gastos" sideText="+4%" />
        <ResponsiveContainer width="100%" height="100%">
          <ScatterChart
            margin={{
              top: 20,
              right: 25,
              bottom: 40,
              left: -10
            }}
          >
            <CartesianGrid stroke={palette.grey[800]} />
            <XAxis
              type="number"
              dataKey="price"
              name="Precio"
              axisLine={false}
              tickLine={false}
              style={{
                fontSize: '10px'
              }}
              tickFormatter={(v) => `$${v}`}
            />
            <YAxis
              type="number"
              dataKey="expense"
              name="Gasto"
              axisLine={false}
              tickLine={false}
              style={{
                fontSize: '10px'
              }}
              tickFormatter={(v) => `$${v}`}
            />
            <Tooltip
              formatter={(v) => `$${v}`}
              contentStyle={{
                backgroundColor: '#E5E7EB',
                color: palette.primary[500]
              }}
              labelStyle={{ color: palette.grey[200], textAlign: 'center' }}
              cursor={{ strokeDasharray: '3 3' }}
            />
            <ZAxis type="number" range={[20]} />
            <Scatter
              name="Relacion de gastos del producto"
              data={productExpenseData}
              fill={palette.tertiary[500]}
            />
          </ScatterChart>
        </ResponsiveContainer>
      </DashboardBox>
    </>
  );
};
