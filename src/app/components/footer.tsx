import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 text-gray-700 pb-80">
      <div className="container mx-auto px-6 py-10">
        {/* Top Section */}
        <div className="flex justify-between items-center border-b pb-6">
          {/* Logo */}
          <h2 className="text-2xl font-bold text-gray-800 pb-[-20]">Bandage</h2>

          {/* Social Icons */}
          <div className="flex space-x-4">
            <a href="#" className="text-blue-500 hover:text-blue-600">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="text-blue-500 hover:text-blue-600">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-blue-500 hover:text-blue-600">
              <i className="fab fa-skype"></i>
            </a>
          </div>
        </div>

        {/* Main Section */}
        <div className="flex flex-wrap justify-between items-start mt-8 space-y-6 md:space-y-0">
          {/* Links Section */}
          <div className="flex flex-wrap space-x-16">
            {/* Column 1 */}
            <div>
              <h3 className="font-semibold text-gray-800">Company Info</h3>
              <ul className="mt-4 space-y-2">
                <li><a href="#" className="hover:text-blue-500">About Us</a></li>
                <li><a href="#" className="hover:text-blue-500">Carrier</a></li>
                <li><a href="#" className="hover:text-blue-500">We are hiring</a></li>
                <li><a href="#" className="hover:text-blue-500">Blog</a></li>
              </ul>
            </div>
            {/* Column 2 */}
            <div>
              <h3 className="font-semibold text-gray-800">Legal</h3>
              <ul className="mt-4 space-y-2">
                <li><a href="#" className="hover:text-blue-500">Terms & Conditions</a></li>
                <li><a href="#" className="hover:text-blue-500">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-blue-500">Cookie Policy</a></li>
                <li><a href="#" className="hover:text-blue-500">Compliance</a></li>
              </ul>
            </div>
            {/* Column 3 */}
            <div>
              <h3 className="font-semibold text-gray-800">Features</h3>
              <ul className="mt-4 space-y-2">
                <li><a href="#" className="hover:text-blue-500">Business Marketing</a></li>
                <li><a href="#" className="hover:text-blue-500">User Analytics</a></li>
                <li><a href="#" className="hover:text-blue-500">Live Chat</a></li>
                <li><a href="#" className="hover:text-blue-500">Unlimited Support</a></li>
              </ul>
            </div>
            {/* Column 4 */}
            <div>
              <h3 className="font-semibold text-gray-800">Resources</h3>
              <ul className="mt-4 space-y-2">
                <li><a href="#" className="hover:text-blue-500">iOS & Android</a></li>
                <li><a href="#" className="hover:text-blue-500">Watch a Demo</a></li>
                <li><a href="#" className="hover:text-blue-500">Customers</a></li>
                <li><a href="#" className="hover:text-blue-500">API</a></li>
              </ul>
            </div>
          </div>

          {/* Newsletter Section */}
          <div>
            <h3 className="font-semibold text-gray-800">Get In Touch</h3>
            <form className="mt-4">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="p-2 w-full border border-gray-300 rounded-l-md focus:outline-none focus:ring focus:ring-blue-300"
                />
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600"
                >
                  Subscribe
                </button>
              </div>
              <p className="mt-2 text-sm text-gray-500">
                Lore ipsum dolor sit amet.
              </p>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-10 border-t pt-4 text-center text-sm text-gray-500">
          Made With Love By Finland. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
