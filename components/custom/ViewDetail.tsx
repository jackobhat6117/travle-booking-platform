import axios from "axios";
import React, { useEffect, useState } from "react";
import { Flight } from "@/types/flights";
import ReactLoading from "react-loading";

function ViewPage() {
  const [destinations, setDestinations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [flight, setFlights] = useState<Flight[]>([]);

  useEffect(() => {
    const fetchFlights = async () => {
      try {
        const response = await axios.get("/api/flight");
        setFlights(response.data);
        setLoading(false);
      } catch (err: any) {
        setError(err.message || "An error occurred");
        setLoading(false);
      }
    };

    fetchFlights();
  }, []);

  if (loading)
    return (
      <div className="flex justify-center items-center">
        <ReactLoading
          type={"spin"}
          color={"blue"}
          height={"5%"}
          width={"5%"}
          className="flex justify-center items-center"
        />
      </div>
    );
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="p-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {flight.map((item: Flight, id: any) => (
          <div className="bg-sky-50 p-4 shadow rounded flex flex-col" key={id}>
            <div className="flex flex-col">
              <div className="bg-sky-50 p-3 flex rounded-tl-xl justify-between shadow-lg">
                <p className="p-2">Return</p>
                <p className="bg-blue-600 py-1 text-white px-2">
                  {item.flight_number}
                </p>
                <p className="bg-white py-1 px-2">{item.stops}</p>
                <p className="bg-white py-1 px-2">{item.airline}</p>
              </div>

              <div className="p-4 h-24 bg-white mb-3 rounded-bl-xl flex justify-between shadow-lg shadow-gray-400">
                <div>
                  <p className="text-end">{item.departure_time}</p>
                  <p className="text-end">{item.price.currency}</p>
                </div>

                <div>
                  <p className="text-end">{item.departure_time}</p>
                  <p className="text-end">{item.price.total}</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-lg font-semibold">{item.title}</h2>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-sky-50 p-6 shadow rounded-xl flex flex-col w-full">
          <div className="flex flex-col">
            <div className="p-4 h-24 bg-white mb-3 flex flex-col shadow-lg shadow-gray-400">
              <p className="text-gray-500 mb-2">Secured payment with</p>
              <div className="flex justify-around items-center">
                <p className="font-semibold text-2xl">paystack</p>
                <div className="flex space-x-4">
                  <p>***********3920 | </p>
                  <p>MM/YY</p>
                  <p>CVC</p>
                </div>

                <button className="bg-blue-600 text-white h-8 w-32 flex items-center justify-center rounded-md">
                  Pay
                </button>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-lg font-semibold">Search</h2>
            <p>
              Make searching flights an intuitive experience for your customers.
            </p>
          </div>
        </div>

        <div className="bg-sky-50 p-6 shadow rounded-xl flex flex-col w-full">
          <div className="flex flex-col">
            <div className="p-4 h-24 bg-white mb-3 flex flex-col shadow-lg shadow-gray-400">
              <p className="text-gray-500 mb-2">Secured payment with</p>
              <div className="flex justify-around items-center">
                <p className="font-semibold text-2xl">paystack</p>
                <div className="flex space-x-4">
                  <p>***********3920 | </p>
                  <p>MM/YY</p>
                  <p>CVC</p>
                </div>

                <button className="bg-blue-600 text-white h-8 w-32 flex items-center justify-center rounded-md">
                  Issue Ticket
                </button>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-lg font-semibold">Search</h2>
            <p>
              Make searching flights an intuitive experience for your customers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewPage;
