import Image from "next/image";
import { getImageUrl } from "@/lib/images";

export default function BusinessPage() {
    return (
        <main className="min-h-screen bg-[#020617] text-[#f8fafc] overflow-x-hidden selection:bg-[#d4af37] selection:text-[#020617] font-sans">

            {/* Hero Section */}
            <section className="relative pt-48 pb-32 flex items-center justify-center overflow-hidden border-b border-[#d4af37]/10">
                <div className="absolute inset-0 z-0">
                    <Image
                        src={getImageUrl("business", "business_hero.png")}
                        alt="Dubai Trust Background"
                        fill
                        className="object-cover opacity-30"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-[#020617]" />
                </div>

                <div className="container mx-auto px-8 relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#d4af37]/10 border border-[#d4af37]/20 rounded-full mb-8">
                        <span className="w-2 h-2 rounded-full bg-[#d4af37] animate-pulse" />
                        <span className="text-[10px] font-black text-[#d4af37] tracking-[0.3em] uppercase">HOW : BUSINESS</span>
                    </div>
                    <h1 className="text-4xl md:text-7xl font-black font-serif mb-6 leading-tight max-w-5xl mx-auto italic text-white/90">
                        Smart Exit Strategy
                    </h1>
                    <h2 className="text-xl md:text-2xl font-bold font-sans text-[#d4af37] tracking-widest uppercase mb-12">
                        상장과 매각의 투트랙 수익
                    </h2>
                    <p className="text-xl md:text-2xl font-sans font-light text-white/70 max-w-3xl mx-auto mb-16">
                        VARA 규제 하에 발행되는 첫 번째 하이엔드 아트 RWA 프로젝트에 참여하십시오.
                    </p>

                    {/* Trust Badges */}
                    <div className="flex flex-wrap items-center justify-center gap-12 pt-10 opacity-60">
                        <a
                            href="https://www.vara.ae/en/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex flex-col items-center gap-3 hover:opacity-100 transition-opacity cursor-pointer group"
                        >
                            <div className="w-12 h-12 border-2 border-[#d4af37]/40 flex items-center justify-center text-[10px] font-black text-[#d4af37] group-hover:border-[#d4af37]">VARA</div>
                            <span className="text-[9px] uppercase tracking-widest font-bold">Regulated Authority</span>
                        </a>
                        <div className="flex flex-col items-center gap-3">
                            <div className="w-12 h-12 bg-[#d4af37]/20 rounded-full flex items-center justify-center text-xl">🏛️</div>
                            <span className="text-[9px] uppercase tracking-widest font-bold">Dubai Foundation Seal</span>
                        </div>
                        <div className="flex flex-col items-center gap-3">
                            <div className="w-12 h-12 bg-white/5 flex items-center justify-center text-[10px] font-black">BINANCE</div>
                            <span className="text-[9px] uppercase tracking-widest font-bold">Square Partner</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Business Steps */}
            <section className="py-40 bg-[#020617]">
                <div className="container mx-auto px-8 max-w-6xl">
                    <div className="space-y-40">

                        {/* Step 1: Asset Acquisition */}
                        <div className="flex flex-col lg:flex-row items-center gap-20">
                            <div className="flex-1 space-y-8">
                                <div className="flex items-center gap-4">
                                    <span className="text-4xl font-serif font-black text-[#d4af37] italic">01</span>
                                    <div className="h-px w-12 bg-[#d4af37]/30" />
                                    <span className="text-xs font-black tracking-widest uppercase text-white/40">Asset Acquisition</span>
                                </div>
                                <h2 className="text-4xl md:text-5xl font-serif font-black text-white italic">확보된 마스터피스</h2>
                                <div className="bg-[#0f172a] p-8 border-l-4 border-[#d4af37]">
                                    <p className="text-[#d4af37] font-bold text-lg mb-2">현재 상태: 4,000점의 피카소 그림 확보 완료</p>
                                    <p className="text-white/60 font-sans font-light leading-relaxed">
                                        이미 확보된 실물 자산을 기반으로 하므로, &apos;투자 후 매입&apos; 방식의 리스크가 전혀 없습니다.
                                        준비된 프로젝트만이 드릴 수 있는 안전한 투자를 시작하십시오.
                                    </p>
                                </div>
                                <div className="flex gap-4">
                                    <div className="px-4 py-2 bg-white/5 border border-white/10 text-[10px] font-black tracking-widest text-[#d4af37] uppercase">Provenance Verified</div>
                                    <div className="px-4 py-2 bg-white/5 border border-white/10 text-[10px] font-black tracking-widest text-[#d4af37] uppercase">Ownership Confirmed</div>
                                </div>
                            </div>
                            <div className="flex-1 w-full relative">
                                <div className="absolute -inset-4 bg-[#d4af37]/5 blur-2xl rounded-full" />
                                <div className="card bg-[#0f172a] border border-[#d4af37]/20 p-2 overflow-hidden rounded-none shadow-2xl">
                                    <div className="relative h-96 w-full">
                                        <Image src={getImageUrl("business", "picasso_art.png")} alt="Picasso Asset" fill className="object-cover" />
                                        <div className="absolute top-4 right-4 px-3 py-1 bg-[#d4af37] text-[#020617] text-[10px] font-black uppercase tracking-widest shadow-lg">In Vault</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Step 2: Legal Structure */}
                        <div className="flex flex-col lg:flex-row-reverse items-center gap-20">
                            <div className="flex-1 space-y-8">
                                <div className="flex items-center gap-4">
                                    <span className="text-4xl font-serif font-black text-[#d4af37] italic">02</span>
                                    <div className="h-px w-12 bg-[#d4af37]/30" />
                                    <span className="text-xs font-black tracking-widest uppercase text-white/40">Legal Structure</span>
                                </div>
                                <h2 className="text-4xl md:text-5xl font-serif font-black text-white italic">두바이 특수목적법인(SPV) 소유</h2>
                                <p className="text-white/60 text-lg font-sans font-light leading-relaxed">
                                    작품별로 독립된 <strong className="text-white font-bold">두바이 법인(SPV)</strong>을 설립하여 소유권을 이전합니다.
                                    자산 유동화의 핵심인 &apos;도산 격리(Bankruptcy Remoteness)&apos;를 실현합니다.
                                </p>
                                <ul className="space-y-4 font-sans text-sm text-white/70">
                                    <li className="flex gap-4 items-start">
                                        <span className="text-[#d4af37]">✔</span>
                                        <span>모법인의 재무 상태와 관계없이 작품 소유권 보호</span>
                                    </li>
                                    <li className="flex gap-4 items-start">
                                        <span className="text-[#d4af37]">✔</span>
                                        <span>두바이 상법에 따른 토큰 홀더 이익 보장</span>
                                    </li>
                                    <li className="flex gap-4 items-start">
                                        <span className="text-[#d4af37]">✔</span>
                                        <span>명확한 법적 소유권 관계 증명</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="flex-1 grid grid-cols-2 gap-px bg-[#d4af37]/10 border border-[#d4af37]/20 p-px">
                                <div className="bg-[#0f172a] p-12 text-center">
                                    <p className="text-3xl font-serif font-black text-white italic">SPV</p>
                                    <p className="text-[10px] text-[#d4af37] font-black tracking-widest mt-4 uppercase">Entity Setup</p>
                                </div>
                                <div className="bg-[#0f172a] p-12 text-center">
                                    <p className="text-3xl font-serif font-black text-white italic">100%</p>
                                    <p className="text-[10px] text-[#d4af37] font-black tracking-widest mt-4 uppercase">Asset Backed</p>
                                </div>
                            </div>
                        </div>

                        {/* Step 3: Compliance */}
                        <div className="flex flex-col lg:flex-row items-center gap-20">
                            <div className="flex-1 space-y-8">
                                <div className="flex items-center gap-4">
                                    <span className="text-4xl font-serif font-black text-[#d4af37] italic">03</span>
                                    <div className="h-px w-12 bg-[#d4af37]/30" />
                                    <span className="text-xs font-black tracking-widest uppercase text-white/40">Compliance</span>
                                </div>
                                <h2 className="text-4xl md:text-5xl font-serif font-black text-white italic">VARA 규제 감독 하의 RWA 발행</h2>
                                <p className="text-white/60 text-lg font-sans font-light leading-relaxed">
                                    세계 최초의 가상자산 전담 규제 기구인 <strong className="text-white font-bold">VARA</strong>의 가이드라인을 준수합니다.
                                    금융 당국의 감독 하에 발행되는 &apos;규제 준수형 토큰&apos;은 기관 투자자들이 참여할 수 있는 법적 근거가 됩니다.
                                </p>
                                <div className="p-8 bg-gradient-to-r from-[#0f172a] to-transparent border-l-2 border-[#d4af37] space-y-4">
                                    <h4 className="text-[#d4af37] font-black uppercase text-[10px] tracking-widest">Technology Standard</h4>
                                    <p className="text-xl font-black text-white italic font-serif">ERC-3643 (Permissioned Token)</p>
                                    <p className="text-xs text-white/40">투자자 보호 및 규제 준수 로직이 스마트 컨트랙트에 내장되어 있습니다.</p>
                                    <a
                                        href="https://www.vara.ae/en/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-block text-[10px] font-bold text-[#d4af37] border border-[#d4af37]/30 px-3 py-1 hover:bg-[#d4af37]/10 transition-all uppercase tracking-widest"
                                    >
                                        View VARA Guidelines ↗
                                    </a>
                                </div>
                            </div>
                            <div className="flex-1 relative aspect-square max-w-sm mx-auto">
                                <div className="absolute inset-0 border-2 border-[#d4af37]/10 rounded-full animate-spin-slow" />
                                <div className="absolute inset-4 border border-[#d4af37]/20 rounded-full" />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="text-center">
                                        <p className="text-6xl mb-4">🛡️</p>
                                        <p className="text-xs font-black text-[#d4af37] tracking-[0.3em] uppercase">VARA Compliant</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Step 4: Infrastructure (Mantra Chain) */}
                        <div className="flex flex-col lg:flex-row-reverse items-center gap-20">
                            <div className="flex-1 space-y-8">
                                <div className="flex items-center gap-4">
                                    <span className="text-4xl font-serif font-black text-[#d4af37] italic">04</span>
                                    <div className="h-px w-12 bg-[#d4af37]/30" />
                                    <span className="text-xs font-black tracking-widest uppercase text-white/40">Infrastructure</span>
                                </div>
                                <h2 className="text-4xl md:text-5xl font-serif font-black text-white italic">Powered by MANTRA Chain</h2>
                                <p className="text-white/60 text-lg font-sans font-light leading-relaxed">
                                    <strong className="text-white font-bold">MANTRA Chain</strong>은 실물 자산(RWA)을 위해 설계된 최초의 Layer 1 블록체인입니다.
                                    규제 준수와 보안이 핵심인 인프라 위에서 피카소 그룹의 자산이 발행되고 거래됩니다.
                                </p>
                                <div className="space-y-6">
                                    <div className="flex gap-4">
                                        <div className="w-12 h-12 bg-[#d4af37]/10 flex items-center justify-center rounded-lg border border-[#d4af37]/20 shrink-0">
                                            <span className="text-xl">🔒</span>
                                        </div>
                                        <div>
                                            <h4 className="text-white font-bold mb-1">Security & Compliance</h4>
                                            <p className="text-sm text-white/50 font-light">금융 기관 수준의 보안 프로토콜과 온체인 신원 인증(DID)을 통해 불법 자금을 원천 차단합니다.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-12 h-12 bg-[#d4af37]/10 flex items-center justify-center rounded-lg border border-[#d4af37]/20 shrink-0">
                                            <span className="text-xl">⚡</span>
                                        </div>
                                        <div>
                                            <h4 className="text-white font-bold mb-1">High Performance</h4>
                                            <p className="text-sm text-white/50 font-light">Cosmos SDK 기반의 빠른 트랜잭션 처리 속도와 낮은 수수료로 효율적인 자산 거래를 지원합니다.</p>
                                        </div>
                                    </div>
                                </div>
                                <a
                                    href="https://www.mantrachain.io/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block mt-4 text-[10px] font-bold text-[#d4af37] border border-[#d4af37]/30 px-4 py-2 hover:bg-[#d4af37]/10 transition-all uppercase tracking-widest"
                                >
                                    Explore MANTRA Chain ↗
                                </a>
                            </div>
                            <div className="flex-1 relative aspect-square max-w-sm mx-auto bg-[#0f172a] border border-[#d4af37]/20 p-8 flex items-center justify-center overflow-hidden group">
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#d4af37]/10 to-transparent opacity-50" />
                                <div className="text-center relative z-10">
                                    <div className="relative w-32 h-32 mx-auto mb-6 group-hover:scale-110 transition-transform duration-500">
                                        <Image
                                            src={getImageUrl("business", "mantra-logo.png")}
                                            alt="MANTRA Chain Logo"
                                            fill
                                            className="object-contain drop-shadow-[0_0_15px_rgba(212,175,55,0.3)]"
                                        />
                                    </div>
                                    <h3 className="text-2xl font-black font-serif text-white uppercase tracking-tight">MANTRA</h3>
                                    <p className="text-[10px] text-[#d4af37] tracking-[0.4em] uppercase mt-2">The RWA Ledger</p>
                                </div>
                            </div>
                        </div>

                        {/* Step 4: Exit Strategy */}
                        <div className="pt-20 border-t border-[#d4af37]/10">
                            <div className="text-center mb-24">
                                <h2 className="text-4xl md:text-7xl font-black font-serif mb-8 italic uppercase tracking-tighter">Exit Strategy</h2>
                                <p className="text-white/40 text-xl font-sans font-light tracking-wide">
                                    투명하고 명확한 수익 실현 전략
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                {/* Track A */}
                                <div className="card bg-[#0f172a]/40 border border-[#d4af37]/20 p-12 hover:bg-[#0f172a]/60 transition-all group">
                                    <div className="flex justify-between items-start mb-12">
                                        <span className="text-xs font-black text-[#d4af37] tracking-widest uppercase mb-4 font-sans">Track A</span>
                                        <span className="text-4xl filter grayscale group-hover:grayscale-0 transition-all">🖼️</span>
                                    </div>
                                    <h3 className="text-3xl font-serif font-black text-white mb-8 italic uppercase tracking-tight leading-tight">Physical Asset <br /> Sale (Exit)</h3>
                                    <ul className="space-y-6 font-sans text-white/60">
                                        <li className="flex gap-4 items-start pb-6 border-b border-white/5">
                                            <span className="text-[#d4af37] font-black text-lg">01</span>
                                            <p className="text-sm font-light">3~5년 보유 후 Sotheby&apos;s, Christie&apos;s 글로벌 옥션을 통한 매각 진행.</p>
                                        </li>
                                        <li className="flex gap-4 items-start pb-6 border-b border-white/5">
                                            <span className="text-[#d4af37] font-black text-lg">02</span>
                                            <p className="text-sm font-light">전시 및 대여 수익을 보유 기간 동안 배당금으로 지급.</p>
                                        </li>
                                        <li className="flex gap-4 items-start">
                                            <span className="text-[#d4af37] font-black text-lg">03</span>
                                            <p className="text-sm font-light">최종 매각 시 시세 차익을 토큰 보유 비율에 따라 분배.</p>
                                        </li>
                                    </ul>
                                </div>

                                {/* Track B */}
                                <div className="card bg-[#0f172a]/40 border border-[#d4af37]/20 p-12 hover:bg-[#0f172a]/60 transition-all group">
                                    <div className="flex justify-between items-start mb-12">
                                        <span className="text-xs font-black text-[#d4af37] tracking-widest uppercase mb-4 font-sans">Track B</span>
                                        <span className="text-4xl filter grayscale group-hover:grayscale-0 transition-all">💰</span>
                                    </div>
                                    <h3 className="text-3xl font-serif font-black text-white mb-8 italic uppercase tracking-tight leading-tight">Secondary Market <br /> Liquidity</h3>
                                    <ul className="space-y-6 font-sans text-white/60">
                                        <li className="flex gap-4 items-start pb-6 border-b border-white/5">
                                            <span className="text-[#d4af37] font-black text-lg">01</span>
                                            <p className="text-sm font-light">Binance 등 글로벌 TOP 거래소 상장을 통한 리얼타임 유동화 전략.</p>
                                        </li>
                                        <li className="flex gap-4 items-start pb-6 border-b border-white/5">
                                            <span className="text-[#d4af37] font-black text-lg">02</span>
                                            <p className="text-sm font-light">실시간 매수/매도를 통해 투자자가 원하는 시점에 수익 실현 가능.</p>
                                        </li>
                                        <li className="flex gap-4 items-start">
                                            <span className="text-[#d4af37] font-black text-lg">03</span>
                                            <p className="text-sm font-light">RWA 토큰 마켓플레이스를 통한 안정적인 가격 형성 지원.</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-40 bg-[#020617] border-t border-[#d4af37]/10">
                <div className="container mx-auto px-8 text-center max-w-4xl">
                    <h2 className="text-5xl md:text-8xl font-black font-serif italic mb-12 leading-tight uppercase">Ready to <br /> Participate?</h2>
                    <p className="text-white/40 text-lg font-sans font-light mb-16">
                        규제 안에서 보호받는 하이엔드 예술 투자의 표준, <br />
                        PICASSO GROUP이 두바이에서 시작합니다.
                    </p>
                    <button className="btn bg-[#d4af37] text-[#020617] border-none rounded-none px-20 h-20 text-xl font-black tracking-[0.2em] hover:scale-105 active:scale-95 transition-all shadow-2xl shadow-[#d4af37]/20">
                        APPLICATION FORM
                    </button>
                </div>
            </section>

        </main>
    );
}
