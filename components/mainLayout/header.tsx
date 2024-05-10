import { HomeIcon, UserIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import { BellIcon } from "@radix-ui/react-icons";
import { DropdownMenu } from "../ui/dropdown-menu";
import {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import Image from "next/image";

export default function Header() {
  return (
    <header className="sticky top-0 z-10 mb-4 border-b bg-white/80 px-4 py-3 backdrop-blur-sm dark:border-gray-800 dark:bg-gray-900/80 md:px-6">
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-semibold">Dashboard</h1>
        <div className="flex items-center gap-4">
          <Button size="icon" variant="ghost">
            <BellIcon className="h-5 w-5" />
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button size="icon" variant="ghost">
                {/* <Image
                  alt="Avatar"
                  className="rounded-full"
                  height={32}
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "32/32",
                    objectFit: "cover",
                  }}
                  width={32}
                /> */}
                <UserIcon></UserIcon>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>John Doe</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
