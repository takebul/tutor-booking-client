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
    <section className="my-10">
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        navigation={true}
        pagination={{
          clickable: true,
        }}
      >
        <SwiperSlide>
          <div className="bg-neutral-700">
            {/* <Image
          className="w-full md:h-[88vh]  mx-auto opacity-30 z-10 "
          src={tutor1}
          width={300}
          height={300}
          alt="Banner Image"
        /> */}
            <section className="p-6 bg-slate-200 dark:bg-gray-100 dark:text-gray-800">
              <div className="container grid gap-6 mx-auto text-center lg:grid-cols-2 xl:grid-cols-5">
                <div className="w-full px-6 py-16 rounded-md sm:px-12 md:px-16 xl:col-span-2">
                  <span className="block mb-2 dark:text-violet-600">
                    Find Our Best Tutors
                  </span>
                  <h1 className="text-5xl font-extrabold">
                    Study Your Own Mind <br />
                    Find the Best Tutor in the World
                  </h1>
                  <p className="my-8">
                    We Have the International Reputation for High Quality
                    Teaching and Success.
                  </p>
                  <div>
                    <Link href={"/tutors"}>
                      <Button>Explore Tutors</Button>
                    </Link>
                  </div>
                </div>
                <Image
                  src={tutor3}
                  alt="tutor"
                  className="object-cover w-full rounded-md xl:col-span-3 dark:bg-gray-500"
                />
              </div>
            </section>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-slate-200 dark:bg-gray-100 dark:text-gray-800">
            <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
              <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                <Image
                  src={tutor1}
                  alt="image"
                  className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
                />
              </div>
              <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                <h1 className="text-5xl font-bold leading-none sm:text-6xl">
                  Classes Now <br />
                  Forming!
                </h1>
                <p className="mt-6 mb-8 text-lg sm:mb-12">
                  Our Courses Are Taught at Beginner to Advanced <br />
                  Levels on a Year Round Basis
                </p>
                <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                  <Button>
                    <Link href={"/tutors"}>Explore More</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-slate-200 dark:bg-gray-100 dark:text-gray-800">
            <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
              <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                <h1 className="text-5xl font-bold leading-none sm:text-6xl">
                  We Are Trusted <br />
                  Instutution!
                </h1>
                <p className="mt-6 mb-8 text-lg sm:mb-12">
                  We Offer Programs Designed to Meet the Needs of Individuals{" "}
                  <br />
                  from All Around the World
                </p>
                <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                  <Button>
                    <Link href={"/tutors"}>Hire Tutors</Link>
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                <Image
                  src={tutor2}
                  alt="tutor"
                  className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Hero;
