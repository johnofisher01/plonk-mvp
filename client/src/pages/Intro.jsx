import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// Helper to get random positions for flying letters
function getRandomTransform() {
  const x = Math.floor(Math.random() * 400 - 200); // -200 to 200px
  const y = Math.floor(Math.random() * 200 - 100); // -100 to 100px
  const r = Math.floor(Math.random() * 120 - 60);  // -60deg to 60deg
  return `translate(${x}px, ${y}px) rotate(${r}deg) scale(0.4)`;
}

const PLONK_LETTERS = ["P", "L", "O", "N", "K"];
const ANIMATION_TIME = 900; // ms to settle

const Intro = () => {
  const [settled, setSettled] = useState([false, false, false, false, false]);
  const [show, setShow] = useState([false, false, false, false, false]);
  const [randoms] = useState(() =>
    PLONK_LETTERS.map(() => getRandomTransform())
  );
  const navigate = useNavigate();

  // Animate each letter in with a fly effect, then settle
  useEffect(() => {
    PLONK_LETTERS.forEach((_, idx) => {
      setTimeout(() => {
        setShow((prev) => {
          const next = [...prev];
          next[idx] = true;
          return next;
        });
        setTimeout(() => {
          setSettled((prev) => {
            const next = [...prev];
            next[idx] = true;
            return next;
          });
        }, ANIMATION_TIME);
      }, idx * 180);
    });
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1
        className="font-extrabold tracking-widest mb-6 flex gap-4"
        style={{ fontSize: "6rem", lineHeight: "1", letterSpacing: "0.2em" }}
      >
        {PLONK_LETTERS.map((letter, idx) => (
          <span
            key={idx}
            style={{
              display: "inline-block",
              opacity: show[idx] ? 1 : 0,
              transform: show[idx]
                ? settled[idx]
                  ? "none"
                  : randoms[idx]
                : "scale(0.2)",
              transition:
                "opacity 0.4s, transform 0.8s cubic-bezier(.23,1.12,.68,.99)",
              color: "#9333ea", // Tailwind purple-600
              filter: "drop-shadow(0 4px 12px rgba(100,0,200,0.15))",
            }}
          >
            {letter}
          </span>
        ))}
      </h1>
      <p className="mb-8 text-xl text-gray-600 text-center max-w-lg">
        Welcome! This is the intro page. Click below to enter PLONK and explore the Calendar, AI, and Dashboard features.
      </p>
      <button
        className="px-8 py-4 bg-purple-700 text-white text-2xl font-semibold rounded-lg shadow-lg hover:bg-purple-800 transition"
        onClick={() => navigate("/main")}
        style={{letterSpacing: "0.1em"}}
      >
        ENTER PLONK
      </button>
    </div>
  );
};

export default Intro;