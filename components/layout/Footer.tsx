'use client'; // 이 컴포넌트는 브라우저에서 동작함

import { Github, Send } from 'lucide-react';  // 아이콘 라이브러리

export default function Footer() {
  const currentYear = new Date().getFullYear(); // 현재 연도를 자동으로 계산

  /* Notion 커스텀 아이콘 */
  const NotionIcon = () => (
    <span
      className="
        flex items-center justify-center
        h-5 w-5
        rounded-[2px]
        border-2 border-current
        text-[12px] font-black
        leading-none
        select-none
      "
    >
      N
    </span>
  );

  /* 소셜 링크 데이터 */
  const socialLinks = [
    {
      href: "https://github.com/so0733",
      icon: <Github size={20} />,
      label: "GitHub",
    },
    {
      href: "https://www.notion.so/so0733/Ardeo-Shop-Project-2b8bc31f9013805dbcdae7089c4f0124?source=copy_link",
      icon: <NotionIcon />,
      label: "Notion",
    },
    {
      href: "mailto:so0733@naver.com",
      icon: <Send size={20} />,
      label: "Email",
    },
  ];

  return (
    <footer className="py-12 text-center border-t border-border bg-white dark:bg-[#0b1020]">
      {/* 소셜 아이콘 버튼 영역 */}
      <div className="mb-8 flex justify-center gap-6">
        {socialLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.label}
            className="
              group relative
              flex h-14 w-14 items-center justify-center
              overflow-hidden
              rounded-full
              border border-border/50
              bg-bg-soft
              text-text-muted
              transition-all duration-500 ease-out

              hover:-translate-y-1.5
              hover:border-primary
              hover:shadow-[0_0_30px_rgba(59,130,246,0.5)]
              dark:hover:shadow-[0_0_40px_rgba(59,130,246,0.4)]

              active:scale-95
            "
          >
            <span
              className="
                absolute inset-0 z-0
                translate-y-full
                bg-white
                transition-transform duration-500
                cubic-bezier(0.4, 0, 0.2, 1)
                group-hover:translate-y-0
              "
            />

            <span
              className="
                relative z-10
                transition-all duration-500
                group-hover:text-primary
                group-hover:scale-110
              "
            >
              {link.icon}
            </span>
          </a>
        ))}
      </div>

      {/* 푸터 텍스트 영역 */}
      <div className="space-y-2">
        <p className="text-text-muted dark:text-white/90 text-sm font-medium tracking-wide">
          © {currentYear} So Cheol-Hyeon. All rights reserved.
        </p>
      </div>
    </footer>
  );
}