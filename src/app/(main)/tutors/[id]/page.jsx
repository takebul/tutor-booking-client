import BookSessionPage from "@/components/BookSession";
import { tutorsBookingDetailsDataFetching } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

export const generateMetadata = async ({ params }) => {
  const { id } = await params;
  const tutor = await tutorsBookingDetailsDataFetching(id);

  return {
    title: tutor?.tutorName,
    description: tutor?.experience,
  };
};

const TutorsBookingPage = async ({ params }) => {
  const { id } = await params;

  const tutor = await tutorsBookingDetailsDataFetching(id);

  const {
    tutorName,
    tutorImage,
    subjectCategory,
    sessionStartDate,
    remainingSlots,
    mode,
    location,
    institution,
    hourlyFee,
    experience,
    availableTimeSlot,
  } = tutor;

  const isFull = remainingSlots <= 0;

  const infoRows = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
          />
        </svg>
      ),
      label: "Institution",
      value: institution,
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
      label: "Experience",
      value: experience,
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
      label: "Location",
      value: location,
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
      label: "Mode",
      value: mode,
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      label: "Available & Time Slot",
      value: availableTimeSlot,
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      ),
      label: "Session Start Date",
      value: sessionStartDate,
    },
  ];

  return (
    <main className="min-h-screen bg-zinc-50 dark:bg-zinc-950 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <nav className="flex items-center gap-2 text-sm text-zinc-400 dark:text-zinc-500 mb-8">
          <Link
            href="/"
            className="hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors"
          >
            Home
          </Link>
          <span>/</span>
          <Link
            href="/tutors"
            className="hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors"
          >
            Tutors
          </Link>
          <span>/</span>
          <span className="text-zinc-700 dark:text-zinc-300 font-medium">
            {tutorName}
          </span>
        </nav>

        <div className="bg-white dark:bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-200 dark:border-zinc-800 shadow-sm">
          <div className="flex flex-col lg:flex-row">
            <div className="relative lg:w-2/5 bg-zinc-100 dark:bg-zinc-800">
              <Image
                src={
                  tutorImage ||
                  "https://t3.ftcdn.net/jpg/18/74/54/54/240_F_1874545443_7KFbKGSBWFTSR7QUejTrUn4QmFsH4erN.jpg"
                }
                alt={tutorName || "Tutor Image"}
                width={600}
                height={700}
                className="w-full h-72 lg:h-full object-cover"
              />

              <span className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow">
                {subjectCategory}
              </span>

              <span
                className={`absolute top-4 right-4 text-xs font-bold px-3 py-1.5 rounded-full shadow ${isFull ? "bg-red-500 text-white" : "bg-green-500 text-white"}`}
              >
                {isFull ? "Fully Booked" : `${remainingSlots} slots left`}
              </span>
            </div>

            <div className="flex-1 p-6 sm:p-8 flex flex-col gap-6">
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white leading-tight">
                  {tutorName}
                </h1>
                <p className="text-blue-600 dark:text-blue-400 font-semibold mt-1">
                  {subjectCategory}
                </p>
              </div>

              <div className="inline-flex items-baseline gap-1 bg-blue-50 dark:bg-blue-950/40 border border-blue-100 dark:border-blue-900 rounded-2xl px-5 py-3 w-fit">
                <span className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                  ${hourlyFee}
                </span>
                <span className="text-sm text-zinc-500 dark:text-zinc-400">
                  /hr
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {infoRows.map((row) => (
                  <div
                    key={row.label}
                    className="flex items-start gap-3 bg-zinc-50 dark:bg-zinc-800 rounded-xl px-4 py-3"
                  >
                    <span className="mt-0.5 text-blue-500 flex-shrink-0">
                      {row.icon}
                    </span>
                    <div>
                      <p className="text-xs font-semibold text-zinc-400 dark:text-zinc-500 uppercase tracking-wide leading-none mb-1">
                        {row.label}
                      </p>
                      <p className="text-sm font-medium text-zinc-800 dark:text-zinc-200">
                        {row.value || "—"}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-zinc-100 dark:border-zinc-800" />

              <div className="flex items-center gap-4 flex-wrap">
                <BookSessionPage tutor={tutor} id={id} />
                {!isFull && (
                  <p className="text-xs text-zinc-400 dark:text-zinc-500">
                    Only{" "}
                    <strong className="text-zinc-700 dark:text-zinc-300">
                      {remainingSlots}
                    </strong>{" "}
                    seat{remainingSlots !== 1 ? "s" : ""} remaining — book soon!
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default TutorsBookingPage;
