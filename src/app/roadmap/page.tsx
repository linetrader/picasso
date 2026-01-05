"use client";

import { useEffect, useRef, useState } from "react";


// Hook for counting up animation
const useCounter = (end: number, duration: number = 2000, trigger: boolean) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!trigger) return;

        let startTime: number | null = null;
        let animationFrame: number;

        const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;
            const percentage = Math.min(progress / duration, 1);

            setCount(Math.floor(end * percentage));

            if (progress < duration) {
                animationFrame = requestAnimationFrame(animate);
            }
        };

        animationFrame = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(animationFrame);
    }, [end, duration, trigger]);

    return count;
};

// Counter Component
const UserCounter = ({ target, label, trigger }: { target: number, label: string, trigger: boolean }) => {
    const count = useCounter(target, 2000, trigger);

    return (
        <div className="mt-8 p-6 bg-[#0f172a] border border-[#d4af37]/20 flex items-center justify-between group">
            <div className="flex flex-col">
                <span className="text-[10px] text-[#d4af37] tracking-widest uppercase mb-1">{label}</span>
                <span className="text-3xl font-black font-serif text-white flex gap-1 items-baseline">
                    {count.toLocaleString()} <span className="text-sm font-sans font-light text-white/50">Holders</span>
                </span>
            </div>
            <div className="text-4xl opacity-50 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all">
                👥
            </div>
        </div>
    );
};

// Intersection Observer Hook for Timeline
const useOnScreen = (options: IntersectionObserverInit) => {
    const ref = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(true);
            }
        }, options);

        const currentRef = ref.current;
        if (currentRef) observer.observe(currentRef);

        return () => {
            if (currentRef) observer.unobserve(currentRef);
        };
    }, [options]);

    return [ref, isVisible] as const;
};

