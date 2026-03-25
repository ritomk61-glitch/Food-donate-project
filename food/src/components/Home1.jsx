import React from 'react'

const Home1 = () => {
  return (
    <div>
     
     <div className='h-200'>
           <h5 className='mt-36 mx-66 text-2xl text-green-700 font-medium'>____Simple Process</h5>
           <h1 className='mx-66 text-6xl  font-serif font-bold pt-7'>How FoodBridge works</h1>
           <p  className='mx-66 text-xl pt-7 opacity-65  '>Whether you have surplus food to share or are looking for <br />donations nearby, the whole process takes just minutes</p>

           <div className='flex justify-center gap-6 pt-25'>
                <div className='w-110 h-80  outline-amber-600 outline-1 rounded-2xl p-4'>
                    <h1 className='text-7xl font-sans opacity-50 ml-5 text-green-900 '>01</h1>
                    <h3 className='w-12 rounded-2xl h-10   text-3xl bg-green-100 mt-4 ml-6 '>📝</h3>
                    <h1 className='text-2xl font-bold mt-5'>Create a Listing</h1>
                    <p className='opacity-70 pt-4'>Donors register and list available food with details — quantity, type, expiry date, and pickup location. Takes under 2 minutes.</p>
                </div>
                <div className='w-110 h-80  rounded-2xl  '>
                   <div className='w-110 h-80  outline-amber-600 outline-1 rounded-2xl p-4'>
                    <h1 className='text-7xl font-sans opacity-50 ml-5 text-green-900 '>02</h1>
                    <h3 className='w-12 rounded-2xl h-10   text-3xl bg-green-100 mt-4 ml-6 '>🔍</h3>
                    <h1 className='text-2xl font-bold mt-5'>Browse & Request</h1>
                    <p className='opacity-70 pt-4'>Requesters search listings filtered by food type, quantity, and distance. One click to send a request to the donor.</p>
                </div>
                </div>
                <div className='w-110 h-80  hover:shadow-lg rounded-2xl '>
                        <div className='w-110 h-80  outline-amber-600 outline-1 rounded-2xl p-4'>
                    <h1 className='text-7xl font-sans opacity-50 ml-5 text-green-900 '>03</h1>
                    <h3 className='w-12 rounded-2xl h-10   text-3xl bg-green-100 mt-4 ml-6 '>🤝</h3>
                    <h1 className='text-2xl font-bold mt-5'>Collect & Confirm</h1>
                    <p className='opacity-70 pt-4'>Donor approves the request, requester collects the food. Both parties confirm the exchange in the system.</p>
                </div>
                </div>

           </div>
     </div>

    </div>
  )
}

export default Home1
