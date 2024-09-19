// types.ts (or define inside your component file)

export type Flight = {
  id: number;
  airline: string;
  flight_number: string;
  departure_airport: string;
  arrival_airport: string;
  departure_time: string;
  arrival_time: string;
  duration: string;
  stops: number;
  seat_selection: boolean;
  title: String,
  description: String,
  price: {
    currency: string;
    total: number;
  };
  available_seats: {
    A: number[];
    B: number[];
    C: number[];
    D: number[];
    E: number[];
    F: number[];
  };
  baggage: {
    carry_on: number;
    checked_bags: number;
  };
};
