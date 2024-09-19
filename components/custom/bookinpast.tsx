import React from "react";

function TravelBookingPlatform() {
  return (
    <div className="container mx-auto">
      <nav className="flex justify-between items-center py-4 bg-gray-800 text-white">
        <div className="text-lg font-bold">Travel Platform</div>
        <ul className="flex space-x-4">
          <li>Home</li>
          <li>About Us</li>
          <li>Services</li>
          <li>Contact</li>
        </ul>
      </nav>

      <header className="text-center my-8">
        <h1 className="text-4xl font-bold">An easy to use travel booking platform</h1>
        <p className="text-lg mt-4">Customize every content on your website</p>
      </header>

      <div className="flex justify-between items-center bg-gray-200 p-4">
        <input type="text" placeholder="Destination" className="p-2 border rounded" />
        <input type="date" className="p-2 border rounded" />
        <button className="bg-blue-500 text-white p-2 rounded">Search</button>
      </div>

      <section className="my-8">
        <h2 className="text-2xl font-bold text-center">Website Visits and Revenue</h2>
        <div className="flex justify-around mt-4">
          <div className="bg-green-500 p-4 rounded text-white">43,000,000</div>
          <div className="bg-blue-500 p-4 rounded text-white">2,100,000</div>
        </div>
      </section>

      <section className="p-8 bg-green-100 text-center">
        <h2 className="text-2xl font-bold">Focus on what matters</h2>
        <p className="mt-4">Earn more money</p>
      </section>

      <footer className="bg-blue-900 text-white p-4 text-center">
        Get your website today! Call: 02839082932
      </footer>
    </div>
  );
}

export default TravelBookingPlatform;
