import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const importanceChoices = [
  { color: "red", label: "Important" },
  { color: "amber", label: "Medium" },
  { color: "green", label: "Not Important" }
];

function parseDate(input) {
  if (/^\d{6}$/.test(input)) {
    const day = input.slice(0, 2);
    const month = input.slice(2, 4);
    const year = "20" + input.slice(4); // Assumes 21st century
    return { day, month, year, display: `${day}/${month}/${year}` };
  }
  return null;
}

function parseTime(input) {
  if (/^\d{4}$/.test(input)) {
    const hour = input.slice(0, 2);
    const minute = input.slice(2);
    return { hour, minute, display: `${hour}:${minute}` };
  }
  return null;
}

const Feature4Box = ({ addEntry }) => {
  const [step, setStep] = useState(0);
  const [rawInput, setRawInput] = useState("");
  const [dateObj, setDateObj] = useState(null);
  const [timeObj, setTimeObj] = useState(null);
  const [importance, setImportance] = useState(null);
  const [showPlonk, setShowPlonk] = useState(false);
  const [desc, setDesc] = useState("");
  const navigate = useNavigate();

  // Step 0: description, Step 1: date, Step 2: time, Step 3: importance, Step 4: Plonk

  const handleInputChange = (e) => {
    const val = e.target.value;
    setRawInput(val);

    if (step === 0) {
      setDesc(val);
      // When user types a number, jump to date step
      if (/\d/.test(val)) {
        setStep(1);
        setRawInput("");
      }
    } else if (step === 1) {
      // As soon as 6 digits entered, parse date
      if (/^\d{6}$/.test(val)) {
        const d = parseDate(val);
        if (d) {
          setDateObj(d);
          setStep(2);
          setRawInput("");
        }
      }
    } else if (step === 2) {
      // As soon as 4 digits entered, parse time
      if (/^\d{4}$/.test(val)) {
        const t = parseTime(val);
        if (t) {
          setTimeObj(t);
          setStep(3);
          setRawInput(""); // Not used further
        }
      }
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      if (step === 1 && dateObj) {
        setStep(2);
      } else if (step === 2 && timeObj) {
        setStep(3);
      }
    }
  };

  const handleImportanceClick = (color) => {
    setImportance(color);
    setShowPlonk(true);
  };

  const handlePlonk = () => {
    // Save entry to app state
    addEntry({
      desc,
      date: dateObj.display,
      day: parseInt(dateObj.day, 10),
      month: parseInt(dateObj.month, 10),
      year: parseInt(dateObj.year, 10),
      time: timeObj.display,
      importance,
    });
    // Go to calendar
    navigate("/calendar");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      <div className="bg-white rounded-xl shadow p-6 w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">Data Entry</h2>

        {/* Step 0: Description */}
        {step === 0 && (
          <>
            <div className="mb-2 text-gray-500">Type what is happening...</div>
            <input
              autoFocus
              className="w-full border rounded px-4 py-2 mb-2"
              type="text"
              value={rawInput}
              onChange={handleInputChange}
              placeholder="Description, then type a number to start date"
            />
            <div className="text-xs text-gray-400">Type a number to begin entering date (DDMMYY)</div>
          </>
        )}

        {/* Step 1: Date */}
        {step === 1 && (
          <>
            <div className="mb-2 text-gray-500">Enter date (DDMMYY)</div>
            <input
              autoFocus
              className="w-full border rounded px-4 py-2 mb-2"
              type="text"
              maxLength={6}
              value={rawInput}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              placeholder="e.g. 200825"
            />
            {dateObj && (
              <div className="text-green-600">Date: {dateObj.display}</div>
            )}
          </>
        )}

        {/* Step 2: Time */}
        {step === 2 && (
          <>
            <div className="mb-2 text-gray-500">Enter time (HHMM)</div>
            <input
              autoFocus
              className="w-full border rounded px-4 py-2 mb-2"
              type="text"
              maxLength={4}
              value={rawInput}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              placeholder="e.g. 1212"
            />
            {timeObj && (
              <div className="text-green-600">Time: {timeObj.display}</div>
            )}
          </>
        )}

        {/* Step 3: Importance */}
        {step === 3 && (
          <>
            <div className="mb-4 font-semibold text-center">How important?</div>
            <div className="flex justify-around mb-2">
              {importanceChoices.map((choice) => (
                <button
                  key={choice.color}
                  className={`px-4 py-2 rounded-xl font-bold shadow
                    ${
                      choice.color === "red"
                        ? "bg-red-500 text-white"
                        : choice.color === "amber"
                        ? "bg-yellow-400 text-white"
                        : "bg-green-500 text-white"
                    }`}
                  onClick={() => handleImportanceClick(choice.color)}
                >
                  {choice.label}
                </button>
              ))}
            </div>
          </>
        )}

        {/* Step 4: Plonk Confirmation */}
        {showPlonk && (
          <div className="flex flex-col items-center justify-center">
            <div className="mb-2 text-lg font-semibold">Plonk?</div>
            <button
              className="bg-blue-600 text-white px-8 py-3 rounded-xl font-bold shadow hover:bg-blue-700 transition"
              onClick={handlePlonk}
            >
              Enter
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Feature4Box;