import React from 'react';

function ViewPage() {
  return (
    <div className=" p-5">
      {/* Top row: Search and Booking Interface */}
      <div className="flex justify-between space-x-4 mb-8">
        {/* Search Component */}
        <div className="bg-sky-50 p-4 shadow rounded bg-sky flex flex-col pr-0">
           <div className='flex flex-col '>
                <div className='  bg-sky-50 p-3  flex rounded-tl-xl justify-between shadow-lg'>
                    <p className='p-2'>Return</p> 
                    <p className='bg-blue-600 py-1  text-white px-2'>Select Seart</p>
                    <p className='bg-white py-1 px-2'>1 stop</p>
                    <p className='bg-white py-1 px-2'>Airline</p>
                </div>

                <div className='p-4 h-24 bg-white mb-3 rounded-bl-xl flex flex-col shadow-lg shadow-gray-400'>
                        <p className='text-end'>10:30</p>
                        <p className='text-end'>Murtala Muhammed (LOS)Lagos</p>
                </div>

            </div> 

            <div>

                <h2 className="text-lg font-semibold">Search</h2>
                <p>Make searching flights an intuitive experience for your customers.</p>
            </div>
        </div>

        {/* Booking Component */}
        <div className="bg-sky-50 p-4 shadow rounded bg-sky flex flex-col pr-0">
           <div className='flex flex-col '>
                <div className='  bg-sky-50 p-3  flex rounded-tl-xl justify-between shadow-lg'>
                    <p></p>
                    <p>VS</p>
                    <p>411</p>
                    <p>LOS-LHR</p>
                    <p>10:30PM - 05:25OM +1 </p>
                    <p>06:55</p>
                </div>

                <div className='p-4 h-24 bg-white mb-3 rounded-bl-xl flex flex-col shadow-lg shadow-gray-400'>
                        <p className='text-end'>10:30</p>
                        <p className='text-end'>Murtala Muhammed (LOS)Lagos</p>
                </div>

            </div> 

            <div>

                <h2 className="text-lg font-semibold">Book</h2>
                <p>Capture all relevant details from your customer in a one-step checkout.</p>
            </div>
        </div>

        {/* Ancillaries Component */}
        <div className="bg-sky-50 p-4 shadow rounded bg-sky flex flex-col pr-0">
           <div className='flex flex-col '>
                <div className='  bg-sky-50 p-3  flex rounded-tl-xl justify-between shadow-lg'>
                    <p className='p-2'>Return</p> 
                    <p className='bg-blue-600 py-1  text-white px-2'>Select Seart</p>
                    <p className='bg-white py-1 px-2'>1 stop</p>
                    <p className='bg-white py-1 px-2'>Airline</p>
                </div>

                <div className='p-4 h-24 bg-white mb-3 rounded-bl-xl flex flex-col shadow-lg shadow-gray-400'>
                        <p className='text-end'>10:30</p>
                        <p className='text-end'>Murtala Muhammed (LOS)Lagos</p>
                </div>

            </div> 

            <div>

                <h2 className="text-lg font-semibold">Search</h2>
                <p>Make searching flights an intuitive experience for your customers.</p>
            </div>
        </div>
      </div>

      {/* Bottom row: Payments and Order Management */}
      <div className="flex space-x-10">
        {/* Payments Component */}
        <div className="bg-sky-50 p-6 shadow rounded-xl bg-sky flex flex-col pr-0 w-full">
           <div className='flex flex-col '>
               

                <div className='p-4 h-24 bg-white mb-3  flex flex-col shadow-lg shadow-gray-400'>
                      <p className='text-gray-500 mb-2'>Secured payment with</p>
                      <div className='flex justify-around items-center'>

                         <p className='font-semibold text-2xl'>paystack</p>
                        <div className='flex space-x-4'>
                        <p>***********3920 | </p>
                        <p>MM/YY</p>
                        <p>CVC</p>
                        </div>
                        
                        <button className='bg-blue-600 text-white h-8 w-32 flex items-center justify-center rounded-md'>pay</button>

                      </div>
                </div>

            </div> 

            <div>

                <h2 className="text-lg font-semibold">Search</h2>
                <p>Make searching flights an intuitive experience for your customers.</p>
            </div>
        </div>

        {/* Order Management Component */}
        <div className="bg-sky-50 p-6 shadow rounded-xl bg-sky flex flex-col pr-0 w-full">
           <div className='flex flex-col '>
               

                <div className='p-4 h-24 bg-white mb-3  flex flex-col shadow-lg shadow-gray-400'>
                      <p className='text-gray-500 mb-2'>Secured payment with</p>
                      <div className='flex justify-around items-center'>

                         <p className='font-semibold text-2xl'>paystack</p>
                        <div className='flex space-x-4'>
                        <p>***********3920 | </p>
                        <p>MM/YY</p>
                        <p>CVC</p>
                        </div>
                        
                        <button className='bg-blue-600 text-white h-8 w-32 flex items-center justify-center rounded-md'>Issue Ticket</button>

                      </div>
                </div>

            </div> 

            <div>

                <h2 className="text-lg font-semibold">Search</h2>
                <p>Make searching flights an intuitive experience for your customers.</p>
            </div>
        </div>
      </div>
    </div>
  );
}

export default ViewPage;
