const faqs = [
  {
    q: "How do I book a session with a tutor?",
    a: "Simply browse our tutors page, pick a tutor that matches your subject and schedule, then click 'Book Now'. Fill in your details and confirm — it takes less than 60 seconds.",
  },
  {
    q: "Are all tutors verified and background-checked?",
    a: "Yes. Every tutor on TutorBook goes through a strict verification process including identity checks, qualification review, and a trial assessment before they can accept bookings.",
  },
  {
    q: "What subjects and levels do you cover?",
    a: "We cover 20+ subjects from primary to university level, including Mathematics, Sciences, Languages, Economics, Literature, and more. Use the search filter to find exactly what you need.",
  },
  {
    q: "Can I cancel or reschedule a booked session?",
    a: "Yes. You can cancel or reschedule a session up to 24 hours before the start time without any charge. Late cancellations may be subject to a small fee.",
  },
  {
    q: "How is the hourly fee paid?",
    a: "Fees are clearly listed on each tutor's profile page. Payment is processed securely at the time of booking. We support multiple payment methods for your convenience.",
  },
  {
    q: "What if I am not satisfied with my session?",
    a: "Your satisfaction is our priority. If you are unhappy with a session, contact our 24/7 support team and we will work to resolve the issue or arrange a replacement session.",
  },
];

export const metadata = {
  title: "Tutor Book Service",
  description: `${faqs.q}`,
};

const ServicesPage = () => {
  return (
    <main className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
      {/* Page header */}
      <div className="bg-white dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-3">
            Services
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white mb-2">
            Frequently Asked Questions
          </h1>
          <p className="text-zinc-500 dark:text-zinc-400 text-base max-w-xl">
            Everything you need to know about how TutorBook works and how we
            deliver our services.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* FAQ accordion */}
        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <details
              key={i}
              className="group bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer select-none list-none focus:outline-none">
                <span className="text-sm font-semibold text-zinc-900 dark:text-white leading-snug">
                  {faq.q}
                </span>
                {/* Chevron */}
                <span className="flex-shrink-0 w-6 h-6 rounded-lg bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-zinc-400 group-open:bg-blue-50 dark:group-open:bg-blue-950/40 group-open:text-blue-600 dark:group-open:text-blue-400 transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-3.5 h-3.5 transition-transform group-open:rotate-180"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </span>
              </summary>
              <div className="px-6 pb-5">
                <div className="border-t border-zinc-100 dark:border-zinc-800 pt-4">
                  <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </div>
            </details>
          ))}
        </div>

        {/* Still have questions? */}
        <div className="mt-10 bg-blue-600 dark:bg-blue-700 rounded-2xl p-8 flex flex-col sm:flex-row items-center justify-between gap-5">
          <div>
            <h3 className="text-lg font-bold text-white mb-1">
              Still have questions?
            </h3>
            <p className="text-blue-100 text-sm">
              Our support team is available 24/7 to help you.
            </p>
          </div>
          <a
            href="/contact"
            className="flex-shrink-0 inline-flex items-center gap-2 bg-white text-blue-600 font-bold text-sm px-5 py-2.5 rounded-xl hover:bg-blue-50 transition-colors shadow"
          >
            Contact Support →
          </a>
        </div>
      </div>
    </main>
  );
};

export default ServicesPage;
