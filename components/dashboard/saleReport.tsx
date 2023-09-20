import type { NextPage } from "next";
import Icon from '../global/Icons';

const SalesReportContainer: NextPage = () => {
  return (
    <div className="w-full py-[32px]">
      <div className=" bg-white rounded-3xl ">
        <Icon.NoRecord className="object-cover w-full " />
      </div>
    </div>
  );
};

export default SalesReportContainer;
