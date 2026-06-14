"use client";
import EditProfile from "@/components/EditProfile";
import { useSession } from "@/lib/auth-client";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";

const ProfilePage = () => {
  const session = useSession();
  const user = session?.data?.user;

  if (!user) {
    return (
      <main className="min-h-screen bg-zinc-50 dark:bg-zinc-950 flex items-center justify-center">
        <div className="text-center space-y-3">
          <div className="w-10 h-10 border-2 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto" />
          <p className="text-zinc-500 dark:text-zinc-400 text-sm">
            Loading profile...
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-zinc-50 dark:bg-zinc-950 py-12 px-4">
      <div className="max-w-lg mx-auto">
        <nav className="flex items-center gap-2 text-sm text-zinc-400 dark:text-zinc-500 mb-8">
          <Link
            href="/"
            className="hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors"
          >
            Home
          </Link>
          <span>/</span>
          <span className="text-zinc-700 dark:text-zinc-300 font-medium">
            Profile
          </span>
        </nav>

        <div className="bg-white dark:bg-zinc-900 rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-sm overflow-hidden">
          <div className="h-32 bg-linear-to-r from-blue-600 via-violet-600 to-blue-500 relative">
            <div className="absolute -top-6 -right-6 w-32 h-32 rounded-full bg-white/10" />
            <div className="absolute -bottom-4 -left-4 w-24 h-24 rounded-full bg-white/10" />
          </div>

          <div className="relative flex justify-center">
            <div className="absolute -top-14">
              <div className="p-1 rounded-full bg-white dark:bg-zinc-900 shadow-md">
                {user.image ? (
                  <Image
                    width={24}
                    height={24}
                    src={user.image}
                    alt={user.name}
                    referrerPolicy="no-referrer"
                    className="w-24 h-24 rounded-full object-cover"
                  />
                ) : (
                  <div className="w-24 h-24 rounded-full bg-blue-600 flex items-center justify-center text-white text-3xl font-bold">
                    {user.name?.[0]?.toUpperCase()}
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="pt-16 pb-8 px-6 flex flex-col gap-6">
            <div className="text-center">
              <h1 className="text-xl font-bold text-zinc-900 dark:text-white">
                {user.name}
              </h1>
              <p className="text-zinc-500 dark:text-zinc-400 text-sm mt-1">
                {user.email}
              </p>

              <span className="inline-flex items-center gap-1.5 mt-3 bg-green-50 dark:bg-green-950/40 text-green-600 dark:text-green-400 text-xs font-semibold px-3 py-1 rounded-full border border-green-100 dark:border-green-900">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-3.5 h-3.5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                Verified Account
              </span>
            </div>

            <div className="border-t border-zinc-100 dark:border-zinc-800" />

            <div className="flex flex-col gap-3">
              <InfoRow
                icon="gravity-ui:person"
                label="Full Name"
                value={user.name}
              />
              <InfoRow
                icon="gravity-ui:envelope"
                label="Email Address"
                value={user.email}
              />
              {user.image && (
                <InfoRow
                  icon="gravity-ui:image"
                  label="Profile Image"
                  value={user.image}
                  truncate
                />
              )}
            </div>

            <div className="border-t border-zinc-100 dark:border-zinc-800" />

            <EditProfile />
          </div>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-3">
          {[
            {
              label: "My Tutors",
              href: "/myTutors",
              icon: "gravity-ui:graduation-cap",
            },
            {
              label: "Booked Sessions",
              href: "/bookedSessions",
              icon: "gravity-ui:calendar",
            },
          ].map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="flex items-center gap-3 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl px-4 py-3.5 hover:border-blue-200 dark:hover:border-blue-800 hover:bg-blue-50 dark:hover:bg-blue-950/30 transition-all group"
            >
              <div className="w-8 h-8 rounded-lg bg-blue-50 dark:bg-blue-950/40 flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors shrink-0">
                <Icon icon={item.icon} width={16} height={16} />
              </div>
              <span className="text-sm font-semibold text-zinc-700 dark:text-zinc-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {item.label}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
};

const InfoRow = ({ icon, label, value, truncate }) => (
  <div className="flex items-start gap-3 bg-zinc-50 dark:bg-zinc-800 rounded-xl px-4 py-3 border border-zinc-100 dark:border-zinc-700">
    <div className="w-8 h-8 rounded-lg bg-blue-50 dark:bg-blue-950/40 flex items-center justify-center text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5">
      <Icon icon={icon} width={15} height={15} />
    </div>
    <div className="min-w-0 flex-1">
      <p className="text-xs font-semibold text-zinc-400 dark:text-zinc-500 uppercase tracking-wide mb-0.5">
        {label}
      </p>
      <p
        className={`text-sm font-medium text-zinc-900 dark:text-white ${truncate ? "truncate" : ""}`}
        title={truncate ? value : undefined}
      >
        {value || "—"}
      </p>
    </div>
  </div>
);

export default ProfilePage;
