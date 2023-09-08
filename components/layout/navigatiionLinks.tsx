'use client';
import { cn } from '@/libs/utils';
import { Montserrat } from 'next/font/google';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const montserrat = Montserrat({ weight: '500', subsets: ['latin'] });


const NavigationLinks = ({ href, icon, title, color }: any) => {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      key={href}
      className={cn(
        'text-base !font-medium no-underline  group flex !py-4 w-full justify-start relative  cursor-pointer hover:text-[#FE9900]  transition',
        montserrat.className,
        pathname === href
          ? 'text-[#FE9900] bg-opacity-10  border-solid border-r-[1px] border-[#FE9900]'
          : 'text-[#CECECE]'
      )}
    >
      <div className="flex items-center flex-1 px-[60px]">
        <div className={cn('pr-4', pathname === href && color)}>{icon}</div>
        {title}
      </div>
    </Link>
  );
};

export default NavigationLinks;
