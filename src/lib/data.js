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

export const myBookedSessionDataFetching = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/tutorBookedData`,
  );
  const myBookedSessions = await res.json();
  return myBookedSessions;
};

export const myTutorsDataFetching = async (userId) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/myTutors/${userId}`,
  );
  const tutors = await res.json();
  return tutors;
};

export const tutorsBookingDetailsDataFetching = async (id) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/tutors/${id}`);
  const tutor = await res.json();
  return tutor;
};

export const bookedSessionsCancelDataFetching = async (_id) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/tutorBookedData/${_id}`,
    {
      method: "PATCH",
      headers: { "content-type": "application/json" },
    },
  );
  const data = await res.json();
  return data;
};

export const bookSessionAddingDataFetching = async (formData, id) => {
  const tutorData = Object.fromEntries(formData.entries());
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/tutors/${id}`,
    {
      method: "PATCH",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(tutorData),
    },
  );

  const data = await res.json();
  return data;
};

export const updateTutorDataFetching = async (formData, _id) => {
  const tutorData = Object.fromEntries(formData.entries());

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/myTutor/${_id}`,
    {
      method: "PATCH",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(tutorData),
    },
  );
  const data = await res.json();
  return data;
};

export const deleteTutorDataFetching = async (_id) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/myTutor/${_id}`,
    { method: "DELETE" },
  );
  const data = await res.json();
  return data;
};

export const tutorsFeaturesDataFetching = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/tutorsFeatures`,
  );
  const tutors = await res.json();
  return tutors;
};
