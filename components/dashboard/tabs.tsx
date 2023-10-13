import { Button } from '@/components/ui/button';
import { cn } from '@/libs/utils';
import React from 'react';

interface TabButtonProps {
  name: string;
  activeTab: string;
  handleClick: () => void;
  index: number;
  tabs: Array<string>;
}

const TabButton: React.FC<TabButtonProps> = ({
  name,
  handleClick,
  activeTab,
  index,
  tabs,
}) => (
  <Button
    disabled={name === 'Yearly' || name === 'Weekly' || name === 'Daily'}
    className={cn(
      '!px-[32px]',
      name === activeTab ? 'bg-[#FE9900] !px-[32px] !text-[#fff]' : '!text-[#CECECE]',
      name === 'Daily' ? '!px-0' : '!px-[32px]',
      name === "Yearly" ? "!pr-0" : ''
    )}
    variant={'outline'}
    onClick={handleClick}
  >
    {name}
  </Button>
);

interface TabProps {
  tabs: Array<string>;
  activeTab: string;
  setActiveTab: (item: string) => void;
}

const Tabs: React.FC<TabProps> = ({ tabs, setActiveTab, activeTab }) => {
  return (
    <div className="!py-4 bg-white !px-10 inline-block mb-[32px] rounded-[10000px]">
      {tabs.map((item, index) => (
        <TabButton
          key={index}
          name={item}
          activeTab={activeTab}
          handleClick={() => setActiveTab(item)}
          index={index}
          tabs={tabs}
        />
      ))}
    </div>
  );
};

export default Tabs;
