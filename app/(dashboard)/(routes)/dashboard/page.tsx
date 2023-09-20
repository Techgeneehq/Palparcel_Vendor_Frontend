'use client';
import Header from '@/components/dashboard/Header';
import SalesReportContainer from '@/components/dashboard/saleReport';
import SimpleSlider from '@/components/dashboard/simpleSlider';
import Icon from '@/components/global/Icons';
import Card from '@/components/global/cards';

export default function DashboardPage() {
  //   const router = useRouter();
  return (
  <div>
      <div className="!bg-[#F7F7F7] relative  text-black px-[30px] md:px-[60px] pt-[90px] ">
      <Header />
      <hr className="border-t-1 border-[#DEDEDE] my-[61px]"></hr>
      <div className="mb-8 grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
        <Card
          title="Total Sales"
          amount={'₦0.00'}
          color="text-[#F0471D]"
          icon={<Icon.NairaIcon />}
        />
        <Card
          title="Product"
          amount={'0.00'}
          color="text-[#1C9922]"
          icon={<Icon.ProductDIcon />}
        />
        <Card
          title="Order"
          amount={'0.00'}
          color="text-[#1C9922]"
          icon={<Icon.OrderDIcon />}
        />
      </div>

      <SimpleSlider/>
      <SalesReportContainer />

    </div>
  </div>
  );
}
