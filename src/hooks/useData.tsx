import { useMemo } from 'react';
import regression, { DataPoint } from 'regression';
import {
  useGetKpisQuery,
  useGetProductsQuery,
  useGetTransactionsQuery
} from '@/api';

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
          Ganancias: revenue,
          Gastos: expenses
        };
      });
    }
  }, [kpisData]);

  const revenueProfit = useMemo(() => {
    if (kpisData) {
      return kpisData[0].monthlyData.map(({ month, revenue, expenses }) => {
        return {
          name: month.substring(0, 3),
          ganancias: revenue,
          beneficios: (revenue - expenses).toFixed(2)
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
            'Gastos operativos': operationalExpenses,
            'Gastos no operativos': nonOperationalExpenses
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

  const formattedData = useMemo(() => {
    if (!kpisData) return [];
    const monthData = kpisData[0].monthlyData;
    const formatted = monthData.map(({ revenue }, i) => {
      return [i, revenue];
    });
    const regressionLine = regression.linear(formatted as DataPoint[]);
    return monthData.map(({ month, revenue }, i) => {
      return {
        name: month,
        'Ingresos actuales': revenue,
        Regresion: regressionLine.points[i][1],
        'Prediccion de ingresos': regressionLine.predict(i + 12)[1]
      };
    });
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
    formattedData,
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
