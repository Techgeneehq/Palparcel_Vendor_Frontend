import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import phone from '@/public/assets/images/phone.png'
import Image from 'next/image';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'productImage', headerName: 'Product Image', width: 130, sortable: false, renderCell: (params) => <Image src={params.value} alt={`image of ${params.value}`} /> },
  { field: 'name', headerName: 'Name', width: 130 },
  {
    field: 'price',
    headerName: 'Price',
    type: 'number',
    width: 90,
    sortable: false
  },
  {
    field: 'category',
    headerName: 'Category',
    sortable: true,
    width: 160,
  },
  {
    field: 'overallSold',
    headerName: 'Overall Sold',
    sortable: false,
    width: 160,
  },
  {
    field: 'status',
    headerName: 'Status',
    sortable: true,
    width: 160,
  },
  {
    field: 'actions',
    headerName: '',
    sortable: false,
    width: 10,
  },
];

const rows = [
  { id: 1, productImage: phone, name: 'Snow', category: 'Jon', overallSold: 35, status: 'Jon', actions: ":"},
  { id: 2, productImage: phone, name: 'Lannister', category: 'Cersei', overallSold: 42, status: 'Jon', actions: ":"},
  { id: 3, productImage: phone, name: 'Lannister', category: 'Jaime', overallSold: 45, status: 'Jon', actions: ":"},
  { id: 4, productImage: phone, name: 'Stark', category: 'Arya', overallSold: 16, status: 'Jon', actions: ":"},
  { id: 5, productImage: phone, name: 'Targaryen', category: 'Daenerys', overallSold: 22, status: 'Jon', actions: ":"},
  { id: 6, productImage: phone, name: 'Melisandre', category: null, overallSold: 150, status: 'Jon', actions: ":"},
  { id: 7, productImage: phone, name: 'Clifford', category: 'Ferrara', overallSold: 44, status: 'Jon', actions: ":"},
  { id: 8, productImage: phone, name: 'Frances', category: 'Rossini', overallSold: 36, status: 'Jon', actions: ":"},
  { id: 9, productImage: phone, name: 'Roxie', category: 'Harvey', overallSold: 65, status: 'Jon', actions: ":"},
];


const DashTable = () => {
  return (
    <div suppressHydrationWarning style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
      />
    </div>
  )
}

export default DashTable