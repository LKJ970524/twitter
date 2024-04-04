# React Twitter

- React, Firebase를 이용한 실시간 트위터 프로젝트 입니다.

<br />

# 프로젝트 목표

- REACT 앱의 구조와 라우팅을 이해하고, 직접 프로젝트를 설계한다.
- Firebase의 심화 개념을 익히고 실시간 데이터 처리 및 이미지 업로드를 실습한다.
- Firebase의 OAuth를 이용한 SNS 로그인 구현을 적용한다.
- 전역 상태 관리의 필요성과 recoil 사용법을 이해한다.
- 미디어 쿼리 및 scss 개념을 알아보고 직접 스타일링을 적용해본다.
- Vercel을 이용해 배포를 진행해본다.

# 프로젝트 설명

## 주요 기능

- 상태관리와 실시간 데이터 업데이트 이해
- 실시간 업데이트와 푸시 알림
- 팔로우 및 소셜 기능
- 타임라인 및 필터링

## 앱 구조

- (create-react-app) SPA
- 반응형 웹
- 미디어쿼리

## 상태관리

- Recoil, React Context API
- 권한관리
- 다국어처리 기능

## 애니메이션 & 스타일링

- SCSS 사용
- 모바일 대응 스타일링 (미디어 쿼리)

## 배포

- Vercel (수동 배포)

## 컴포넌트

- 레이아웃, 폼, 게시글 박스, 프로필, 탭 등

## API

- Firebase storage를 이용한 이미지 업로드
- Firebase auth를 이용한 사용자 인증
- firestore를 이용한 실시간 데이터 동기화 & 저장 & 관리 (onSnapshot 동기화 개념 사용)

## 사용 스택

- React
- Firebase(로그인, 보안, 통신)
- SCSS
- Recoil
- Vercel

## 기타 학습 개념

- 폴더 구조
- CRA 이용 프로젝트 세팅
- React hooks(useEffect, useState, useContext, useCallback)
- React-router-dom 라우터
- Recoil를 이용한 전역 상태관리
- SCSS 스타일링

<br />

# 구현 기능

1. 홈 타임라인

- firestore 실시간 트위터 보여주기
- React 컴포넌트로 트위터 표시

2. 트윗 작성/편집 페이지

- 이미지 업로드 CRUD
- 글 CRUD

3. SNS 로그인/회원가입 기능

- 기본 로그인/회원가입 기능
- SNS 로그인/회원가입 기능 (OAuth)

4. 사용자 개별 프로필 페이지

- 마이페이지와 같은 프로필 페이지 작업
- 좋아요 게시글 모아보기
- 프로필 이미지 수정

5. 해시태그 생성 및 해시태그 검색 페이지

- 글 작성 시 해시태그 생성 / 수정 기능
- 해시태그만 모아서 검색해볼 수 있는 탭 구현

6. Recoil를 이용한 전역 상태관리

- 다국어 처리 기능 작업

## 그 외 기능

1. 다국어 처리
2. 좋아요
3. 댓글
4. 팔로잉/팔로우
5. 반응형 웹

# 프로젝트 설계

## 다이아그램

<img alt='twiiter 설계' src='https://velog.velcdn.com/images/dlrbwjd97/post/dd4c6bc0-c74b-4633-aa4f-5db7fa9e0257/image.png' width=450px />

## 라우팅

```
라우팅 설계를 끝내는대로 업데이트 하겠습니다.
```

## 폴더 구조

<img alt='폴더 구조' src='' width=450px />

# 트러블 슈팅

# 느낀점

# 프로젝트 사용법

- 패키지 설치

  ```
  npm i 또는 npm install
  yarn install
  ```

- 클라이언트 실행
  ```
  npm run start
  yarn start
  ```
