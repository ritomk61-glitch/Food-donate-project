import React from 'react'

const Contact = () => {
  return (
    <div>
      <div className="bg-gray-100 py-16 px-6">

  {/* Title */}
  <h2 className="text-center text-3xl font-semibold text-teal-500 mb-10">
    CONTACT
  </h2>

  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

    {/* 🔹 LEFT FORM */}
    <div>
      <h3 className="text-teal-500 font-semibold mb-4">
        WANT TO WORK WITH US?
      </h3>

      <div className="space-y-4">

        <input
          type="text"
          placeholder="First Name"
          className="w-full border border-gray-300 p-2 rounded outline-none focus:ring-2 focus:ring-teal-400"
        />

        <input
          type="text"
          placeholder="Last Name"
          className="w-full border border-gray-300 p-2 rounded outline-none focus:ring-2 focus:ring-teal-400"
        />

        <input
          type="text"
          placeholder="Phone"
          className="w-full border border-gray-300 p-2 rounded outline-none focus:ring-2 focus:ring-teal-400"
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full border border-gray-300 p-2 rounded outline-none focus:ring-2 focus:ring-teal-400"
        />

        <textarea
          rows="4"
          placeholder="Message"
          className="w-full border border-gray-300 p-2 rounded outline-none focus:ring-2 focus:ring-teal-400"
        ></textarea>

        <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition">
          Send
        </button>
      </div>
    </div>

    {/* 🔹 RIGHT INFO */}
    <div>
      <h3 className="text-teal-500 font-semibold mb-4">
        CONTACT US
      </h3>

      <div className="text-gray-700 space-y-3 text-sm">
        <p className="font-semibold">Address</p>
        <p>Food Waste Management System</p>

        <p>
          <span className="font-semibold">Contact Number:</span> +91 9876543210
        </p>

        <p>
          <span className="font-semibold">Email:</span> info@gmail.com
        </p>

        <p>
          <span className="font-semibold">Address:</span> test address
        </p>
      </div>
    </div>

  </div>

  {/* 🔹 FOOTER BAR */}
  <div className="mt-12 bg-teal-500 text-white py-4 px-6 flex justify-between items-center">

    <p className="text-sm">
      © 2025 Food Waste Management System
    </p>

    {/* Social Icons */}
    <div className="flex gap-4 text-lg">
      <span className="cursor-pointer">🌐</span>
      <span className="cursor-pointer">🐦</span>
      <span className="cursor-pointer">💼</span>
      <span className="cursor-pointer">📸</span>
    </div>

  </div>

</div>
    </div>
  )
}

export default Contact
