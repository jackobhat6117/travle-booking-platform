import { HomeIcon, UserIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import { BellIcon } from "@radix-ui/react-icons";
import { DropdownMenu } from "../ui/dropdown-menu";
import Image from "next/image";


export default function Header() {
  return (
    <header className="flex items-center  flex-col ">
      <div className="pt-20 flex items-center justify-center flex-col">
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-white text-6xl text-center">
            Start selling travel today <p>on your own website </p>
          </h2>
          <p className="text-gray-600 my-5 font-sans">
            Customize your travel website, and start selling. Let&apos;s get
            your business off the ground with our intuitive tools!
          </p>
        </div>

        <Button variant="secondary" className="text-white w-40  py-5 px-24">
          Try it now
        </Button>
      </div>

      <div className="bg-white rounded-xl mt-20">
        <img src="images/Links Template 13.png" className="sm:h-full " />
      </div>
    </header>
  );
}
