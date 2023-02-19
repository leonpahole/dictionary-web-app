import { Navbar } from "@/components/layout/Navbar/Navbar";

interface IProps {
  children?: React.ReactNode;
}

export const NavbarLayout = ({ children }: IProps) => {
  return (
    <div className="min-h-screen bg-white px-10 pb-30.75 pt-14.5 text-gray-500 dark:bg-gray-700 dark:text-white">
      <div className="mx-auto max-w-page">
        <Navbar />
        <main>{children}</main>
      </div>
    </div>
  );
};
