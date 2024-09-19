"use client"; 
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
} from "@/components/ui/card"; 
import { ResponsiveLine } from "@nivo/line";
import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from "@/components/ui/table";
import { DashboardIcon } from "@radix-ui/react-icons"; 
import MainLayout from "@/components/mainLayout/main";
import FastestWayToSellTravel from "@/components/custom/flightSection";
import TravelBookingPlatform from "@/components/custom/promotionsection";

export default function Page() {
  return (
    <MainLayout>
      <div className="h-full">
          <FastestWayToSellTravel />
          <TravelBookingPlatform />
         
        </div>

     
    </MainLayout>
  );
}
