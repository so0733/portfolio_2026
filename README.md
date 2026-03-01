# 🚀 Portfolio 2026

> **Next.js · TypeScript · Framer Motion 기반 인터랙티브 포트폴리오**  
> 가로 스크롤 레이아웃과 Shared Layout Animation으로 사용자 경험을 극대화한 개인 포트폴리오입니다.

---

## 🔗 Live Demo & Repository

- 📦 GitHub: https://github.com/so0733/portfolio_2026

---

## 📖 프로젝트 소개

**Portfolio 2026**은 단순한 이력 나열이 아닌,  
**“프론트엔드 개발자의 설계 역량과 UX 감각을 시각적으로 전달하는 것”**을 목표로 제작한 포트폴리오입니다.

- 세로 스크롤 대신 **가로 스크롤 기반 프로젝트 탐색**
- **Shared Layout Animation**을 활용한 카드 → 모달 전이
- 인터랙션 중심의 UI로 사용자 몰입도 강화

---

## ✨ 핵심 기능

- 가로 스크롤 기반 프로젝트 카드 UI
- Framer Motion `layoutId`를 활용한 모달 전환 애니메이션
- 모달 오픈 시 배경 스크롤 완전 차단
- 반응형 대응 (Desktop / Mobile)
- 컴포넌트 단위 애니메이션 분리 설계

---

## 🛠 기술 스택

### Frontend

- Next.js
- TypeScript
- Tailwind CSS
- Framer Motion

---

## 🧠 Technical Troubleshooting

### 가로 스크롤 환경의 모달 제어 및 레이아웃 전이 최적화

**문제**

- 가로 스크롤 구조에서 모달 활성화 시에도 배경 스크롤이 유지됨
- `layoutId` 전이 과정에서 부모 요소 스케일 변화로 텍스트 왜곡 발생

**해결**

- 모달 상태에 따라 `body` 스크롤을 제어하는 Lock 로직 구현
- 카드 배경과 텍스트 요소에 `layoutId`를 분리 적용하여
  글자 왜곡 없는 부드러운 확대·축소 전이 구현

---

## ▶️ 실행 방법

```bash
# 패키지 설치
npm install

# 개발 서버 실행
npm run dev
```
