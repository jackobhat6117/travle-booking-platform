"use client";

import { employeeData } from "@/dummyData/usersData";
import { columns } from "./columns";
import { DataTable } from "./data-table";
import { User } from "@/types/user";
import { useEffect, useState } from "react";

async function getData(): Promise<User[]> {
  // Fetch data from your API here and return it.
  return employeeData; // Simply returning fake data
}

async function deleteData(id: string): Promise<User[]> { 
  const index = employeeData.findIndex((value) => value.id === id)
  employeeData.splice(index, 1)
  return employeeData // Simply returning fake data
}

export default function UserPage() {
  const [data, setData] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const result: User[] = await getData();
        setData(result);
      } catch (error) {
        // Handle error
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) {
    // Render a loading indicator or message
    return <div>Loading...</div>;
  }

   async function deleteRow(id:string) { 
      try {
        const result: User[] = await deleteData(id);
        setData(result);
      } catch (error) {
        // Handle error
        console.error('Error deleting data:', error);
      }
    }

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
