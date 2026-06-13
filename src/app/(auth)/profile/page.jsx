"use client";
import EditProfile from "@/components/EditProfile";
import { useSession } from "@/lib/auth-client";
import { Avatar } from "@heroui/react";
import { Icon } from "@iconify/react";

const ProfilePage = () => {
  const session = useSession();
  const userData = session?.data;
  const user = userData?.user;

  if (!user) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="text-center space-y-2">
          <div className="w-10 h-10 border-2 border-slate-400 border-t-transparent rounded-full animate-spin mx-auto" />
          <p className="text-slate-500 text-sm">Loading profile...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Card */}
        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
          {/* Top banner */}
          <div className="h-28 bg-gradient-to-r from-yellow-400 via-amber-300 to-indigo-500" />

          {/* Avatar — overlaps banner */}
          <div className="absolute top-14 left-1/2 -translate-x-1/2">
            <div className="p-0.5 rounded-full bg-gradient-to-br from-yellow-300 via-white to-indigo-500 shadow-lg">
              <Avatar className="w-24 h-24 text-2xl">
                <Avatar.Image alt={user.name} src={user.image} />
                <Avatar.Fallback className="bg-slate-700 text-white text-2xl font-bold">
                  {user.name?.[0]?.toUpperCase()}
                </Avatar.Fallback>
              </Avatar>
            </div>
          </div>

          {/* Body */}
          <div className="bg-slate-800 pt-16 pb-6 px-6 space-y-5">
            {/* Name + email hero */}
            <div className="text-center">
              <h2 className="text-xl font-bold text-white">{user.name}</h2>
              <p className="text-slate-400 text-sm mt-0.5">{user.email}</p>
            </div>

            <hr className="border-slate-700" />

            {/* Info rows */}
            <div className="space-y-3">
              <InfoRow
                icon="gravity-ui:person"
                label="Name"
                value={user.name}
              />
              <InfoRow
                icon="gravity-ui:envelope"
                label="Email"
                value={user.email}
              />
              {user.image && (
                <InfoRow
                  icon="gravity-ui:image"
                  label="Image URL"
                  value={user.image}
                  truncate
                />
              )}
            </div>

            <hr className="border-slate-700" />

            {/* Edit button */}
            <EditProfile />
          </div>
        </div>
      </div>
    </div>
  );
};

const InfoRow = ({ icon, label, value, truncate }) => (
  <div className="flex items-start gap-3 bg-slate-700/40 rounded-xl px-4 py-3">
    <Icon
      icon={icon}
      className="text-amber-400 mt-0.5 shrink-0"
      width={18}
      height={18}
    />
    <div className="min-w-0">
      <p className="text-xs text-slate-400 font-medium uppercase tracking-wide">
        {label}
      </p>
      <p
        className={`text-white text-sm font-medium mt-0.5 ${
          truncate ? "truncate max-w-[260px]" : ""
        }`}
        title={truncate ? value : undefined}
      >
        {value || "—"}
      </p>
    </div>
  </div>
);

export default ProfilePage;
