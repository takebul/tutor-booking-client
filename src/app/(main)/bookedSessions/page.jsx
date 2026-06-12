import BookedSessions from "@/components/BookedSessions";

const BookedSessionPage = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/tutorBookedData`,
  );
  const myBookedSessions = await res.json();
  console.log(myBookedSessions.length);
  return (
    <div>
      {myBookedSessions.length == 0 ? (
        <div className="text-center my-8">
          <h1 className="text-3xl font-bold">Empty Session Data</h1>
          <p className="text-muted">You are not added data</p>
        </div>
      ) : (
        <>
          {myBookedSessions.map((myBookedSession) => (
            <BookedSessions
              key={myBookedSession?._id}
              myBookedSession={myBookedSession}
            />
          ))}
        </>
      )}
    </div>
  );
};

export default BookedSessionPage;
