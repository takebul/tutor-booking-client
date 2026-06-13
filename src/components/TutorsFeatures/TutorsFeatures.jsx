import Link from "next/link";
import TutorsFeaturesCard from "./TutorsFeaturesCard";

const TutorsFeatures = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/tutorsFeatures`,
  );
  const tutors = await res.json();

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-zinc-50 dark:bg-zinc-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-3">
            Our Experts
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white mb-3">
            Our Popular Tutors
          </h2>
          <p className="text-zinc-500 dark:text-zinc-400 text-base max-w-md mx-auto">
            Here are a few of our verified, top-rated teachers ready to help you
            succeed.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tutors.map((tutor) => (
            <TutorsFeaturesCard key={tutor._id} tutor={tutor} />
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/tutors"
            className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
          >
            View all tutors
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TutorsFeatures;
