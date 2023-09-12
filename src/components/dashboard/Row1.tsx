import { useMemo } from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';
import { useTheme } from '@mui/material';
import { useGetKpisQuery } from '@/api';
import { DashboardBox } from '..';

export const Row1 = () => {
  const { data } = useGetKpisQuery('');

  const { palette } = useTheme();
  const revenueExpenses = useMemo(() => {
    if (data) {
      return data[0].monthlyData.map(({ month, revenue, expenses }) => {
        return {
          name: month.substring(0, 3),
          revenue,
          expenses
        };
      });
    }
  }, [data]);
  return (
    <>
      <DashboardBox gridArea="a">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            width={500}
            height={400}
            data={revenueExpenses}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
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
              labelStyle={{ color: palette.grey[200] }}
            />
            <Area
              type="monotone"
              dataKey="revenue"
              dot={true}
              stroke={palette.primary.main}
              fillOpacity={1}
              fill="url(#colorRevenue)"
            />
            <Area
              type="monotone"
              dataKey="expenses"
              dot={true}
              stroke={palette.primary.main}
              fillOpacity={1}
              fill="url(#colorExpenses)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </DashboardBox>
      <DashboardBox gridArea="b"></DashboardBox>
      <DashboardBox gridArea="c"></DashboardBox>
      <DashboardBox gridArea="d"></DashboardBox>
    </>
  );
};
