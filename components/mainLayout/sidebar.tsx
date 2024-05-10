"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { permissionMapper } from "./sideBarItems";
import { FiBellOff } from "react-icons/fi";
import { HomeIcon, PackageIcon, SettingsIcon, UserIcon } from "lucide-react";
import {
  AccordionTrigger,
  AccordionContent,
  AccordionItem,
  Accordion,
} from "@/components/ui/accordion";
import {
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenu,
} from "@/components/ui/dropdown-menu";

export default function Sidebar() {
  const demoPermission = [
    "view parentItem",
    "view childItemOne",
    "view dashboard",
    "view users",
    "view roles_and_permission",
  ];
  const { items, parentItems } = permissionMapper(demoPermission);
 

  return (
    <div className="hidden sticky left-0 z-10 border-r bg-gray-100/40 dark:bg-gray-800/40 lg:block shadow-xl">
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="flex h-[64px] items-center border-b px-6">
          <Link className="flex items-center gap-2 font-semibold" href="#">
            <h5>Safaricom Et</h5>
          </Link>
          <Button className="ml-auto h-8 w-8" size="icon" variant="outline">
            <FiBellOff className="h-4 w-4" />
            <span className="sr-only">Toggle notifications</span>
          </Button>
        </div>
        <div className="flex-1 overflow-auto py-2">
          <nav className="grid items-start px-4 text-sm font-medium">
    

            {/* Sidebar Items Render */}
            {items.map((item, index) => (
              <Link
                key={index}
                className="flex items-center gap-3 rounded-lg px-3 font-bold  py-2 text-secondary text-md transition-all hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-50"
                href={item.to} 
              >
                {item.icon && <item.icon className="h-4 w-4" />}
                {item.name}
              </Link>
            ))}

            {/* Sidebar Parent Items Render */}
            {/* {parentItems.map((parentItem, index) => (
                    
                  ))} */}

            {/* <Accordion className="grid gap-2" collapsible type="single">
              <AccordionItem value="products">
                <AccordionTrigger className="flex items-center gap-3 rounded-lg px-3 py-2 text-secondary no-underline transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50">
                  <PackageIcon className="h-4 w-4" />
                  Products
                </AccordionTrigger>
                <AccordionContent className="space-y-1 pl-8">
                  <Link
                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                    href="#"
                  >
                    All Products
                  </Link>
                  <Link
                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                    href="#"
                  >
                    Categories
                  </Link>
                  <Link
                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                    href="#"
                  >
                    Inventory
                  </Link>
                  <Link
                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                    href="#"
                  >
                    Pricing
                  </Link>
                  <DropdownMenu>
                    <DropdownMenuTrigger className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50">
                      Product Variants
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="space-y-1 pl-8">
                      <DropdownMenuItem>
                        <Link
                          className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                          href="#"
                        >
                          Color Variants
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Link
                          className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                          href="#"
                        >
                          Size Variants
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Link
                          className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                          href="#"
                        >
                          Material Variants
                        </Link>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </AccordionContent>
              </AccordionItem>
            </Accordion> */}
          </nav>
        </div>
      </div>
    </div>
  );
}
