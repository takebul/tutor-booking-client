import BookSessionBtn from "@/ui/BookSessionBtn";
import { Button } from "@heroui/react";
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
    <div className="space-y-2 border rounded-sm border-slate-700 hover:shadow-md shadow-slate-400">
      <Image
        className="aspect-video object-cover"
        src={tutorImage}
        alt={tutorName}
        width={400}
        height={200}
      />
      <div className="p-4 space-y-2">
        <div>
          <h3 className="text-2xl font-bold">{tutorName}</h3>
          <p className="text-muted">{subjectCategory}</p>
        </div>
        <p>Available: {availableTimeSlot}</p>
        <p>Session Start Date: {sessionStartDate}</p>
        <p>Fee: ${hourlyFee}/hr</p>
        <div>
          <Link href={`/tutors/${_id}`}>
            <BookSessionBtn>View Details</BookSessionBtn>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TutorsFeaturesCard;
