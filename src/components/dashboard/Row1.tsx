import { useGetKpisQuery } from '@/api';
import { DashboardBox } from '..';

export const Row1 = () => {
  const { data } = useGetKpisQuery('');
  return (
    <>
      <DashboardBox gridArea="a"></DashboardBox>
      <DashboardBox gridArea="b"></DashboardBox>
      <DashboardBox gridArea="c"></DashboardBox>
      <DashboardBox gridArea="d"></DashboardBox>
    </>
  );
};
