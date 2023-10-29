import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto flex flex-col items-center">
        <h1 className="text-3xl font-semibold">Pizza Crafty</h1>
        <p className="text-sm mt-2">Customize & Delivering Delicious Pizzas</p>
        <div className="flex mt-4 space-x-4">
          <a href="#" className="text-gray-400 hover:text-gray-200">
            Home
          </a>
          <a href="#" className="text-gray-400 hover:text-gray-200">
            Menu
          </a>
          <a href="#" className="text-gray-400 hover:text-gray-200">
            Customization
          </a>
          <a href="#" className="text-gray-400 hover:text-gray-200">
            About Us
          </a>
          <a href="#" className="text-gray-400 hover:text-gray-200">
            Contact
          </a>
        </div>
        <div className="mt-8">
          <p>&copy; {new Date().getFullYear()} Pizza Crafty</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
