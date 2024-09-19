import { ReactNode } from "react";
import Header from "./header";

import TravelBookingPlatform from "../custom/promotionsection";
interface MainLayoutProps {
    children: ReactNode;
  }
export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="w-full">  
      <div className="bg-black">
        <Header></Header>  
      
      </div>
      <div className="">
        {children}
        </div>
       
    </div>
  );
}
