import Image from "next/image";
import landingFirstImage from "../../../assets/images/landing_first_page.png";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import headerLogo from "../../../assets/images/logo.svg";
import { HomeIcon, ReloadIcon } from "@radix-ui/react-icons";
import { RefreshCwIcon } from "lucide-react";
export default function LoginPage() {
  return (
    <div>
      <div className="z-10 w-full  items-center justify-between font-mono text-sm lg:flex border-b">
        <div className="fixed left-0 top-0 flex w-full justify-start     text-xl">
          <Image
            src={headerLogo}
            style={{ height: "50px" }}
            className="ml-24"
            alt="Picture of the author"
          />
        </div>
        <div className="fixed left-0 top-0 flex w-full justify-end text-xl mt-2">
          <Link href="/">
            <Button className="my-1 mr-8">
              Home
              <HomeIcon className="ml-4"></HomeIcon>
            </Button>
          </Link>
        </div>
      </div>
      <div className="container mt-48">
        <div className="grid grid-cols-2">
          <div>
            <Image
              src={landingFirstImage}
              className="ml-24"
              alt="Picture of the author"
            />
          </div>
          <div className="bg-white -ml-8 rounded-l-3xl p-4 shadow-xl">
            <div className="grid grid-cols-1 ">
              <div className="flex justify-center mt-36">
                <h4 className="text-3xl">
                  Welcome to the Sales and Distribution Platform.
                </h4>
              </div>
              <div className="flex justify-center mt-4">
                <h5 className="text-2xl">Reset your password here
               
                </h5>
               
              </div>
              <div className="flex justify-center mt-24">
                <div className="grid w-full max-w-sm items-center gap-1.5">
                  <Label htmlFor="email" className="font-semibold">
                    Username
                  </Label>
                  <Input
                    type="email"
                    id="email"
                    placeholder="Email or Username"
                  />
                </div>
              </div>
          
              <div className="flex justify-center  mt-8">
                <Button className="w-96  block">Send Reset Link
 
               </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
