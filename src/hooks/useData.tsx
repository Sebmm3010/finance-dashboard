import { useGetKpisQuery } from '@/api';
import { useMemo } from 'react';

export const useData = () => {
  const { data } = useGetKpisQuery('');

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

  const revenueProfit = useMemo(() => {
    if (data) {
      return data[0].monthlyData.map(({ month, revenue, expenses }) => {
        return {
          name: month.substring(0, 3),
          revenue,
          profit: (revenue - expenses).toFixed(2)
        };
      });
    }
  }, [data]);

  return {
    revenueExpenses,
    revenueProfit
  };
};
