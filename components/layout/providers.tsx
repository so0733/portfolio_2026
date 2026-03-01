'use client'; // 이 컴포넌트는 브라우저에서 동작함

import { ThemeProvider } from 'next-themes';  // 다크 모드/라이트 모드를 쉽게 구현하게 돕는 라이브러리
import { ReactNode, useEffect, useState } from 'react'; // React Hook

export function Providers({ children }: { children: ReactNode }) {
  const [mounted, setMounted] = useState(false);  // 컴포넌트가 브라우저에 "마운트 되었는지" 확인하기 위한 상태

  // useEffect는 브라우저에서만 실행됨 ("지금은 클라이언트 환경이다")
  useEffect(() => {
    setMounted(true);
  }, []);

  // 아직 mounted === false 인 경우 children만 먼저 렌더링
  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </ThemeProvider>
  );
}