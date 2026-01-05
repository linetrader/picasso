"use client";

import Image from "next/image";
import { getImageUrl } from "@/lib/images";

export default function AssetsPage() {
    return (
        <main className="min-h-screen bg-[#020617] text-[#f8fafc] overflow-x-hidden selection:bg-[#d4af37] selection:text-[#020617] font-sans">

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 flex items-center justify-center overflow-hidden border-b border-[#d4af37]/10">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-[#0f172a] opacity-50" />
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#d4af37]/10 to-transparent blur-3xl opacity-50" />
                </div>

                <div className="container mx-auto px-6 md:px-8 relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#d4af37]/10 border border-[#d4af37]/20 rounded-full mb-8">
                        <span className="w-2 h-2 rounded-full bg-[#d4af37] animate-pulse" />
                        <span className="text-[10px] font-black text-[#d4af37] tracking-[0.3em] uppercase">WHAT : ASSETS</span>
                    </div>
                    <h1 className="text-4xl md:text-8xl font-black font-serif italic mb-6 leading-none text-white/90">
                        4,000 Masterpieces
                    </h1>
                    <h2 className="text-xl md:text-2xl font-bold font-sans text-[#d4af37] tracking-widest uppercase mb-12">
                        압도적 실물 자산
                    </h2>
                </div>
            </section>

            {/* Section 1: Portfolio Overview */}
            <section className="py-16 md:py-20 bg-[#020617]">
                <div className="container mx-auto px-6 md:px-8">
                    <div className="text-center mb-16">
                        <span className="text-[#d4af37] font-sans font-black tracking-widest text-sm uppercase block mb-4">Section 01 / Portfolio Overview</span>
                        <h3 className="text-3xl md:text-5xl font-serif font-black text-white italic leading-tight">
                            &quot;전 세계가 주목하는 <br />
                            <span className="text-[#d4af37] not-italic">4,000억 원 규모</span>의 마스터피스 컬렉션&quot;
                        </h3>
                    </div>

                    <div className="flex flex-col md:flex-row justify-center gap-12 font-sans mb-20">
                        <div className="text-center p-8 border-y border-[#d4af37]/20 w-full md:w-1/3">
                            <p className="text-[#d4af37] font-black text-xs tracking-widest uppercase mb-2">Total AUM</p>
                            <p className="text-4xl md:text-6xl font-black text-white">₩400B+</p>
                        </div>
                        <div className="text-center p-8 border-y border-[#d4af37]/20 w-full md:w-1/3">
                            <p className="text-[#d4af37] font-black text-xs tracking-widest uppercase mb-2">Main Asset</p>
                            <p className="text-4xl md:text-6xl font-black text-white">4,000+</p>
                            <p className="text-white/40 text-[10px] mt-2 uppercase tracking-widest">Picasso Works</p>
                        </div>
                    </div>

                    {/* Image Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-[100vh] md:h-[600px]">
                        {/* Left Column: Image 1 */}
                        <div className="relative group overflow-hidden border border-[#d4af37]/10 rounded-sm">
                            <Image src={getImageUrl("assets", "picasso_main_1.jpg")} alt="Picasso 1" fill className="object-contain transition-transform duration-700 group-hover:scale-105" />
                        </div>

                        {/* Right Column: 2x2 Grid */}
                        <div className="grid grid-rows-2 gap-4">
                            {/* Top Row: Image 2 & 3 */}
                            <div className="grid grid-cols-2 gap-4">
                                <div className="relative group overflow-hidden border border-[#d4af37]/10 rounded-sm">
                                    <Image src={getImageUrl("assets", "picasso_main_2.png")} alt="Picasso 2" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                                </div>
                                <div className="relative group overflow-hidden border border-[#d4af37]/10 rounded-sm">
                                    <Image src={getImageUrl("assets", "picasso_main_3.png")} alt="Picasso 3" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                                </div>
                            </div>

                            {/* Bottom Row: Image 4 & 5 */}
                            <div className="grid grid-cols-2 gap-4">
                                <div className="relative group overflow-hidden border border-[#d4af37]/10 rounded-sm">
                                    <Image src={getImageUrl("assets", "picasso_main_4.jpg")} alt="Picasso 4" fill className="object-contain transition-transform duration-700 group-hover:scale-105" />
                                </div>
                                <div className="relative group overflow-hidden border border-[#d4af37]/10 rounded-sm">
                                    <Image src={getImageUrl("assets", "picasso_main_5.jpg")} alt="Picasso 5" fill className="object-contain transition-transform duration-700 group-hover:scale-105" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 2: The Rare Gem (Modigliani) */}
            <section className="py-32 bg-[#0a0a0a] border-y border-[#d4af37]/10">
                <div className="container mx-auto px-8">
                    <span className="text-[#d4af37] font-sans font-black tracking-widest text-sm uppercase block mb-12">Section 02 / The Rare Gem</span>

                    <div className="flex flex-col lg:flex-row gap-20">
                        {/* Left Content */}
                        <div className="flex-1 space-y-10">
                            <div>
                                <h3 className="text-4xl md:text-5xl font-serif font-black text-white italic mb-2">Amedeo Modigliani</h3>
                                <h4 className="text-xl md:text-2xl font-bold text-[#d4af37] uppercase tracking-wide">
                                    &apos;Nu couché&apos; (누워있는 누드)
                                </h4>
                            </div>

                            <p className="text-xl text-white/80 font-sans font-medium leading-relaxed border-l-4 border-[#d4af37] pl-6">
                                &quot;전 세계 단 2점 중 1점, <br />
                                그 전설의 주인공이 됩니다.&quot;
                            </p>

                            <div className="space-y-6 bg-[#0f172a] p-8 border border-white/5">
                                <div>
                                    <p className="text-[10px] font-black text-white/40 uppercase tracking-widest mb-1">Market Value Reference</p>
                                    <p className="text-3xl font-serif font-black text-white">$170,400,000</p>
                                    <p className="text-sm text-[#d4af37] font-bold mt-1">약 2,300억 원 (Christie&apos;s NY, 2015)</p>
                                </div>
                                <div className="h-px bg-white/10 w-full" />
                                <a
                                    href="https://www.youtube.com/watch?v=SSeKurAzmKU"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center gap-3 group cursor-pointer"
                                >
                                    <div className="w-12 h-12 bg-[#d4af37] rounded-full flex items-center justify-center text-black group-hover:scale-110 transition-transform">
                                        ▶
                                    </div>
                                    <span className="text-sm font-bold text-white/80 group-hover:text-[#d4af37] transition-colors uppercase tracking-widest">
                                        Watch Auction Record (Video)
                                    </span>
                                </a>
                                <div className="w-full aspect-video border border-[#d4af37]/20 rounded-sm overflow-hidden bg-black">
                                    <iframe
                                        width="100%"
                                        height="100%"
                                        src="https://www.youtube.com/embed/SSeKurAzmKU"
                                        title="Modigliani Auction Video"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        className="w-full h-full opacity-90 hover:opacity-100 transition-opacity"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Right Visual (Revealed Asset) */}
                        <div className="flex-1 relative aspect-[4/3] bg-black border border-[#d4af37]/20 overflow-hidden group">
                            <Image
                                src={getImageUrl("assets", "modigliani_nu_couche.png")}
                                alt="Modigliani Nu Couché"
                                fill
                                className="object-contain transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />
                            <div className="absolute top-6 right-6 z-10">
                                <span className="text-[10px] font-black text-[#020617] tracking-[0.2em] uppercase bg-[#d4af37] px-4 py-2">
                                    Our Asset
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 3: Global Activity */}
            <section className="py-32 bg-[#020617]">
                <div className="container mx-auto px-8">
                    <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
                        <div>
                            <span className="text-[#d4af37] font-sans font-black tracking-widest text-sm uppercase block mb-6">Section 03 / Global Activity</span>
                            <h3 className="text-3xl md:text-5xl font-serif font-black text-white italic leading-tight">
                                검증된 권위
                            </h3>
                            <p className="text-white/60 mt-4 font-sans font-light max-w-xl">
                                &quot;박물관이 선택하고 왕실이 초청한 자산의 가치&quot; <br />
                                단순 보유를 넘어, 전 세계 권위 있는 기관에서 전시되며 자산 가치를 공고히 하고 있습니다.
                            </p>
                        </div>
                    </div>

                    <div className="space-y-8">
                        {/* Activity 1: San Marino */}
                        <div className="relative group overflow-hidden border border-white/5 bg-[#0f172a]">
                            <div className="flex flex-col md:flex-row h-full">
                                <div className="md:w-1/3 p-12 flex flex-col justify-center border-b md:border-b-0 md:border-r border-white/5 z-10 bg-[#0f172a]">
                                    <div className="w-12 h-1 bg-[#d4af37] mb-8" />
                                    <h4 className="text-2xl font-serif font-black text-white italic mb-2">San Marino</h4>
                                    <p className="text-[#d4af37] font-bold text-sm uppercase tracking-widest mb-6">Palazzo SUMS Exhibition</p>
                                    <p className="text-white/60 text-sm font-sans font-light leading-relaxed mb-8">
                                        국가적 랜드마크인 팔라초 SUMS 미술관 정식 초대 전시를 통해 유서 깊은 예술적 가치를 인정받았습니다.
                                    </p>
                                    <div className="flex gap-2">
                                        <span className="px-3 py-1 bg-white/5 text-[10px] font-bold text-white uppercase tracking-wider">Official Invite</span>
                                        <span className="px-3 py-1 bg-white/5 text-[10px] font-bold text-white uppercase tracking-wider">National Museum</span>
                                    </div>
                                </div>
                                <div className="md:w-2/3 min-h-[400px] relative bg-black/50 overflow-hidden">
                                    <div className="absolute inset-0 grid grid-cols-6 grid-rows-2 gap-1 p-1 opacity-80 hover:opacity-100 transition-opacity duration-500">
                                        <div className="col-span-3 relative h-full bg-white/5 group/img">
                                            <Image src={getImageUrl("assets", "san_marino_1.jpg")} alt="Minister Visit & Broadcasting" fill className="object-cover" />
                                        </div>
                                        <div className="col-span-3 relative h-full bg-white/5 group/img">
                                            <Image src={getImageUrl("assets", "san_marino_2.png")} alt="Minister Listening" fill className="object-cover" />
                                        </div>
                                        <div className="col-span-2 relative h-full bg-white/5 group/img">
                                            <Image src={getImageUrl("assets", "san_marino_3.jpg")} alt="Handshake in front of Artwork" fill className="object-cover" />
                                        </div>
                                        <div className="col-span-2 relative h-full bg-white/5 group/img">
                                            <Image src={getImageUrl("assets", "san_marino_4.jpg")} alt="Explaining Art Book" fill className="object-cover" />
                                        </div>
                                        <div className="col-span-2 relative h-full bg-white/5 group/img">
                                            <Image src={getImageUrl("assets", "san_marino_5.jpg")} alt="Signing Art Book" fill className="object-cover" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Activity 2: Dubai Royal */}
                        <div className="relative group overflow-hidden border border-white/5 bg-[#0f172a]">
                            <div className="flex flex-col md:flex-row-reverse h-full">
                                <div className="md:w-1/3 p-12 flex flex-col justify-center border-b md:border-b-0 md:border-l border-white/5 z-10 bg-[#0f172a] text-right items-end">
                                    <div className="w-12 h-1 bg-[#d4af37] mb-8" />
                                    <h4 className="text-2xl font-serif font-black text-white italic mb-2">Dubai Royal Family</h4>
                                    <p className="text-[#d4af37] font-bold text-sm uppercase tracking-widest mb-6">Crown Prince Invitation</p>
                                    <p className="text-white/60 text-sm font-sans font-light leading-relaxed mb-8">
                                        두바이 왕실의 공식 초청을 받아 진행된 하이엔드 프라이빗 전시로, 모딜리아니의 걸작들이 소개되어 왕실의 찬사를 받았습니다.
                                    </p>
                                    <div className="flex gap-2 justify-end">
                                        <span className="px-3 py-1 bg-white/5 text-[10px] font-bold text-white uppercase tracking-wider">Royal Protocol</span>
                                        <span className="px-3 py-1 bg-white/5 text-[10px] font-bold text-white uppercase tracking-wider">Modigliani Special</span>
                                    </div>
                                </div>
                                <div className="md:w-2/3 min-h-[400px] relative bg-black/50 overflow-hidden">
                                    <div className="absolute inset-0 grid grid-cols-6 grid-rows-2 gap-1 p-1 opacity-80 hover:opacity-100 transition-opacity duration-500">
                                        <div className="col-span-3 relative h-full bg-white/5 group/img">
                                            <Image src={getImageUrl("assets", "dubai_1.png")} alt="Private Jet Trip to Dubai" fill className="object-cover" />
                                        </div>
                                        <div className="col-span-3 relative h-full bg-white/5 group/img">
                                            <Image src={getImageUrl("assets", "dubai_2.png")} alt="Private Viewing" fill className="object-cover" />
                                        </div>
                                        <div className="col-span-2 relative h-full bg-white/5 group/img">
                                            <Image src={getImageUrl("assets", "dubai_3.png")} alt="Exhibition Discussion" fill className="object-cover" />
                                        </div>
                                        <div className="col-span-2 relative h-full bg-white/5 group/img">
                                            <Image src={getImageUrl("assets", "dubai_4.png")} alt="Venue Interior" fill className="object-cover" />
                                        </div>
                                        <div className="col-span-2 relative h-full bg-white/5 group/img">
                                            <Image src={getImageUrl("assets", "dubai_5.png")} alt="Royal Guest" fill className="object-cover" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </main >
    );
}
