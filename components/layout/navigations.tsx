'use client';
import { navLinks } from '@/data/navLinks';
import Link from 'next/link';
import Icon from '../global/Icons';
import NavigationLinks from './navigatiionLinks';

const Navigation = () => {
  return (
    <aside className="space-y-4 pt-[90.94px] flex flex-col h-full border-r border-solid border-gray-50 bg-white text-white ">
      <div className=" flex-1">
        <Link href="/dashboard" passHref>
          <div className="flex items-center  pl-[60px] pr-[60.31px] pb-[64.18px] ">
            <div className="relative mr-4">
              <Icon.LogoIcon width="166.69" />
            </div>
          </div>
        </Link>
        <div className="space-y-1  h-[calc(100vh-200px)] overflow-y-auto transition-all ease-in scrollbar-thin hover:scrollbar-thumb-[#FE9900] hover:scrollbar-track-gray-200  scrollbar-track-rounded-full">
          {navLinks().map((route, index) => (
            <NavigationLinks key={index} {...route} />
          ))}
          <div className="relative">
            <div className="absolute bottom-[-300px] right-0 left-0">
              <hr className="border-t-1 border-[#DEDEDE] !mt-[50px] !mb-[92px] relative mx-10"></hr>
              <div
                tabIndex={0}
                role="button"
                aria-label="Log-out"
                className="text-[#CECECE] flex pl-[60px] text-16 "
              >
                <Icon.LogoutIcon />
                <div className="px-4 pb-20">Log-out</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Navigation;
