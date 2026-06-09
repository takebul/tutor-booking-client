import Image from "next/image";
import React from "react";

const TutorsBookingPage = () => {
  return (
    <div className="justify-items-center my-10">
      <div className="flex gap-2 items-center">
        <div>
          <Image
            src={
              "https://media.gettyimages.com/id/1649071923/photo/college-professor-tutors-student-after-class.jpg?s=612x612&w=0&k=20&c=Rp1AM6pOAwgH7ySTHjQUxv4VI6SiHjnL_zLt2u4o5S4="
            }
            alt={"tutorName"}
            width={300}
            height={300}
          />
        </div>
        <div>
          <p>Mosaddek</p>
        </div>
      </div>
    </div>
  );
};

export default TutorsBookingPage;
