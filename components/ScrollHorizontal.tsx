'use client'; // 이 컴포넌트는 브라우저에서 동작함

import { motion, useScroll, useTransform, useSpring } from 'framer-motion'; // 애니메이션 효과를 위한 라이브러리 불러옴
import { useRef, useEffect, useState } from 'react';  // React Hook
import Image from 'next/image'; // 이미지 최적화 컴포넌트

// 카드에 표시될 데이터 배열
const items = [
  {
    id: 1,
    color: "#3b82f6",
    label: "User-Centered Design",
    desc: "사용자의 문제를 기준으로 서비스를 설계합니다.",
    image: "/slide_img/coding_01.jpg"
  },
  { 
    id: 2,
    color: "#8b5cf6",
    label: "Clean Code",
    desc: "협업을 고려한 읽기 쉬운 코드를 작성합니다.",
    image: "/slide_img/coding_02.jpg"
  },
  {
    id: 3,
    color: "#06b6d4",
    label: "UX Optimization",
    desc: "더 나은 사용성을 위해 다양한 접근을 검증합니다.",
    image: "/slide_img/coding_03.jpg"
  },
  { 
    id: 4,
    color: "#f59e0b",
    label: "Continuous Learning",
    desc: "변화하는 트렌드를 빠르게 학습하고 적용합니다.",
    image: "/slide_img/coding_04.jpg"
  },
  {
    id: 5,
    color: "#ec4899",
    label: "Collaboration",
    desc: "적극적인 소통으로 팀과 함께 성장을 만듭니다.",
    image: "/slide_img/coding_05.jpg"
  },
]

export default function ScrollHorizontal() {
  const containerRef = useRef<HTMLDivElement>(null) // 전체 섹션을 감싸는 참조값
  const [isMobile, setIsMobile] = useState(false)   // 모바일 여부 상태 관리

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener("resize", checkMobile)  // 리사이즈 이벤트 등록
    return () => window.removeEventListener("resize", checkMobile)  
  }, [])

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  // 스크롤 0~1 범위를 가로 이동 거리 0% ~ -75% 범위로 변환
  const rawX = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]) 

  // 가로 이동에 물리적인 부드러움(스프링 효과)을 추가
  const x = useSpring(rawX, {
    stiffness: 60,
    damping: 20,
    mass: 0.8
  })

  return (
    <section
      ref={containerRef}
      className={`relative ${isMobile ? "h-auto" : "h-[300vh]"} bg-[var(--bg)]`}
    >
      {/* 가로로 움직이는 컨테이너 */}
      <div
        className={`
          sticky top-0 h-screen flex items-center
          ${isMobile
            ? "overflow-x-auto snap-x snap-mandatory scrollbar-hide py-10"
            : "overflow-hidden"}
        `}
      >
        <motion.div
          style={{ x: isMobile ? 0 : x }}
          className="flex gap-6 md:gap-12 px-6 md:px-[10vw]"
        >
          {items.map((item) => (
            <motion.div
              key={item.id}
              whileHover={isMobile ? {} : { scale: 1.03 }}
              className="
                relative flex-shrink-0
                w-[85vw] h-[500px]
                md:w-[600px] md:h-[600px]
                lg:w-[750px]
                rounded-3xl
                overflow-hidden
                group
                shadow-2xl
                border border-white/10
                snap-center
              "
            >
              {/* 배경 이미지 */}
              <Image
                src={item.image}
                alt={item.label}
                fill
                priority={item.id === 1}
                className="
                  object-cover
                  opacity-100
                  transition-transform
                  duration-1000
                  group-hover:scale-[1.1]
                "
              />
              
              {/* 이미지 위 오버레이 (그라데이션) */}
              <div
                className="
                  absolute inset-0
                  opacity-50
                  dark:opacity-80
                  transition-opacity
                  duration-500
                  group-hover:opacity-90
                "
                style={{
                  background: `linear-gradient(to bottom, transparent 30%, ${item.color}cc 100%)`,
                }}
              />

              {/* 텍스트 콘텐츠 영역 */}
              <div className="absolute bottom-10 left-8 right-8 md:bottom-12 md:left-12 z-10">
                <span className="
                  text-white/50
                  font-mono
                  text-base md:text-lg lg:text-xl
                  tracking-[0.3em]
                  uppercase
                  block
                  mb-3
                ">
                  0{item.id}
                </span>

                <h3 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tighter">
                  {item.label}
                </h3>

                <p className="text-white/90 font-light leading-relaxed max-w-md text-base md:text-xl">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}