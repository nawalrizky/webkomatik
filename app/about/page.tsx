"use client";
import React, { useState } from "react";
import Spline from "@splinetool/react-spline";
import MenuNavbar from "../../components/menuNavbar";
import { ImageOne } from "../../components/imageOne";
import { KomatikLogo } from "@/components/komatikLogo";
import { Division } from "@/components/division";
import { Instagram, Facebook, Line, Mail } from "@/components/icons";

export default function About() {
  return (
    <main className="px-12">
      <div className="mt-[20vh] rounded-3xl px-5 lg:px-10 py-10 bg-white backdrop-blur-md bg-opacity-20 font-sans">
        <div className="font-sans text-center w-full ">
          <h1 className="font-bold text-white text-3xl min-[450px]:text-[36px] sm:text-[52px] md:text-[64px]">
            Welcome to <span className="text-secondary">Komatik</span>
          </h1>
          <h1 className="font-light text-white mt-8 text-[24px]">
            At Komatik, we stand as the cornerstone for students at Gadjah Mada
            University (UGM) who are passionate about technology, information,
            and communication (TIK). As a dynamic community, we serve as a
            nurturing ground for personal and professional development in the
            realm of TIK, fostering a supportive envicronment for UGM students
            to excel in it competitions
          </h1>
        </div>
      </div>
    </main>
  );
}
