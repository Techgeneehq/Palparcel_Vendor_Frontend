import { Button } from '@/components/ui/button';
import { cn } from '@/libs/utils';


interface TabButtonProps {
  name: string;
  activeTab:string;
  handleClick: () => void;
}

interface TabProps {
  tabs: Array<string>;
  activeTab: string;
  // eslint-disable-next-line no-unused-vars
  setActiveTab: (item: string) => void;
}

const TabButton = ({ name, handleClick, activeTab }: TabButtonProps) => (
  <Button
    disabled={name === 'Yearly' || name === 'Weekly' || name === 'Daily'}
    className={cn(
      '',
      name === activeTab ? 'bg-[#FE9900] !text-[#fff]' : '!text-[#CECECE]'
    )}
    variant={'outline'}
    onClick={handleClick}
  >
    {name}
  </Button>
);

const Tabs = ({ tabs, setActiveTab, activeTab }: TabProps) => {
  return (
    <div className="!py-4 !px-10 bg-white inline-block mb-[32px] rounded-[10000px]">
      {tabs.map((item: any, index: any) => (
        <TabButton
          key={index}
          name={item}
          activeTab={activeTab}
          handleClick={() => setActiveTab(item)}
        />
      ))}
    </div>
  );
};

export default Tabs;
