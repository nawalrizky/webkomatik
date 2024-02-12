"use client";
import React, { useState } from "react";
import Spline from "@splinetool/react-spline";
import MenuNavbar from "../components/menuNavbar";
import { ImageOne } from "../components/imageOne";
import { KomatikLogo } from "@/components/komatikLogo";
import { Division } from "@/components/division";
import { Instagram, Facebook, Line, Mail } from "@/components/icons";
import Link from "next/link";
import { Footer } from "@/components/footer";

export default function Home() {
  const scrolltoHash = function (element_id: string) {
    const element = document.getElementById(element_id)
    element?.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
  }
  return (
    <main className="">
      <div className="absolute top-0 left-0 h-[100vh] z-10 w-full mt-20 ">
        <div className="flex-col relative ">
          <div className="font-sans text-center w-full mt-24 sm:mt-36 md:mt-52 flex justify-center gap-5 text-3xl min-[450px]:text-[36px] sm:text-[52px] md:text-[64px] lg:text-[74px] xl:text-[86px]">
            <h1 className="font-bold text-white">
              Tech Dreams Begin <span className="text-secondary">Here</span>
            </h1>
          </div>
          <div className="text-center px-5 text-[10px] sm:text-[12px] lg:px-58 xl:px-64 items-center justify-center mt-2 sm:mt-10 lg:text-[18px] flex-grow">
            <h1 className="text-white">
              Embark on a tech mastery journey in a UGM community, boosting
              skills and igniting passion.
              <br className="hidden sm:flex" />
              Contribute to UGM's IT triumphs, where dreams become collective
              tech innovation reality!
            </h1>
            <div className="inline-flex justify-end ml-14 items-end gap-2">
              <Link
                className="bg-secondary text-black font-sans  px-4 py-2 mt-5 hvr-sweep-to-right"
                href="/about">
              
                Get Started
              </Link>
              <ImageOne />
            </div>
          </div>
        </div>
        <div id="first-section">
        <div className="flex justify-center mt-36 lg:mt-[50vh]">
        <div className="mb-10">
          <h1 className="font-bold font-sans text-3xl min-[450px]:text-[36px] sm:text-[52px] md:text-[64px] lg:text-[74px] xl:text-[86px]">
            Our Division
          </h1>
        </div>
        </div>
      </div>
          <Division />
          <Footer/>
      </div>
    </main>
  );
}
