
export default function TeamPage() {
    return (
        <main className="min-h-screen bg-[#020617] text-[#f8fafc] overflow-x-hidden selection:bg-[#d4af37] selection:text-[#020617] font-sans">

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 flex items-center justify-center overflow-hidden border-b border-[#d4af37]/10">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-[#0f172a] opacity-50" />
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#d4af37]/10 to-transparent blur-3xl" />
                </div>

                <div className="container mx-auto px-6 md:px-8 relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#d4af37]/10 border border-[#d4af37]/20 rounded-full mb-8">
                        <span className="w-2 h-2 rounded-full bg-[#d4af37] animate-pulse" />
                        <span className="text-[10px] font-black text-[#d4af37] tracking-[0.3em] uppercase">WHO : LEADERSHIP</span>
                    </div>
                    <h1 className="text-4xl md:text-8xl font-black font-serif mb-6 italic leading-tight uppercase text-white/90">
                        Global Experts
                    </h1>
                    <h2 className="text-xl md:text-2xl font-bold font-sans text-[#d4af37] tracking-widest uppercase mb-12">
                        실물 자산과 기술의 완벽한 결합
                    </h2>
                    <p className="text-lg md:text-2xl font-sans font-light text-white/50 max-w-3xl mx-auto leading-relaxed">
                        최고의 파트너들과 함께 만들어가는 새로운 아트 금융 생태계
                    </p>
                </div>
            </section>

            <div className="container mx-auto px-6 md:px-8 max-w-7xl py-16 md:py-24 space-y-20 md:space-y-40">

                {/* Section 1: Strategic Partners */}
                <section>
                    <div className="flex flex-col md:flex-row items-end gap-6 mb-16 border-b border-[#d4af37]/20 pb-8">
                        <div>
                            <span className="text-[#d4af37] font-black tracking-widest uppercase text-xs mb-2 block">Section 01</span>
                            <h2 className="text-4xl md:text-5xl font-black font-serif italic text-white">Strategic Partners</h2>
                        </div>
                        <p className="text-white/60 pb-2 md:max-w-md ml-auto text-right md:text-left">
                            실물 자산 및 기술 파트너 <br />
                            <span className="text-sm">프로젝트의 신뢰도와 기술력을 지탱하는 두 축입니다.</span>
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* KUVA */}
                        <div className="group bg-[#0f172a] border border-[#d4af37]/10 p-10 hover:border-[#d4af37]/40 transition-all hover:bg-[#0f172a]/80">
                            <div className="h-16 mb-8 flex items-center">
                                <span className="text-3xl font-black text-white group-hover:text-[#d4af37] transition-colors">KUVA Art Center</span>
                            </div>
                            <div className="space-y-4">
                                <div className="inline-block px-3 py-1 bg-[#d4af37]/10 border border-[#d4af37]/20 text-[#d4af37] text-[10px] font-black tracking-widest uppercase mb-2">Art Asset Custodian</div>
                                <h3 className="text-xl font-bold text-white">4,000억 규모 실물 자산 및 피카소 4,000점 관리</h3>
                                <p className="text-white/50 leading-relaxed font-light">
                                    국내외 최고 수준의 아트 네트워킹을 보유한 KUVA 아트센터가 자산의 실재성과 보존을 책임집니다. 감정 및 전시 총괄을 통해 자산 가치를 극대화합니다.
                                </p>
                            </div>
                        </div>

                        {/* NIA CLOUD */}
                        <div className="group bg-[#0f172a] border border-[#d4af37]/10 p-10 hover:border-[#d4af37]/40 transition-all hover:bg-[#0f172a]/80">
                            <div className="h-16 mb-8 flex items-center">
                                <span className="text-3xl font-black text-white group-hover:text-[#d4af37] transition-colors">NIA CLOUD</span>
                            </div>
                            <div className="space-y-4">
                                <div className="inline-block px-3 py-1 bg-[#d4af37]/10 border border-[#d4af37]/20 text-[#d4af37] text-[10px] font-black tracking-widest uppercase mb-2">Technology Developer</div>
                                <h3 className="text-xl font-bold text-white">RWA 토큰화 플랫폼 개발 및 인프라 구축</h3>
                                <p className="text-white/50 leading-relaxed font-light">
                                    고도화된 클라우드 기술과 블록체인 개발 역량을 바탕으로, 보안성이 검증된 투명한 자산 분할 소유 시스템을 제공합니다.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 2: Global Ecosystem Partners */}
                <section>
                    <div className="flex flex-col md:flex-row items-end gap-6 mb-16 border-b border-[#d4af37]/20 pb-8">
                        <div>
                            <span className="text-[#d4af37] font-black tracking-widest uppercase text-xs mb-2 block">Section 02</span>
                            <h2 className="text-4xl md:text-5xl font-black font-serif italic text-white">Global Ecosystem</h2>
                        </div>
                        <p className="text-white/60 pb-2 md:max-w-md ml-auto text-right md:text-left">
                            글로벌 생태계 파트너 <br />
                            <span className="text-sm">아시아와 글로벌 시장을 연결하는 거대 자본 및 플랫폼 그룹입니다.</span>
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {/* Vingroup */}
                        <div className="bg-[#0f172a]/50 p-8 border border-white/5 hover:border-[#d4af37]/30 transition-all group">
                            <div className="text-4xl mb-6">🇻🇳</div>
                            <h4 className="text-lg font-black text-white mb-2 group-hover:text-[#d4af37] transition-colors">Vingroup</h4>
                            <p className="text-xs text-[#d4af37] uppercase tracking-widest mb-4">Market Expansion</p>
                            <p className="text-sm text-white/50 font-light leading-relaxed">
                                베트남 최대 기업인 빈그룹과의 파트너십을 통해 동남아시아 시장 내 아트 RWA 생태계를 확장합니다.
                            </p>
                        </div>

                        {/* Jollibee Group */}
                        <div className="bg-[#0f172a]/50 p-8 border border-white/5 hover:border-[#d4af37]/30 transition-all group">
                            <div className="text-4xl mb-6">🇵🇭</div>
                            <h4 className="text-lg font-black text-white mb-2 group-hover:text-[#d4af37] transition-colors">Jollibee Group</h4>
                            <p className="text-xs text-[#d4af37] uppercase tracking-widest mb-4">Mass Adoption</p>
                            <p className="text-sm text-white/50 font-light leading-relaxed">
                                필리핀의 대표적인 글로벌 기업인 졸리비 그룹과 협력하여 대중적인 자산 유동화 모델을 모색합니다.
                            </p>
                        </div>

                        {/* MANTRA */}
                        <div className="bg-[#0f172a]/50 p-8 border border-white/5 hover:border-[#d4af37]/30 transition-all group">
                            <div className="text-4xl mb-6">🌐</div>
                            <h4 className="text-lg font-black text-white mb-2 group-hover:text-[#d4af37] transition-colors">MANTRA Chain</h4>
                            <p className="text-xs text-[#d4af37] uppercase tracking-widest mb-4">L1 Blockchain</p>
                            <p className="text-sm text-white/50 font-light leading-relaxed">
                                RWA 전용 레이어1 블록체인인 만트라체인과의 기술 협력을 통해 규제 준수(Compliance)를 강화합니다.
                            </p>
                        </div>

                        {/* Binance */}
                        <div className="bg-[#0f172a]/50 p-8 border border-white/5 hover:border-[#d4af37]/30 transition-all group">
                            <div className="text-4xl mb-6">🔶</div>
                            <h4 className="text-lg font-black text-white mb-2 group-hover:text-[#d4af37] transition-colors">Binance</h4>
                            <p className="text-xs text-[#d4af37] uppercase tracking-widest mb-4">Liquidity & Listing</p>
                            <p className="text-sm text-white/50 font-light leading-relaxed">
                                세계 최대 가상자산 거래소 바이낸스를 통해 글로벌 유동성을 공급하고 2차 시장 상장을 추진합니다.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Section 3: Organizational Structure */}
                <section>
                    <div className="flex flex-col md:flex-row items-end gap-6 mb-16 border-b border-[#d4af37]/20 pb-8">
                        <div>
                            <span className="text-[#d4af37] font-black tracking-widest uppercase text-xs mb-2 block">Section 03</span>
                            <h2 className="text-4xl md:text-5xl font-black font-serif italic text-white flex items-center gap-4">
                                Structure <span className="text-2xl not-italic font-sans font-normal text-white/30 border border-white/20 px-3 py-1 rounded-full">WHO</span>
                            </h2>
                        </div>
                        <p className="text-white/60 pb-2 md:max-w-md ml-auto text-right md:text-left">
                            Organizational Structure <br />
                            <span className="text-sm">각 분야의 전문 기업들이 명확한 역할 분담을 통해 생태계를 이끌어갑니다.</span>
                        </p>
                    </div>

                    <div className="space-y-4">
                        {/* Who 1 */}
                        <div className="flex flex-col md:flex-row md:items-center bg-[#0f172a] border-l-4 border-[#d4af37] p-8 md:p-12 hover:bg-[#d4af37]/5 transition-all group">
                            <div className="md:w-1/3 mb-6 md:mb-0">
                                <span className="text-xs font-black text-[#d4af37] tracking-widest uppercase mb-2 block opacity-70 group-hover:opacity-100">Asset Ownership</span>
                                <h3 className="text-3xl font-serif font-black text-white italic">Who owns <br /> the assets?</h3>
                            </div>
                            <div className="md:w-2/3 md:pl-12 md:border-l border-white/10">
                                <p className="text-xl md:text-2xl text-white font-bold mb-2">KUVA 아트센터 & 두바이 재단</p>
                                <p className="text-white/50 font-light">KUVA 아트센터와 두바이 재단이 공동 관리하는 실물 자산입니다.</p>
                            </div>
                        </div>

                        {/* Who 2 */}
                        <div className="flex flex-col md:flex-row md:items-center bg-[#0f172a] border-l-4 border-white/20 p-8 md:p-12 hover:border-[#d4af37] hover:bg-[#d4af37]/5 transition-all group">
                            <div className="md:w-1/3 mb-6 md:mb-0">
                                <span className="text-xs font-black text-[#d4af37] tracking-widest uppercase mb-2 block opacity-70 group-hover:opacity-100">Technology</span>
                                <h3 className="text-3xl font-serif font-black text-white italic">Who builds <br /> the tech?</h3>
                            </div>
                            <div className="md:w-2/3 md:pl-12 md:border-l border-white/10">
                                <p className="text-xl md:text-2xl text-white font-bold mb-2">NIA CLOUD</p>
                                <p className="text-white/50 font-light">NIA CLOUD가 설계한 최첨단 블록체인 엔진입니다.</p>
                            </div>
                        </div>

                        {/* Who 3 */}
                        <div className="flex flex-col md:flex-row md:items-center bg-[#0f172a] border-l-4 border-white/20 p-8 md:p-12 hover:border-[#d4af37] hover:bg-[#d4af37]/5 transition-all group">
                            <div className="md:w-1/3 mb-6 md:mb-0">
                                <span className="text-xs font-black text-[#d4af37] tracking-widest uppercase mb-2 block opacity-70 group-hover:opacity-100">Expansion</span>
                                <h3 className="text-3xl font-serif font-black text-white italic">Who expands <br /> the market?</h3>
                            </div>
                            <div className="md:w-2/3 md:pl-12 md:border-l border-white/10">
                                <p className="text-xl md:text-2xl text-white font-bold mb-2">Global Leading Partners</p>
                                <p className="text-white/50 font-light">빈그룹, 졸리비, 바이낸스 등 글로벌 리딩 파트너사입니다.</p>
                            </div>
                        </div>
                    </div>
                </section>

            </div>

            {/* CTA Section */}
            <section className="py-40 bg-[#020617] relative">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#d4af37]/5 to-transparent blur-3xl opacity-50" />
                <div className="container mx-auto px-8 text-center relative z-10">
                    <h2 className="text-4xl md:text-7xl font-black font-serif italic mb-12 uppercase leading-tight">Trust Built on <br /> <span className="text-[#d4af37] not-italic">Proven Results</span></h2>
                    <p className="text-white/40 text-lg font-sans font-light mb-16 max-w-2xl mx-auto">
                        가장 정교한 팀이 실현하는 하이엔드 투자 플랫폼, <br />
                        피카소 그룹의 주인이 되십시오.
                    </p>
                    <button className="btn bg-[#d4af37] text-[#020617] border-none rounded-none px-20 h-20 text-xl font-black tracking-widest hover:bg-[#b4941f] transition-all shadow-2xl shadow-[#d4af37]/20">
                        JOIN THE LEGACY
                    </button>
                </div>
            </section>

        </main>
    );
}
