import TutorsFeaturesCard from "./TutorsFeaturesCard";

const TutorsFeatures = async () => {
  const res = await fetch(`http://localhost:8541/tutorsFeatures`);
  const tutors = await res.json();
  return (
    <section className="w-11/12 mx-auto">
      <div className="text-center">
        <h1 className="text-5xl font-bold">Our Popular Tutors</h1>
        <p className="text-muted text-lg">
          Here are few of the Verified Teachers
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

export default TutorsFeatures;
