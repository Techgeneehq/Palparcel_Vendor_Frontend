import { cn } from '@/libs/utils';
import { Montserrat } from 'next/font/google';
import { useRouter } from 'next/navigation';
import React from 'react';
import Icon from '../Icons';


type GoBackButtonProps = {
  onClick?: () => void;
  label?: string;
  desc?: string;
  isIcon?: boolean;
};

const montserrat = Montserrat({ weight: '500', subsets: ['latin'] });


const GoBackButton = ({ label, isIcon, desc }: GoBackButtonProps) => {
  const router = useRouter();
  const handleClick = () => {
    router.back();
  };
  return (
    <React.Fragment>
      {isIcon ? (
        <button
          onClick={handleClick}
          type="button"
          className={cn(
            `flex items-center gap-[10px] text-black py-[90px] text-2xl`,
            montserrat.className
          )}
        >
          <Icon.goBackIcon />
          <span>{label}</span>
        </button>
      ) : (
        <div
          className={cn(
            `flex items-center gap-[10px] text-black py-[90px] text-2xl`,
            montserrat.className
          )}
        >
          <span>{label}</span>
          <div>{desc && desc}</div>
        </div>
      )}
    </React.Fragment>
  );
};

export default GoBackButton;
