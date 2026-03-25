import React from 'react'

const About = () => {
  return (
    <div>
 <div className="bg-gray-100 font-sans">

  {/* 🔹 HERO SECTION */}
  <div className="mx-10 mt-10 rounded-3xl bg-green-700 text-white text-center py-20 px-6 relative overflow-hidden h-100">
    
    <h1 className="text-4xl font-bold mb-4">
      Start saving food today
    </h1>

    <p className="max-w-xl mx-auto mb-8 text-sm opacity-90">
      Join 840+ donors and thousands of requesters already making a
      difference in their communities.
    </p>

    <div className="flex justify-center gap-4">
      <button className="bg-white text-green-700 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition">
        🍽 Register as Donor
      </button>

      <button className="border border-white px-6 py-3 rounded-full hover:bg-white hover:text-green-700 transition">
        Find Food Near Me →
      </button>
    </div>

    {/* Optional circles background */}
    <div className="absolute w-72 h-72 bg-green-500 opacity-20 rounded-full top-[-50px] left-[-50px]">

    </div>
    <div className="absolute w-72 h-72 bg-green-500 opacity-20 rounded-full bottom-[-50px] right-[-50px]"></div>
  </div>

  {/* 🔹 FOOTER */}
  <div className="bg-black text-white mt-10 px-10 py-12 h-100">
    
    <div className="flex flex-wrap justify-between gap-8">
      
      {/* Logo */}
      <div className="max-w-xs">
        <h2 className="text-xl font-bold mb-2">🌿 ShareBite
        </h2>
        <p className="text-gray-400 text-sm">
          Reducing food waste by connecting surplus food with communities
          that need it most.
        </p>
      </div>

      {/* Platform */}
      <div>
        <h4 className="font-semibold mb-2">PLATFORM</h4>
        <ul className="space-y-1 text-gray-400 text-sm">
          <li className="hover:text-white cursor-pointer">Browse Listings</li>
          <li className="hover:text-white cursor-pointer">Donate Food</li>
          <li className="hover:text-white cursor-pointer">Request Food</li>
          <li className="hover:text-white cursor-pointer">Dashboard</li>
        </ul>
      </div>

      {/* Company */}
      <div>
        <h4 className="font-semibold mb-2">COMPANY</h4>
        <ul className="space-y-1 text-gray-400 text-sm">
          <li className="hover:text-white cursor-pointer">About Us</li>
          <li className="hover:text-white cursor-pointer">Impact Report</li>
          <li className="hover:text-white cursor-pointer">Partners</li>
          <li className="hover:text-white cursor-pointer">Contact</li>
        </ul>
      </div>

      {/* Support */}
      <div>
        <h4 className="font-semibold mb-2">SUPPORT</h4>
        <ul className="space-y-1 text-gray-400 text-sm">
          <li className="hover:text-white cursor-pointer">Help Centre</li>
          <li className="hover:text-white cursor-pointer">Privacy Policy</li>
          <li className="hover:text-white cursor-pointer">Terms of Use</li>
          <li className="hover:text-white cursor-pointer">Report Issue</li>
        </ul>
      </div>

    </div>

    {/* Bottom */}
    <div className="border-t border-gray-800 mt-8 pt-4 flex justify-between text-sm text-gray-400">
      <p>© 2025 FoodBridge — Food Waste Management System</p>
      <p>Made with 🌿 to fight food waste</p>
    </div>

  </div>
</div>
    </div>
  )
}

export default About
