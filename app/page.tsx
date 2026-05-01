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
                className="text-center text-slate-700"
                />
            </h1>
          </div>
          <div className="gap-2">
            <FadeInDown>

            </FadeInDown>
            <FadeInDown delay={0.1}>
              <p className="mt-6 text-lg leading-8 text-slate-300">
                I'm a software engineer with over a decade of experience in the field, in industries like
                <span className="text-slate-800"> managed services,</span> 
                <span className="text-slate-800"> data management,</span> and 
                <span className="text-slate-800"> enterprise healthcare software.</span>
              </p>
            </FadeInDown>
            <FadeInDown delay={0.2}>
              <p className="mt-6 text-lg leading-8 text-slate-300">
                I'm currently looking for a new place to call home- somewhere I can continue to grow,
                contribute to meaningful projects, and make a positive impact to product and process alike.
              </p>
            </FadeInDown>
          </div>
        </div>


      </main>
    </div>
  );
}
