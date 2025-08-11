import React from "react";

const buttonClass =
  "px-8 py-4 rounded-xl bg-white shadow hover:bg-gray-100 text-base sm:text-lg font-semibold transition";

const MainMenu = () => (
  <div className="min-h-screen w-full grid grid-cols-2 grid-rows-2">
    {/* Top Left */}
    <div className="flex items-center justify-center h-full">
      <button className={buttonClass}>Feature 1</button>
    </div>
    {/* Top Right */}
    <div className="flex items-center justify-center h-full">
      <button className={buttonClass}>Feature 2</button>
    </div>
    {/* Bottom Left */}
    <div className="flex items-center justify-center h-full">
      <button className={buttonClass}>Feature 3</button>
    </div>
    {/* Bottom Right */}
    <div className="flex items-center justify-center h-full">
      <button className={buttonClass}>Feature 4</button>
    </div>
  </div>
);

export default MainMenu;