import BookSessionBtn from "@/ui/BookSessionBtn";
import Image from "next/image";
import Link from "next/link";

const TutorsFeaturesCard = ({ tutor }) => {
  const {
    sessionStartDate,
    hourlyFee,
    availableTimeSlot,
    subjectCategory,
    tutorImage,
    tutorName,
    _id,
  } = tutor;

  return (
    <div className="group flex flex-col bg-white dark:bg-zinc-800 rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-700 hover:shadow-lg hover:shadow-zinc-200 dark:hover:shadow-zinc-900 hover:-translate-y-1 transition-all duration-300">
      <div className="relative overflow-hidden h-48 bg-zinc-100 dark:bg-zinc-700">
        <Image
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          src={
            tutorImage ||
            "https://t3.ftcdn.net/jpg/18/74/54/54/240_F_1874545443_7KFbKGSBWFTSR7QUejTrUn4QmFsH4erN.jpg"
          }
          alt={tutorName || "Tutor Image"}
          width={400}
          height={200}
        />

        <span className="absolute top-3 left-3 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
          {subjectCategory}
        </span>
      </div>

      <div className="flex flex-col flex-1 p-5 gap-4">
        <div>
          <h3 className="text-lg font-bold text-zinc-900 dark:text-white leading-tight">
            {tutorName}
          </h3>
        </div>

        <div className="flex flex-col gap-2 text-sm text-zinc-500 dark:text-zinc-400">
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 text-blue-500 flex-shrink-0"
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
            <span className="truncate">{availableTimeSlot}</span>
          </div>
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 text-blue-500 flex-shrink-0"
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
            <span>Starts: {sessionStartDate}</span>
          </div>
        </div>

        <div className="border-t border-zinc-100 dark:border-zinc-700" />

        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-xs text-zinc-400 dark:text-zinc-500">
              Hourly fee
            </p>
            <p className="text-xl font-bold text-blue-600 dark:text-blue-400">
              ${hourlyFee}
              <span className="text-xs font-normal text-zinc-400 dark:text-zinc-500">
                /hr
              </span>
            </p>
          </div>
          <Link href={`/tutors/${_id}`}>
            <BookSessionBtn>Book</BookSessionBtn>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TutorsFeaturesCard;
