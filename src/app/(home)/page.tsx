"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { getImageUrl } from "@/lib/images";

const Counter = ({ target, duration }: { target: number; duration: number }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const start = 0;
    const end = target;
    let current = start;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.ceil(current));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration]);

  return <span>{count.toLocaleString()}</span>;
};

export default function Home() {
  return (
    <main className="min-h-screen bg-[#020617] text-[#f8fafc] overflow-x-hidden selection:bg-[#d4af37] selection:text-[#020617]">
      {/* Hero Section with Canvas Background */}
      <section className="relative pt-48 pb-32 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={getImageUrl("home", "why_picasso_bg.png")}
            alt="Picasso Canvas Texture"
            fill
            className="object-cover opacity-40 grayscale-[0.5]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#020617] via-transparent to-[#020617]" />
        </div>

        <div className="container mx-auto px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#d4af37]/10 border border-[#d4af37]/20 rounded-full mb-8">
            <span className="w-2 h-2 rounded-full bg-[#d4af37] animate-pulse" />
            <span className="text-[10px] font-black text-[#d4af37] tracking-[0.3em] uppercase">WHY : VISION</span>
          </div>
          <h1 className="text-4xl md:text-7xl font-black font-serif mb-6 tracking-tighter uppercase italic text-white/90">
            Historical Alpha
          </h1>
          <h2 className="text-xl md:text-2xl font-bold font-sans text-[#d4af37] tracking-widest uppercase mb-12">
            역사가 증명한 수익률
          </h2>
          <div className="flex flex-col items-center">
            <p className="text-white/60 font-sans tracking-[0.3em] uppercase text-xs mb-4">
              Annual Transaction Volume
            </p>
            <div className="text-6xl md:text-9xl font-black font-serif text-white tracking-tighter mb-4">
              $<Counter target={500000000} duration={2000} />
            </div>
            <p className="text-xl md:text-2xl font-sans font-light text-white/80 max-w-2xl">
              시장이 증명하고 역사가 검증한 압도적 유동성, <br />
              이제 당신의 포트폴리오에 담을 시간입니다.
            </p>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-20 bg-[#020617] border-y border-[#d4af37]/10">
        <div className="container mx-auto px-8 max-w-5xl text-center">
          <h2 className="text-3xl md:text-5xl font-serif font-black leading-tight mb-8 italic">
            &quot;예술을 소유하고, <br className="hidden md:block" />
            <span className="text-[#d4af37] not-italic">금융을 지배하십시오.</span>&quot;
          </h2>
          <h3 className="text-xl md:text-2xl font-bold font-sans text-white mb-12 uppercase tracking-wide">
            왜 지금 피카소 RWA여야만 하는가?
          </h3>
          <p className="text-lg text-white/60 font-sans font-light leading-relaxed max-w-4xl mx-auto">
            과거의 피카소 투자가 극소수 자산가들의 전유물이었다면, 오늘날의 피카소 RWA는 전 세계 자본이 실시간으로 흐르는 디지털 금융의 핵심입니다.<br /><br />
            4,000억 원 규모의 실물 자산과 두바이 VARA의 규제, 그리고 블록체인의 투명성이 만나 탄생한 가장 완벽한 투자 기회를 선점하십시오.
          </p>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-32 container mx-auto px-8 space-y-40">

        {/* 1. Macro View */}
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1 space-y-6">
            <span className="text-[#d4af37] font-sans font-black tracking-widest text-sm">01 / MACRO VIEW</span>
            <h2 className="text-4xl md:text-6xl font-serif font-black leading-tight">
              거시 경제의 해답
            </h2>
            <h3 className="text-xl text-white font-bold italic">
              &quot;화폐의 가치는 하락해도, <span className="text-[#d4af37] underline decoration-[#d4af37] underline-offset-4">위대한 예술의 가치는 영원합니다.</span>&quot;
            </h3>

            <div className="space-y-6 pt-4">
              <div>
                <h4 className="text-[#d4af37] font-bold mb-2">인플레이션의 대안</h4>
                <p className="text-white/60 font-sans font-light">
                  무한히 발행되는 화폐와 달리, 피카소의 작품은 공급이 한정된 &apos;절대적 희소 자산&apos;입니다.
                </p>
              </div>
              <div>
                <h4 className="text-[#d4af37] font-bold mb-2">자산의 안전성</h4>
                <p className="text-white/60 font-sans font-light">
                  금(Gold)보다 높은 수익률을 기록하면서도 주식 시장의 변동성으로부터 자유로운 포트폴리오 방패입니다.
                </p>
              </div>
            </div>
          </div>

          {/* Visualization: Graph */}
          <div className="flex-1 bg-[#0f172a] p-8 md:p-12 border border-[#d4af37]/20 relative shadow-2xl">
            <div className="absolute top-4 right-4 text-[10px] font-black text-[#d4af37] tracking-widest uppercase">20-Year Performance</div>
            <div className="mt-8 relative h-64 w-full flex items-end gap-4 px-4 pb-4 border-l border-b border-white/10">
              {/* S&P 500 Bar */}
              <div className="w-1/3 h-[60%] bg-white/10 relative group">
                <div className="absolute -top-8 w-full text-center text-xs text-white/50">S&P 500</div>
                <div className="absolute bottom-0 w-full bg-white/20 h-full animate-[grow_1s_ease-out]" />
              </div>

              {/* Gold Bar */}
              <div className="w-1/3 h-[75%] bg-[#d4af37]/10 relative group">
                <div className="absolute -top-8 w-full text-center text-xs text-[#d4af37]/50">Gold</div>
                <div className="absolute bottom-0 w-full bg-[#d4af37]/30 h-full animate-[grow_1.2s_ease-out]" />
              </div>

              {/* Picasso Bar */}
              <div className="w-1/3 h-[100%] bg-[#d4af37] relative shadow-[0_0_30px_rgba(212,175,55,0.3)] transform origin-bottom hover:scale-y-105 transition-transform">
                <div className="absolute -top-10 w-full text-center font-black text-[#d4af37]">WINNER</div>
                <div className="absolute bottom-4 w-full text-center font-black text-[#020617] text-xl">PICASSO</div>
              </div>
            </div>
            <p className="text-center text-[10px] text-white/30 mt-6 uppercase tracking-widest font-sans">
              *Comparative Analysis (2004-2024)
            </p>
          </div>
        </div>

        {/* 2. RWA Revolution */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-16">
          <div className="flex-1 space-y-6">
            <span className="text-[#d4af37] font-sans font-black tracking-widest text-sm">02 / RWA REVOLUTION</span>
            <h2 className="text-4xl md:text-6xl font-serif font-black leading-tight">
              시장의 패러다임 변화
            </h2>
            <h3 className="text-xl text-white font-bold italic">
              &quot;2경 원 규모의 RWA 시장, <span className="text-[#d4af37] underline decoration-[#d4af37] underline-offset-4">그 정점에 피카소가 있습니다.</span>&quot;
            </h3>

            <div className="space-y-6 pt-4">
              <div>
                <h4 className="text-[#d4af37] font-bold mb-2">유동성의 혁명</h4>
                <p className="text-white/60 font-sans font-light">
                  수천억 원대 마스터피스를 단 몇 초 만에 분할 거래할 수 있는 RWA 기술은 예술 투자의 진입장벽을 완전히 허물었습니다.
                </p>
              </div>
              <div>
                <h4 className="text-[#d4af37] font-bold mb-2">기관의 선택</h4>
                <p className="text-white/60 font-sans font-light">
                  블랙록(BlackRock)을 비롯한 글로벌 금융 거물들이 RWA 시장에 진입하는 지금, 가장 강력한 기초 자산은 전 세계 어디서나 현금화가 가능한 &apos;피카소&apos;입니다.
                </p>
              </div>
            </div>
          </div>

          {/* Visualization: Market Size Icon */}
          <div className="flex-1 flex justify-center py-12">
            <div className="relative w-80 h-80 flex items-center justify-center">
              <div className="absolute inset-0 bg-[#d4af37]/5 rounded-full animate-pulse" />
              <div className="absolute inset-8 border border-[#d4af37]/20 rounded-full animate-[spin_10s_linear_infinite]" />
              <div className="text-center z-10">
                <p className="text-sm font-black text-[#d4af37] tracking-[0.3em] uppercase mb-2">Market Size 2030</p>
                <p className="text-7xl font-serif font-black text-white italic tracking-tighter">$16T</p>
                <p className="text-xs text-white/40 mt-2 uppercase tracking-widest">(2경 원)</p>
              </div>
            </div>
          </div>
        </div>

        {/* 3. Proven Liquidity */}
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1 space-y-6">
            <span className="text-[#d4af37] font-sans font-black tracking-widest text-sm">03 / PROVEN LIQUIDITY</span>
            <h2 className="text-4xl md:text-6xl font-serif font-black leading-tight">
              검증된 압도적 유동성
            </h2>
            <h3 className="text-xl text-white font-bold italic">
              &quot;전 세계 미술 경매 시장 점유율 1위, <span className="text-[#d4af37] underline decoration-[#d4af37] underline-offset-4">가장 활발한 자산의 토큰화.</span>&quot;
            </h3>

            <div className="space-y-6 pt-4">
              <div>
                <h4 className="text-[#d4af37] font-bold mb-2">부동의 가치</h4>
                <p className="text-white/60 font-sans font-light">
                  매년 수천억 원이 거래되는 피카소 시장은 RWA 발행에 있어 가장 안정적인 가격 데이터와 높은 환금성을 보장합니다.
                </p>
              </div>
              <div>
                <h4 className="text-[#d4af37] font-bold mb-2">상장 시너지</h4>
                <p className="text-white/60 font-sans font-light">
                  바이낸스 등 글로벌 거래소 상장을 통해 24시간 실시간 거래가 가능한 환경은 기존 미술 시장의 폐쇄성을 혁신적으로 해결합니다.
                </p>
              </div>
            </div>
          </div>

          {/* Visualization: Image */}
          <div className="flex-1 relative group overflow-hidden border border-[#d4af37]/20 aspect-video bg-black">
            <Image
              src={getImageUrl("home", "picasso_pixel.png")}
              alt="Digital Transformation"
              fill
              className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
            />
            <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black to-transparent">
              <p className="text-[#d4af37] font-black text-[10px] uppercase tracking-widest">Digital Asset Transformation</p>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="pt-20 border-t border-white/5">
          <div className="max-w-4xl mx-auto text-center space-y-10">
            <h2 className="text-5xl md:text-8xl font-serif font-black leading-tight italic">
              From Billionaires <br />
              <span className="text-[#d4af37] not-italic">To Everyone</span>
            </h2>
            <p className="text-xl text-white/60 font-sans font-light leading-relaxed px-10">
              “억만장자들만의 전유물이었던 피카소, 이제 0.1평의 지분으로 당신의 포트폴리오에 담으십시오.”
            </p>
            <button className="btn bg-[#d4af37] text-[#020617] btn-lg rounded-none px-16 font-black tracking-widest border-none hover:scale-105 active:scale-95 transition-all mt-10 shadow-2xl shadow-[#d4af37]/20">
              START WITH $1
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
