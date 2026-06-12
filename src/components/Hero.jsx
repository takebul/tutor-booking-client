"use client";

import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import tutor1 from "@/assets/tutor/tutor1.jpg";
import tutor2 from "@/assets/tutor/tutor2.jpg";
import tutor3 from "@/assets/tutor/tutor3.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Hero = () => {
  return (
    <section className="w-full overflow-hidden">
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        loop={true}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        navigation={true}
        pagination={{ clickable: true }}
        className="hero-swiper"
      >
        <SwiperSlide>
          <div className="min-h-[88vh] flex items-center bg-[#EFF6FF] dark:bg-[#0f172a]">
            <div className="container mx-auto px-6 lg:px-16 grid lg:grid-cols-2 gap-12 items-center py-20">
              <div className="flex flex-col gap-6 max-w-xl">
                <span className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 text-sm font-medium px-4 py-1.5 rounded-full w-fit">
                  <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                  Trusted by 7,500+ learners worldwide
                </span>

                <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900 dark:text-white">
                  Study Your Own Mind,{" "}
                  <span className="text-blue-600 dark:text-blue-400">
                    Find the Best Tutor
                  </span>{" "}
                  in the World
                </h1>

                <p className="text-gray-500 dark:text-gray-400 text-base leading-relaxed">
                  We have the international reputation for high quality teaching
                  and success. Connect with verified tutors for personalized
                  sessions.
                </p>

                <div className="flex flex-wrap gap-3 pt-2">
                  <Link href="/tutors">
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2.5 rounded-lg transition-all">
                      Explore Tutors →
                    </Button>
                  </Link>
                  <Link href="/about">
                    <Button
                      variant="bordered"
                      className="border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 font-medium px-6 py-2.5 rounded-lg"
                    >
                      Learn More
                    </Button>
                  </Link>
                </div>

                <div className="flex gap-8 pt-4 border-t border-gray-200 dark:border-gray-700 mt-2">
                  {[
                    { value: "200+", label: "Expert tutors" },
                    { value: "7,500+", label: "Learners" },
                    { value: "24/7", label: "Support" },
                  ].map((stat) => (
                    <div key={stat.label}>
                      <p className="text-xl font-bold text-blue-600 dark:text-blue-400">
                        {stat.value}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative flex justify-center">
                <div className="relative w-full max-w-md rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src={tutor3}
                    alt="Tutor"
                    className="w-full h-[420px] object-cover"
                  />
                  {/* Floating badge */}
                  <div className="absolute bottom-4 left-4 bg-white dark:bg-gray-800 rounded-xl px-4 py-3 shadow-lg flex items-center gap-3">
                    <div className="flex -space-x-2">
                      {["AS", "SR", "FM"].map((name, i) => (
                        <div
                          key={i}
                          className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold text-white border-2 border-white"
                          style={{
                            background: ["#2563eb", "#059669", "#d97706"][i],
                          }}
                        >
                          {name}
                        </div>
                      ))}
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-gray-800 dark:text-white">
                        200+ Active Tutors
                      </p>
                      <p className="text-[11px] text-gray-500 dark:text-gray-400">
                        Available now
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="min-h-[88vh] flex items-center bg-[#F0FDF4] dark:bg-[#052e16]">
            <div className="container mx-auto px-6 lg:px-16 grid lg:grid-cols-2 gap-12 items-center py-20">
              <div className="flex justify-center order-2 lg:order-1">
                <div className="relative w-full max-w-md rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src={tutor1}
                    alt="Tutor"
                    className="w-full h-[420px] object-cover"
                  />

                  <div className="absolute top-4 right-4 bg-white dark:bg-gray-800 rounded-xl px-4 py-3 shadow-lg">
                    <p className="text-xs font-semibold text-gray-800 dark:text-white">
                      Beginner → Advanced
                    </p>
                    <p className="text-[11px] text-gray-500 dark:text-gray-400">
                      Year-round classes
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-6 max-w-xl order-1 lg:order-2">
                <span className="inline-flex items-center gap-2 bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-300 text-sm font-medium px-4 py-1.5 rounded-full w-fit">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  Enroll now — limited seats
                </span>

                <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900 dark:text-white">
                  Classes Now{" "}
                  <span className="text-green-600 dark:text-green-400">
                    Forming!
                  </span>
                </h1>

                <p className="text-gray-500 dark:text-gray-400 text-base leading-relaxed">
                  Our courses are taught at beginner to advanced levels on a
                  year-round basis. Find the perfect pace for your learning
                  journey.
                </p>

                <div className="flex flex-wrap gap-3 pt-2">
                  <Link href="/tutors">
                    <Button className="bg-green-600 hover:bg-green-700 text-white font-medium px-6 py-2.5 rounded-lg transition-all">
                      Explore More →
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="min-h-[88vh] flex items-center bg-[#FFF7ED] dark:bg-[#1c0a00]">
            <div className="container mx-auto px-6 lg:px-16 grid lg:grid-cols-2 gap-12 items-center py-20">
              <div className="flex flex-col gap-6 max-w-xl">
                <span className="inline-flex items-center gap-2 bg-orange-100 dark:bg-orange-900/40 text-orange-700 dark:text-orange-300 text-sm font-medium px-4 py-1.5 rounded-full w-fit">
                  <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
                  Internationally recognized institution
                </span>

                <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900 dark:text-white">
                  We Are a{" "}
                  <span className="text-orange-600 dark:text-orange-400">
                    Trusted Institution!
                  </span>
                </h1>

                <p className="text-gray-500 dark:text-gray-400 text-base leading-relaxed">
                  We offer programs designed to meet the needs of individuals
                  from all around the world — with 14 international awards for
                  excellence.
                </p>

                <div className="flex flex-wrap gap-3 pt-2">
                  <Link href="/tutors">
                    <Button className="bg-orange-500 hover:bg-orange-600 text-white font-medium px-6 py-2.5 rounded-lg transition-all">
                      Hire Tutors →
                    </Button>
                  </Link>
                </div>

                <div className="flex flex-wrap gap-3 pt-2">
                  {["14 Awards", "720+ Providers", "99.9% Uptime"].map(
                    (badge) => (
                      <span
                        key={badge}
                        className="bg-orange-50 dark:bg-orange-900/30 border border-orange-200 dark:border-orange-700 text-orange-700 dark:text-orange-300 text-xs font-medium px-3 py-1.5 rounded-full"
                      >
                        {badge}
                      </span>
                    ),
                  )}
                </div>
              </div>

              <div className="flex justify-center">
                <div className="relative w-full max-w-md rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src={tutor2}
                    alt="Tutor"
                    className="w-full h-[420px] object-cover"
                  />
                  <div className="absolute bottom-4 right-4 bg-white dark:bg-gray-800 rounded-xl px-4 py-3 shadow-lg">
                    <p className="text-xs font-semibold text-gray-800 dark:text-white">
                      🏆 14 International Awards
                    </p>
                    <p className="text-[11px] text-gray-500 dark:text-gray-400">
                      For teaching excellence
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      <style jsx global>{`
        .hero-swiper .swiper-button-next,
        .hero-swiper .swiper-button-prev {
          color: #2563eb;
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(4px);
          width: 44px;
          height: 44px;
          border-radius: 50%;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.12);
        }
        .hero-swiper .swiper-button-next::after,
        .hero-swiper .swiper-button-prev::after {
          font-size: 16px;
          font-weight: 700;
        }
        .hero-swiper .swiper-pagination-bullet {
          background: #2563eb;
          opacity: 0.4;
        }
        .hero-swiper .swiper-pagination-bullet-active {
          opacity: 1;
          width: 20px;
          border-radius: 4px;
        }
        @media (max-width: 640px) {
          .hero-swiper .swiper-button-next,
          .hero-swiper .swiper-button-prev {
            display: none;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
