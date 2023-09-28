import React from "react";

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen mt-[6rem]">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-red-500 via-red-600 to-red-700 bg-cover bg-center h-96 flex items-center">
        <div className="container mx-auto text-center text-white">
          <h1 className="text-5xl font-bold">Build Your Perfect Pizza</h1>
          <p className="text-xl mt-4">
            Choose your favorite toppings and create a delicious masterpiece.
          </p>
          <a
            href="#"
            className="mt-8 inline-block bg-yellow-500 text-gray-900 hover:bg-yellow-400 px-6 py-3 rounded-full text-lg font-semibold"
          >
            Start Customizing
          </a>
        </div>
      </section>

      {/* Featured Pizza */}
      <section className="py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold">Featured Pizza</h2>
          <p className="text-gray-600 mt-2">
            Try our mouth-watering featured pizza of the month.
          </p>
          <div className="mt-8">
            <img
              src="https://img.freepik.com/premium-photo/chatbot-robot-making-pizza-using-sophisticated-mix-ingredients-tools_124507-106975.jpg"
              alt="Featured Pizza"
              className="w-96 mx-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-yellow-500 py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold text-gray-900">
            Ready to Order?
          </h2>
          <p className="text-gray-900 mt-2">
            Place your order now and enjoy the perfect pizza.
          </p>
          <a
            href="#"
            className="mt-6 inline-block bg-gray-900 text-yellow-500 hover:bg-gray-800 px-8 py-4 rounded-full text-lg font-semibold"
          >
            Order Now
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
