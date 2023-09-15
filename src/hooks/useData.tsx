import {
  useGetKpisQuery,
  useGetProductsQuery,
  useGetTransactionsQuery
} from '@/api';
import { useMemo } from 'react';

export const useData = () => {
  const { data: kpisData } = useGetKpisQuery('');
  const { data: productsData } = useGetProductsQuery('');
  const { data: transactionsData } = useGetTransactionsQuery('');

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

  const pieChartData = useMemo(() => {
    if (kpisData) {
      const totalExpenses = kpisData[0].totalExpenses;
      return Object.entries(kpisData[0].expensesByCategory).map(
        ([key, value]) => {
          return [
            {
              name: key,
              value
            },
            {
              name: `${key} del total`,
              value: totalExpenses - value
            }
          ];
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
    pieChartData,
    pieData,
    productExpenseData,
    productsData,
    revenueExpenses,
    revenueProfit,
    transactionsData
  };
};
