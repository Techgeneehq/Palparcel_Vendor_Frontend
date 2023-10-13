'use client';
import DashTable from '@/components/dashboard/dashTable';
import DashTabs from '@/components/dashboard/dashTabs';
import Heading from '@/components/dashboard/heading';
// import SimpleSlider from '@/components/dashboard/simpleSlider';
import Icon from '@/components/global/Icons';
import Card from '@/components/global/cards';

const itemData = [
  {title: 'tab 1', index: 0,},
  {title: 'tab 2', index: 1,},
  {title: 'tab 3', index: 2,},
  {title: 'tab 4', index: 3,},
];

const contentData = [
  {index: 0, children: <DashTable />},
  {index: 1, children: <Icon.PurchaseIcon />},
  {index: 2, children: <Icon.RefundIcon />},
  {index: 3, children: <Icon.CategoryIcon />},
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