"use client";

import Image from "next/image";
import landingFirstImage from "../../../assets/images/landing_first_page.png";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import headerLogo from "../../../assets/images/logo.svg";
import { HomeIcon } from "@radix-ui/react-icons";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useRouter } from "next/navigation";

const LoginFormSchema = z.object({
  username: z.string().min(4, {
    message: "Username must be at least 4 characters.",
  }),
  password: z.string().min(1, {
    message: "Password cannot be empty.",
  }),
});

export default function LoginPage() {
  const router = useRouter();
  const form = useForm<z.infer<typeof LoginFormSchema>>({
    resolver: zodResolver(LoginFormSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  function onSubmit(data: z.infer<typeof LoginFormSchema>) {
    router.push("/dashboard");
  }
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
                <h5 className="text-2xl">Login to your account</h5>
              </div>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="w-full space-y-6"
                >
                  <div className="flex justify-center mt-24">
                    <div className="grid w-full max-w-sm items-center gap-1.5">
                      <FormField
                        control={form.control}
                        name="username"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Username</FormLabel>
                            <FormControl>
                              <Input
                              type="email"
                                placeholder="name@example.com"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>
                  <div className="flex justify-center mt-8">
                    <div className="grid w-full max-w-sm items-center gap-1.5">
                      <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                              <Input type="password"
                               placeholder="**************"
                              {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>
                  <div className="flex justify-end max-w-xl mt-8 -ml-12">
                    <Link
                      href="/auth/forgotPassword"
                      className="text-green-600 "
                    >
                      Forgot Password ?
                    </Link>
                  </div>
                  <div className="flex justify-center  mt-8">
                    <Button type="submit" className="w-96  block">
                      Login
                    </Button>
                  </div>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
