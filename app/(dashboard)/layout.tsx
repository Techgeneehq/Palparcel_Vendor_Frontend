import Navigation from '@/components/layout/navigations';

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full relative">
      <div className="hidden h-full md:flex md:w-72 md:flex-col md:fixed md:inset-y-0 z-[80] bg-[#FFF] border-[#DEDEDE] border-[1px]">
        <Navigation />
      </div>
      <main className="md:pl-72">
        {children}
      </main>
    </div>
  );
};
export default DashboardLayout;
