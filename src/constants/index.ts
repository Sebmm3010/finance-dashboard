import { GridColDef } from '@mui/x-data-grid/models';

export const gridTemplateLg = `
  "a b c"
  "a b c"
  "a b c"
  "a b f"
  "d e f"
  "d e f"
  "d h i"
  "g h i"
  "g h j"
  "g h j"
`;

export const gridTemplateSm = `
  "a"
  "a"
  "a"
  "a"
  "b"
  "b"
  "b"
  "b"
  "c"
  "c"
  "c"
  "d"
  "d"
  "d"
  "e"
  "e"
  "f"
  "f"
  "f"
  "g"
  "g"
  "g"
  "h"
  "h"
  "h"
  "h"
  "i"
  "i"
  "j"
  "j"
`;

export const pieColors = ['#5e490a', '#f4d474'];

export const productColumns: GridColDef[] = [
  {
    field: '_id',
    headerName: 'id',
    flex: 1
  },
  {
    field: 'expense',
    headerName: 'Gasto',
    flex: 0.5,
    renderCell: (params) => `${params.value}`
  },
  {
    field: 'price',
    headerName: 'Precio',
    flex: 0.5,
    renderCell: (params) => `${params.value}`
  }
];

export const transactionColumns: GridColDef[] = [
  {
    field: '_id',
    headerName: 'id',
    flex: 1
  },
  {
    field: 'buyer',
    headerName: 'Comprador',
    flex: 0.67
  },
  {
    field: 'amount',
    headerName: 'Total',
    flex: 0.35,
    renderCell: (params) => `${params.value}`
  },
  {
    field: 'productIds',
    headerName: 'Cantidad',
    flex: 0.3,
    renderCell: (params) => params.value.length
  }
];
