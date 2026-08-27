# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

MBTI 공부법 연구소 — MBTI 성향 그룹(NT/NF/SJ/SP)별 공부법 소개와 10문항 자가진단을 제공하는 정적 콘텐츠 사이트.

## Design

- 라이트/다크 모드를 모두 지원한다. 기본값은 방문자의 시스템 설정(`prefers-color-scheme`)을 따르고, 헤더 우측의 토글 버튼(🌙/☀️)으로 명시적으로 전환하면 그 선택이 `localStorage`에 저장되어 이후 방문에도 유지된다.
- 라이트 모드: 크림 배경 + 보라 포인트 컬러. 다크 모드: 딥 퍼플톤 차콜 배경 + 밝은 보라 포인트 컬러로, 라이트 모드와 같은 색상 정체성(보라 액센트, 카드형 UI, 필 형태 버튼/태그)을 유지한다.
- 색상·타이포·라운드/섀도우 등 모든 디자인 토큰은 `theme.css`의 CSS 커스텀 프로퍼티(`--purple`, `--card`, `--text` 등)로 관리한다. 새 UI를 추가할 때도 하드코딩된 색상 대신 이 토큰을 사용해 다크 모드가 자동으로 적용되게 한다.
- Pretendard 폰트 (jsDelivr CDN 스타일시트로 로드, API 키 불필요).
- 모바일 반응형 (720px 기준 브레이크포인트, 헤더는 햄버거 메뉴로 전환).

## Rules

- 서버·API·키는 절대 사용하지 않는다 (정적 파일만). Pretendard 웹폰트처럼 정적 CDN 스타일시트를 불러오는 것은 예외로 허용한다.
- 파일이 300줄을 넘으면 분리를 먼저 제안할 것. (예: 공통 스타일은 `theme.css`/`base.css`/`cards.css`/`quiz.css`로 역할을 나눠 각 파일을 300줄 미만으로 유지 중.)
- CLAUDE.md 문서와 실제 사이트 디자인이 어긋나면, 사이트에 이미 구현된 디자인을 기준으로 판단하고 이 문서를 최신 상태로 업데이트한다.

## Architecture

정적 HTML/CSS/JS만으로 구성되어 있고 빌드 과정이 없다 (파일을 그대로 열거나 배포하면 끝).

**페이지**
- `index.html` — 서비스 소개 + 성향 그룹 카드 4개(NT/NF/SJ/SP) + 자가진단 CTA
- `nt.html` / `nf.html` / `sj.html` / `sp.html` — 그룹별 성향 설명, 유형별(4개) 공부법, 시험 꿀팁, 다른 그룹으로의 크로스 링크
- `test.html` — 공부 습관 10문항 자가진단. `quiz.js`가 그룹별 점수를 합산해 최고 점수 그룹을 판정하고, 결과 카드에 해당 그룹 페이지 이동 버튼과 공유 버튼을 보여준다. 공유는 `?result=<그룹>` 쿼리 파라미터로 딥링크되어, 이 파라미터가 있으면 퀴즈를 건너뛰고 바로 결과를 보여준다.

**스타일 (역할별로 분리, 각 페이지는 필요한 것만 로드)**
- `theme.css` — 라이트/다크 디자인 토큰(CSS 변수). 모든 페이지가 로드하며 `base.css`보다 먼저 링크한다.
- `base.css` — 리셋, 헤더/내비게이션(다크모드 토글 포함)/히어로/버튼/섹션/푸터 등 공통 레이아웃.
- `cards.css` — 그룹 카드(`index.html`), 유형 카드/시험 꿀팁/크로스 링크(그룹 페이지 4개).
- `quiz.css` — `test.html` 전용: 진행바, 문항/선택지, 결과 박스.

**스크립트**
- `script.js` — 모든 페이지 공통: 모바일 내비게이션 토글, 다크/라이트 모드 토글(버튼 클릭 시 `<html data-theme>` 갱신 + `localStorage` 저장).
- `quiz.js` — `test.html` 전용: 문항 데이터, 렌더링, 채점, 결과/공유 로직.
- 각 페이지 `<head>`에는 테마 깜빡임(FOUC) 방지를 위한 인라인 스크립트가 있다 — `localStorage`의 저장된 테마를 CSS 로드 전에 `<html>`의 `data-theme` 속성에 반영한다.

## Deploy

- GitHub: `shkhsxx/mbti_test` (public). `vibe` 모노레포와는 별개의 독립 git 저장소이다 — 이 폴더에서 `git` 명령을 실행하면 이 저장소를 대상으로 한다.
- Vercel 프로젝트(`shkhsxx/mbti_test`)가 위 GitHub 저장소와 연결되어 있어, `main` 브랜치에 푸시하면 자동으로 프로덕션에 재배포된다. 빌드 설정 없이 정적 파일을 그대로 서빙한다.
