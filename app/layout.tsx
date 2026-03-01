import type { Metadata } from "next"; // Next.js 메타데이터 타입 불러오기
import "./globals.css";               // 전체에 적용되는 전역 스타일 불러오기

import { Providers } from "@/components/layout/providers";    // 전역 상태/테마 Provider
import CustomCursor from "@/components/common/CustomCursor";  // 커스텀 마우스 커서
import Navbar from "@/components/layout/Navbar";              // 상단 고정 네비게이션
import ThemeToggle from "@/components/common/ThemeToggle";    // 다크/라이트 모드 전환 버튼
import TopButton from "@/components/common/TopButton";        // 스크롤 상단 이동 버튼

export const metadata: Metadata = { // 페이지 기본 메타데이터 설정
  title: "Portfolio 2026",
  description:
    "Aspiring developer portfolio focused on clean architecture, performance optimization, and continuous growth.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body>
        <Providers>
          {/* 커스텀 커서 */}
          <CustomCursor />
          
          {/* 상단 네비게이션 바 */}
          <Navbar />

          {/* 메인 콘텐츠 영역 */}
          <main className="pt-20">{children}</main>

          {/*스크롤 맨 위로 이동 버튼 */}
          <TopButton />

          {/* 다크 / 라이트 모드 전환 버튼 */}
          <ThemeToggle />
        </Providers>
      </body>
    </html>
  );
}
