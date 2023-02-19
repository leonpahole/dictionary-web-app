import { Navbar } from "@/components/layout/Navbar/Navbar";

interface IProps {
  children?: React.ReactNode;
}

export const NavbarLayout = ({ children }: IProps) => {
  return (
    <div className="min-h-screen bg-white px-6 py-6 text-gray-500 dark:bg-gray-700 dark:text-white md:px-10 md:py-14.5">
      <div className="mx-auto max-w-page">
        <Navbar />
        <main>{children}</main>
      </div>
    </div>
  );
};
