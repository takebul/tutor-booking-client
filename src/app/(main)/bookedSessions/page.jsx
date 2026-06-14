import BookedSessions from "@/components/BookedSessions";
import { myBookedSessionDataFetching } from "@/lib/data";
import Link from "next/link";

const BookedSessionPage = async () => {
  const myBookedSessions = await myBookedSessionDataFetching();

  return (
    <main className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
      {/* Page header */}
      <div className="bg-white dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-3">
            Dashboard
          </span>
          <h1 className="text-3xl font-bold text-zinc-900 dark:text-white mb-1">
            My Booked Sessions
          </h1>
          <p className="text-zinc-500 dark:text-zinc-400 text-sm">
            Track and manage all your booked tutor sessions.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Empty state */}
        {myBookedSessions.length === 0 ? (
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
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">
              No sessions booked yet
            </h2>
            <p className="text-zinc-500 dark:text-zinc-400 text-sm max-w-xs mb-6">
              You have not booked any tutor sessions. Browse our tutors to get
              started.
            </p>
            <Link
              href="/tutors"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold rounded-xl transition-colors"
            >
              Browse Tutors →
            </Link>
          </div>
        ) : (
          <>
            {/* Count badge */}
            <div className="flex items-center gap-3 mb-6">
              <span className="inline-flex items-center gap-1.5 bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 text-xs font-semibold px-3 py-1.5 rounded-full border border-blue-100 dark:border-blue-900">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-3.5 h-3.5"
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
                {myBookedSessions.length} session
                {myBookedSessions.length !== 1 ? "s" : ""} booked
              </span>
            </div>

            {/* Table */}
            <div className="bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-sm overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-zinc-100 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-800/50">
                      {[
                        "Student",
                        "Phone",
                        "Tutor",
                        "Email",
                        "Enrolled",
                        "Status",
                        "Action",
                      ].map((h) => (
                        <th
                          key={h}
                          className="text-left px-5 py-3.5 text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wide whitespace-nowrap"
                        >
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
                    {myBookedSessions.map((myBookedSession) => (
                      <BookedSessions
                        key={myBookedSession?._id}
                        myBookedSession={myBookedSession}
                      />
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </>
        )}
      </div>
    </main>
  );
};

export default BookedSessionPage;
