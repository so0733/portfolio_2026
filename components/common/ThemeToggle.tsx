'use client'; // 이 컴포넌트는 브라우저에서 동작함

import { useTheme } from 'next-themes'; // 현재 설정된 테마 정보를 읽어옴
import { useEffect, useState } from 'react';  // React Hook

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);  // 컴포넌트가 브라우저에 "마운트 되었는지" 확인하기 위한 상태

  // useEffect는 브라우저에서만 실행됨
  useEffect(() => {
    setMounted(true);
  }, []);

  // 아직 mounted === false 인 경우 렌더링하지 않음
  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}

      className="
        fixed bottom-6 right-6 z-[100]
        flex h-10 w-10 items-center justify-center
        rounded-full
        bg-white dark:bg-[#1f2933]
        shadow-lg
        transition-all
        hover:scale-110 active:scale-95
        cursor-pointer group
      "
      aria-label="Toggle Theme" /* 스크린 리더용 접근성 라벨 */
    >
      <span className="text-lg transition-transform duration-300 group-hover:rotate-12">
        {theme === 'dark' ? '☀️' : '🌙'}
      </span>
    </button>
  );
}