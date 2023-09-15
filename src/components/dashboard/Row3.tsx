import { DataGrid } from '@mui/x-data-grid';
import { Box, useTheme, Typography } from '@mui/material';
import { Cell, Pie, PieChart } from 'recharts';
import { BoxHeader, DashboardBox, FlexBetween } from '..';
import { useData } from '@/hooks';
import { pieColors, productColumns, transactionColumns } from '@/constants';

export const Row3 = () => {
  const { palette } = useTheme();
  const { productsData, transactionsData, pieChartData } = useData();
  return (
    <>
      <DashboardBox gridArea="g">
        <BoxHeader
          title="Lista de productos"
          sideText={`${productsData?.length} Productos`}
        />
        <Box
          mt="0.5rem"
          p="0 0.5rem"
          height="75%"
          sx={{
            '& .MuiDataGrid-root': {
              color: palette.grey[300],
              border: 'none'
            },
            '& .MuiDataGrid-cell': {
              borderBottom: `1px solid ${palette.grey[800]} !important`
            },
            '& .MuiDataGrid-columnHeaders': {
              borderBottom: `1px solid ${palette.grey[800]} !important`
            },
            '& .MuiDataGrid-columnSeparator': {
              visibility: 'hidden'
            }
          }}
        >
          <DataGrid
            rows={productsData || []}
            columns={productColumns}
            columnHeaderHeight={25}
            rowHeight={35}
            hideFooter={true}
          />
        </Box>
      </DashboardBox>
      {/* Segunda columna ultima fila */}
      <DashboardBox gridArea="h">
        <BoxHeader
          title="Ordenes recientes"
          sideText={`${transactionsData?.length} Últimas transacciones`}
        />
        <Box
          mt="1rem"
          p="0 0.5rem"
          height="80%"
          sx={{
            '& .MuiDataGrid-root': {
              color: palette.grey[300],
              border: 'none'
            },
            '& .MuiDataGrid-cell': {
              borderBottom: `1px solid ${palette.grey[800]} !important`
            },
            '& .MuiDataGrid-columnHeaders': {
              borderBottom: `1px solid ${palette.grey[800]} !important`
            },
            '& .MuiDataGrid-columnSeparator': {
              visibility: 'hidden'
            }
          }}
        >
          <DataGrid
            rows={transactionsData || []}
            columns={transactionColumns}
            columnHeaderHeight={25}
            rowHeight={35}
            hideFooter={true}
          />
        </Box>
      </DashboardBox>
      {/* Tercera columna ultima grafica 1 */}
      <DashboardBox gridArea="i">
        <BoxHeader title="Gastos por categoria" sideText="+4%" />
        <FlexBetween mt="0.5rem" gap="0.5rem" p="0 1rem" textAlign="center">
          {pieChartData?.map((data, i) => (
            <Box key={`${data[0].name}-${i}`}>
              <PieChart width={90} height={80}>
                <Pie
                  stroke="none"
                  data={data}
                  innerRadius={18}
                  outerRadius={38}
                  paddingAngle={2}
                  dataKey="value"
                >
                  {data.map((item, i) => (
                    <Cell key={`cell-${i}`} fill={pieColors[i]} />
                  ))}
                </Pie>
              </PieChart>
              <Typography variant="h5" textAlign="center">
                {data[0].name}
              </Typography>
            </Box>
          ))}
        </FlexBetween>
      </DashboardBox>
      {/* Tercera columna ultima grafica 2 */}
      <DashboardBox gridArea="j">
        <BoxHeader title="Resumen general" sideText="+15%" />
        <Box
          height="15px"
          margin="1.25rem 1rem 0.4rem 1rem"
          bgcolor={palette.primary[800]}
          borderRadius="1rem"
        >
          <Box
            height="15px"
            bgcolor={palette.primary[600]}
            borderRadius="1rem"
            width="30%"
          ></Box>
        </Box>
        <Typography margin="0 1rem" variant="h6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
          consequuntur ut odit voluptatem id eligendi, ratione sequi deserunt
          deleniti voluptas quisquam commodi perferendis, numquam consectetur
          cupiditate architecto earum saepe quod!
        </Typography>
      </DashboardBox>
    </>
  );
};
