import React, { useState } from "react";

const Customize = () => {
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const ingredients = [
    { id: 1, name: "Mozzarella Cheese" },
    { id: 2, name: "Tomato Sauce" },
    { id: 3, name: "Pepperoni" },
    { id: 4, name: "Mushrooms" },
    // Add more ingredients as needed
  ];

  const toggleIngredient = (ingredient) => {
    const isSelected = selectedIngredients.includes(ingredient.id);
    if (isSelected) {
      setSelectedIngredients(
        selectedIngredients.filter((id) => id !== ingredient.id)
      );
    } else {
      setSelectedIngredients([...selectedIngredients, ingredient.id]);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h1 className="text-2xl font-semibold mb-4">Customize Your Pizza</h1>
        <p className="text-gray-600 mb-4">Choose your favorite ingredients:</p>

        <div className="grid grid-cols-2 gap-4">
          {ingredients.map((ingredient) => (
            <div
              key={ingredient.id}
              onClick={() => toggleIngredient(ingredient)}
              className={`p-2 rounded-md cursor-pointer ${
                selectedIngredients.includes(ingredient.id)
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              {ingredient.name}
            </div>
          ))}
        </div>

        <button className="mt-6 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Customize;
