"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    const navLinks = [
        { href: "/", label: "Home" },
        { href: "/destinations", label: "Destinations" },
        { href: "/culture", label: "Culture" },
        { href: "/planner", label: "Planner" },
    ];

    return (
        <nav className="fixed z-50 top-0 left-0 right-0 bg-surface/80 backdrop-blur-md border-b border-surface-variant transition-all duration-300">
            <div className="px-8 py-4 flex justify-between items-center">
                <Link href="/" className="text-2xl font-serif text-primary tracking-wide">Maroc Discovery</Link>
                
                {/* Desktop Navigation */}
                <ul className="hidden md:flex gap-8 text-on-surface font-sans text-sm font-semibold tracking-widest uppercase items-center">
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <Link 
                                href={link.href} 
                                className={`transition-colors duration-200 ${pathname === link.href ? 'text-primary' : 'hover:text-primary'}`}
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>
                
                <button className="hidden md:block btn bg-primary text-white px-6 py-2 rounded-md hover:bg-primary/90 transition-colors">Explore now</button>

                {/* Mobile Menu Toggle */}
                <button 
                    className="md:hidden text-primary focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle Menu"
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Navigation Dropdown */}
            <div className={`md:hidden absolute top-full left-0 right-0 bg-surface border-b border-surface-variant shadow-lg transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="flex flex-col px-8 py-6 gap-6">
                    <ul className="flex flex-col gap-6 text-on-surface font-sans text-sm font-semibold tracking-widest uppercase">
                        {navLinks.map((link) => (
                            <li key={link.href}>
                                <Link 
                                    href={link.href} 
                                    onClick={() => setIsOpen(false)} 
                                    className={`transition-colors duration-200 block ${pathname === link.href ? 'text-primary' : 'hover:text-primary'}`}
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <button className="btn bg-primary text-white w-full py-3 rounded-md">Explore now</button>
                </div>
            </div>
        </nav>
    );
}
