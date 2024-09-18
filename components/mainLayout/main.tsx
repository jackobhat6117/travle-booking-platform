import { ReactNode } from "react";
import Header from "./header";
import Sidebar from "./heroSection";
interface MainLayoutProps {
    children: ReactNode;
  }
export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="w-full h-full">  
      <div className="bg-black h-full">
        <Header></Header>  
      </div>

      <div className="">
        {children}
        </div>
    </div>
  );
}
