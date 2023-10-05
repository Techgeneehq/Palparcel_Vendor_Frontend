import type { NextPage } from "next";
import { useState } from 'react';
import Icon from '../global/Icons';
import Tabs from './tabs';


const tabs = ['Daily', 'Weekly', 'Monthly', 'Yearly'];

const SalesReportContainer: NextPage = () => {
     const [activeTab, setActiveTab] = useState(tabs[2]);


  return (
    <div className="w-full py-[32px]">
      <Tabs tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className=" bg-white rounded-3xl ">
        <Icon.NoRecord className="object-cover w-full " />
      </div>
    </div>
  );
};

export default SalesReportContainer;
