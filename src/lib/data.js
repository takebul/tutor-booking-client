export const addTutorDataFetching = async (formData, userId, tokenData) => {
  const TutorData = Object.fromEntries(formData.entries());

  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/tutors`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${tokenData?.token}`,
    },

    body: JSON.stringify({ ...TutorData, tutorId: userId }),
  });
  const data = await res.json();

  return data;
};

export const myBookedSessionDataFetching = async (token) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/tutorBookedData`,
    {
      headers: {
        authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    },
  );
  const myBookedSessions = await res.json();
  return myBookedSessions;
};

export const myTutorsDataFetching = async (userId, token) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/myTutors/${userId}`,
    {
      headers: {
        authorization: `Bearer ${token}`,
      },
    },
  );
  const tutors = await res.json();
  return tutors;
};

export const tutorsBookingDetailsDataFetching = async (id, token) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/tutors/${id}`,
    {
      headers: {
        authorization: `Bearer ${token}`,
      },
    },
  );
  const tutor = await res.json();
  return tutor;
};

export const bookedSessionsCancelDataFetching = async (_id, tokenData) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/tutorBookedData/${_id}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${tokenData?.token}`,
      },
    },
  );
  const data = await res.json();
  return data;
};

export const bookSessionAddingDataFetching = async (
  formData,
  id,
  tokenData,
) => {
  const tutorData = Object.fromEntries(formData.entries());
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/tutors/${id}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${tokenData?.token}`,
      },

      body: JSON.stringify(tutorData),
    },
  );

  const data = await res.json();
  return data;
};

export const updateTutorDataFetching = async (formData, _id, tokenData) => {
  const tutorData = Object.fromEntries(formData.entries());

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/myTutor/${_id}`,
    {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${tokenData?.token}`,
      },

      body: JSON.stringify(tutorData),
    },
  );
  const data = await res.json();
  return data;
};

export const deleteTutorDataFetching = async (_id, tokenData) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/myTutor/${_id}`,
    {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${tokenData?.token}`,
      },
    },
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
