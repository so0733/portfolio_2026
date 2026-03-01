'use client'; // 이 컴포넌트는 브라우저에서 동작함

import React from 'react';              // React 라이브러리
import { motion } from 'framer-motion'; // 애니메이션 효과를 위한 라이브러리 불러옴


// 기술 스택 데이터
const SKILL_DATA = [
  {
    category: "Languages", // 카테고리 제목
    skills: [
      {
        name: "HTML5", // 기술 이름
        desc: "시맨틱 마크업 설계, 사용자 입력 폼(Form) 구현", // 상세 설명
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg"  // 아이콘 이미지 URL
      },
      {
        name: "CSS3",
        desc: "Flex/Grid 레이아웃, 반응형 웹, UI 가독성 개선",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg"
      },
      {
        name: "JavaScript",
        desc: "ES6+ 최신 문법, Async/Await 비동기 처리, 동적 DOM 제어",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
      },
      {
        name: "TypeScript",
        desc: "정적 타이핑 에러 방지, 인터페이스 기반 공통 타입 설계",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg"
      },
    ]
  },
  {
    category: "Frontend",
    skills: [
      {
        name: "React",
        desc: "Hooks 생명주기 관리, Custom Hook 로직 분리, Context API 상태 관리",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg"
      },
      {
        name: "Vue 3",
        desc: "Composition API 설계, SFC 구조 활용, 반응형 데이터 바인딩",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original.svg"
      },
    ]
  },
  {
    category: "Styling",
    skills: [
      {
        name: "Styled Components",
        desc: "Props 기반 동적 스타일링, 전역 테마 디자인 시스템",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/styledcomponents/styledcomponents-original-wordmark.svg"
      },
      {
        name: "Bootstrap",
        desc: "유틸리티 기반 레이아웃 구성, 빠른 프로토타이핑",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg"
      },
    ]
  },
  {
    category: "Backend",
    skills: [
      {
        name: "Node.js",
        desc: "RESTful API 설계, 미들웨어 에러 핸들링, JWT 인증 로직",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg"
      },
      {
        name: "Express",
        desc: "라우팅 및 컨트롤러 분리, 유지보수 최적화 서버 구조",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original-wordmark.svg"
      },
    ]
  },
  {
    category: "Database",
    skills: [
      {
        name: "MongoDB",
        desc: "NoSQL 데이터 모델링, Mongoose 스키마 설계, CRUD 구현",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original-wordmark.svg"
      },
      {
        name: "MySQL",
        desc: "관계형 ERD 설계, JOIN 복합 쿼리 작성, 쿼리 최적화",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg"
      },
    ]
  },
  {
    category: "DevOps & Tools",
    skills: [
      {
        name: "GitHub",
        desc: "Git-flow 브랜치 전략, PR 기반 협업 및 이슈 트래킹",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original-wordmark.svg"
      },
      {
        name: "Vite",
        desc: "빠른 개발 환경 구축, 프로젝트 번들링 최적화",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg"
      },
      {
        name: "Vercel",
        desc: "프론트엔드 자동 배포, CI/CD 및 도메인 관리",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original-wordmark.svg"
      },
    ]
  }
];

export default function Skills() {
  return (
    // 전체 스킬 섹션
    <section id="skills" className="py-32 w-full bg-[var(--background)]">
      {/* 최대 폭 제한 + 좌우 여백 */}
      <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-24">

        {/* 섹션 타이틀 */}
        <div className="mb-16 text-left group">
          <h2 className="text-4xl md:text-5xl font-black text-[var(--text)] tracking-tight">
            Tech <span className="gradient-text">Stack</span>
          </h2>
          <div className="mt-4 h-[2px] w-16 bg-gradient-to-r from-primary via-primary to-transparent transition-all duration-700 group-hover:w-64" />
        </div>

        {/* 카테고리 그리드 레이아웃 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-12">

          {/* 카테고리 반복 렌더링 */}
          {SKILL_DATA.map((group, idx) => (
            <div key={idx} className="flex flex-col">

              {/* 카테고리 제목 */}
              <h3 className="text-sm font-bold text-[var(--text-muted)] tracking-[0.25em] uppercase mb-8 
                             opacity-60 border-l-2 border-primary/40 pl-3">
                {group.category}
              </h3>

              {/* 스킬 리스트 */}
              <div className="flex flex-col gap-6">
                {group.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="group relative flex flex-col gap-2">

                    {/* 상단: 아이콘 + 기술명 */}
                    <div className="flex items-center gap-4 transition-transform duration-300 
                                    group-hover:-translate-y-1">
                      <div className="w-10 h-10 flex items-center justify-center p-1 
                                      bg-white/5 rounded-lg border border-white/10
                                      group-hover:border-primary/50 transition-colors">
                        <img
                          src={skill.icon}
                          alt={skill.name}
                          className="w-7 h-7 object-contain"
                        />
                      </div>

                      <span className="text-lg font-semibold text-[var(--text)] 
                                       group-hover:text-primary transition-colors">
                        {skill.name}
                      </span>
                    </div>

                    {/* 하단 설명 영역 */}
                    <div className="overflow-hidden">
                      <p
                        className="
                          text-[13px] md:text-base text-[var(--text-muted)] leading-relaxed

                          /* 모바일 기본 상태 */
                          opacity-100 max-h-40 translate-y-0 mt-2 pl-14

                          /* 데스크탑 기본 상태 (숨김) */
                          md:opacity-0 md:max-h-0 md:translate-y-2 md:mt-0

                          /* 데스크탑 hover 시 노출 */
                          md:group-hover:opacity-100
                          md:group-hover:max-h-20
                          md:group-hover:translate-y-0

                          transition-all duration-500 ease-out
                        "
                      >
                        {/* 설명 문장을 콤마(,) 기준으로 나눠 목록처럼 표시 */}
                        {skill.desc.split(',').map((text, index) => (
                          <span key={index} className="block">
                            • {text.trim()}
                          </span>
                        ))}
                      </p>
                    </div>

                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}