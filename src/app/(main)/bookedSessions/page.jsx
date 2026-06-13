import BookedSessions from "@/components/BookedSessions";
import { Icon } from "@iconify/react";

const BookedSessionPage = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/tutorBookedData`,
    { cache: "no-store" },
  );
  const myBookedSessions = await res.json();

  return (
    <div className="px-4 py-6 max-w-6xl mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Booked Sessions</h1>
        <p className="text-sm text-gray-500 mt-1">
          {myBookedSessions.length} session
          {myBookedSessions.length !== 1 ? "s" : ""} found
        </p>
      </div>

      {myBookedSessions.length === 0 ? (
        <div className="text-center py-20 border-2 border-dashed border-gray-200 rounded-xl">
          <Icon
            icon="gravity-ui:calendar-plus"
            className="w-12 h-12 text-gray-300 mx-auto mb-4"
          />
          <h2 className="text-xl font-semibold text-gray-600">
            No sessions booked yet
          </h2>
          <p className="text-gray-400 mt-1 text-sm">
            Booked sessions will appear here
          </p>
        </div>
      ) : (
        <BookedSessions myBookedSessions={myBookedSessions} />
      )}
    </div>
  );
};

export default BookedSessionPage;
