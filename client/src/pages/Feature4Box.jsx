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

  const handleInputChange = (e) => {
    const val = e.target.value;
    setRawInput(val);

    if (step === 0) {
      setDesc(val);
      if (/\d/.test(val)) {
        setStep(1);
        setRawInput("");
      }
    } else if (step === 1) {
      if (/^\d{6}$/.test(val)) {
        const d = parseDate(val);
        if (d) {
          setDateObj(d);
          setStep(2);
          setRawInput("");
        }
      }
    } else if (step === 2) {
      if (/^\d{4}$/.test(val)) {
        const t = parseTime(val);
        if (t) {
          setTimeObj(t);
          setStep(3);
          setRawInput("");
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
    addEntry({
      desc,
      date: dateObj.display,
      day: parseInt(dateObj.day, 10),
      month: parseInt(dateObj.month, 10),
      year: parseInt(dateObj.year, 10),
      time: timeObj.display,
      importance,
    });
    navigate("/calendar");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      <div className="bg-white rounded-xl shadow p-6 w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">Data Entry</h2>
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
        {showPlonk && (
          <div className="flex flex-col items-center justify-center">
            <div className="mb-2 text-lg font-semibold">Plonk?</div>
            <div className="mb-4 text-sm text-gray-700">
              <div><strong>Description:</strong> {desc}</div>
              <div><strong>Date:</strong> {dateObj?.display}</div>
              <div><strong>Time:</strong> {timeObj?.display}</div>
              <div>
                <strong>Importance:</strong> {
                  importanceChoices.find((c) => c.color === importance)?.label
                }
              </div>
            </div>
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