"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";
import memojiWave from "../public/memoji-wave.png";

export default function Intro() {
  return (
    <section className="mb-28 max-w-[50rem] text-center sm:mb-0">
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src={memojiWave}
              alt="Jaymin Chang Profile Picture"
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="h-28 w-28 rounded-full border-[0.25rem] border-white object-cover"
            />
          </motion.div>
        </div>
      </div>

      <motion.p
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-3xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Hello, <span className="font-bold">I&apos;m Jaymin,</span> a{" "}
        <span className="font-bold">full-stack developer</span> from Seoul,
        South Korea. I enjoy{" "}
        <span className="italic">building sites, apps, and tools</span> to
        improve people&apos;s lives.
        <br />
      </motion.p>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Link
          href="#contact"
          className="group bg-slate-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none hover:scale-105 hover:bg-gray-950 active:scale-95 transition cursor-pointer"
        >
          Contact me here{" "}
          <BsArrowRight className="opacity-75 group-hover:translate-x-1 transition" />
        </Link>
        <a
          href="/public/dummies/dummy-CV.pdf"
          download
          className="group bg-gray-50 px-7 py-3 flex items-center gap-2 rounded-full outline-none hover:scale-105 active:scale-95 transition cursor-pointer border border-black/10"
        >
          Download my CV{" "}
          <HiDownload className="opacity-70 group-hover:translate-y-0.5 transition" />
        </a>
        <a
          href="https://www.linkedin.com/in/jaymin-chang-professional/"
          target="_blank"
          className="bg-gray-50 p-4 text-gray-700 flex items-center gap-2 rounded-full text-[1.21rem] outline-none hover:scale-[1.15] active:scale-105 transition cursor-pointer border border-black/10"
        >
          <BsLinkedin />
        </a>
        <a
          href="https://github.com/jmin1219"
          target="_blank"
          className="bg-gray-50 p-4 text-gray-700 flex items-center gap-2 rounded-full text-[1.4rem] outline-none hover:scale-[1.15] active:scale-105 transition cursor-pointer border border-black/10"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}
