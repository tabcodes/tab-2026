"use client";
import FadeInDown from "./FadeInDown";
import { FaArrowAltCircleDown } from "react-icons/fa";
import { ReactTyped } from "react-typed";
export default function Home() {
  return (
    <div className="flex justify-center font-sans">
      <main className="flex flex-wrap w-full max-w-6xl flex-row items-start justify-between gap-16 py-5 px-16">

        <div className="grid place-items-center grid-cols-1 md:grid-cols-2">
          <div className="">
            <h1 className="text-4xl font-bold tracking-tight text-slate-100 sm:text-5xl">
              I&nbsp;
              <ReactTyped
                strings={["develop software.", " architect solutions.", "solve complex technical problems.", "build products.", "make stuff."]}
                typeSpeed={50}
                loop={false}
                startDelay={650}
                showCursor={false}
                className=""
                />
            </h1>
          </div>
          <div className="gap-2">
            <FadeInDown>

            </FadeInDown>
            <FadeInDown delay={0.1}>
              <p className="mt-6 text-lg leading-8 text-slate-300">
                I'm a software engineer with a passion for building impactful products. I have experience in full-stack development, and I'm always eager to learn new technologies and improve my skills.
              </p>
            </FadeInDown>
            <FadeInDown delay={0.2}>
              <p className="mt-6 text-lg leading-8 text-slate-300">
                I'm currently open to new opportunities, so feel free to reach out if you'd like to connect or collaborate on a project!
              </p>
            </FadeInDown>
          </div>
        </div>


      </main>
    </div>
  );
}
