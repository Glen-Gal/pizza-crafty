import React, { useState } from "react";

const Customize = () => {
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const [totalBill, setTotalBill] = useState(8.99); // Initial cost for pizza size and bread
  const [isVeg, setIsVeg] = useState(true); // Initially, show Veg ingredients
  const ingredients = [
    {
      id: 1,
      name: "Cheese",
      price: 2.99,
      image: "https://pics.clipartpng.com/Cheese_PNG_Clipart-3141.png",
      type: "veg",
    },
    {
      id: 2,
      name: "Tomato",
      price: 1.99,
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Tomato.png/515px-Tomato.png",
      type: "veg",
    },
    {
      id: 3,
      name: "Pepperoni",
      price: 3.49,
      image: "https://assets.stickpng.com/images/5c0798c72c6641059597e35e.png",
      type: "non-veg",
    },
    {
      id: 4,
      name: "Mushrooms",
      price: 2.29,
      image:
        "https://purepng.com/public/uploads/large/purepng.com-mushroommushroomtoadstoolgilled-fungipuffball-1411527070904r34nd.png",
      type: "veg",
    },
    {
      id: 5,
      name: "Ham",
      price: 4.29,
      image:
        "https://purepng.com/public/uploads/large/purepng.com-hamhamporkswinemeat-1411527529993ug0ee.png",
      type: "non-veg",
    },
    // Add more ingredients as needed, with "type" indicating "veg" or "non-veg"
  ];

  const toggleIngredient = (ingredient) => {
    const isSelected = selectedIngredients.includes(ingredient.id);
    if (isSelected) {
      setSelectedIngredients(
        selectedIngredients.filter((id) => id !== ingredient.id)
      );
      setTotalBill(totalBill - ingredient.price);
    } else {
      setSelectedIngredients([...selectedIngredients, ingredient.id]);
      setTotalBill(totalBill + ingredient.price);
    }
  };

  // Filter the ingredients based on the selected "Veg" or "Non-Veg" option
  const filteredIngredients = ingredients.filter(
    (ingredient) =>
      (isVeg && ingredient.type === "veg") ||
      (!isVeg && (ingredient.type === "veg" || ingredient.type === "non-veg"))
  );

  return (
    <div className="min-h-screen flex flex-col mt-[4rem]">
      <div className="w-full fixed z-10 flex justify-end mt-10 items-center px-3">
        <div className="w-fit bg-gray-100 px-8 p-3 rounded-full text-green-400">
          Total: ${totalBill.toFixed(2)}
        </div>
      </div>
      <div className="w-full fixed z-10 flex justify-center gap-4 mt-10 items-center px-3">
        <button
          className={`${
            isVeg
              ? "border-green-500 border-2 text-green-500"
              : "border border-black"
          } p-4 w-[8rem] bg-white/50 backdrop-blur-lg rounded-md text-center text-sm font-semibold`}
          onClick={() => setIsVeg(true)}
        >
          VEGANS
        </button>
        <button
          className={`${
            !isVeg
              ? "border-red-500 border-2 text-red-500"
              : "border border-black"
          } p-4 w-[8rem] bg-white/50 backdrop-blur-lg rounded-md text-center text-sm font-semibold`}
          onClick={() => setIsVeg(false)}
        >
          NON-VEGANS
        </button>
      </div>
      <main className="flex-grow flex flex-col items-start justify-center gap-4">
        <div className="px-[5%]">
          <div className="flex gap-4">
            {filteredIngredients.map((ingredient) => (
              <div
                key={ingredient.id}
                onClick={() => toggleIngredient(ingredient)}
                className={`border w-[10rem] rounded-lg cursor-pointer transition-all ease-in-out duration-150 ${
                  selectedIngredients.includes(ingredient.id)
                    ? "shadow-xl transform -translate-y-1 -translate-x-1 scale-105"
                    : "shadow-none bg-white"
                }`}
              >
                <div className="h-[8rem] p-4 m-2 rounded-lg bg-[#FAFAFC]">
                  <img
                    src={ingredient.image}
                    alt={ingredient.name}
                    className="w-full object-cover"
                  />
                </div>
                <div className="p-2 text-center flex justify-between w-full">
                  <div className="text-black/75">{ingredient.name}</div>
                  <div className="text-green-500">
                    ${ingredient.price.toFixed(2)}{" "}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <footer className="bg-gray-100 p-4">
        <div className="container mx-auto">
          <p className="text-center text-gray-500">
            Your pizza is getting tastier!
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Customize;
