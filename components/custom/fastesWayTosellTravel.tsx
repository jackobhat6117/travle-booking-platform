import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import ViewPage from './viewpage';


const FastestWayToSellTravel = () => {
  return (
    <div className="bg-white text-black ">
      <h1 className="text-3xl font-bold  flex items-center justify-center ">The fastest way to sell travel</h1>
      <div className="flex gap-4  justify-around my-20">
        
        <div className="">
          <div className="text-4xl bg-sky-100 w-20 p-4 flex items-center justify-center rounded-xl">1</div>
          <h3 className="text-xl font-extrabold">Subscribe</h3>
          <p>Subscribe to the website and start your journey.</p>
        </div>
        
        <div className="">
          <div className="text-4xl  bg-sky-100 w-20 p-4 flex items-center justify-center rounded-xl">2</div>
          <h3 className="text-xl font-extrabold">Customize</h3>
          <p>Subscribe to the website and start your journey.</p>
        </div>
        <div className="">
          <div className="text-4xl font-bold bg-sky-100 w-20 p-4 flex items-center justify-center rounded-xl">3</div>
          <h3 className="text-lg font-semibold">Start Selling</h3>
          <p>Subscribe to the website and start your journey.</p>
        </div>
      </div>
      <h2 className="text-2xl font-semibold mb-4 text-center my-20">Everything you need, in one link.</h2>


      <div>
        <ViewPage />
      </div>
    
    </div>
  );
};

export default FastestWayToSellTravel;
