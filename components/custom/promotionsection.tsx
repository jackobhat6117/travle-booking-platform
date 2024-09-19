import axios from "axios";
import React, { useEffect, useState } from "react";
import Image from "next/image";

function TravelBookingPlatform() {
  return (
    <div className="my-5">
      <h3 className="text-center my-10 font-extrabold font-sans text-4xl">
        An easy to use travel booking platform
      </h3>

      {/* Flex row on larger screens, flex column on smaller screens */}
      <div className="flex flex-col lg:flex-row justify-around gap-10">
        <div className="flex items-center justify-center flex-col text-center lg:text-left">
          <h3 className="font-extrabold font-sans text-4xl text-center">
            Customize every content on your{" "}
            <span className="pr-0">website</span>
          </h3>
          <p>
            Offer your customer a seamless travel booking experience, customised
            to your brand.
          </p>
        </div>

        <div>
          <div className="bg-sky-100 w-full p-10 h-full">
            {/* Make the content responsive */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mx-7">
              <p className="bg-white p-3 rounded-xl">Hero Section</p>
              <p className="bg-white p-3 rounded-xl">About us</p>
              <p className="bg-white p-3 rounded-xl">Tours</p>
              <p className="bg-white p-3 rounded-xl">Flights</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 my-6">
              <p className=" p-3 rounded-xl bg-blue-500 text-white text-center">
                Navigation
              </p>
              <p className="bg-white p-3 rounded-xl">Hotels</p>
              <p className="bg-white p-3 rounded-xl">Chat</p>
              <p className="bg-white p-3 rounded-xl">Contact Us</p>
              <p className="bg-white p-3 rounded-xl">FAQs</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mx-7">
              <p className="bg-white p-3 rounded-xl">Listing style</p>
              <p className="bg-white p-3 rounded-xl">Footer</p>
              <p className="bg-white p-3 rounded-xl">Search Engine</p>
              <p className="bg-white p-3 rounded-xl">ETC</p>
            </div>

            <div className="bg-white rounded-lg my-4 p-4">
              <div className="bg-gray-100 flex flex-col md:flex-row px-2 py-4 items-center gap-6 rounded-lg">
                <div className="rounded-full h-5 w-5 bg-slate-300 "></div>
                <div className="flex flex-col md:flex-row items-center justify-center gap-4 bg-white p-4 rounded-lg">
                  <div className="flex gap-2">
                    <p className="text-blue-700">Flight</p>
                    <p>Stays</p>
                    <p>Tours</p>
                  </div>
                  <div>
                    <p className="p-2 bg-gray-300 px-5">Logo</p>
                  </div>
                  <div className="flex items-center justify-center gap-4">
                    <p>Help</p>
                    <button className="bg-blue-500 p-3 text-white">
                      My Account
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg my-4 p-4">
              <div className="bg-gray-100 flex flex-col md:flex-row px-2 py-4 items-center gap-6 rounded-lg">
                <div className="rounded-full h-5 w-5 bg-slate-300 "></div>
                <div className="flex flex-col md:flex-row items-center justify-center gap-4 bg-white p-4 rounded-lg">
                  <div className="flex gap-2">
                    <p className="text-blue-700">Payment</p>
                    <p>Orders</p>
                    <p>Discounts</p>
                  </div>
                  <div>
                    <p className="p-2 bg-gray-300 px-5">Credit Card</p>
                  </div>
                  <div className="flex items-center justify-center gap-4">
                    <p>Help</p>
                    <button className="bg-blue-500 p-3 text-white">
                      My Account
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg my-4 p-4 border-blue-700 border-4">
              <div className="bg-gray-100 flex px-2 py-4 items-center gap-6 rounded-lg">
                <div className="rounded-full h-5 w-5 bg-slate-300 "></div>

                <div className="flex items-center justify-center gap-4 bg-white p-4 rounded-lg">
                  <div className="flex gap-2">
                    <div className="">
                      <p className="p-2 bg-gray-300 px-5">Logo</p>
                    </div>

                    <p className="text-blue-700">Flight</p>
                    <p>Stays</p>
                    <p>Tours</p>
                  </div>

                  <div className="flex items-center justify-center gap-4">
                    <p>Help</p>
                    <button className="bg-blue-500 p-3 text-white">
                      My Account
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg my-4 p-4">
              <div className="bg-gray-100 flex flex-col md:flex-row px-2 py-4 items-center gap-6 rounded-lg">
                <div className="rounded-full h-5 w-5 bg-slate-300 "></div>
                <div className="flex flex-col md:flex-row items-center justify-center gap-4 bg-white p-4 rounded-lg">
                  <div className="flex gap-2">
                    <p className="text-blue-700">Flight Details</p>
                    <p>Departure</p>
                    <p>Arrival</p>
                  </div>
                  <div>
                    <p className="p-2 bg-gray-300 px-5">Duration</p>
                  </div>
                  <div className="flex items-center justify-center gap-4">
                    <p>Help</p>
                    <button className="bg-blue-500 p-3 text-white">
                      My Account
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="my-10 flex flex-col lg:flex-row mx-10 items-center gap-10">
        <div className="bg-sky-50 w-full">
          <img src="/images/Frame 2609427.png" alt="Travel Image" />
        </div>

        <div className="w-full">
          <h1>Focus on what matters</h1>
          <p>
            We take care of the intricate details of travel expertise,
            accreditation, and airline partnerships, so you don&apos;t have
            to...
          </p>
        </div>
      </div>

      <div className="my-10 flex flex-col lg:flex-row mx-10 items-center gap-10">
        <div className="w-full">
          <h1>Earn more money</h1>
          <p>
            Take control of the entire travel experience. Effortlessly add
            markups to all travel products using our user-friendly dashboard.
          </p>
        </div>

        <div className="bg-sky-100 w-full p-4 rounded-xl">
          <div className="bg-white p-5 my-5 rounded-lg">
            <div className="flex flex-col md:flex-row justify-between items-center mb-5">
              <div className="flex gap-2">
                <p>
                  DEPARTURE<span>Turkish Airline</span>
                </p>
                <p className="bg-sky-200 h-5 p-3 flex items-center px-5 text-blue-700 rounded-md">
                  AMADEUS
                </p>
              </div>
              <div>
                <p className="bg-green-400 p-1 rounded-lg px-3">
                  Earn commission
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row justify-around mx-10 text-gray-400">
              <div>
                <p className="text-center">18:30</p>
                <p className="w-52">Murtala Muhammed(Los)</p>
                <p>Lagos</p>
              </div>
              <div>
                <p className="text">06:30</p>
                <p className="text-center w-52">London Heathrow(LHR)</p>
                <p>London</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center my-5">
            <div>
              <img
                src="/images/Rectangle 3115.png"
                className="h-40 md:h-52 w-full object-cover"
                alt="Travel Image"
              />
            </div>
            <div className="bg-white p-5 h-56">
              <p className="bg-green-400 w-24 text-center rounded-lg p-1">
                Marked up
              </p>
              <h4 className="my-2">
                Official National Gallery Highlights Guided Tour
              </h4>
              <div className="flex gap-4 my-2">
                <p className="bg-sky-100 p-2 rounded-lg">Refundable Ticket</p>
                <p className="bg-sky-100 p-2 rounded-lg">Mobile Voucher</p>
              </div>
              <p>
                4.5/5 <span>from 532 reviews</span>
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center ">
            <div>
              <img
                src="images/Frame 11400.png"
                className="h-40 md:h-52 w-full object-cover"
                alt="Room View"
              />
            </div>

            <div className="bg-white p-5 flex-1">
              <div className="flex flex-col md:flex-row gap-3 mb-4">
                <p className="bg-green-400 w-full md:w-32 p-2 text-center rounded-lg h-10 flex items-center justify-center">
                  Marked up
                </p>
                <p className="bg-green-400 w-full md:w-36 p-2 text-center rounded-lg h-10 flex items-center justify-center">
                  Earn Commission
                </p>
              </div>

              <h4 className="my-2 text-lg md:text-xl">
                Room two, 2 Twin Beds (Runway View, High floor)
              </h4>

              <div className="flex flex-col md:flex-row gap-4 my-2">
                <p className="bg-sky-100 p-2 rounded-lg text-center">
                  Refundable Ticket
                </p>
                <p className="bg-sky-100 p-2 rounded-lg text-center">
                  Mobile Voucher
                </p>
              </div>

              <p className="text-gray-600">
                4.5/5 <span>from 532 reviews</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Final call


      {/* Final call to action */}
      <div className="my-10 flex flex-col md:flex-row p-10 bg-sky-200 mx-5 lg:mx-10 rounded-lg justify-between shadow-lg">
        <div>
          <h3>Get your website today!</h3>
          <p>Sell flights, hotels, and tours from around the world.</p>
        </div>
        <div className="flex flex-col md:flex-row gap-3 justify-center items-center">
          <p className="bg-blue-600 flex items-center justify-center p-3 text-white h-10 w-36 rounded-lg">
            02839082932
          </p>
          <p className="shadow-md flex items-center justify-center p-3 text-blue-500 bg-white h-10 w-36 rounded-lg">
            hello@test.com
          </p>
        </div>
      </div>
    </div>
  );
}

export default TravelBookingPlatform;
