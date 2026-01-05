import Image from "next/image";
import { getImageUrl } from "@/lib/images";

export default function TrustSafetyPage() {
    return (
        <main className="min-h-screen bg-[#020617] text-[#f8fafc] overflow-x-hidden selection:bg-[#d4af37] selection:text-[#020617] font-sans">

            {/* Hero Section */}
            <section className="relative pt-48 pb-32 flex items-center justify-center overflow-hidden border-b border-[#d4af37]/10">
                <div className="absolute inset-0 z-0">
                    <Image
                        src={getImageUrl("trust", "trust_safety_bg.png")}
                        alt="Trust and Safety Background"
                        fill
                        className="object-cover opacity-30"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#020617] via-transparent to-[#020617]" />
                </div>

                <div className="container mx-auto px-8 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="flex-1 text-center lg:text-left">
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#d4af37]/10 border border-[#d4af37]/20 rounded-full mb-8">
                                <span className="w-2 h-2 rounded-full bg-[#d4af37] animate-pulse" />
                                <span className="text-[10px] font-black text-[#d4af37] tracking-[0.3em] uppercase">WHERE : TRUST</span>
                            </div>
                            <h1 className="text-4xl md:text-7xl font-black font-serif mb-4 leading-tight uppercase italic text-white/90">
                                Dubai VARA Regulated
                            </h1>
                            <h2 className="text-xl md:text-2xl font-bold font-sans text-[#d4af37] tracking-widest uppercase mb-12">
                                국가급 보안과 규제
                            </h2>
                            <p className="text-xl md:text-2xl font-sans font-light text-white/70 max-w-2xl mx-auto lg:mx-0 mb-12">
                                예술의 가치를 지키는 가장 투명하고 안전한 기술. <br />
                                피카소 그룹은 법적 규제와 기술적 보안의 정점에서 당신의 자산을 보호합니다.
                            </p>

                            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                                <div className="group flex items-center gap-3 bg-[#0f172a] border border-[#d4af37]/30 px-6 py-3 rounded-none hover:bg-[#d4af37]/10 transition-all">
                                    <div>
                                        <p className="text-[10px] font-black text-[#d4af37] uppercase tracking-widest">VARA License</p>
                                        <p className="text-sm font-bold text-white">No. V-772-2026</p>
                                    </div>
                                </div>
                                <button className="bg-white/5 border border-white/10 px-8 py-3 text-[10px] font-black tracking-[0.2em] uppercase hover:bg-white/10 transition-all flex items-center gap-2">
                                    SPV Certificate ↗
                                </button>
                            </div>
                        </div>

                        {/* Real-time Status Widget */}
                        <div className="w-full max-w-md">
                            <div className="bg-[#0f172a]/80 backdrop-blur-xl border border-[#d4af37]/20 p-8 shadow-2xl relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-[#d4af37]/5 blur-3xl rounded-full" />
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="w-2 h-2 rounded-full bg-[#d4af37] animate-pulse" />
                                    <span className="text-xs font-black tracking-widest text-[#d4af37] uppercase">Vault Real-time Status</span>
                                </div>

                                <div className="grid grid-cols-2 gap-8 mb-8">
                                    <div className="space-y-1">
                                        <p className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Temperature</p>
                                        <p className="text-3xl font-serif font-black text-white">21.5°C</p>
                                    </div>
                                    <div className="space-y-1">
                                        <p className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Humidity</p>
                                        <p className="text-3xl font-serif font-black text-white">50.2%</p>
                                    </div>
                                    <div className="space-y-1">
                                        <p className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Security Level</p>
                                        <p className="text-3xl font-serif font-black text-[#d4af37] uppercase">Class A</p>
                                    </div>
                                    <div className="space-y-1">
                                        <p className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Staff Status</p>
                                        <p className="text-2xl font-serif font-black text-white">Secured</p>
                                    </div>
                                </div>

                                <div className="bg-black/40 p-4 border border-white/5 flex items-center justify-between">
                                    <span className="text-[10px] font-black text-white/30 uppercase tracking-widest">Last Appraisal</span>
                                    <span className="text-[10px] font-black text-[#d4af37] uppercase tracking-widest">Jan 01, 2026</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 1. Regulatory Compliance */}
            <section className="py-32 bg-[#020617]">
                <div className="container mx-auto px-8">
                    <div className="flex flex-col md:flex-row gap-20">
                        <div className="flex-1">
                            <h2 className="text-xs font-black text-[#d4af37] tracking-[0.4em] uppercase mb-6">01 / Regulatory Compliance</h2>
                            <h3 className="text-4xl md:text-5xl font-serif font-black mb-10 italic">
                                두바이 정부가 감독하고 <br />
                                <span className="text-[#d4af37] not-italic">법률이 보호합니다.</span>
                            </h3>
                            <div className="w-20 h-1 bg-[#d4af37] mb-10" />
                        </div>
                        <div className="flex-1 grid grid-cols-1 gap-12">
                            <div className="space-y-4 border-l-2 border-[#d4af37]/20 pl-8 transition-all hover:border-[#d4af37]">
                                <h4 className="text-xl font-bold font-serif uppercase tracking-tight text-white italic">VARA Regulation</h4>
                                <p className="text-white/50 text-sm leading-relaxed font-sans font-light">
                                    세계 최초의 가상자산 전담 기구인 <strong className="text-white">VARA</strong>의 Category 1 ARVA 가이드라인을 엄격히 준수합니다.
                                    이는 민간 발행 이상의 금융 당국 감독 시스템 하의 투자를 보장합니다.
                                </p>
                            </div>
                            <div className="space-y-4 border-l-2 border-[#d4af37]/20 pl-8 transition-all hover:border-[#d4af37]">
                                <h4 className="text-xl font-bold font-serif uppercase tracking-tight text-white italic">SPV Structure</h4>
                                <p className="text-white/50 text-sm leading-relaxed font-sans font-light">
                                    각 작품은 독립된 <strong className="text-white">특수목적법인(SPV)</strong>에 의해 소유됩니다.
                                    이는 자산 링펜싱(Asset Ring-fencing)을 통해 운영사의 재무적 리스크로부터 투자자의 자산권을 완벽히 격리하여 보호합니다.
                                </p>
                            </div>
                            <div className="space-y-4 border-l-2 border-[#d4af37]/20 pl-8 transition-all hover:border-[#d4af37]">
                                <h4 className="text-xl font-bold font-serif uppercase tracking-tight text-white italic">KYC / AML</h4>
                                <p className="text-white/50 text-sm leading-relaxed font-sans font-light">
                                    글로벌 자금세탁방지 기구(FATF) 기준에 부합하는 철저한 신원 확인 및 절차를 수행합니다.
                                    가장 깨끗하고 투명한 투자 생태계를 지향합니다.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. Physical Security & Custody */}
            <section className="py-32 bg-[#050505] border-y border-white/5">
                <div className="container mx-auto px-8">
                    <div className="text-center mb-24">
                        <h2 className="text-xs font-black text-[#d4af37] tracking-[0.4em] uppercase mb-6">02 / Physical Security</h2>
                        <h3 className="text-4xl md:text-7xl font-serif font-black italic">4,000억 가치의 실물, <br /> <span className="text-[#d4af37] not-italic">철저하게 관리됩니다.</span></h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#d4af37]/10 border border-[#d4af37]/10">
                        <div className="p-16 bg-[#0a0a0a] space-y-8 flex flex-col items-center text-center group">
                            <div className="text-5xl group-hover:scale-110 transition-transform duration-500">🛡️</div>
                            <h4 className="text-xl font-bold font-serif uppercase tracking-widest text-[#d4af37]">Global Vault</h4>
                            <p className="text-sm text-white/50 leading-relaxed font-sans font-light">
                                국제적 권위의 예술품 전문 수탁 기관의 항온·항습 및 24시간 철저한 무장 보안 시스템 하에 보관됩니다.
                            </p>
                        </div>
                        <div className="p-16 bg-[#0a0a0a] space-y-8 flex flex-col items-center text-center group border-x border-[#d4af37]/10">
                            <div className="text-5xl group-hover:scale-110 transition-transform duration-500">📜</div>
                            <h4 className="text-xl font-bold font-serif uppercase tracking-widest text-[#d4af37]">Insurance</h4>
                            <p className="text-sm text-white/50 leading-relaxed font-sans font-light">
                                Lloyd’s of London 등 글로벌 보험사의 전문 예술품 보험에 전액 가입되어 화재, 도난 등 사고로부터 자산 가치를 전액 보호합니다.
                            </p>
                        </div>
                        <div className="p-16 bg-[#0a0a0a] space-y-8 flex flex-col items-center text-center group">
                            <div className="text-5xl group-hover:scale-110 transition-transform duration-500">⚖️</div>
                            <h4 className="text-xl font-bold font-serif uppercase tracking-widest text-[#d4af37]">Appraisal</h4>
                            <p className="text-sm text-white/50 leading-relaxed font-sans font-light">
                                Sotheby’s, Christie’s 출신 감정 전문가들이 정기적인 가치 평가 보고서를 발행하고 투자자에게 투명하게 공유합니다.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Blockchain Integrity (Cold Tech Highlight) */}
            <section className="py-40 bg-[#020617] relative overflow-hidden">
                <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#d4af37]/40 to-transparent" />
                <div className="container mx-auto px-8 relative z-10">
                    <div className="flex flex-col lg:flex-row gap-20">
                        <div className="lg:w-1/3">
                            <h2 className="text-xs font-black text-[#d4af37] tracking-[0.4em] uppercase mb-6">03 / Blockchain Integrity</h2>
                            <h3 className="text-4xl md:text-5xl font-serif font-black mb-8 italic">데이터는 <br /> <span className="text-[#d4af37] not-italic">거짓말하지 않습니다.</span></h3>
                            <div className="space-y-6">
                                <div className="bg-[#0f172a] p-8 border-l-2 border-[#d4af37]">
                                    <p className="text-xs font-black text-[#d4af37] tracking-widest uppercase mb-4">Verification</p>
                                    <p className="text-white font-serif italic text-lg leading-snug">
                                        Immutable Provenance & <br /> Real-time Proof of Reserve
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-12">
                            <div className="p-12 bg-gradient-to-br from-[#0f172a] to-transparent border border-white/5">
                                <h4 className="text-lg font-bold text-white mb-6 uppercase tracking-widest italic font-serif">Provenance Registry</h4>
                                <p className="text-sm text-white/40 leading-relaxed font-sans font-light">
                                    작품의 획득부터 모든 소유권 변동 이력을 블록체인에 영구 기록하여, 위변조가 불가능한 &apos;디지털 등본&apos;을 제공합니다.
                                </p>
                            </div>
                            <div className="p-12 bg-gradient-to-br from-[#0f172a] to-transparent border border-white/5">
                                <h4 className="text-lg font-bold text-white mb-6 uppercase tracking-widest italic font-serif">Smart Contract Audit</h4>
                                <p className="text-sm text-white/40 leading-relaxed font-sans font-light">
                                    글로벌 보안 업체의 승인을 받은 오딧(Audit) 완료 스마트 컨트랙트를 사용합니다. 모든 거래 로직은 공개되어 투명하게 검증 가능합니다.
                                </p>
                            </div>
                            <div className="p-12 bg-gradient-to-br from-[#0f172a] to-transparent border border-white/5 md:col-span-2">
                                <h4 className="text-lg font-bold text-white mb-6 uppercase tracking-widest italic font-serif">Real-time Proof of Reserve</h4>
                                <p className="text-sm text-white/40 leading-relaxed font-sans font-light">
                                    재단이 보유한 실물 자산과 발행된 토큰의 비율을 실시간으로 확인할 수 있는 &apos;투명성 대시보드&apos;를 통해 실질 자산 담보 여부를 증명합니다.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Exit & Liquidity Safety */}
            <section className="py-40 bg-[#0a0a0a] border-t border-white/5">
                <div className="container mx-auto px-8 max-w-5xl text-center">
                    <h2 className="text-xs font-black text-[#d4af37] tracking-[0.4em] uppercase mb-8">04 / Exit & Liquidity</h2>
                    <h3 className="text-4xl md:text-8xl font-serif font-black mb-16 italic tracking-tighter italic">언제든 현금화할 수 있는 <br /> <span className="text-[#d4af37] not-italic">권리.</span></h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#d4af37]/20 border border-[#d4af37]/20">
                        <div className="p-16 bg-[#0a0a0a] flex flex-col items-center">
                            <div className="w-16 h-16 bg-[#d4af37]/10 rounded-full flex items-center justify-center text-3xl mb-8">💎</div>
                            <h4 className="text-xl font-bold font-serif uppercase tracking-widest text-white mb-6">Licensed Exchange</h4>
                            <p className="text-sm text-white/40 leading-relaxed font-sans font-light">
                                VARA 승인을 받은 공식 거래소 및 Binance와 같은 글로벌 플랫폼 상장을 통해 언제 어디서나 안전하고 편리한 거래 환경을 제공합니다.
                            </p>
                        </div>
                        <div className="p-16 bg-[#0a0a0a] flex flex-col items-center">
                            <div className="w-16 h-16 bg-[#d4af37]/10 rounded-full flex items-center justify-center text-3xl mb-8">🔄</div>
                            <h4 className="text-xl font-bold font-serif uppercase tracking-widest text-white mb-6">Buy-back Fund</h4>
                            <p className="text-sm text-white/40 leading-relaxed font-sans font-light">
                                자산의 유동성을 적극 지원하기 위해 재단 차원의 바이백 펀드를 상시 운영하여, 투자자의 원활한 엑시트(Exit)를 강력하게 뒷받침합니다.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final Assurance */}
            <section className="py-40 bg-[#020617] relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-[#d4af37]/5 to-transparent" />
                <div className="container mx-auto px-8 relative z-10">
                    <div className="max-w-4xl border border-[#d4af37]/30 p-20 mx-auto text-center bg-[#0f172a]/40 backdrop-blur-xl">
                        <p className="text-xs font-black text-[#d4af37] tracking-[0.5em] uppercase mb-10 italic">Certified Integrity</p>
                        <h2 className="text-4xl md:text-6xl font-black font-serif mb-12 italic leading-tight uppercase">Your Investment, <br /> Our Greatest Responsibility</h2>
                        <button className="btn bg-[#d4af37] text-[#020617] border-none rounded-none px-16 h-20 text-xl font-black tracking-widest hover:scale-105 transition-all">
                            GET THE SAFETY REPORT
                        </button>
                    </div>
                </div>
            </section>

        </main>
    );
}
