'use client'; // 이 컴포넌트는 브라우저에서 동작함

import { useEffect, useState } from 'react';  // React Hook
import { motion, useSpring, useMotionValue } from 'framer-motion';  // 애니메이션 효과를 위한 라이브러리 불러옴

export default function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false);  // 버튼이나 링크 등 클릭 가능한 요소 위에 마우스가 있는지 여부
  const [isClicked, setIsClicked] = useState(false);  // 사용자가 마우스 왼쪽 버튼을 누르고 있는지 여부

  /* 커서의 실제 X, Y 좌표 (초기값은 화면 밖) */
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  /* 커서 이동을 부드럽게 만들기 위한 설정 */
  const springConfig = {
    damping: 25,    // 흔들림 감소 (값이 클수록 빨리 멈춤)
    stiffness: 250  // 탄성 (값이 클수록 빠르게 따라옴)
  };

  /* Spring이 적용된 커서 좌표 */
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  const CURSOR_COLOR = '#E8DCC8'; // 커서 색상

  useEffect(() => {
    /* 마우스 이동 시 커서 좌표 갱신 */
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    /* 마우스 클릭 상태 처리 */
    const handleMouseDown = () => setIsClicked(true);
    const handleMouseUp = () => setIsClicked(false);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;

      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('.card') ||
        target.closest('button')
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    /* 브라우저 윈도우 전체에 이벤트 리스너 등록 */
    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mouseover', handleMouseOver);

    /* 컴포넌트가 사라질 때 메모리 누수 방지를 위해 이벤트 제거 */
    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [cursorX, cursorY]);

  return (
    <>
      {/* 바깥쪽 원 */}
      <motion.div
        className="fixed top-0 left-0 w-6 h-6 rounded-full pointer-events-none z-[9999] mix-blend-difference"
        style={{
          translateX: cursorXSpring,
          translateY: cursorYSpring,
          left: -12,
          top: -12,
          border: `1px solid ${CURSOR_COLOR}`,
        }}
        animate={{
          scale: isClicked ? 0.8 : isHovered ? 2.0 : 1,
          backgroundColor: isHovered ? CURSOR_COLOR : 'transparent',
        }}
      />

      {/* 안쪽 원 */}
      <motion.div
        className="fixed top-0 left-0 w-1 h-1 rounded-full pointer-events-none z-[9999]"
        style={{
          translateX: cursorX,
          translateY: cursorY,
          left: -2,
          top: -2,
          backgroundColor: CURSOR_COLOR,
        }}
        animate={{
          opacity: isHovered ? 0 : 1,
        }}
      />
    </>
  );
}