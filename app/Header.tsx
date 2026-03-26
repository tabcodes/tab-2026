"use client";

import Link from "next/link";
import FadeInDown from "./FadeInDown";
import { useState } from "react";
type NavItem = {
    label: string;
    href: string;
}

const navItems: NavItem[] = [
    { label: "Who?", href: "/who" },
    { label: "What?", href: "/what" },
    { label: "How?", href: "/how" },
]

export default function Header(): React.ReactNode {

    const [open, setOpen] = useState(false);
    return (
        <header className="sticky top-0 z-10 p-3 border-b border-slate-200 backdrop-blur-lg">
            <div className="mx-auto flex max-w-7xl px-4 py-3 md:px-8">
                <FadeInDown className="inline-flex items-center">
                    <Link href="/">
                        <div className="logoContainer">
                            <p className="logo">tb</p>
                            <div className="nameContainer">
                                <p>Theodore Bellas</p>
                                <p className="job-title">Software Engineer</p>
                            </div>
                        </div>
                    </Link>

                    <button
                        type="button"
                        onClick={() => setOpen(!open)}
                        className="inline-flex items-center rounded-md border border-slate-300 p-2 text-slate-700 hover:bg-slate-100 md:hidden"
                        aria-label="Toggle navigation menu"
                        aria-expanded={open}
                    >
                        <svg
                            className="h-6 w-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M4 6h16M4 12h16M4 18h16"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                            />
                        </svg>
                    </button>

                    <nav className="hidden items-center gap-6 md:flex">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="hover:text-slate-600"
                            >
                                {item.label}
                            </Link>
                        ))}
                    </nav>
                </FadeInDown>
            </div>

        </header >
    )
}