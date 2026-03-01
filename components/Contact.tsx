'use client'; // 이 컴포넌트는 브라우저에서 동작함

import { motion } from 'framer-motion';                   // 애니메이션 효과를 위한 라이브러리 불러옴
import { Mail, Copy, CheckCircle2 } from 'lucide-react';  // 아이콘 라이브러리
import { useState } from 'react';                         // React Hook

export default function Contact() {
  const [copied, setCopied] = useState(false);  // 이메일 복사 여부 상태
  const email = 'so0733@naver.com';

  const handleCopy = () => {                    // 이메일 주소 복사 핸들러
    navigator.clipboard.writeText(email);       // 클립보드에 이메일 복사
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);   // 2초 후 다시 기본 상태로 복귀
  };

  return (
    <section id="contact" className="py-24 px-6 overflow-hidden">
      {/* 전체 컨테이너 */}
      <motion.div
        /* 초기 상태: 아래 + 투명 */
        initial={{ opacity: 0, y: 50 }}
        /* 뷰포트 진입 시 */
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="mx-auto max-w-5xl relative group"
      >
        {/* 배경 글로우 효과 */}
        <div className="absolute -inset-1 rounded-[2.5rem] bg-gradient-to-r from-primary to-purple-600 opacity-20 blur-2xl group-hover:opacity-40 transition duration-1000" />

        {/* 메인 카드 영역 */}
        <div
          className="
            relative overflow-hidden
            rounded-[2rem]
            bg-[#0b1020]/90
            backdrop-blur-xl
            border border-white/10
            p-12
            text-center text-white
            shadow-2xl
          "
        >
          {/* 상단 섹션 라벨 */}
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="
              inline-block
              text-primary/80
              font-semibold
              tracking-[0.2em]
              uppercase
              text-xs
              mb-4
            "
          >
            Get in Touch
          </motion.span>

          {/* 메인 타이틀 */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-6 text-4xl font-extrabold md:text-6xl leading-tight"
          >
            함께 멋진 가치를 <br />
            <span className="gradient-text">Let’s Build It Together</span>
          </motion.h2>

          {/* 설명 문구 */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mb-10 text-lg text-gray-400 md:text-xl max-w-2xl mx-auto"
          >
            작은 디테일이 더 나은 경험을 만든다고 믿습니다.
            <br className="hidden md:block" />
            Feel free to reach out for projects, collaboration, or opportunities.
          </motion.p>

          {/* 버튼 영역 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            {/* 이메일 발송 */}
            <motion.a
              href={`mailto:${email}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="
                flex items-center gap-2
                rounded-full
                gradient-bg
                px-10 py-4
                text-lg font-bold text-white
                shadow-lg
                transition-shadow
                hover:shadow-primary/40
              "
            >
              <Mail size={20} />
              Send Message
            </motion.a>

            {/* 이메일 복사 */}
            <motion.button
              onClick={handleCopy}
              whileHover={{
                scale: 1.05,
                backgroundColor: 'rgba(255,255,255,0.15)',
              }}
              whileTap={{ scale: 0.95 }}
              className="
                flex items-center gap-2
                rounded-full
                border border-white/20
                bg-white/5
                px-10 py-4
                text-lg font-bold
                backdrop-blur-sm
                transition-colors
              "
            >
              {copied ? (
                <>
                  <CheckCircle2 size={20} className="text-green-400" />
                  <span className="text-green-400">
                    Email Copied
                  </span>
                </>
              ) : (
                <>
                  <Copy size={20} />
                  <span>Copy Address</span>
                </>
              )}
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}