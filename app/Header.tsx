"use client";

import Link from "next/link";
import FadeInDown from "./FadeInDown";
import { useState } from "react";
import { ReactTyped } from "react-typed";

type NavItem = {
    label: string;
    href: string;
}

const navItems: NavItem[] = [
//     { label: "Who?", href: "/who" },
//     { label: "What?", href: "/what" },
//     { label: "How?", href: "/how" },
]

export default function Header(): React.ReactNode {

    const [open, setOpen] = useState(false);
    return (
        <header className="sticky top-0 z-10 p-3 border-b border-slate-200 backdrop-blur-lg">
            <div className="mx-auto flex px-4 py-3 md:px-8">
                <FadeInDown className="inline-flex items-center mx-auto">
                    <Link href="/">
                        <div className="logoContainer">
                            <p className="logo">tb</p>
                            <div className="nameContainer">
                                <p className="">Theodore Bellas</p>
                                <ReactTyped
                                    strings={["Software Engineer"]}
                                    typeSpeed={100}
                                    loop={false}
                                    startDelay={650}
                                    showCursor={true}
                                    className="job-title block"
                                    onComplete={(typed) => {
                                        typed.cursor.remove();
                                    }} />
                            </div>
                        </div>
                    </Link>
                </FadeInDown>
            </div>

        </header >
    )
}