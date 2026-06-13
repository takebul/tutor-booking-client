import Link from "next/link";

const reviews = [
  {
    name: "Ayesha Rahman",
    role: "HSC Student",
    text: "TutorBook helped me find the perfect physics tutor in just minutes. My grades improved from a C to an A within two months. I highly recommend it to every student.",
    avatar: "AR",
    color: "bg-blue-600",
  },
  {
    name: "Rafiqul Islam",
    role: "Parent of Grade 8 Student",
    text: "As a parent, I was worried about finding a trustworthy tutor. TutorBook's verified tutor system gave me complete confidence. My son loves his math sessions now.",
    avatar: "RI",
    color: "bg-violet-600",
  },
  {
    name: "Sadia Akter",
    role: "University Student",
    text: "The flexible scheduling feature is a game-changer. I can book sessions around my university timetable without any hassle. The 24/7 support team is also very helpful.",
    avatar: "SA",
    color: "bg-teal-600",
  },
  {
    name: "Mahmudul Hasan",
    role: "O-Level Student",
    text: "I found an incredible English literature tutor through TutorBook. The booking process was smooth and the session quality was outstanding. Worth every penny.",
    avatar: "MH",
    color: "bg-rose-600",
  },
];

const QuoteIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    fill="currentColor"
    className="w-7 h-7 text-blue-200 dark:text-blue-900"
  >
    <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z" />
    <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z" />
  </svg>
);

const AboutPage = () => {
  return (
    <main className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
      {/* Hero */}
      <div className="bg-white dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-4">
            Testimonials
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white mb-4">
            What our students are saying about us
          </h1>
          <p className="text-zinc-500 dark:text-zinc-400 text-base max-w-xl mx-auto">
            Real feedback from learners and parents who found their perfect
            tutor through TutorBook.
          </p>

          {/* Rating summary */}
          <div className="flex items-center justify-center gap-1 mt-6">
            {[1, 2, 3, 4, 5].map((s) => (
              <svg
                key={s}
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-amber-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
            <span className="ml-2 text-sm font-semibold text-zinc-700 dark:text-zinc-300">
              4.9 / 5
            </span>
            <span className="ml-1 text-sm text-zinc-400 dark:text-zinc-500">
              (from 7,500+ learners)
            </span>
          </div>
        </div>
      </div>

      {/* Reviews grid */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="flex flex-col bg-white dark:bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
            >
              {/* Quote body */}
              <div className="flex-1 p-6">
                <QuoteIcon />
                <p className="mt-4 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed italic">
                  "{review.text}"
                </p>
              </div>
              {/* Author footer */}
              <div className="flex items-center gap-3 px-6 py-4 bg-zinc-50 dark:bg-zinc-800 border-t border-zinc-100 dark:border-zinc-700">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0 ${review.color}`}
                >
                  {review.avatar}
                </div>
                <div>
                  <p className="text-sm font-semibold text-zinc-900 dark:text-white leading-tight">
                    {review.name}
                  </p>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400">
                    {review.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 text-center bg-blue-600 dark:bg-blue-700 rounded-3xl py-12 px-6">
          <h2 className="text-2xl font-bold text-white mb-3">
            Join thousands of happy learners
          </h2>
          <p className="text-blue-100 text-sm mb-6 max-w-md mx-auto">
            Find your perfect tutor today and start your learning journey with
            TutorBook.
          </p>
          <Link
            href="/tutors"
            className="inline-flex items-center gap-2 bg-white text-blue-600 font-bold text-sm px-6 py-3 rounded-xl hover:bg-blue-50 transition-colors shadow"
          >
            Explore Tutors →
          </Link>
        </div>
      </div>
    </main>
  );
};

export default AboutPage;
