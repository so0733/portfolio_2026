'use client'; // 이 컴포넌트는 브라우저에서 동작함

import { useState } from 'react'; // React Hook
import { Menu, X, User, Code2, Folder, Mail } from 'lucide-react';  // 아이콘 라이브러리
import { motion, AnimatePresence } from 'framer-motion';  // 모바일 메뉴 애니메이션을 위한 라이브러리

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);  // 모바일 메뉴 오픈 여부 상태

  const menuItems = [ // 네비게이션 메뉴 데이터
    { href: '#about', label: 'About', icon: User },
    { href: '#skills', label: 'Skills', icon: Code2 },
    { href: '#projects', label: 'Projects', icon: Folder },
    { href: '#contact', label: 'Contact', icon: Mail },
  ];

  return (
    <nav
      className="
        fixed top-0 left-0 right-0 z-50
        backdrop-blur-2xl
        bg-white/15 dark:bg-[#0b1020]/60
        border-b border-white/30 dark:border-white/10
        shadow-none dark:shadow-sm
      "
    >
      {/* 상단 네비게이션 바 컨테이너 */}
      <div
        className="
          mx-auto
          flex items-center justify-between
          max-w-7xl
          px-6 md:px-10 lg:px-16
          py-5
        "
      >
        {/* 로고 영역 */}
        <a
          href="#"
          className="
            text-3xl font-bold tracking-widest
            gradient-text
            hover:opacity-80 transition-opacity
          "
        >
          S.C.H
        </a>

        {/* 데스크탑 메뉴 */}
        <ul className="hidden md:flex items-center gap-8 text-lg font-medium">
          {menuItems.map((item) => (
            <li
              key={item.href}
              className="relative group"
            >
              {/* 메뉴 링크 */}
              <a
                href={item.href}
                className="
                  text-black/60 hover:text-black
                  dark:text-white/80 dark:hover:text-white
                  transition-colors
                "
              >
                {item.label}
              </a>

              {/* Hover 시 나타나는 하단 그라데이션 라인 */}
              <span
                className="
                  absolute -bottom-1 left-0
                  h-[2px] w-0
                  bg-gradient-to-r from-primary to-purple-500
                  transition-all duration-300
                  group-hover:w-full
                "
              />
            </li>
          ))}
        </ul>

        {/* 모바일 햄버거 버튼 */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="
              text-black dark:text-white
              focus:outline-none
              z-[60]
            "
            aria-label="Toggle mobile menu"
          >
            {/* 메뉴 상태에 따라 아이콘 전환 */}
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* 모바일 메뉴 영역 */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="
                fixed inset-0 z-40
                bg-black/40
                backdrop-blur-sm
                md:hidden
              "
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />

            {/* 모바일 메뉴 카드 */}
            <motion.div
              className="
                fixed top-24 left-1/2 z-50
                w-[90%]
                -translate-x-1/2
                md:hidden
              "
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            >
              <ul
                className="
                  rounded-3xl
                  bg-white/95 dark:bg-[#0e1328]/95
                  backdrop-blur-2xl
                  border border-black/5 dark:border-white/10
                  shadow-2xl
                  p-4
                  flex flex-col gap-2
                "
              >
                {menuItems.map(({ href, label, icon: Icon }) => (
                  <motion.li
                    key={href}
                    whileTap={{ scale: 0.97 }}
                  >
                    {/* 메뉴 클릭 시 자동으로 닫힘 */}
                    <a
                      href={href}
                      onClick={() => setIsOpen(false)}
                      className="
                        flex items-center gap-4
                        px-5 py-4
                        rounded-2xl
                        text-lg font-medium
                        text-black/70 dark:text-white/80
                        transition-all
                        hover:bg-black/5 dark:hover:bg-white/10
                      "
                    >
                      {/* 섹션 아이콘 */}
                      <Icon
                        size={22}
                        className="text-primary opacity-80"
                      />
                      {label}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}