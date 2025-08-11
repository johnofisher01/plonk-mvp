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

const Calendar = ({ entries }) => {
  // Default to last entry's month/year, else current
  const latest = entries.length ? entries[entries.length - 1] : null;
  const [month, setMonth] = useState(latest ? latest.month : new Date().getMonth() + 1);
  const [year, setYear] = useState(latest ? latest.year : new Date().getFullYear());

  const daysInMonth = getDaysInMonth(month, year);

  // Get entries for current month/year
  const monthEntries = entries.filter(
    (e) => e.month === month && e.year === year
  );

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
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-2">
      <div className="bg-white rounded-xl shadow p-4 w-full max-w-3xl">
        <div className="flex justify-between items-center mb-4">
          <button onClick={handlePrevMonth} className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300">&lt;</button>
          <div className="text-xl font-bold">{getMonthName(month)} {year}</div>
          <button onClick={handleNextMonth} className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300">&gt;</button>
        </div>
        <div className="grid grid-cols-7 gap-2">
          {[...Array(daysInMonth)].map((_, i) => {
            const day = i + 1;
            const entry = getEntryForDay(day);
            return (
              <div
                key={day}
                className="border rounded-lg h-20 flex flex-col justify-center items-center relative"
                style={{
                  background:
                    entry?.importance === "red"
                      ? "#fee2e2"
                      : entry?.importance === "amber"
                      ? "#fef9c3"
                      : entry?.importance === "green"
                      ? "#d1fae5"
                      : "#fff",
                  borderColor: entry ? "#374151" : "#e5e7eb"
                }}
              >
                <div className="text-xs font-bold mb-1">{day}</div>
                {entry && (
                  <div className="text-xs font-semibold truncate w-full px-2">
                    <span className="block">{entry.desc}</span>
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