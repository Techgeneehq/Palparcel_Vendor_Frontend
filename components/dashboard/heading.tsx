import { cn } from '@/lib/utils';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ weight: ["400", "500"], subsets: ['latin'] });

type HeadingProps = {
  title: string;
  desc?: string;
};

const Heading = ({ title, desc }: HeadingProps) => {
  return (
    <div>
      <h3
        className={cn(
          'text-[#001128] text-base md:text-2xl font-medium',
          montserrat.className
        )}
      >
        {title}
      </h3>
      <p className="text-[#969696] font-normal text-lg">{desc}</p>
    </div>
  );
};

export default Heading;
