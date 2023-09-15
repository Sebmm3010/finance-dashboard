import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Line,
  Legend,
  LineChart,
  BarChart,
  Bar
} from 'recharts';
import { useTheme } from '@mui/material';
import { useData } from '@/hooks';
import { BoxHeader, DashboardBox } from '..';

export const Row1 = () => {
  const { revenueExpenses, revenueProfit } = useData();
  const { palette } = useTheme();
  return (
    <>
      <DashboardBox gridArea="a">
        <BoxHeader
          title="Ganancias y gastos"
          subTitle="Ganacias en linea superior, gastos en linea inferior"
          sideText="+4%"
        />
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            width={500}
            height={400}
            data={revenueExpenses}
            margin={{
              top: 15,
              right: 25,
              left: -10,
              bottom: 60
            }}
          >
            <defs>
              <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor={palette.primary[300]}
                  stopOpacity={0.5}
                />
                <stop
                  offset="95%"
                  stopColor={palette.primary[300]}
                  stopOpacity={0}
                />
              </linearGradient>
              <linearGradient id="colorExpenses" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor={palette.primary[300]}
                  stopOpacity={0.5}
                />
                <stop
                  offset="95%"
                  stopColor={palette.primary[300]}
                  stopOpacity={0}
                />
              </linearGradient>
            </defs>
            <XAxis
              dataKey="name"
              tickLine={false}
              style={{ fontSize: '10px' }}
            />
            <YAxis
              tickLine={false}
              axisLine={{ strokeWidth: '0' }}
              style={{ fontSize: '10px' }}
              domain={[8000, 23000]}
            />
            <Tooltip
              contentStyle={{ backgroundColor: '#1f2026' }}
              labelStyle={{ color: palette.grey[200], textAlign: 'center' }}
            />
            <Area
              type="monotone"
              dataKey="Ganancias"
              dot={true}
              stroke={palette.primary.main}
              fillOpacity={1}
              fill="url(#colorRevenue)"
            />
            <Area
              type="monotone"
              dataKey="Gastos"
              dot={true}
              stroke={palette.primary.main}
              fillOpacity={1}
              fill="url(#colorExpenses)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </DashboardBox>
      {/* Segundo columna primera grafica */}
      <DashboardBox gridArea="b">
        <BoxHeader
          title="Beneficios y ganancias"
          subTitle="Beneficios en linea superior, ganancias en linea inferior"
          sideText="+4%"
        />
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            width={500}
            height={400}
            data={revenueProfit}
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
              tickLine={false}
              axisLine={false}
              style={{ fontSize: '10px' }}
            />
            <Tooltip
              contentStyle={{ backgroundColor: '#1f2026' }}
              labelStyle={{ color: palette.grey[200], textAlign: 'center' }}
            />
            <Legend
              height={20}
              wrapperStyle={{
                margin: '0 0 10px 0'
              }}
            />
            <Line
              yAxisId="left"
              type="monotone"
              dataKey="beneficios"
              stroke={palette.tertiary[500]}
            />
            <Line
              yAxisId="right"
              type="monotone"
              dataKey="ganancias"
              stroke={palette.primary.main}
            />
          </LineChart>
        </ResponsiveContainer>
      </DashboardBox>
      {/* Tercera columna primera grafica */}
      <DashboardBox gridArea="c">
        <BoxHeader
          title="Ganancias mes a mes"
          subTitle="Grafica que reprentan las ganancias de mes a mes"
          sideText="+4%"
        />
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={300}
            data={revenueProfit}
            margin={{
              top: 17,
              right: 15,
              left: -5,
              bottom: 58
            }}
          >
            <defs>
              <linearGradient id="colorRevenueBar" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor={palette.primary[500]}
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor={palette.primary[300]}
                  stopOpacity={0}
                />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} stroke={palette.grey[800]} />
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              style={{ fontSize: '10px' }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              style={{ fontSize: '10px' }}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: '#1f2026',
                color: palette.primary[500]
              }}
              labelStyle={{ color: palette.grey[200], textAlign: 'center' }}
              cursor={{ fill: 'transparent' }}
            />
            <Bar dataKey="ganancias" fill="url(#colorRevenueBar)" />
          </BarChart>
        </ResponsiveContainer>
      </DashboardBox>
    </>
  );
};
