export const addTutorDataFetching = async (formData, userId) => {
  const TutorData = Object.fromEntries(formData.entries());

  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/tutors`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ ...TutorData, tutorId: userId }),
  });
  const data = await res.json();
  console.log(data);
  return data;
};
