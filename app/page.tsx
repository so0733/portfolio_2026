'use client'; // 이 컴포넌트는 브라우저에서 동작함

// 메인 페이지를 구성하는 섹션 단위 컴포넌트
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/layout/Footer";
import Projects from "@/components/Projects";
import ScrollHorizontal from "@/components/ScrollHorizontal";
import ScrollTextLines from "@/components/ScrollTextLines";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section (메인 랜딩 화면) */}
      <section className="relative min-h-screen w-full flex items-center overflow-hidden text-white">
        {/* 배경 레이어 (Glow 효과) */}
        <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">          
          {/* 좌측 상단 그라데이션 글로우 */}
          <div
            className="
              absolute
              -top-[15%] -left-[10%]
              w-[60%] h-[60%]
              rounded-full
              bg-gradient-to-br
              from-primary/20 via-primary/10 to-transparent
              dark:from-blue-500/30 dark:via-indigo-500/20 dark:to-transparent
              blur-[140px]
            "
          />
          
          {/* 우측 하단 그라데이션 글로우 */}
          <div
            className="
              absolute
              bottom-[-10%] right-[-5%]
              w-[55%] h-[55%]
              rounded-full
              bg-gradient-to-tr
              from-primary-soft/20 via-primary-soft/10 to-transparent
              dark:from-cyan-500/25 dark:via-teal-500/15 dark:to-transparent
              blur-[160px]
            "
          />
            
          {/* 시선 유도를 위한 포인트 액센트 하이라이트 */}
          <div
            className="
              absolute
              top-[30%] left-[60%]
              w-[20%] h-[20%]
              rounded-full
              bg-gradient-to-br
              from-white/20 via-primary/10 to-transparent
              dark:from-indigo-400/20 dark:via-blue-400/10 dark:to-transparent
              blur-[100px]
            "
          />
        </div>

        {/* 메인 콘텐츠 영역 */}
        <main className="relative z-10 w-full max-w-7xl mx-auto px-8 md:px-16 lg:px-24">
          <div className="max-w-4xl space-y-8 text-left">
            
            {/* 직무 타이틀 */}
            <div className="flex items-center gap-3 animate-fade-in">
              <span className="h-[1px] w-8 bg-primary"></span>
              <span className="gradient-text uppercase tracking-[0.2em] text-lg font-semibold"> 
                Software Engineer
              </span>
            </div>

            {/* 메인 헤드라인 */}
            <h1 className="flex flex-col gap-0">
              <span className="text-2xl sm:text-4xl md:text-5xl font-extralight text-[var(--text-muted)] tracking-tight leading-tight">
                동작하는 코드를 넘어,
              </span>

              <div className="flex flex-wrap items-baseline gap-x-2">
                {/* leading을 살짝 더 줄여서 윗줄과의 간격을 좁혔습니다 */}
                <span className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[1.1] text-[var(--text)]">
                  이유 있는{" "}
                  <span className="gradient-text">구조</span>
                </span>
                
                {/* 모바일에서 줄바꿈 되었을 때 너무 붙지 않도록 미세한 여백(py-2)을 고려해볼 수 있습니다 */}
                <span className="text-2xl sm:text-4xl md:text-5xl font-light text-[var(--text-muted)] tracking-tight leading-none">
                  를 설계합니다<span className="text-primary">.</span>
                </span>
              </div>
            </h1>

            {/* 자기소개 문단 */}
            <p className="max-w-2xl text-lg sm:text-xl md:text-2xl text-[var(--text-muted)] leading-relaxed font-light">
              <span className="text-[var(--text)] font-semibold">보안</span>과 
              트랜잭션의{" "}
              <span className="text-[var(--text)] font-semibold">안정성</span>을 
              구조로 구축하는{" "}
              <br className="hidden md:block" />
              개발자{" "}
              <span className="relative inline-block group">
                <span className="relative z-10 font-bold text-[var(--text)] group-hover:text-primary transition-colors">
                  소철현
                </span>
                {/* 이름 하이라이트 배경 */}
                <span className="absolute bottom-1 left-0 w-full h-2 bg-primary/20 -z-10"></span>
              </span>
              입니다.
            </p>
          </div>
        </main>
        
        {/* 스크롤 유도 아이콘 */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <svg
            className="
              h-7 w-7
              text-[var(--text)]
              dark:text-primary
              drop-shadow-sm
              opacity-60
            "
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </section>

      <ScrollHorizontal />

      <div className="space-y-32 md:space-y-48">
        {/* About Section */}
        <About />

        <ScrollTextLines />

        {/* Skills Section */}
        <Skills />

        {/* Projects Section */}
        <Projects />

        {/* Contact Section */}
        <Contact />
      </div>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}