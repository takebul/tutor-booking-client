import Link from "next/link";

const ModernSolutions = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-zinc-50 dark:bg-zinc-900">
      <div className="max-w-6xl mx-auto">
        <div className="relative overflow-hidden rounded-3xl bg-blue-600 dark:bg-blue-700">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-blue-500/40 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-violet-600/30 blur-3xl" />
          </div>

          <div className="relative flex flex-col lg:flex-row items-center gap-10 p-8 sm:p-12 lg:p-16">
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white/15 mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="white"
                  className="w-7 h-7"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-4">
                Modern solutions to
                <br className="hidden sm:block" /> all kinds of problems
              </h2>
              <p className="text-blue-100 text-base leading-relaxed max-w-lg mx-auto lg:mx-0">
                Whether you are a student struggling with a subject or a parent
                looking for the right tutor, our platform connects you instantly
                with verified experts worldwide.
              </p>

              <div className="flex flex-wrap gap-3 mt-8 justify-center lg:justify-start">
                {["200+ Tutors", "7,500+ Learners", "14 Awards"].map(
                  (badge) => (
                    <span
                      key={badge}
                      className="bg-white/15 border border-white/25 text-white text-xs font-semibold px-4 py-1.5 rounded-full"
                    >
                      {badge}
                    </span>
                  ),
                )}
              </div>
            </div>

            <div className="w-full lg:w-80 bg-white dark:bg-zinc-900 rounded-2xl p-8 shadow-2xl flex flex-col gap-5">
              <div>
                <h3 className="text-lg font-bold text-white dark:text-white mb-1">
                  Ready to get started?
                </h3>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">
                  Classes now forming — find your perfect tutor today.
                </p>
              </div>

              <Link href="/tutors">
                <button className="w-full py-3 px-6 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold rounded-xl transition-colors shadow-sm">
                  Explore Tutors →
                </button>
              </Link>

              <Link href="/about">
                <button className="w-full py-3 px-6 border border-zinc-200 dark:border-zinc-700 text-zinc-500 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-800 text-sm font-medium rounded-xl transition-colors">
                  Learn More
                </button>
              </Link>

              <p className="text-center text-xs text-zinc-400 dark:text-zinc-500">
                No signup fee · Cancel anytime
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModernSolutions;
