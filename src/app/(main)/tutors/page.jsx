"use client";

import TutorsFeaturesCard from "@/components/TutorsFeatures/TutorsFeaturesCard";
import {
  Calendar,
  DateField,
  DatePicker,
  Label,
  SearchField,
} from "@heroui/react";
import { useEffect, useState } from "react";

const TutorsPage = () => {
  const [tutors, setTutors] = useState([]);
  const [searching, setSearching] = useState("");
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchTutors = async (search = "", start = null, end = null) => {
    setLoading(true);
    const params = new URLSearchParams();
    if (search?.trim()) params.append("search", search.trim());
    if (start)
      params.append(
        "startDate",
        `${start.year}-${String(start.month).padStart(2, "0")}-${String(start.day).padStart(2, "0")}`,
      );
    if (end)
      params.append(
        "endDate",
        `${end.year}-${String(end.month).padStart(2, "0")}-${String(end.day).padStart(2, "0")}`,
      );
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/tutors?${params.toString()}`,
    );
    const data = await res.json();
    setTutors(data);
    setLoading(false);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchTutors(searching, startDate, endDate);
    }, 500);
    return () => clearTimeout(timer);
  }, [searching, startDate, endDate]);

  const hasFilters = searching || startDate || endDate;

  return (
    <main className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
      {/* Page header */}
      <div className="bg-white dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-3">
            Browse
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white mb-2">
            All Tutors
          </h1>
          <p className="text-zinc-500 dark:text-zinc-400 text-base">
            Browse all verified teachers and find your perfect match.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 p-4 mb-8 flex flex-wrap gap-4 items-end shadow-sm">
          <div className="flex-1 min-w-[200px]">
            <SearchField name="search" className="w-full">
              <Label className="text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wide mb-1.5 block">
                Search
              </Label>
              <SearchField.Group className="flex items-center gap-2 px-3 py-2 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 focus-within:ring-2 focus-within:ring-blue-500 transition">
                <SearchField.SearchIcon className="w-4 h-4 text-zinc-400 flex-shrink-0" />
                <SearchField.Input
                  value={searching}
                  onChange={(e) => setSearching(e.target.value)}
                  placeholder="Search tutor or subject..."
                  className="flex-1 bg-transparent text-sm text-zinc-900 dark:text-white placeholder:text-zinc-400 focus:outline-none"
                />
                <SearchField.ClearButton className="text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200" />
              </SearchField.Group>
            </SearchField>
          </div>

          <div className="w-56">
            <DatePicker value={startDate} onChange={setStartDate}>
              <Label className="text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wide mb-1.5 block">
                Start Date
              </Label>
              <DateField.Group
                fullWidth
                className="flex items-center px-3 py-2 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 focus-within:ring-2 focus-within:ring-blue-500 transition"
              >
                <DateField.Input className="flex-1 text-sm text-zinc-900 dark:text-white">
                  {(segment) => <DateField.Segment segment={segment} />}
                </DateField.Input>
                <DateField.Suffix>
                  <DatePicker.Trigger className="text-zinc-400 hover:text-blue-500 transition-colors">
                    <DatePicker.TriggerIndicator />
                  </DatePicker.Trigger>
                </DateField.Suffix>
              </DateField.Group>
              <DatePicker.Popover className="z-50">
                <Calendar aria-label="Start Date">
                  <Calendar.Header>
                    <Calendar.YearPickerTrigger>
                      <Calendar.YearPickerTriggerHeading />
                      <Calendar.YearPickerTriggerIndicator />
                    </Calendar.YearPickerTrigger>
                    <Calendar.NavButton slot="previous" />
                    <Calendar.NavButton slot="next" />
                  </Calendar.Header>
                  <Calendar.Grid>
                    <Calendar.GridHeader>
                      {(day) => (
                        <Calendar.HeaderCell>{day}</Calendar.HeaderCell>
                      )}
                    </Calendar.GridHeader>
                    <Calendar.GridBody>
                      {(date) => <Calendar.Cell date={date} />}
                    </Calendar.GridBody>
                  </Calendar.Grid>
                  <Calendar.YearPickerGrid>
                    <Calendar.YearPickerGridBody>
                      {({ year }) => <Calendar.YearPickerCell year={year} />}
                    </Calendar.YearPickerGridBody>
                  </Calendar.YearPickerGrid>
                </Calendar>
              </DatePicker.Popover>
            </DatePicker>
          </div>

          <div className="w-56">
            <DatePicker value={endDate} onChange={setEndDate}>
              <Label className="text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wide mb-1.5 block">
                End Date
              </Label>
              <DateField.Group
                fullWidth
                className="flex items-center px-3 py-2 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 focus-within:ring-2 focus-within:ring-blue-500 transition"
              >
                <DateField.Input className="flex-1 text-sm text-zinc-900 dark:text-white">
                  {(segment) => <DateField.Segment segment={segment} />}
                </DateField.Input>
                <DateField.Suffix>
                  <DatePicker.Trigger className="text-zinc-400 hover:text-blue-500 transition-colors">
                    <DatePicker.TriggerIndicator />
                  </DatePicker.Trigger>
                </DateField.Suffix>
              </DateField.Group>
              <DatePicker.Popover className="z-50">
                <Calendar aria-label="End Date">
                  <Calendar.Header>
                    <Calendar.YearPickerTrigger>
                      <Calendar.YearPickerTriggerHeading />
                      <Calendar.YearPickerTriggerIndicator />
                    </Calendar.YearPickerTrigger>
                    <Calendar.NavButton slot="previous" />
                    <Calendar.NavButton slot="next" />
                  </Calendar.Header>
                  <Calendar.Grid>
                    <Calendar.GridHeader>
                      {(day) => (
                        <Calendar.HeaderCell>{day}</Calendar.HeaderCell>
                      )}
                    </Calendar.GridHeader>
                    <Calendar.GridBody>
                      {(date) => <Calendar.Cell date={date} />}
                    </Calendar.GridBody>
                  </Calendar.Grid>
                  <Calendar.YearPickerGrid>
                    <Calendar.YearPickerGridBody>
                      {({ year }) => <Calendar.YearPickerCell year={year} />}
                    </Calendar.YearPickerGridBody>
                  </Calendar.YearPickerGrid>
                </Calendar>
              </DatePicker.Popover>
            </DatePicker>
          </div>

          {hasFilters && (
            <button
              onClick={() => {
                setSearching("");
                setStartDate(null);
                setEndDate(null);
              }}
              className="px-4 py-2 text-sm font-medium text-zinc-500 dark:text-zinc-400 hover:text-red-500 dark:hover:text-red-400 border border-zinc-200 dark:border-zinc-700 rounded-xl hover:border-red-300 dark:hover:border-red-800 transition-colors"
            >
              Clear filters
            </button>
          )}
        </div>

        {!loading && tutors.length > 0 && (
          <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-5">
            Showing{" "}
            <span className="font-semibold text-zinc-800 dark:text-zinc-200">
              {tutors.length}
            </span>{" "}
            tutor{tutors.length !== 1 ? "s" : ""}
            {searching && (
              <>
                {" "}
                for{" "}
                <span className="font-semibold text-blue-600 dark:text-blue-400">
                  "{searching}"
                </span>
              </>
            )}
          </p>
        )}

        {loading && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="bg-white dark:bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 animate-pulse"
              >
                <div className="h-48 bg-zinc-200 dark:bg-zinc-700" />
                <div className="p-5 space-y-3">
                  <div className="h-4 bg-zinc-200 dark:bg-zinc-700 rounded w-3/4" />
                  <div className="h-3 bg-zinc-200 dark:bg-zinc-700 rounded w-1/2" />
                  <div className="h-3 bg-zinc-200 dark:bg-zinc-700 rounded w-2/3" />
                  <div className="h-8 bg-zinc-200 dark:bg-zinc-700 rounded-full mt-4" />
                </div>
              </div>
            ))}
          </div>
        )}

        {!loading && tutors.length === 0 && (
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <div className="w-16 h-16 rounded-2xl bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center mb-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8 text-zinc-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">
              No tutors found
            </h2>
            <p className="text-zinc-500 dark:text-zinc-400 text-sm max-w-xs">
              We could not find any tutors matching your search. Try adjusting
              your filters.
            </p>
            {hasFilters && (
              <button
                onClick={() => {
                  setSearching("");
                  setStartDate(null);
                  setEndDate(null);
                }}
                className="mt-5 px-5 py-2 text-sm font-medium bg-blue-600 hover:bg-blue-700 text-white rounded-xl transition-colors"
              >
                Clear all filters
              </button>
            )}
          </div>
        )}

        {!loading && tutors.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {tutors.map((tutor) => (
              <TutorsFeaturesCard key={tutor._id} tutor={tutor} />
            ))}
          </div>
        )}
      </div>
    </main>
  );
};

export default TutorsPage;
