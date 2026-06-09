"use client";

import tutor1 from "@/assets/tutor/tutor1.jpg";
import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

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
            <div className="dark:bg-gray-100 dark:text-gray-800">
              <div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl">
                <h1 className="text-4xl font-bold leading-none sm:text-5xl">
                  Quisquam necessita vel
                  <span className="dark:text-violet-600">
                    laborum doloribus
                  </span>
                  delectus
                </h1>
                <p className="px-8 mt-8 mb-12 text-lg">
                  Cupiditate minima voluptate temporibus quia? Architecto beatae
                  esse ab amet vero eaque explicabo!
                </p>
                <div className="flex flex-wrap justify-center">
                  <button className="px-8 py-3 m-2 text-lg font-semibold rounded dark:bg-violet-600 dark:text-gray-50">
                    Get started
                  </button>
                  <button className="px-8 py-3 m-2 text-lg border rounded dark:text-gray-900 dark:border-gray-300">
                    Learn more
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="dark:bg-gray-100 dark:text-gray-800">
            <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
              <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                <img
                  src="assets/svg/Business_SVG.svg"
                  alt=""
                  className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
                />
              </div>
              <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                <h1 className="text-5xl font-bold leading-none sm:text-6xl">
                  Ac mattis
                  <span className="dark:text-violet-600">senectus</span>erat
                  pharetra
                </h1>
                <p className="mt-6 mb-8 text-lg sm:mb-12">
                  Dictum aliquam porta in condimentum ac integer
                  <br className="hidden md:inline lg:hidden" />
                  turpis pulvinar, est scelerisque ligula sem
                </p>
                <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="px-8 py-3 text-lg font-semibold rounded dark:bg-violet-600 dark:text-gray-50"
                  >
                    Suspendisse
                  </a>
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="px-8 py-3 text-lg font-semibold border rounded dark:border-gray-800"
                  >
                    Malesuada
                  </a>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="dark:bg-gray-100 dark:text-gray-800">
            <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
              <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                <h1 className="text-5xl font-bold leading-none sm:text-6xl">
                  Ac mattis
                  <span className="dark:text-violet-600">senectus</span>erat
                  pharetra
                </h1>
                <p className="mt-6 mb-8 text-lg sm:mb-12">
                  Dictum aliquam porta in condimentum ac integer
                  <br className="hidden md:inline lg:hidden" />
                  turpis pulvinar, est scelerisque ligula sem
                </p>
                <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="px-8 py-3 text-lg font-semibold rounded dark:bg-violet-600 dark:text-gray-50"
                  >
                    Suspendisse
                  </a>
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="px-8 py-3 text-lg font-semibold border rounded dark:border-gray-800"
                  >
                    Malesuada
                  </a>
                </div>
              </div>
              <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                <img
                  src="assets/svg/Business_SVG.svg"
                  alt=""
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
