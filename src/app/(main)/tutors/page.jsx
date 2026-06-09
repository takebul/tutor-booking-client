import TutorsFeaturesCard from "@/components/TutorsFeatures/TutorsFeaturesCard";

const TutorsPage = async () => {
  const res = await fetch(`http://localhost:8541/tutors`);
  const tutors = await res.json();
  return (
    <section>
      <div className="text-center my-5">
        <h1 className="text-5xl font-bold">Our All Tutors</h1>
        <p className="text-muted text-lg">
          Here are all of the Verified Teachers
        </p>
      </div>
      <div className="grid grid-cols-4 gap-4 mt-4">
        {tutors.map((tutor) => (
          <TutorsFeaturesCard key={tutor._id} tutor={tutor} />
        ))}
      </div>
    </section>
  );
};

export default TutorsPage;
