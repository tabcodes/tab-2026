"use client";

import Link from "next/link";
import FadeInDown from "./FadeInDown";
import { useState } from "react";
import { ReactTyped } from "react-typed";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { CiMail } from "react-icons/ci";

type NavItem = {
    label: string | React.ReactNode;
    href: string;
}

const navItems: NavItem[] = [
    { label: <FaGithub />, href: "https://github.com/wiretab" },
    { label: <FaLinkedin />, href: "https://www.linkedin.com/in/theodorebellas/" },
    { label: <CiMail />, href: "mailto:theodorebellasdev@gmail.com" },
]

export default function Header(): React.ReactNode {

    const [open, setOpen] = useState(false);
    return (
        <header className="sticky top-0 z-10 p-3 border-b bg-slate-700 text-white border-slate-200 backdrop-blur-lg">
            <div className="flex items-center justify-center px-4 py-3">
                <FadeInDown className="inline-flex items-center">
                    <Link href="/">
                        <div className="logoContainer">
                            <p className="logo">tb</p>
                            <div className="nameContainer">
                                <p className="block">Theodore Bellas</p>
                                <p className="job-title block">
                                    Software Engineer
                                </p>
                            </div>
                        </div>
                    </Link>
                    
                </FadeInDown>
            </div>
            <div className="flex items-center justify-center">
                <nav className="flex items-center gap-6">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="text-3xl hover:text-slate-600"
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>
            </div>

        </header >
    )
}