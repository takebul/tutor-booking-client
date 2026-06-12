import MyTutors from "@/components/MyTutors";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

const MyTutorsPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const userId = session?.user?.id;

  console.log(userId);

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/myTutors/${userId}`,
  );
  const tutors = await res.json();

  console.log(tutors.length);

  return (
    <div>
      {tutors.length == 0 ? (
        <>
          <div className="text-center my-8">
            <h1 className="text-2xl font-bold">Empty Tutors Data</h1>
            <p className="text-muted">Please add one tutors</p>
          </div>
        </>
      ) : (
        <>
          {tutors.map((tutor) => (
            <MyTutors key={tutor?._id} tutor={tutor} />
          ))}
        </>
      )}
    </div>
  );
};

export default MyTutorsPage;
