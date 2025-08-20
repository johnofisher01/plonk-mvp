import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const importanceChoices = [
  { color: "bg-red-400", label: "Important", value: "red" },
  { color: "bg-yellow-300", label: "Medium", value: "amber" },
  { color: "bg-green-400", label: "Not Important", value: "green" }
];

function parseDate(input) {
  if (/^\d{6}$/.test(input)) {
    const day = input.slice(0, 2);
    const month = input.slice(2, 4);
    const year = "20" + input.slice(4);
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

  const handleImportanceClick = (value) => {
    setImportance(value);
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
    <div className="flex flex-col items-center justify-center min-h-[80vh] pt-10 px-2">
      <div className="bg-white/95 rounded-3xl shadow-2xl p-8 w-full max-w-xl border-4 border-teal-200">
        <h2 className="text-2xl font-bold mb-4 text-teal-700">Add Calendar Entry</h2>
        {step === 0 && (
          <>
            <div className="mb-2 text-gray-500">Describe your event or reminder:</div>
            <input
              autoFocus
              className="w-full border-2 border-indigo-200 rounded-xl px-4 py-3 mb-4 focus:outline-none focus:ring-2 focus:ring-indigo-400 text-lg"
              type="text"
              value={rawInput}
              onChange={handleInputChange}
              placeholder="Type description, then a number to start date"
            />
            <div className="text-xs text-teal-500">Type a number to begin entering date (DDMMYY)</div>
          </>
        )}
        {step === 1 && (
          <>
            <div className="mb-2 text-gray-500">Enter date <span className="font-mono text-sm">(DDMMYY)</span></div>
            <input
              autoFocus
              className="w-full border-2 border-orange-200 rounded-xl px-4 py-3 mb-4 focus:outline-none focus:ring-2 focus:ring-orange-400 text-lg"
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
            <div className="mb-2 text-gray-500">Enter time <span className="font-mono text-sm">(HHMM)</span></div>
            <input
              autoFocus
              className="w-full border-2 border-teal-200 rounded-xl px-4 py-3 mb-4 focus:outline-none focus:ring-2 focus:ring-teal-400 text-lg"
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
            <div className="mb-4 font-semibold text-center text-indigo-600">How important?</div>
            <div className="flex justify-around mb-2">
              {importanceChoices.map((choice) => (
                <button
                  key={choice.value}
                  className={`px-7 py-3 rounded-xl font-bold shadow-xl text-lg ${choice.color} text-white border-2 border-white hover:scale-105 transition`}
                  onClick={() => handleImportanceClick(choice.value)}
                >
                  {choice.label}
                </button>
              ))}
            </div>
          </>
        )}
        {showPlonk && (
          <div className="flex flex-col items-center justify-center py-4">
            <div className="mb-2 text-lg font-semibold text-teal-700">Ready to Plonk?</div>
            <div className="mb-4 text-sm text-gray-700 w-full bg-gray-100 rounded-xl px-4 py-2">
              <div><strong>Description:</strong> {desc}</div>
              <div><strong>Date:</strong> {dateObj?.display}</div>
              <div><strong>Time:</strong> {timeObj?.display}</div>
              <div>
                <strong>Importance:</strong> {
                  importanceChoices.find((c) => c.value === importance)?.label
                }
              </div>
            </div>
            <button
              className="bg-gradient-to-r from-indigo-400 to-teal-400 text-white px-10 py-4 rounded-2xl font-bold shadow-xl hover:scale-105 transition"
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