export default function RoadmapPage() {
    const milestones = [
        {
            period: "2026 Q1",
            phase: "Foundation & Tech Launch",
            desc: "RWA 플랫폼의 완성 및 법적 기반 구축",
            items: [
                { text: "MANTRA Chain 기반 RWA 플랫폼 개발: 보안성 높은 토큰화 엔진 완공", icon: "🌐" },
                { text: "두바이 법인 설립: SPV 및 재단 설립 완료 (자산 보호)", icon: "🏛️" },
                { text: "자산 온체인화: 피카소 마스터피스 1호 블록체인 등록", icon: "🔗" }
            ]
        },
        {
            period: "2026 Q2",
            phase: "Expansion & Compliance",
            desc: "첫 번째 유동성 확보 및 규제 승인",
            items: [
                { text: "제1호 글로벌 거래소 상장: 유동성 공급의 첫 신호탄", icon: "📈" },
                { text: "VARA 라이선스 취득: 두바이 규제청 공식 승인", icon: "🛡️" }
            ],
            userTarget: 50000
        },
        {
            period: "2026 Q3",
            phase: "Growth & Viral Marketing",
            desc: "브랜드 권위 확보 및 커뮤니티 폭발적 성장",
            items: [
                { text: "제2호 글로벌 거래소 상장: 유동성 다각화", icon: "📊" },
                { text: "글로벌 마케팅: YouTube/TikTok 메가 인플루언서 협업", icon: "🎥" }
            ],
            userTarget: 100000
        },
        {
            period: "2026 Q4",
            phase: "Market Dominance",
            desc: "글로벌 TOP 100 프로젝트 진입",
            items: [
                { text: "제3호 글로벌 거래소 상장: 거래량 극대화", icon: "🚀" },
                { text: "CMC TOP 100: 시가총액 기준 100대 프로젝트 진입", icon: "🏆" }
            ],
            userTarget: 300000
        },
        {
            period: "2027 Q1",
            phase: "The Ultimate Goal",
            desc: "Binance Listing & Global No.1 Art RWA",
            items: [
                { text: "Binance 상장: 최종 엑시트 전략 완성 및 압도적 유동성", icon: "🔶" },
                { text: "마스터피스 확장: 모딜리아니, 자코메티 연작 토큰화", icon: "🎨" }
            ],
            isFinal: true
        }
    ];

    return (
        <main className="min-h-screen bg-[#020617] text-[#f8fafc] overflow-x-hidden selection:bg-[#d4af37] selection:text-[#020617] font-sans">

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 flex items-center justify-center overflow-hidden border-b border-[#d4af37]/10">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-[#0f172a] opacity-50" />
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#d4af37]/5 to-transparent" />
                </div>

                <div className="container mx-auto px-6 md:px-8 relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#d4af37]/10 border border-[#d4af37]/20 rounded-full mb-8">
                        <span className="w-2 h-2 rounded-full bg-[#d4af37] animate-pulse" />
                        <span className="text-[10px] font-black text-[#d4af37] tracking-[0.3em] uppercase">WHEN : ROADMAP</span>
                    </div>
                    <h1 className="text-3xl md:text-7xl font-black font-serif mb-6 leading-tight max-w-5xl mx-auto italic text-white/90">
                        1 Year to Global Standard
                    </h1>
                    <h2 className="text-xl md:text-2xl font-bold font-sans text-[#d4af37] tracking-widest uppercase mb-12">
                        1년의 혁신, 피카소 RWA의 등극
                    </h2>
                    <p className="text-lg md:text-2xl font-sans font-light text-white/60 max-w-3xl mx-auto leading-relaxed">
                        우리는 단 1년 안에 자산의 토큰화부터 글로벌 TOP 거래소 상장까지, <br className="hidden md:block" />
                        압도적인 속도로 예술 금융의 패러다임을 바꿉니다.
                    </p>
                </div>
            </section>

            {/* Vertical Timeline */}
            <section className="py-20 md:py-40 bg-[#020617] relative">
                {/* Center Line for Desktop */}
                <div className="absolute left-8 md:left-1/2 top-40 bottom-40 w-px bg-gradient-to-b from-[#d4af37]/0 via-[#d4af37]/30 to-[#d4af37]/0" />

                <div className="container mx-auto px-6 md:px-8 max-w-6xl">
                    {milestones.map((m, i) => {
                        // eslint-disable-next-line react-hooks/rules-of-hooks
                        const [ref, isVisible] = useOnScreen({ threshold: 0.2 });

                        return (
                            <div
                                key={i}
                                ref={ref}
                                className={`relative mb-32 md:w-1/2 transition-all duration-1000 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-20 translate-y-12'
                                    } ${i % 2 === 0 ? 'md:pr-24 md:text-right md:mr-auto' : 'md:pl-24 md:left-1/2'}`}
                            >
                                {/* Center Connector Dot */}
                                <div className={`absolute top-0 w-4 h-4 rounded-full border border-[#d4af37] bg-[#020617] z-10 
                                    ${i % 2 === 0 ? '-right-2' : '-left-2'} 
                                    hidden md:block transition-all duration-1000 delay-300
                                    ${isVisible ? 'shadow-[0_0_15px_#d4af37] bg-[#d4af37]' : ''}
                                `} />
                                {/* Mobile Left Line Dot */}
                                <div className={`absolute top-0 w-3 h-3 rounded-full border border-[#d4af37] bg-[#020617] z-10 -left-[1.35rem] md:hidden
                                     ${isVisible ? 'shadow-[0_0_10px_#d4af37] bg-[#d4af37]' : ''}
                                `} />

                                <div className="pt-2">
                                    <span className={`text-sm font-black text-[#d4af37] tracking-widest uppercase mb-2 block ${m.isFinal ? 'animate-pulse' : ''}`}>
                                        {m.period}
                                    </span>
                                    <h3 className={`text-3xl md:text-4xl font-serif font-black text-white italic mb-4 uppercase tracking-tighter ${m.isFinal ? 'text-transparent bg-clip-text bg-gradient-to-r from-[#d4af37] to-white' : ''}`}>
                                        {m.phase}
                                    </h3>
                                    <p className="text-white/60 text-lg mb-8 font-light italic border-b border-white/5 pb-4 inline-block">
                                        &quot;{m.desc}&quot;
                                    </p>

                                    <ul className={`space-y-6 ${i % 2 === 0 ? 'md:flex md:flex-col md:items-end' : ''}`}>
                                        {m.items.map((item, j) => (
                                            <li key={j} className={`flex gap-4 items-center group ${i % 2 === 0 ? 'md:flex-row-reverse md:text-right' : 'text-left'}`}>
                                                <div className="w-10 h-10 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/20 flex items-center justify-center text-lg shrink-0 group-hover:bg-[#d4af37] group-hover:text-black transition-colors">
                                                    {item.icon}
                                                </div>
                                                <p className="text-sm text-white/70 leading-relaxed font-sans font-light max-w-sm group-hover:text-white transition-colors">
                                                    <strong className="block text-white font-bold mb-0.5 md:inline md:mb-0 md:mr-1">{item.text.split(':')[0]}:</strong>
                                                    {item.text.split(':')[1]}
                                                </p>
                                            </li>
                                        ))}
                                    </ul>

                                    {/* Animated Counter for User Targets */}
                                    {m.userTarget && (
                                        <div className={i % 2 === 0 ? 'md:ml-auto md:w-fit' : 'md:w-fit'}>
                                            <UserCounter target={m.userTarget} label="Community Growth" trigger={isVisible} />
                                        </div>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* Final Vision CTA */}
            <section className="py-40 bg-[#050505] border-t border-[#d4af37]/10">
                <div className="container mx-auto px-8 text-center text-white relative overflow-hidden">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#d4af37]/10 via-transparent to-transparent blur-3xl opacity-50" />

                    <div className="relative z-10">
                        <h2 className="text-5xl md:text-9xl font-black font-serif italic mb-8 uppercase leading-none tracking-tighter opacity-10">
                            Picasso
                        </h2>
                        <h3 className="text-3xl md:text-5xl font-black font-serif italic mb-12 relative -mt-16 md:-mt-24">
                            Global No.1 <br /> <span className="text-[#d4af37] text-5xl md:text-7xl">Art RWA Platform</span>
                        </h3>
                        <p className="text-white/40 text-lg font-sans font-light mb-16 max-w-2xl mx-auto">
                            피카소를 넘어 모딜리아니, 자코메티까지. <br />
                            검증된 거장들의 작품으로 글로벌 리딩 금융 생태계를 완성합니다.
                        </p>
                        <button className="btn bg-[#d4af37] text-[#020617] border-none rounded-none px-20 h-20 text-xl font-black tracking-widest hover:scale-105 active:scale-95 transition-all shadow-2xl shadow-[#d4af37]/20">
                            VIEW WHITEPAPER
                        </button>
                    </div>
                </div>
            </section>

        </main>
    );
}
