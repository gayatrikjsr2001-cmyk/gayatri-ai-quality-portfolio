"use client";

import {useState} from "react";
import {Menu, X} from "lucide-react";

const navItems=[
    {label: "Control Room", href: "#control-room"},
    {label: "Case Files", href: "#case-files"},
    {label: "QA Challenge", href: "#qa-challenge"},
    {label: "Tech Lab", href: "#tech-lab"},
    {label: "About", href: "#about"},
];

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen]=useState(false);

    const closeMenu=()=> {
        setIsMenuOpen(false);
    };

    return(
        <header className="fixed top-0 left-0 z-50 w-full border-b border-[#29302C]/70 bg-[#0B0D0C]/90 backdrop-blur-md">
            <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8" aria-label="Main navigation">
            {/* Brand */}
            <a href="#top" onClick={closeMenu} className="group flex items-center gap-3" aria-label="Gayatri Kumari - Home">
                <span className="relative flex h-2.5 w-2.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#B7F34A] opacity-50"></span>
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#b7f34a]"></span>
                </span>

                <span className="font-mono text-sm font-semibold tracking-[0.12em] text-[#f1f3ee] transition-colors group-hover:text-[#b7f34a]">
                GAYATRI KUMARI
                </span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden items-center gap-7 lg:flex">
                {navItems.map((item) => (
                    <a key={item.label} href={item.href} className="font-mono text-xs uppercase tracking-[0.12em] text-[#9aa39d] transition-colors duration-200
                     hover:text-[#b7f34a]">
                        {item.label}
                    </a>
                ))}
            
               {/* Resume Button */}
                    <a href="/Gayatri-Kumari-Resume.pdf" target="_blank" rel="noopener noreferrer" className="border border-[#b7f34a] px-4 py-2 font-mono text-xs
                     uppercase tracking-[0.12em] text-[#b7f34a] transition-all duration-200 hover:bg-[#b7f34a] hover:text-[#0b0d0c]">
                    Resume</a>
            </div>

            {/* Mobile Menu Button */}
            <button type="button" onClick={() => setIsMenuOpen(!isMenuOpen)} className="flex h-10 w-10 items-center justify-center border border-[#29302c] text-[#f1f3ee]
             transition-colors hover:text-[#b7f34aa] lg:hidden" aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"} aria-expanded={isMenuOpen}>
                isMenuOpen ? (
                    X size={20} strokeWidth={1.5}
                ) : (
                    <Menu size={20} strokeWidth={1.5}></Menu>
                )
            </button>
            </nav>

            {/* Mobile Navigation */}
            <div className={`border-t border-[#29302c] bg-[#0b0d0c] transition-all duration-300 lg:hidden ${ isMenuOpen ? "max-h-96 opacity-100" : "pointer-events-none max-h-0 overflow-hidden opacity-0"}`}>
                <div className="flex flex-col px-6 py-5">
                {navItems.map((item, index) => (
                    <a key={item.label} href={item.href} onClick={closeMenu} className="border-b border-[#29302c]/70 py-4 font-mono text-xs uppercase tracking-[0.12em] 
                    text-[#9aa39d] transition-colors hover:text-[#b7f34a]">
                    <span className="mr-3 text-[#b7f34a]">
                        {String(index + 1).padStart(2, "0")}
                    </span>
                    {item.label}
                    </a>
                ))}
                <a href="/Gayatri-Kumari-Resume.pdf" target="_blank" rel="noopener noreferrer" onClick={closeMenu} className="mt-5 border border-[]#b7f34a]
                 px-4 py-3 text-center font-mono  text-xs uppercase tracking-[0.12em] text-[#b7f34a] transition-all duration-200 hover:bg-[#b7f34a] hover:text-[#0b0d0c]">
                     View Resume
                </a>
                </div>
            </div>
        </header>    

    );
}