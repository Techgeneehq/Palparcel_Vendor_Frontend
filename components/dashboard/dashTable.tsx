/* eslint-disable no-undef */
import { DataGrid, GridColDef } from '@mui/x-data-grid';


interface DashTableProps {
  columns: GridColDef[],
  rows: Rows[]
}

interface Rows {
  [key: string]: any;
}

const DashTable = (props: DashTableProps) => {
  const { columns, rows } = props;
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
  );
};

export default DashTable;
