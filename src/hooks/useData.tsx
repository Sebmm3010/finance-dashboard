import { useGetKpisQuery, useGetProductsQuery } from '@/api';
import { useMemo } from 'react';

export const useData = () => {
  const { data: kpisData } = useGetKpisQuery('');
  const { data: productsData } = useGetProductsQuery('');

  // ? KPI data
  const revenueExpenses = useMemo(() => {
    if (kpisData) {
      return kpisData[0].monthlyData.map(({ month, revenue, expenses }) => {
        return {
          name: month.substring(0, 3),
          revenue,
          expenses
        };
      });
    }
  }, [kpisData]);

  const revenueProfit = useMemo(() => {
    if (kpisData) {
      return kpisData[0].monthlyData.map(({ month, revenue, expenses }) => {
        return {
          name: month.substring(0, 3),
          revenue,
          profit: (revenue - expenses).toFixed(2)
        };
      });
    }
  }, [kpisData]);

  const operationalExpenses = useMemo(() => {
    if (kpisData) {
      return kpisData[0].monthlyData.map(
        ({ month, operationalExpenses, nonOperationalExpenses }) => {
          return {
            name: month.substring(0, 3),
            operationalExpenses,
            nonOperationalExpenses
          };
        }
      );
    }
  }, [kpisData]);

  // ? Products Data
  const pieData = [
    { name: 'Grupo A', value: 600 },
    { name: 'Grupo B', value: 400 }
  ];
  const productExpenseData = useMemo(() => {
    if (productsData) {
      return productsData.map(({ _id, price, expense }) => {
        return {
          id: _id,
          price,
          expense
        };
      });
    }
  }, [productsData]);
  return {
    operationalExpenses,
    pieData,
    productExpenseData,
    revenueExpenses,
    revenueProfit
  };
};
