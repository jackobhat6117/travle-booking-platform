import { ReactNode } from "react";
import Header from "./header";
import Sidebar from "./sidebar";
interface MainLayoutProps {
    children: ReactNode;
  }
export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="grid min-h-screen w-full grid-cols-[280px_1fr]">
      <Sidebar></Sidebar>
      <div className="flex flex-col">
        <Header></Header>
        <div className="p-12">
        {children}
        </div>
      </div>
    </div>
  );
}
