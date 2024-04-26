"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { DataTable } from "@/components/ui/dataTable";
import { Button } from "@/components/ui/button";




import { ColumnDef } from "@tanstack/react-table"
 




export default function Home() {
  const handleClick = () => {
    console.log("Button clicked!");
  };
   type Payment = {
    id: string
    amount: number
    status: "pending" | "processing" | "success" | "failed"
    email: string
  }
   
  const columns: ColumnDef<Payment>[] = [
    {
      accessorKey: "status",
      header: "Status",
    },
    {
      accessorKey: "email",
      header: "Email",
    },
    {
      accessorKey: "amount",
      header: "Amount",
    },
  ]
  const data=[    {
    id: "728ed52f",
    amount: 100,
    status: "pending",
    email: "m@example.com",
  },]
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 text-xl">
          Get started by editing&nbsp;
          <code className="font-mono font-bold">app/page.tsx</code>
          <Button onClick={handleClick} className="mx-4">
            Button Demo
          </Button>
          <Dialog>
            <DialogTrigger asChild>
              <Button>Open Modal</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Are you absolutely sure?</DialogTitle>
                <DialogDescription>
                  This action cannot be undone. This will permanently delete
                  your account and remove your data from our servers.
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </p>
        <div className="container mx-auto py-10">
          {/* <DataTable columns={columns} data={data} /> */}
        </div>
      </div>
    </main>
  );
}
