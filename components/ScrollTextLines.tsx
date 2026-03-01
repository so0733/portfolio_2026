'use client'; // 이 컴포넌트는 브라우저에서 동작함

import React from 'react';              // React 라이브러리
import { motion } from 'framer-motion'; // 애니메이션 효과를 위한 라이브러리 불러옴

// ScrollLine 컴포넌트의 props 타입 정의
interface ScrollLineProps {
  items: string[];                 // 화면에 흘러갈 텍스트 배열
  direction?: "left" | "right";    // 이동 방향
  speed?: number;                  // 애니메이션 속도
}

// 한 줄의 텍스트를 무한 스크롤시키는 컴포넌트
const ScrollLine: React.FC<ScrollLineProps> = ({
  items,
  direction = "left", // 기본값 = 왼쪽
  speed = 20,
}) => {

  const duplicatedItems = [...items, ...items, ...items]; // 무한 스크롤을 자연스럽게 만들기 위해 아이템을 여러 번 복제  
  const isLeft = direction === "left";                    // 왼쪽 이동인지 오른쪽 이동인지 판별

  return (
    // 전체 컨테이너
    <div className="relative w-full overflow-hidden">      
      {/* 왼쪽 페이드 효과 */}
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 
                      bg-gradient-to-r from-background to-transparent" />

      {/* 오른쪽 페이드 효과 */}
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 
                      bg-gradient-to-l from-background to-transparent" />

      {/* 텍스트가 실제로 움직이는 영역 */}
      <div className="flex overflow-hidden whitespace-nowrap py-6">
        
        {/* 이동 애니메이션 */}
        <motion.div
          className="flex"

          animate={{
            x: isLeft ? [0, -1000] : [-1000, 0],
          }}

          transition={{
            duration: speed,   // 이동하는 데 걸리는 시간
            repeat: Infinity,  // 무한 반복
            ease: "linear",    // 일정한 속도로 이동
          }}
        >
          {/* 텍스트 아이템 렌더링 */}
          {duplicatedItems.map((item, idx) => {
            const isOutline = idx % 2 !== 0;  // 짝수/홀수 인덱스로 스타일을 다르게 주기 위한 변수

            return (
              <span
                key={idx} // React에서 리스트 렌더링 시 필수
                className={`
                  px-8 
                  text-5xl 
                  font-black 
                  uppercase 
                  md:text-7xl 
                  transition-colors 
                  duration-300
                  ${isOutline ? "text-transparent" : "text-foreground"}
                `}
                style={{
                  WebkitTextStroke: isOutline
                    ? "1px var(--text)"
                    : "none",
                }}
              >
                {item}
              </span>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

// 여러 줄의 스크롤 텍스트를 모아둔 컴포넌트
const ScrollTextLines: React.FC = () => {

  // 각 줄마다 표시할 기술 스택 텍스트
  const line1 = ["HTML5", "CSS3", "JavaScript", "TypeScript"];
  const line2 = ["React", "Vue 3", "Styled-Components", "Bootstrap"];
  const line3 = ["Node.js", "Express", "MongoDB", "MySQL"];
  const line4 = ["GitHub", "Vite", "Vercel"];

  return (
    <section className="w-full overflow-hidden py-20">
      <div className="flex flex-col gap-4">
        
        {/* 왼쪽 → 오른쪽 방향 */}
        <ScrollLine items={line1} direction="left" speed={26} />

        {/* 오른쪽 → 왼쪽 방향 */}
        <ScrollLine items={line2} direction="right" speed={30} />

        <ScrollLine items={line3} direction="left" speed={24} />
        <ScrollLine items={line4} direction="right" speed={28} />
      </div>
    </section>
  );
};

export default ScrollTextLines;