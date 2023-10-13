'use client'
import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

type DashTabsProps = {
  tabsList: TabsList[],
  tabsContentList: TabsContentList[],
}

interface TabsList {
  index: number;
  title: string;
}

interface TabsContentList {
  children: React.ReactElement;
  index: any;
}

const CustomTabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
      className='rounded-3xl bg-white p-8'
    >
      {value === index && (
        <div className='p-3'>
          <p>{children}</p>
        </div>
      )}
    </div>
  );
}

const a11yProps = (index: any) => {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}


const DashTabs = (props: DashTabsProps) => {
  const { tabsList, tabsContentList } = props;
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: any) => {
    setValue(newValue);
  };

  return (
    <>
      <div className='w-full'>
        <div className='lg:w-1/2 w-full bg-white px-10 py-4 rounded-full mb-8'>
          <Tabs value={value} variant="fullWidth" onChange={handleChange} aria-label="basic tabs example" className=''>
            {tabsList.map(({index, title}) => (
              <Tab label={title} {...a11yProps({index})} key={index} />
            ))}
          </Tabs>
        </div>
        {tabsContentList.map(({ children, index }) => (
          <CustomTabPanel value={value} index={index} key={index}>
            {children}
          </CustomTabPanel>
        ))}
      </div>
    </>
  )
}

export default DashTabs