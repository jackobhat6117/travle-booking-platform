"use client";
import { Button } from "@/components/ui/button";
import landingPageMain from "../assets/images/landing_page_main.svg";
import Image from "next/image";
import headerLogo from "../assets/images/logo.svg";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { RiLoginCircleLine } from "react-icons/ri";
export default function Home() {
  return (
    <div className="p-2">
      <div className="z-10 w-full  items-center justify-between font-mono text-sm lg:flex">
        <div className="fixed left-0 top-0 flex w-full justify-start     text-xl">
          <Image
            src={headerLogo}
            style={{ height: "50px" }}
            className="ml-24"
            alt="Picture of the author"
          />
        </div>
        <div className="fixed left-0 top-0 flex w-full justify-end text-xl mt-2">
          <Link href="/auth/login">
            <Button className="my-1 mr-8">
              Login
              <RiLoginCircleLine className="ml-4"></RiLoginCircleLine>
            </Button>
          </Link>
        </div>
      </div>

      <div className="container mt-48">
        <div className="grid grid-cols-2">
          <div className="cols-6">
            <h4 className="text-green-600">Safaricom Distribution Platform</h4>
            <h3 className="text-6xl mt-8">
              Welcome to the Safaricom Sales and distribution channel!
            </h3>
            <h5 className="text-xl font-thin mt-16">
              M-PESA application portal enables business and individuals to
              apply for M-PESA solutions to collect and disburse funds. The
              portal provides easy step by step process to apply and track your
              application.
            </h5>
          </div>
          <div className="cols-6">
            <Image src={landingPageMain} className="ml-24" alt="landing_svg" />
          </div>
          <div className="flex justify-start mt-12">
            <Link href="/auth/login">
              <Button className="my-1 mr-8 h-10 text-lg">
                Login And Explore
                <ArrowRightIcon className=" ml-4 mr-2 mt-1  h-4 w-4" />
              </Button>
            </Link>
            <a href="#" className="ml-4 mt-3 text-green-600">
              Explore FAQ
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
