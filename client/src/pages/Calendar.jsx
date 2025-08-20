import React, { useState } from "react";

function getDaysInMonth(month, year) {
  return new Date(year, month, 0).getDate();
}

function getMonthName(month) {
  return [
    "January","February","March","April","May","June",
    "July","August","September","October","November","December"
  ][month - 1];
}

const colorMap = {
  red: "bg-red-200 border-red-400",
  amber: "bg-yellow-100 border-yellow-400",
  green: "bg-green-100 border-green-400"
};

const Calendar = ({ entries }) => {
  const latest = entries.length ? entries[entries.length - 1] : null;
  const [month, setMonth] = useState(latest ? latest.month : new Date().getMonth() + 1);
  const [year, setYear] = useState(latest ? latest.year : new Date().getFullYear());

  const daysInMonth = getDaysInMonth(month, year);
  const monthEntries = entries.filter((e) => e.month === month && e.year === year);
  const getEntryForDay = (d) => monthEntries.find(e => e.day === d);

  const handlePrevMonth = () => {
    let newMonth = month - 1;
    let newYear = year;
    if (newMonth < 1) {
      newMonth = 12;
      newYear -= 1;
    }
    setMonth(newMonth);
    setYear(newYear);
  };

  const handleNextMonth = () => {
    let newMonth = month + 1;
    let newYear = year;
    if (newMonth > 12) {
      newMonth = 1;
      newYear += 1;
    }
    setMonth(newMonth);
    setYear(newYear);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] w-full px-2">
      <div className="bg-white/95 rounded-3xl shadow-2xl p-5 w-full max-w-7xl border-4 border-indigo-200">
        <div className="flex justify-between items-center mb-6 px-2">
          <button
            onClick={handlePrevMonth}
            className="px-4 py-2 bg-gradient-to-r from-teal-400 to-blue-400 text-white font-bold rounded-xl shadow hover:scale-105 transition"
          >
            &lt;
          </button>
          <div className="text-2xl font-bold text-indigo-700">{getMonthName(month)} {year}</div>
          <button
            onClick={handleNextMonth}
            className="px-4 py-2 bg-gradient-to-r from-orange-400 to-yellow-300 text-white font-bold rounded-xl shadow hover:scale-105 transition"
          >
            &gt;
          </button>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-4 w-full">
          {[...Array(daysInMonth)].map((_, i) => {
            const day = i + 1;
            const entry = getEntryForDay(day);
            let entryColor = entry ? colorMap[entry.importance] : "bg-white border-gray-200";
            return (
              <div
                key={day}
                className={`border-2 rounded-2xl h-24 sm:h-28 md:h-32 flex flex-col justify-center items-center relative shadow transition ${entryColor} w-full`}
              >
                <div className="text-xs font-bold mb-1 text-gray-700">{day}</div>
                {entry && (
                  <div className="text-xs font-semibold w-full px-2 text-gray-700">
                    <span className="block truncate">{entry.desc}</span>
                    <span className="block">{entry.time}</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Calendar;