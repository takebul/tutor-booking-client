import MyTutors from "@/components/MyTutors";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

const MyTutorsPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const userId = session?.user?.id;

  console.log(userId);

  const res = await fetch(`http://localhost:8541/myTutors/${userId}`);
  const tutors = await res.json();

  return (
    <div>
      {tutors.map((tutor) => (
        <MyTutors key={tutor?._id} tutor={tutor} />
      ))}
    </div>
  );
};

export default MyTutorsPage;
