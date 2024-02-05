"use client";
import React, { useState } from "react";
import Image from "next/image";
export const Division = () => {
  const [isBouncing, setIsBouncing] = useState(false);
  return (
    <>
      <div className="flex justify-center mt-36 lg:mt-[50vh]">
        <div className="mb-10">
          <h1 className="font-bold font-sans text-3xl min-[450px]:text-[36px] sm:text-[52px] md:text-[64px] lg:text-[74px] xl:text-[86px]">
            Our Division
          </h1>
        </div>
      </div>
      <div className="wrap font-sans mb-20">
        <div className="content content--sticky content--card bg-black backdrop-blur-md bg-opacity-30">
          <div className="flex sm:flex-row flex-col items-center justify-center gap-5 ">
            <Image
              src="/uxgama.png"
              alt="CP"
              width={200}
              height={200}
              layout=""
              className="w-2/3 lg:w-[220px] lg:h-[220px] min-[1200px]:w-[250px] min-[1200px]:h-[250px] xl:w-[300px] xl:h-[250px]  "
            />

            <div>
              <h1 className="font-bold text-left sm:mb-4  text-secondary text-3xl min-[450px]:text-[36px] sm:text-[52px]  lg:text-[74px] ">
                UX Gama
              </h1>
              <p className="text-left sm:text-sm lg:text-lg">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>
          <div className="inline-flex gap-3 w-full  items-center justify-end">
            <div className="">
              <div className={`round ${isBouncing ? "bounceAlpha" : ""}`}>
                <a className=" -ml-20 text-[17px] hover:text-gray-300">
                  Learn More
                </a>
                <div id="cta">
                  <span className="arrow primera next "></span>
                  <span className="arrow segunda next "></span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content content--sticky content--card bg-white backdrop-blur-md bg-opacity-30">
          <div className="flex sm:flex-row flex-col items-center justify-center gap-5 ">
            <Image
              src="/uxgama.png"
              alt="CP"
              width={200}
              height={200}
              layout=""
              className="w-2/3  lg:w-[220px] lg:h-[220px] min-[1200px]:w-[250px] min-[1200px]:h-[250px] xl:w-[300px] xl:h-[250px]  "
            />

            <div>
              <h1 className="font-bold text-left sm:mb-4  text-secondary text-3xl min-[450px]:text-[36px] sm:text-[52px]  lg:text-[74px] ">
                UX Gama
              </h1>
              <p className="text-left sm:text-sm lg:text-lg">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>
          <div className="inline-flex gap-3 w-full  items-center justify-end">
            <div className="">
              <div className={`round ${isBouncing ? "bounceAlpha" : ""}`}>
                <a className="mt-[0.6rem] -ml-20 text-[17px] hover:text-gray-300">
                  Learn More
                </a>
                <div id="cta">
                  <span className="arrow primera next "></span>
                  <span className="arrow segunda next "></span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content content--sticky content--card bg-black backdrop-blur-md bg-opacity-30">
          <div className="flex sm:flex-row flex-col items-center justify-center gap-5 ">
            <Image
              src="/uxgama.png"
              alt="CP"
              width={200}
              height={200}
              layout=""
              className="w-2/3 lg:w-[220px] lg:h-[220px] min-[1200px]:w-[250px] min-[1200px]:h-[250px] xl:w-[300px] xl:h-[250px]  "
            />

            <div>
              <h1 className="font-bold text-left sm:mb-4  text-secondary text-3xl min-[450px]:text-[36px] sm:text-[52px]  lg:text-[74px] ">
                UX Gama
              </h1>
              <p className="text-left sm:text-sm lg:text-lg">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>
          <div className="inline-flex gap-3 w-full  items-center justify-end">
            <div className="">
              <div className={`round ${isBouncing ? "bounceAlpha" : ""}`}>
                <a className="mt-[0.6rem] -ml-20 text-[17px] hover:text-gray-300">
                  Learn More
                </a>
                <div id="cta">
                  <span className="arrow primera next "></span>
                  <span className="arrow segunda next "></span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content content--sticky content--card bg-white backdrop-blur-md bg-opacity-30">
          <div className="flex sm:flex-row flex-col items-center justify-center gap-5 ">
            <Image
              src="/uxgama.png"
              alt="CP"
              width={200}
              height={200}
              layout=""
              className="w-2/3 lg:w-[220px] lg:h-[220px] min-[1200px]:w-[250px] min-[1200px]:h-[250px] xl:w-[300px] xl:h-[250px]  "
            />

            <div>
              <h1 className="font-bold text-left sm:mb-4  text-secondary text-3xl min-[450px]:text-[36px] sm:text-[52px]  lg:text-[74px] ">
                UX Gama
              </h1>
              <p className="text-left sm:text-sm lg:text-lg">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>
          <div className="inline-flex gap-3 w-full  items-center justify-end">
            <div className="">
              <div className={`round ${isBouncing ? "bounceAlpha" : ""}`}>
                <a className="mt-[0.6rem] -ml-20 text-[17px] hover:text-gray-300">
                  Learn More
                </a>
                <div id="cta">
                  <span className="arrow primera next "></span>
                  <span className="arrow segunda next "></span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content content--sticky content--card bg-black backdrop-blur-md bg-opacity-30">
          <div className="flex sm:flex-row flex-col items-center justify-center gap-5 ">
            <Image
              src="/uxgama.png"
              alt="CP"
              width={200}
              height={200}
              layout=""
              className="w-2/3 lg:w-[220px] lg:h-[220px] min-[1200px]:w-[250px] min-[1200px]:h-[250px] xl:w-[300px] xl:h-[250px]  "
            />

            <div>
              <h1 className="font-bold text-left sm:mb-4  text-secondary text-3xl min-[450px]:text-[36px] sm:text-[52px]  lg:text-[74px] ">
                UX Gama
              </h1>
              <p className="text-left sm:text-sm lg:text-lg">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>
          <div className="inline-flex gap-3 w-full  items-center justify-end">
            <div className="">
              <div className={`round ${isBouncing ? "bounceAlpha" : ""}`}>
                <a className="mt-[0.6rem] -ml-20 text-[17px] hover:text-gray-300">
                  Learn More
                </a>
                <div id="cta">
                  <span className="arrow primera next "></span>
                  <span className="arrow segunda next "></span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content content--sticky content--card bg-white backdrop-blur-md bg-opacity-30">
          <div className="flex sm:flex-row flex-col items-center justify-center gap-5 ">
            <Image
              src="/uxgama.png"
              alt="CP"
              width={200}
              height={200}
              layout=""
              className="w-2/3 lg:w-[220px] lg:h-[220px] min-[1200px]:w-[250px] min-[1200px]:h-[250px] xl:w-[300px] xl:h-[250px]  "
            />

            <div>
              <h1 className="font-bold text-left sm:mb-4  text-secondary text-3xl min-[450px]:text-[36px] sm:text-[52px]  lg:text-[74px] ">
                UX Gama
              </h1>
              <p className="text-left sm:text-sm lg:text-lg">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>
          <div className="inline-flex gap-3 w-full  items-center justify-end">
            <div className="">
              <div className={`round ${isBouncing ? "bounceAlpha" : ""}`}>
                <a className="mt-[0.6rem] -ml-20 text-[17px] hover:text-gray-300">
                  Learn More
                </a>
                <div id="cta">
                  <span className="arrow primera next "></span>
                  <span className="arrow segunda next "></span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content content--sticky content--card bg-black backdrop-blur-md bg-opacity-30">
          <div className="flex sm:flex-row flex-col items-center justify-center gap-5 ">
            <Image
              src="/uxgama.png"
              alt="CP"
              width={200}
              height={200}
              layout=""
              className="w-2/3 lg:w-[220px] lg:h-[220px] min-[1200px]:w-[250px] min-[1200px]:h-[250px] xl:w-[300px] xl:h-[250px]  "
            />

            <div>
              <h1 className="font-bold text-left sm:mb-4  text-secondary text-3xl min-[450px]:text-[36px] sm:text-[52px]  lg:text-[74px] ">
                UX Gama
              </h1>
              <p className="text-left sm:text-sm lg:text-lg">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>
          <div className="inline-flex gap-3 w-full  items-center justify-end">
            <div className="">
              <div className={`round ${isBouncing ? "bounceAlpha" : ""}`}>
                <a className="mt-[0.6rem] -ml-20 text-[17px] hover:text-gray-300">
                  Learn More
                </a>
                <div id="cta">
                  <span className="arrow primera next "></span>
                  <span className="arrow segunda next "></span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content content--sticky content--card bg-white backdrop-blur-md bg-opacity-30">
          <div className="flex sm:flex-row flex-col items-center justify-center gap-5 ">
            <Image
              src="/uxgama.png"
              alt="CP"
              width={200}
              height={200}
              layout=""
              className="w-2/3 lg:w-[220px] lg:h-[220px] min-[1200px]:w-[250px] min-[1200px]:h-[250px] xl:w-[300px] xl:h-[250px]  "
            />

            <div>
              <h1 className="font-bold text-left sm:mb-4  text-secondary text-3xl min-[450px]:text-[36px] sm:text-[52px]  lg:text-[74px] ">
                UX Gama
              </h1>
              <p className="text-left sm:text-sm lg:text-lg">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>
          <div className="inline-flex gap-3 w-full  items-center justify-end">
            <div className="">
              <div className={`round ${isBouncing ? "bounceAlpha" : ""}`}>
                <a className="mt-[0.6rem] -ml-20 text-[17px] hover:text-gray-300">
                  Learn More
                </a>
                <div id="cta">
                  <span className="arrow primera next "></span>
                  <span className="arrow segunda next "></span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content content--sticky content--card bg-black backdrop-blur-md bg-opacity-30">
          <div className="flex sm:flex-row flex-col items-center justify-center gap-5 ">
            <Image
              src="/uxgama.png"
              alt="CP"
              width={200}
              height={200}
              layout=""
              className="w-2/3 lg:w-[220px] lg:h-[220px] min-[1200px]:w-[250px] min-[1200px]:h-[250px] xl:w-[300px] xl:h-[250px]  "
            />

            <div>
              <h1 className="font-bold text-left sm:mb-4  text-secondary text-3xl min-[450px]:text-[36px] sm:text-[52px]  lg:text-[74px] ">
                UX Gama
              </h1>
              <p className="text-left sm:text-sm lg:text-lg">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>
          <div className="inline-flex gap-3 w-full  items-center justify-end">
            <div className="">
              <div className={`round ${isBouncing ? "bounceAlpha" : ""}`}>
                <a className="mt-[0.6rem] -ml-20 text-[17px] hover:text-gray-300">
                  Learn More
                </a>
                <div id="cta">
                  <span className="arrow primera next "></span>
                  <span className="arrow segunda next "></span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </>
  );
};
