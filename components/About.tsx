'use client'; // 이 컴포넌트는 브라우저에서 동작함

import Image from 'next/image'; // 이미지 최적화 컴포넌트

export default function About() {
  return (
    <section id="about" className="section bg-[var(--bg)] py-24">
      <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-24">

        {/* 섹션 타이틀 */}
        <div className="mb-16 text-left group">
          <h2 className="text-4xl md:text-5xl font-black text-[var(--text)] tracking-tight">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="mt-4 h-[2px] w-16 bg-gradient-to-r from-primary via-primary to-transparent transition-all duration-700 group-hover:w-64" />
        </div>
            
        {/* 전체 레이아웃 컨테이너 */}
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">

          {/* 좌측: 프로필 이미지 영역 */}
          <div className="relative group w-64 h-80 sm:w-72 sm:h-96 flex-shrink-0">
            <div
              className="
                absolute -inset-[2px]
                rounded-full
                border border-white/10
                pointer-events-none
              "
            />

            {/* 이미지 컨테이너 */}
            <div
              className="
                relative w-full h-full
                overflow-hidden
                rounded-full
                bg-neutral-900
                transition-transform duration-500
                group-hover:scale-[0.98]
              "
            >
              {/* 프로필 이미지 */}
              <Image
                src="/profile.png"
                alt="소철현 프로필 사진"
                fill
                priority
                className="
                  object-cover
                  transition-all duration-700
                  group-hover:grayscale
                "
              />
            </div>
          </div>

          {/* 우측: 소개 텍스트 영역 */}
          <div className="flex-1 space-y-8">

            {/* Headline */}
            <div className="space-y-3">
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--text)] leading-tight">
                <span className="block">
                  데이터로 근거를 만들고,
                </span>
                <span className="block">
                  가치를 <span className="text-primary">구조</span>로 구현합니다.
                </span>
              </h2>
            </div>

            {/* 본문 설명 */}
            <div className="space-y-5 text-[var(--text-muted)] text-lg leading-relaxed">
              <p>
                저는 기능이 <span className="text-[var(--text)] font-bold">“동작하는 것”</span>에 만족하기보다,
                왜 그렇게 동작해야 하는지, 그 선택이 사용자와 시스템 전체에 어떤 영향을 주는지를 먼저 고민하는 개발자입니다.
              </p>

              <p>
                JWT 기반 인증 시스템과 데이터 트랜잭션을 직접 설계하며,
                사용자 경험 뒤에 숨겨진 <span className="text-[var(--text)] font-bold">보안</span>과
                <span className="text-[var(--text)] font-medium"> 안정성</span>의 중요성을 배웠습니다.
                작은 선택 하나가 전체 <span className="text-[var(--text)] font-bold">구조</span>에
                어떤 영향을 주는지를 항상 코드로 검증하려 노력합니다.
              </p>

              <p>
                앞으로도 기술을 나열하기보다,
                <span className="text-[var(--text)] font-bold">
                  {' '}맥락과 이유를 설명할 수 있는 개발자
                </span>로서 팀과 사용자 모두가 신뢰할 수 있는 구조를 꾸준히 만들어가고 싶습니다.
              </p>
            </div>

            {/* 메타 정보 영역 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 pt-8 border-t border-white/10">
              <div className="space-y-1">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary">
                  Location
                </p>
                <p className="text-[var(--text)] font-medium">
                  Busan, South Korea
                </p>
              </div>

              <div className="space-y-1">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary">
                  Education
                </p>
                <p className="text-[var(--text)] font-medium">
                  Kyungsung University
                </p>
              </div>

              <div className="space-y-1 sm:col-span-2 md:col-span-1">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary">
                  Major
                </p>
                <p className="text-[var(--text)] font-medium">
                  Electronic Engineering
                </p>
              </div>
            </div>

          </div>
        </div>
        
      </div>
    </section>
  );
}