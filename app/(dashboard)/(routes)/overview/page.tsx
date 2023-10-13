'use client';
import DashTable from '@/components/dashboard/dashTable';
import DashTabs from '@/components/dashboard/dashTabs';
import Heading from '@/components/dashboard/heading';
// import SimpleSlider from '@/components/dashboard/simpleSlider';
import Icon from '@/components/global/Icons';
import Card from '@/components/global/cards';
import phone from '@/public/assets/images/phone.png';
import { GridColDef } from '@mui/x-data-grid';
import Image from 'next/image';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70 },
  {
    field: 'productImage',
    headerName: 'Product Image',
    width: 130,
    sortable: false,
    renderCell: (params) => (
      <Image src={params.value} alt={`image of ${params.value}`} />
    ),
  },
  { field: 'name', headerName: 'Name', width: 130 },
  {
    field: 'price',
    headerName: 'Price',
    width: 130,
    sortable: false,
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
    type: 'number',
    sortable: false,
    width: 90,
  },
  {
    field: 'status',
    headerName: 'Status',
    sortable: true,
    width: 130,
  },
  {
    field: 'actions',
    headerName: '',
    sortable: false,
    width: 10,
  },
];

const rows = [
  {
    id: 1,
    productImage: phone,
    name: 'Snow',
    price: '$1000',
    category: 'Jon',
    overallSold: 35,
    status: 'Jon',
    actions: ':',
  },
  {
    id: 2,
    productImage: phone,
    name: 'Lannister',
    price: '$1000',
    category: 'Cersei',
    overallSold: 42,
    status: 'Jon',
    actions: ':',
  },
  {
    id: 3,
    productImage: phone,
    name: 'Lannister',
    price: '$1000',
    category: 'Jaime',
    overallSold: 45,
    status: 'Jon',
    actions: ':',
  },
  {
    id: 4,
    productImage: phone,
    name: 'Stark',
    price: '$1000',
    category: 'Arya',
    overallSold: 16,
    status: 'Jon',
    actions: ':',
  },
  {
    id: 5,
    productImage: phone,
    name: 'Targaryen',
    price: '$1000',
    category: 'Daenerys',
    overallSold: 22,
    status: 'Jon',
    actions: ':',
  },
  {
    id: 6,
    productImage: phone,
    name: 'Melisandre',
    price: '$1000',
    category: null,
    overallSold: 150,
    status: 'Jon',
    actions: ':',
  },
  {
    id: 7,
    productImage: phone,
    name: 'Clifford',
    price: '$1000',
    category: 'Ferrara',
    overallSold: 44,
    status: 'Jon',
    actions: ':',
  },
  {
    id: 8,
    productImage: phone,
    name: 'Frances',
    price: '$1000',
    category: 'Rossini',
    overallSold: 36,
    status: 'Jon',
    actions: ':',
  },
  {
    id: 9,
    productImage: phone,
    name: 'Roxie',
    price: '$1000',
    category: 'Harvey',
    overallSold: 65,
    status: 'Jon',
    actions: ':',
  },
];

const itemData = [
  {title: 'tab 1', index: 0,},
  {title: 'tab 2', index: 1,},
  {title: 'tab 3', index: 2,},
  {title: 'tab 4', index: 3,},
];

const contentData = [
  {index: 0, children: <DashTable rows={rows} columns={columns} />},
  {index: 1, children: <DashTable rows={rows} columns={columns} />},
  {index: 2, children: <DashTable rows={rows} columns={columns} />},
  {index: 3, children: <DashTable rows={rows} columns={columns} />},
]

const Overview = () => {
  return (
    <div className=" bg-[#F7F7F7] text-black px-[30px] md:px-[60px] pt-[90px] ">
      <Heading title="Overview" />
      <hr className="border-t-1 border-[#DEDEDE] my-[61px]"></hr>
      <div className="mb-8 grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
        <Card
          title="Revenue"
          amount={'₦0.00'}
          color="text-[#1C9922]"
          icon={<Icon.NairaIcon />}
        />
        <Card
          title="Purchase"
          amount={'0.00'}
          color="text-[#F0471D]"
          icon={<Icon.PurchaseIcon />}
        />
        <Card
          title="Refunds"
          amount={'0.00'}
          color="text-[#1C9922]"
          icon={<Icon.RefundIcon />}
        />
      </div>
      <div className="w-full pb-8">
        <DashTabs
          tabsList={itemData}
          tabsContentList={contentData}
        />
      </div>
    </div>
  )
}

export default Overview