"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { getImageUrl } from "@/lib/images";

const Header = () => {
    const pathname = usePathname();
    const menuItems = [
        { label: "WHY", keyword: "Vision", href: "/", description: "Historical Alpha", subDescription: "역사가 증명한 수익률" },
        { label: "WHAT", keyword: "Assets", href: "/assets", description: "4,000 Masterpieces", subDescription: "압도적 실물 자산" },
        { label: "HOW", keyword: "Business", href: "/business", description: "Smart Exit Strategy", subDescription: "상장과 매각의 투트랙 수익" },
        { label: "WHERE", keyword: "Trust", href: "/trust", description: "Dubai VARA Regulated", subDescription: "국가급 보안과 규제" },
        { label: "WHO", keyword: "Leadership", href: "/leadership", description: "Global Experts", subDescription: "예술과 금융의 거장들" },
        { label: "WHEN", keyword: "Roadmap", href: "/roadmap", description: "Strategic Milestones", subDescription: "투명한 실행 계획" },
    ];

    return (
        <div className="navbar bg-[#020617]/80 backdrop-blur-md fixed top-0 z-50 px-8 border-b border-[#d4af37]/20">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden text-[#d4af37]">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-[#0f172a] rounded-box z-[1] mt-3 w-64 p-4 shadow-2xl border border-[#d4af37]/10 font-sans">
                        {menuItems.map((item, i) => {
                            const isActive = pathname === item.href;
                            return (
                                <li key={i}>
                                    <Link
                                        href={item.href}
                                        className={`flex items-center justify-between py-3 ${isActive ? 'text-[#d4af37] bg-[#d4af37]/10' : 'text-white hover:text-[#d4af37]'}`}
                                    >
                                        <span className="font-black text-[10px] tracking-widest text-[#d4af37]">{item.label}</span>
                                        <span className="text-sm border-l border-white/10 pl-3 ml-2 w-full">{item.keyword}</span>
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <div className="flex items-center gap-3">
                    <div className="w-60 h-[4.5rem] relative overflow-hidden">
                        <Image
                            src={getImageUrl("logo", "logo.jpg")}
                            alt="Picasso Group Logo"
                            fill
                            className="object-contain"
                        />
                    </div>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-1 font-sans font-bold text-xs uppercase tracking-[0.1em]">
                    {menuItems.map((item, i) => {
                        const isActive = pathname === item.href;
                        return (
                            <li key={i}>
                                <Link
                                    href={item.href}
                                    className={`relative transition-all py-4 px-4 flex flex-col items-center gap-1 group ${isActive ? 'opacity-100' : 'opacity-60 hover:opacity-100'}`}
                                >
                                    <span className="text-[10px] font-black text-[#fde047] group-hover:text-[#facc15] transition-colors tracking-[0.3em] shadow-[#fde047]/20 drop-shadow-[0_0_8px_rgba(253,224,71,0.5)]">{item.label}</span>
                                    <span className={`transition-colors ${isActive ? 'text-[#d4af37] font-black drop-shadow-[0_0_5px_rgba(212,175,55,0.5)]' : 'text-white group-hover:text-white'}`}>{item.keyword}</span>
                                    {isActive && (
                                        <span className="absolute bottom-1 w-1 h-1 rounded-full bg-[#d4af37] shadow-[0_0_5px_#d4af37]" />
                                    )}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
            <div className="navbar-end">
                <button className="btn bg-[#d4af37] border-none text-[#020617] hover:bg-[#b4941f] btn-sm md:btn-md rounded-none px-8 font-sans font-black tracking-widest uppercase transition-all shadow-lg shadow-[#d4af37]/20">
                    Launch App
                </button>
            </div>
        </div>
    );
};

export default Header;
