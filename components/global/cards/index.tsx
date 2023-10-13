import { cn } from '@/lib/utils';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ weight: ['400', '500'], subsets: ['latin'] });

type CardProps = {
  title: string;
  icon: any;
  color: string;
  amount: string;
};


const Card = ({ title, icon, amount, color }: CardProps) => {
  return (
    <div className="bg-white rounded-3xl  h-[165px] pt-10 pb-10 pl-10 pr-8">
      <div className="flex justify-between">
        <div>
          <div className="flex items-center">
            {icon}
            <div
              className={cn(
                'pl-4 text-[#001128]  text-base font-mont font-normal',
              )}
            >
              {title}
            </div>
          </div>
          <div
            className={cn(
              'pt-4 text-[#001128]  text-2xl  font-medium font-mont',
            )}
          >
           {amount}
          </div>
        </div>
        <div
          className={cn(
            'text-right text-base  font-medium leading-relaxed',
            color,
          )}
        >
          0
        </div>
      </div>
    </div>
  );
};

export default Card
