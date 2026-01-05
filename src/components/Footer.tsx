"use strict";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { getImageUrl } from "@/lib/images";

const Footer = () => {
    return (
        <footer className="bg-[#020617] text-[#f8fafc] border-t border-[#d4af37]/20">
            <div className="container mx-auto px-10 py-24">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
                    {/* Brand Section */}
                    <div className="col-span-1 lg:col-span-1">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-80 h-20 relative overflow-hidden">
                                <Image
                                    src={getImageUrl("logo", "logo.jpg")}
                                    alt="Picasso Group Logo"
                                    fill
                                    className="object-contain object-left"
                                />
                            </div>
                        </div>
                        <p className="text-white/40 leading-relaxed mb-6 font-sans font-light text-sm">
                            예술의 고전적 품격과 현대 금융의 혁신을 결합한 자산 토큰화 프로토콜.<br />
                            불안정한 시장 속에서 피카소라는 영속적 가치를 포트폴리오에 담으세요.
                        </p>
                    </div>

                    {/* Contact Info */}
                    <div className="col-span-1 md:col-span-1 lg:col-span-2 lg:pl-20">
                        <h6 className="text-[#d4af37] font-sans font-black text-[10px] tracking-widest uppercase mb-6">Contact Us</h6>
                        <ul className="space-y-4 font-sans text-sm font-light text-white/60">
                            <li className="flex items-start gap-4">
                                <span className="uppercase text-xs font-bold text-white/30 w-16 shrink-0 mt-0.5">Dubai</span>
                                <span>(342001), NIA Cloud, A2, Building, IFZA Business Park, Dubai, United Arab Emirates</span>
                            </li>
                            <li className="flex items-start gap-4">
                                <span className="uppercase text-xs font-bold text-white/30 w-16 shrink-0 mt-0.5">Email</span>
                                <a href="mailto:support@picasso.group" className="hover:text-[#d4af37] transition-colors">support@picasso.group</a>
                            </li>
                        </ul>
                    </div>

                    {/* Social Links */}
                    <nav className="flex flex-col gap-5">
                        <h6 className="text-[#d4af37] font-sans font-black text-[10px] tracking-widest uppercase mb-4">Official Channels</h6>
                        <div className="grid grid-cols-3 gap-3">
                            {[
                                { name: 'Telegram', icon: '✈️' },
                                { name: 'Discord', icon: '💬' },
                                { name: 'X (Twitter)', icon: '✖️' },
                                { name: 'Medium', icon: '📝' },
                                { name: 'Youtube', icon: '▶️' },
                                { name: 'TikTok', icon: '🎵' }
                            ].map((social) => (
                                <Link
                                    key={social.name}
                                    href="#"
                                    className="h-10 border border-[#d4af37]/20 flex items-center justify-center hover:bg-[#d4af37] hover:text-[#020617] hover:border-[#d4af37] transition-all group rounded-sm"
                                    title={social.name}
                                >
                                    <span className="text-lg filter grayscale group-hover:grayscale-0">{social.icon}</span>
                                </Link>
                            ))}
                        </div>
                    </nav>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="footer footer-center p-10 bg-[#020617] text-white/40 border-t border-[#d4af37]/10 font-sans font-light text-xs">
                <aside className="container mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-6 px-10">
                    <div className="text-left">
                        <p className="mb-1">© 2026 Dubai Picasso Group Foundation. All Rights Reserved.</p>
                        <p className="text-[#d4af37]/70">Regulated by: VARA (Virtual Assets Regulatory Authority) License No. [Pending]</p>
                    </div>

                    <div className="flex flex-col md:items-end gap-1">
                        <p>Tech Partner: <span className="text-white font-bold">NIA CLOUD Co., Ltd.</span></p>
                        <div className="flex gap-6 mt-2 text-[10px] font-bold uppercase tracking-widest opacity-50">
                            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
                        </div>
                    </div>
                </aside>
            </div>
        </footer>
    );
};

export default Footer;
