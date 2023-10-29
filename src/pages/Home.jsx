import React from "react";
import { Link } from "react-router-dom";
import dough from "../img/nadya-spetnitskaya-tOYiQxF9-Ys-unsplash-removebg-preview.png";

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen mt-[4rem] flex flex-col gap-3">
      {/* Hero Section */}
      <section className="h-[36rem] relative overflow-hidden text-center flex flex-col justify-center items-center bg-black">
        <img
          src={dough}
          alt="Featured Pizza"
          className="w-[70%] object-fill absolute -z-0 top-0 right-0 opacity-50"
        />
        <div className="text-white relative">
          <h2 className="text-5xl font-bold">Make Your Pizza</h2>
          <p className="text-xl mt-4">Crave for one. Make yourself one!</p>
        </div>
        <a
          href="/pizzacrafty/customize"
          className="mt-8 inline-block relative border border-yellow-600 text-yellow-500 hover:text-yellow-400 px-6 py-3 rounded-full text-lg font-semibold transition-all"
        >
          Start Customizing
        </a>
      </section>

      {/* Hiring Section */}
      <section className="h-[36rem] relative overflow-hidden text-center flex flex-col justify-center items-center bg-black">
        <img
          src="https://images.unsplash.com/photo-1542587222-f9172e5eba29?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Featured Pizza"
          className="w-[50%] object-fill absolute -z-0 -top-1/4 left-0 opacity-50"
        />
        <div className="text-white relative">
          <h2 className="text-5xl font-bold">Hiring Personel</h2>
          <p className="text-xl mt-4">
            To better offer greater services we are offering a position for a
            creative designer
          </p>
        </div>
        <a
          href="/pizzacrafty/customize"
          className="mt-8 inline-block relative border border-yellow-600 text-yellow-500 hover:text-yellow-400 px-6 py-3 rounded-full text-lg font-semibold transition-all"
        >
          Check Out
        </a>
      </section>

      {/* Featured Pizza */}
      <section className="h-[36rem] relative overflow-hidden text-center flex justify-center items-center bg-black">
        <img
          src="https://images.unsplash.com/photo-1613564834361-9436948817d1?auto=format&fit=crop&q=80&w=1943&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Featured Pizza"
          className="w-1/4 object-fill top-0 left-0 opacity-50"
        />
        <div className="absolute text-white">
          <h2 className="text-5xl font-bold">Featured Pizzas</h2>
          <p className="text-xl mt-4">
            Try our mouth-watering featured pizza of the month.
          </p>
        </div>
      </section>

      {/* Four Featured Pizzas Section */}
      <section className="bg-gray-100 px-3">
        <div className="flex flex-col gap-3 text-white">
          {/* Row 1 */}
          <div className="flex gap-3">
            {/* Featured Pizza 1 */}
            <div className="bg-black w-full shadow-lg relative flex flex-col justify-center items-center cursor-pointer">
              <img
                src="https://images.unsplash.com/photo-1613564834361-9436948817d1?auto=format&fit=crop&q=80&w=1943&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Pizza 1"
                className="w-full h-[36rem] object-cover opacity-40 transition-all ease"
              />
              <div className="absolute text-center">
                <h3 className="text-[3.2rem] font-semibold leading-tight">
                  NonVeg
                </h3>
                <p className="text-xl font-light">
                  New Taste | New Feeling | New Sensation
                </p>
                <Link to="">
                  <button className="text-yellow-500 px-6 text-lg font-semibold mt-4 -mb-8 hover:underline">
                    Order Now
                  </button>
                </Link>
              </div>
            </div>

            {/* Featured Pizza 2 */}
            <div className="bg-black w-full shadow-lg relative flex justify-center items-center cursor-pointer">
              <img
                src="https://images.unsplash.com/photo-1588315029754-2dd089d39a1a?auto=format&fit=crop&q=80&w=2071&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Pizza 2"
                className="w-full h-[36rem] object-cover opacity-40 transition-all ease"
              />
              <div className="absolute text-center">
                <h3 className="text-[3.2rem] font-semibold leading-tight">
                  Veg
                </h3>
                <p className="text-xl font-light">
                  New Taste | New Feeling | New Sensation
                </p>
                <Link to="">
                  <button className="text-yellow-500 px-6 text-lg font-semibold mt-4 -mb-8 hover:underline">
                    Order Now
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* Row 2 */}
          <div className="flex gap-3">
            {/* Featured Pizza 3 */}
            <div className="bg-black w-full shadow-lg relative flex justify-center items-center cursor-pointer">
              <img
                src="https://images.unsplash.com/photo-1517686469429-8bdb88b9f907?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Pizza 3"
                className="w-full h-[36rem] object-cover opacity-40 transition-all ease"
              />
              <div className="absolute text-center">
                <h3 className="text-[3.2rem] font-semibold leading-tight">
                  Special
                </h3>
                <p className="text-xl font-light">
                  New Taste | New Feeling | New Sensation
                </p>
                <Link to="">
                  <button className="text-yellow-500 px-6 text-lg font-semibold mt-4 -mb-8 hover:underline">
                    Order Now
                  </button>
                </Link>
              </div>
            </div>

            {/* Featured Pizza 4 */}
            <div className="bg-black w-full shadow-lg relative flex justify-center items-center cursor-pointer">
              <img
                src="https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Pizza 4"
                className="w-full h-[36rem] group object-cover opacity-40 transition-all ease"
              />
              <div className="absolute text-center">
                <h3 className="text-[3.2rem] font-semibold leading-tight">
                  Crusty
                </h3>
                <p className="text-xl font-light">
                  New Taste | New Feeling | New Sensation
                </p>
                <Link to="">
                  <button className="text-yellow-500 px-6 text-lg font-semibold mt-4 -mb-8 hover:underline">
                    Order Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-b from-red-500 via-red-600 to-red-700 bg-cover bg-center h-96 flex items-center">
        <div className="container mx-auto text-center text-white">
          <h1 className="text-5xl font-bold">Build Your Perfect Pizza</h1>
          <p className="text-xl mt-4">
            Choose your favorite toppings and create a delicious masterpiece.
          </p>
          <a
            href="/pizzacrafty/customize"
            className="mt-8 inline-block bg-yellow-500 text-gray-900 hover:bg-yellow-400 px-6 py-3 rounded-full text-lg font-semibold"
          >
            Start Customizing
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
