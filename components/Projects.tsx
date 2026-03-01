'use client'; // 이 컴포넌트는 브라우저에서 동작함

import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion';  // 애니메이션 효과를 위한 라이브러리 불러옴
import { useRef, useEffect, useState } from 'react';  // React Hook
import Image from 'next/image';                       // Next.js 이미지 최적화
import { Github, AppWindow, X } from 'lucide-react';  // 아이콘 라이브러리

// 프로젝트 데이터
const projects = [
  {
    id: 1,
    color: '#3b82f6',
    label: 'Ardeo Shop',
    desc: 'Vue 3와 Express 기반의 풀스택 커머스 플랫폼',
    longDesc: '단순 CRUD를 넘어 인증·결제·재고 트랜잭션 전 과정을 설계한 프로젝트입니다. JWT 이중 인증으로 보안을 강화하고, MongoDB 트랜잭션을 적용해 데이터 무결성을 확보했습니다. PortOne API를 통한 서버 사이드 검증으로 실제 서비스 수준의 결제 아키텍처를 구현했습니다.',
    troubleShooting: {
      title: 'JWT 인증 구조 개선 및 Refresh Token 보안 강화',
      problem: 'Access Token 만료 시 사용자 경험이 단절되고, Refresh Token 탈취 위험이 존재',
      solution: 'Refresh Token을 HTTP-only Cookie에 저장해 보안을 높이고, 서버 DB 이중 검증 로직을 구축하여 세션 단절 없는 안전한 인증 flow를 완성',
    },
    tech: ['Vue 3', 'Vite', 'Node.js', 'Express', 'MongoDB'],
    github: 'https://github.com/so0733/ardeo-shop',
    link: 'https://ardeo-shop.vercel.app/',
    image: '/project_img/project_01.png',
  },

  {
    id: 2,
    color: '#22c55e',
    label: '샴푸샵 (SHAMPOO #)',
    desc: 'React.js와 Node.js 기반의 풀스택 커머스 플랫폼',
    longDesc: '사용자 쇼핑몰과 관리자 전용 대시보드를 통합 구현한 풀스택 프로젝트입니다. 상품 등록부터 주문 관리, 공지사항 및 이벤트 게시판 운영까지 비즈니스 운영에 필요한 전 과정을 시스템화했습니다. 특히 Styled-Components를 활용해 일관된 UI 시스템을 구축하고, 대규모 컴포넌트를 폴더 구조로 체계화하여 유지보수성을 확보했습니다.',
    troubleShooting: {
      title: 'React Router v5 → v6 마이그레이션',
      problem: 'React 18 환경에서 v5 사용 시 라이브러리 간 호환성 문제로 렌더링 오류 발생',
      solution: '공식 문서를 분석하여 v6의 변경 사항을 파악하고 프로젝트 전체에 적용, Switch를 Routes로, useHistory를 useNavigate로 변경',
    },
    tech: ['React.js', 'Bootstrap', 'Styled-Components', 'Node.js', 'Express', 'MongoDB'],
    github: 'https://github.com/so0733/shampoo_shop',
    image: '/project_img/project_02.png',
  },

  {
    id: 3,
    color: '#a855f7',
    label: '정처기 실기 기출 CBT',
    desc: 'React.js 기반의 정보처리기사 실기 기출 학습 플랫폼',
    longDesc: '정보처리기사 실기 합격을 위해 2020~2023년 기출 데이터를 체계화한 CBT 서비스입니다. 방대한 문제 은행을 연도별·회차별로 구조화하여 실시간 정답 확인 및 랜덤 풀기 기능을 제공하며, 실제 시험과 같은 문제로 학습 효율을 극대화했습니다.',
    troubleShooting: {
      title: '대량의 기출 데이터 인덱싱 및 효율적인 문제 탐색 로직 구현',
      problem: '260개 이상의 비정형 문제 데이터를 연도/회차별로 분류하고, 사용자가 원하는 문항에 즉각 접근할 수 있는 직관적인 탐색 구조 결여',
      solution: '각 문제에 고유 ID(1~260)를 부여하고, 이를 연도별·회차별 범위(Range) 데이터와 매핑하는 탐색 알고리즘을 설계했습니다. 사이드바와 검색 UI를 연동하여 특정 번호 입력 시 해당 기출 회차로 즉시 점프할 수 있도록 로직을 최적화하여 사용자 탐색 시간을 단축했습니다.',
    },
    tech: ['React.js', 'Bootstrap', 'Styled-Components'],
    github: 'https://github.com/so0733/pastquizapp',
    link: 'https://so0733.github.io/pastquizapp/',
    image: '/project_img/project_03.png',
  },

  {
    id: 4,
    color: '#f97316',
    label: 'Postbox Blog',
    desc: 'React & MongoDB 기반의 개인화 포스팅 플랫폼',
    longDesc: '사용자 중심의 콘텐츠 관리 기능을 구현한 풀스택 블로그 서비스입니다. REST API를 설계하여 게시글의 생성부터 수정, 삭제까지의 전 과정을 구현했으며, MongoDB를 활용해 비정형 데이터인 포스트 데이터를 효율적으로 관리하도록 설계했습니다',
    troubleShooting: {
      title: '비동기 데이터 렌더링 최적화 및 사용자 경험(UX) 개선',
      problem: '서버로부터 포스트 목록을 불러올 때, 네트워크 지연으로 인해 발생하는 빈 화면(White-out) 현상과 데이터 수정 후 즉각적으로 반영되지 않는 상태 동기화 이슈',
      solution: '데이터 수정/삭제 시 서버 응답에 맞춰 프론트엔드의 상태값(State)을 즉시 업데이트하는 로직을 구현하여 새로고침 없는 부드러운 사용자 경험을 제공했습니다.',
    },
    tech: ['React.js', 'Node.js', 'Express', 'MongoDB'],
    github: 'https://github.com/so0733/postbox',
    image: '/project_img/project_04.png',
  },

  {
    id: 5,
    color: '#ef4444',
    label: '랜덤 이미지 생성기',
    desc: 'API 연동 기반의 동적 이미지 렌더링 서비스',
    longDesc: '반Lorem Picsum API를 활용하여 고화질 이미지를 실시간으로 큐레이션하는 싱글 페이지 애플리케이션(SPA)입니다. 사용자 입력에 따라 이미지 수량(최대 30개)을 동적으로 제어하며, 비동기 통신을 통한 효율적인 데이터 로딩을 구현했습니다.',
    troubleShooting: {
      title: '외부 API 파라미터 제어 및 대량 이미지 로딩 최적화',
      problem: '사용자가 요청하는 이미지 수량에 따라 API 호출 파라미터를 동적으로 변경해야 하며, 한꺼번에 많은 고화질 이미지를 불러올 때 발생하는 레이아웃 무너짐 현상',
      solution: '사용자 입력값을 상태(State)로 관리하여 API 엔드포인트에 즉각 반영하는 로직을 구축했습니다. 또한, 이미지 로딩 전 플레이스홀더를 배치하거나 CSS Grid/Flexbox를 활용하여 다양한 수량의 이미지가 출력되어도 일관된 그리드 레이아웃이 유지되도록 설계했습니다.',
    },
    tech: ['JavaScript', 'HTML5', 'CSS3', 'Fetch API', 'Netlify'],
    link: 'https://merry-starburst-98c859.netlify.app/',
    image: '/project_img/project_05.png',
  },

  {
    id: 6,
    color: '#14b8a6',
    label: 'Portfolio 2026',
    desc: 'Framer Motion과 Next.js를 활용한 포트폴리오',
    longDesc: '사용자의 스크롤 흐름에 따라 유기적으로 반응하는 인터랙션 중심의 포트폴리오입니다. 가로 스크롤(Horizontal Scroll) 인터페이스와 Shared Layout Animation을 결합하여, 리스트에서 상세 모달로 전환될 때 시각적 단절 없이 콘텐츠에 몰입할 수 있는 UX를 설계했습니다.',
    troubleShooting: {
      title: '가로 스크롤 환경에서의 모달 제어 및 레이아웃 전이 최적화',
      problem: '가로 스크롤 레이아웃 특성상 모달 활성화 시에도 배경 스크롤이 유지되어 화면이 밀리는 현상이 발생했습니다. 또한 Framer Motion의 layoutId 전이 과정에서 부모 요소의 스케일 변화가 자식 텍스트 왜곡을 유발하는 문제가 있었습니다.',
      solution: '모달 상태에 따라 body 스크롤을 제어하는 Lock 로직을 구현하여 인터랙션을 완전히 격리했습니다. 더불어 layoutId를 카드 컨테이너와 텍스트 요소에 분리 적용해 애니메이션 성능을 개선하고, 텍스트 왜곡 없이 자연스러운 확대·축소 전이를 구현했습니다.',
    },
    tech: ['Next.js', 'TypeScript', 'Framer Motion', 'Tailwind CSS', 'Lucide React'],
    github: 'https://github.com/so0733/portfolio_2026',
    link: 'https://portfolio-2026-two-orcin.vercel.app/',
    image: '/project_img/project_06.png',
  },
];

