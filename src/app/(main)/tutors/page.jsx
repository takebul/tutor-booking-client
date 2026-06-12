import DateFiltering from "@/components/filter/DateFiltering";
import SearchFiltering from "@/components/filter/SearchFiltering";
import TutorsFeaturesCard from "@/components/TutorsFeatures/TutorsFeaturesCard";

const TutorsPage = async ({ searchParams }) => {
  const { searchTerm } = await searchParams;
  const res = await fetch(`http://localhost:8541/tutors?search=${searchTerm}`);
  const tutors = await res.json();
  return (
    <section className="w-11/12 mx-auto">
      <div className="text-center my-5">
        <h1 className="text-5xl font-bold">Our All Tutors</h1>
        <p className="text-muted text-lg">
          Here are all of the Verified Teachers
        </p>
      </div>
      <div className="flex gap-4 w-11/12 mx-auto my-4">
        <SearchFiltering />
        <DateFiltering />
      </div>
      <div className="grid grid-cols-3 gap-4 mt-4">
        {tutors.map((tutor) => (
          <TutorsFeaturesCard key={tutor._id} tutor={tutor} />
        ))}
      </div>
    </section>
  );
};

export default TutorsPage;
