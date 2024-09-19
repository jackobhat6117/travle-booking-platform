// app/api/flight/route.tsx
import { NextResponse } from 'next/server';

export async function GET() {
  const flights = [
    {
      id: 1,
      airline: "Turkish Airlines",
      flight_number: "TK411",
      departure_airport: "LOS",
      arrival_airport: "LHR",
      departure_time: "2024-09-20T22:30:00",
      arrival_time: "2024-09-21T05:25:00",
      duration: "12h 14m",
      stops: 1,
      seat_selection: true,
      title: "Search",
      description: "Make searching flights an intuitive experience for your customers.",
      price: {
        currency: "USD",
        total: 650,
      },
      available_seats: {
        A: [10, 9, 8],
        B: [10, 9, 8],
        C: [10],
        D: [10, 9],
        E: [10],
        F: [],
      },
      baggage: {
        carry_on: 1,
        checked_bags: 1,
      },
    },
    {
      id: 2,
      airline: "Virgin Atlantic",
      flight_number: "VS411",
      departure_airport: "LOS",
      arrival_airport: "LHR",
      departure_time: "2024-09-20T22:30:00",
      arrival_time: "2024-09-21T05:25:00",
      duration: "12h 14m",
      stops: 0,
      seat_selection: true,
      title: "Book",
      description: "Capture all relevant details from your customer in a one-step checkout.",
      price: {
        currency: "USD",
        total: 700,
      },
      available_seats: {
        A: [10, 9, 8],
        B: [10, 9],
        C: [10],
        D: [10, 9, 8],
        E: [10],
        F: [10],
      },
      baggage: {
        carry_on: 2,
        checked_bags: 2,
      },
    },
    {
        id: 3,
        airline: "Turkish Airlines",
        flight_number: "TK411",
        departure_airport: "LOS",
        arrival_airport: "LHR",
        departure_time: "2024-09-20T22:30:00",
        arrival_time: "2024-09-21T05:25:00",
        duration: "12h 14m",
        stops: 1,
        seat_selection: true,
        title: "Ancillaries",
        description: "Let your customers book premium sears and pay for additional baggage",
        price: {
          currency: "USD",
          total: 650,
        },
        available_seats: {
          A: [10, 9, 8],
          B: [10, 9, 8],
          C: [10],
          D: [10, 9],
          E: [10],
          F: [],
        },
        baggage: {
          carry_on: 1,
          checked_bags: 1,
        },
      },
  ];

  return NextResponse.json(flights);
}
