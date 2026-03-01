'use client'; // 이 컴포넌트는 브라우저에서 동작함

import { useEffect, useState } from "react";  // React Hook
import { ChevronUp } from "lucide-react";     // 아이콘 라이브러리

export default function TopButton() {
  const [isVisible, setIsVisible] = useState(false);  // 버튼이 보이는지 여부를 저장하는 상태

  // 컴포넌트가 마운트될 때 한 번 실행
  useEffect(() => {
    const toggleVisibility = () => {  // 스크롤 위치에 따라 버튼 표시 여부 결정
      if (window.scrollY > 300) {     // 현재 스크롤 위치가 300px을 넘으면 버튼 표시
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);  // 스크롤 이벤트 리스너 등록
    return () => window.removeEventListener("scroll", toggleVisibility);  // 컴포넌트 언마운트 시 이벤트 제거
  }, []);

  // 버튼 클릭 시 페이지 최상단으로 부드럽게 이동
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,             // 페이지 최상단
      behavior: "smooth", // 부드러운 스크롤 효과
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="
            fixed bottom-[72px] right-6 z-[100]
            flex h-10 w-10 items-center justify-center
            rounded-full
            bg-white dark:bg-[#1f2933]
            text-black dark:text-white
            shadow-lg
            transition-all duration-300
            hover:scale-110 active:scale-95
            cursor-pointer group
            border border-black/5 dark:border-white/5
          "
          aria-label="Scroll to top"
        >
          {/* 호버 시 아이콘이 살짝 위로 이동 */}
          <span className="transition-transform duration-300 group-hover:-translate-y-1">
            <ChevronUp size={20} />
          </span>
        </button>
      )}
    </>
  );
}