export default function Project() {
  const containerRef = useRef<HTMLDivElement>(null);  // 가로 스크롤 애니메이션의 기준이 되는 컨테이너 참조
  const [isMobile, setIsMobile] = useState(false);    // 모바일 환경 여부 상태 관리
  const [selectedId, setSelectedId] = useState<number | null>(null);  // 현재 선택되어 모달로 띄울 프로젝트 ID

  useEffect(() => { // 브라우저 너비를 확인하여 모바일 여부 업데이트
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    // 모달 활성화 시 배경 페이지 스크롤 방지 처리
    if (selectedId) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => window.removeEventListener('resize', checkMobile);
  }, [selectedId]);

  const { scrollYProgress } = useScroll({  // 컨테이너 내의 세로 스크롤 위치를 0에서 1 사이의 값으로 추적
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const x = useSpring(  // 스크롤 진행도(0~1)를 가로 이동 좌표(0% ~ -80%)로 매핑하고 부드러운 물리 효과 적용
    useTransform(scrollYProgress, [0, 1], ['0%', '-80%']),
    {
      stiffness: 60,  // 스프링 강도
      damping: 20,    // 감속
      mass: 0.8       // 무게감
    }
  );

  const selectedProject = projects.find((p) => p.id === selectedId);  // 선택된 ID에 해당하는 프로젝트 상세 데이터 추출

  return (
    <section id="projects" className="bg-[var(--bg)] py-24 relative">
      {/* 섹션 헤더 영역 */}
      <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-24">
        <div className="mb-16 text-left group">
          <h2 className="text-4xl md:text-5xl font-black text-[var(--text)] tracking-tight">
            Projects <span className="gradient-text">Work</span>
          </h2>
          <div className="mt-4 h-[2px] w-16 bg-gradient-to-r from-primary via-primary to-transparent transition-all duration-700 group-hover:w-64" />
        </div>
      </div>

      {/* 프로젝트 리스트 영역 */}
      <section
        ref={containerRef}
        className={`relative ${isMobile ? 'h-auto' : 'h-[400vh]'}`}
      >
        {/* 가로 스크롤 컨텐츠를 화면 상단에 고정하는 스티키 컨테이너 */}
        <div
          className={`sticky top-0 h-screen flex items-center ${
            isMobile ? 'overflow-x-auto snap-x snap-mandatory py-10' : 'overflow-hidden'
          }`}
        >
          {/* 실제 가로로 움직이는 카드들의 집합 */}
          <motion.div
            style={{ x: isMobile ? 0 : x }}
            className="flex gap-12 px-[10vw]"
          >
            {projects.map((project) => (
              <motion.div
                key={project.id}
                layoutId={`card-${project.id}`}
                onClick={() => setSelectedId(project.id)}
                className="relative flex-shrink-0 w-[85vw] h-[550px] md:w-[700px] md:h-[600px] rounded-3xl overflow-hidden group shadow-2xl border border-white/10 snap-center cursor-pointer"
              >
                {/* 프로젝트 배경 이미지 */}
                <Image
                  src={project.image}
                  alt={project.label}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />

                {/* 오버레이 그라데이션 */}
                <div
                  className="absolute inset-0 transition-opacity duration-500 group-hover:opacity-80"
                  style={{
                    background: `linear-gradient(to bottom, transparent 50%, rgba(0,0,0,0.4) 70%, ${project.color}33 100%)`,
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                
                {/* 카드 정보 텍스트 영역 */}
                <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end">
                  <motion.h3 layoutId={`title-${project.id}`} className="text-4xl md:text-5xl font-black text-white mb-4">
                    {project.label}
                  </motion.h3>

                  <p className="text-white/70 max-w-md mb-8 line-clamp-2">
                    {project.desc}
                  </p>

                  {/* 기술 스택 태그 */}
                  <div className="flex flex-wrap gap-2 mb-8">
                      {project.tech.map((t) => (
                        <span 
                          key={t} 
                          className="px-3 py-1 bg-white/10 backdrop-blur-md border border-white/10 text-white/90 rounded-md text-xs font-medium"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    
                    {/* 외부 링크 버튼 영역 */}
                    {(project.github || project.link) && (
                      <div className="flex gap-4" onClick={(e) => e.stopPropagation()}>
                        
                        {/* GitHub 버튼 */}
                        {project.github && (
                          <a 
                            href={project.github} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-5 py-2.5 bg-white text-black rounded-full font-bold text-sm hover:bg-gray-200 transition-colors"
                          >
                            <Github size={18} /> GitHub
                          </a>
                        )}

                        {/* View Site 버튼 */}
                        {project.link && (
                          <a 
                            href={project.link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-5 py-2.5 border border-white/20 text-white rounded-full font-bold text-sm hover:bg-white/10 transition-colors"
                          >
                            <AppWindow  size={18} /> View Site
                          </a>
                        )}
                        
                      </div>
                    )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 프로젝트 클릭 시 나타나는 팝업 모달 */}
      <AnimatePresence>
        {selectedId && selectedProject && (
          <>
            {/* 모달 배경 */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedId(null)}
              className="fixed inset-0 bg-[var(--bg)]/80 backdrop-blur-md z-[100]"
            />
            
            {/* 모달 본문 컨테이너 */}
              <motion.div
                layoutId={`card-${selectedId}`}
                className="
                  fixed left-1/2 top-1/2 z-[101]
                  w-full max-w-4xl
                  -translate-x-1/2 -translate-y-1/2
                  overflow-y-auto
                  rounded-3xl border border-white/10
                  bg-[#1a1a1a]
                  max-h-[90vh]
                "
              >
              {/* 닫기 버튼 */}
              <button
                onClick={() => setSelectedId(null)}
                className="absolute right-6 top-6 rounded-full bg-black/50 p-3 text-white backdrop-blur-md transition hover:bg-black/80"
              >
                <X size={24} />
              </button>

              <div className="mx-auto max-w-4xl p-8 md:p-12 lg:p-16">

                {/* 프로젝트 상세 제목 */}
                <motion.h3
                  layoutId={`title-${selectedId}`}
                  className="mb-10 text-4xl font-black text-white md:text-6xl"
                >
                  {selectedProject.label}
                </motion.h3>

                <div className="space-y-16">

                  {/* 상세 개요 섹션 */}
                  <section>
                    <h4 className="mb-4 flex items-center gap-3 text-xl font-bold text-primary">
                      <span className="h-[2px] w-8 bg-primary" />
                      프로젝트 개요
                    </h4>
                    <p className="leading-relaxed text-gray-300">
                      {selectedProject.desc}
                      <br /><br />
                      {selectedProject.longDesc}
                    </p>
                  </section>

                  {/* 기술적 문제 해결 섹션 */}
                  <section className="rounded-2xl border border-white/10 bg-white/5 p-8">
                    <h4 className="mb-6 text-xl font-bold text-orange-400">
                      Technical Troubleshooting
                    </h4>

                    <div className="space-y-8">
                      <div>
                        <div className="mb-2 flex items-center gap-2 text-lg font-bold text-white">
                          <span className="h-2 w-2 rounded-full bg-red-500" />
                          문제 상황
                        </div>
                        <p className="ml-4 text-gray-400">
                          {selectedProject.troubleShooting.problem}
                        </p>
                      </div>

                      <div>
                        <div className="mb-2 flex items-center gap-2 text-lg font-bold text-white">
                          <span className="h-2 w-2 rounded-full bg-green-500" />
                          해결 방법
                        </div>
                        <p className="ml-4 leading-relaxed text-gray-400">
                          {selectedProject.troubleShooting.solution}
                        </p>
                      </div>
                    </div>
                  </section>

                  {/* 하단 기술 스택 */}
                  <div className="flex flex-wrap gap-3">
                    {selectedProject.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-lg bg-white/10 px-4 py-2 text-sm font-medium text-white/80"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* 외부 링크 버튼 */}
                  {(selectedProject.github || selectedProject.link) && (
                    <div className="flex flex-wrap gap-4 pt-6">
                      {selectedProject.github && (
                        <a
                          href={selectedProject.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 rounded-xl bg-white px-8 py-4 font-bold text-black transition hover:scale-105"
                        >
                          <Github size={20} /> GitHub
                        </a>
                      )}

                      {selectedProject.link && (
                        <a
                          href={selectedProject.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 rounded-xl border border-white/20 px-8 py-4 font-bold text-white transition hover:bg-white/5"
                        >
                          <AppWindow size={20} /> View Site
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}