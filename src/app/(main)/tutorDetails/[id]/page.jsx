import { tutorsSingleDataFetching } from "@/lib/data";
import BookSessionBtn from "@/ui/BookSessionBtn";
import Image from "next/image";
import React from "react";

const TutorsBookingPage = async ({ params }) => {
  const { id } = await params;
  const res = await fetch(`http://localhost:8541/tutors/${id}`);
  const tutor = await res.json();

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

  return (
    <div className="justify-items-center my-10">
      <div className="flex gap-8 items-center border border-slate-200 p-4 shadow">
        <div>
          <Image
            className="w-full"
            src={tutorImage}
            alt={"tutorName"}
            width={3000}
            height={300}
          />
        </div>
        <div className="space-y-4">
          <h4 className="text-2xl font-bold">{tutorName}</h4>
          <p className="text-xl text-muted font-semibold">{subjectCategory}</p>
          <p>
            <span className="font-semibold">Institution: </span>
            {institution}
          </p>
          <p>
            <span className="font-semibold">Experience: </span>
            {experience}
          </p>
          <p>
            <span className="font-semibold">Location: </span>
            {location}
          </p>
          <p>
            <span className="font-semibold">Mode: </span>
            {mode}
          </p>
          <p>
            <span className="font-semibold">Available & Time Slot: </span>
            {availableTimeSlot}
          </p>
          <p>
            <span className="font-semibold">Hourly Fee: $</span>
            {hourlyFee}/hr
          </p>
          <p>
            <span className="font-semibold">remainingSlots: </span>
            {remainingSlots}
          </p>
          <p>
            <span className="font-semibold">Session Start Date: </span>
            {sessionStartDate}
          </p>
          <BookSessionBtn>Book Session</BookSessionBtn>
        </div>
      </div>
    </div>
  );
};

export default TutorsBookingPage;
