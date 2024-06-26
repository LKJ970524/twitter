# React Twitter

- React, Firebase를 이용한 실시간 트위터 클론코딩 프로젝트 입니다.
- (주의) 패스트캠퍼스 강의를 통해 클론코딩 및 학습을 할 예정이니 하나씩 천천히 배우고 올릴 예정이니 많이 늦을수 있습니다.
- 개인 프로젝트이기 때문에 commit message와 pr, branch의 규칙을 따로 정하지 않았습니다. 참고 부탁드리겠습니다.
- velog에 순차적으로 어떻게 구현하고 코드를 작성했는지 자세하게 적혀있습니다. [Velog](https://velog.io/@dlrbwjd97/series/twitter)
- 배포 : Vercel
- [배포 주소](https://twitter-mu-one.vercel.app/) <= 클릭시 배포사이트로 넘어갑니다.

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
- FireStore를 이용한 실시간 데이터 동기화 & 저장 & 관리 (onSnapshot 동기화 개념 사용)

## 사용 스택

- React
- TypeScript
- Firebase(로그인, 보안, 통신)
- SCSS
- Recoil(Facebook에서 개발한 REACT의 상태관리 라이브러리)
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

- FireStore 실시간 트위터 보여주기
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

<img alt='twitter 설계' src='https://velog.velcdn.com/images/dlrbwjd97/post/dd4c6bc0-c74b-4633-aa4f-5db7fa9e0257/image.png' width=450px />

## 라우팅

```
export default function Router({ isAuthenticated }: RouterProps) {
  return (
    <Routes>
      {isAuthenticated ? (
        <> {/* 로그인 되었을 때 */}
          <Route path="/" element={<HomePage />} /> {/* 메인페이지 */}
          <Route path="/posts/:id" element={<PostDetail />} /> {/* 상세게시글 */}
          <Route path="/posts/edit/:id" element={<PostEdit />} /> {/* 게시글 수정 */}
          <Route path="/profile" element={<Profile />} /> {/* 프로필 */}
          <Route path="/profile/edit" element={<ProfileEdit />} /> {/* 프로필 수정 */}
          <Route path="/notifications" element={<Notifications />} /> {/* 알림 페이지 */}
          <Route path="/search" element={<Search />} /> {/* 검색페이지 */}
          <Route path="*" element={<Navigate replace to="/" />} /> {/* 잘못된 페이지 이동시 메인페이지로 이동 */}
        </>
      ) : (
        <> {/* 비로그인 상태일때 */}
          <Route path="/users/login" element={<Login />} /> {/* 로그인 페이지 */}
          <Route path="/users/signup" element={<SignUp />} /> {/* 회원가입 페이지 */}
          <Route path="*" element={<Navigate replace to="/users/login" />} /> {/* 잘못된 페이지 이동시 로그인 페이지로 이동 */}
        </>
      )}
    </Routes>
  );
}
```

## 폴더 구조

<img alt='폴더 구조' src='https://github.com/LKJ970524/twitter/assets/115642699/f071d21e-6040-4f57-97b6-59c948037089' width=180px />

# 트러블 슈팅

이미지 삭제 코드를 넣는 도중 
<img alt='트러블 슈팅' src='https://github.com/LKJ970524/twitter/assets/115642699/2bcf0654-b01d-49c6-a8ca-17d06ad0fdf9' width=700px />
해당 error가 발생하게 되었습니다.
이 error는 이미지 업로드 부분의 삭제에서 처음의 user photoUrl을 user가 업로드한 이미지가 아닌경우에 error가 나타나는 문제인 것으로 확인 되었습니다.
해당 error의 문제를 파악하고 해결방법을 찾기위해 fireStore를 찾아보던 도중 다운로드 imageUrl은 항상 `https://firebasestorage.googleapis.com`으로 시작을 하는것을 발견했습니다. 따라서 해당 값이 있는 Url은 삭제가 가능하고 해당 값이 없는 Url은 삭제가 안되는 것이었습니다. 그래서 `https://firebasestorage.googleapis.com`이라는 `string`을 포함하는 이미지는 삭제하고 포함이 안된 string은 삭제가 안되는 방향으로 문제를 해결하려 합니다.

#### 기존 코드
```tsx
      if (user?.photoURL) {
        const imageRef = ref(storage, user?.photoURL);
        if (imageRef) {
          await deleteObject(imageRef).catch((error) => {
            console.log(error);
          })
        }
      }
```

#### 변경 코드
```tsx
// photoURL이 있는 경우와 photoURL이 STORAGE_DOWNLOAD_URL_STR을 includes하는 경우에만 imageRef를 가져오고, imageRef의 object를 삭제하도록 변경했습니다.
const STORAGE_DOWNLOAD_URL_STR = "https://firebasestorage.googleapis.com";

      if (
        user?.photoURL && user?.photoURL?.includes(STORAGE_DOWNLOAD_URL_STR)
      ) {
        const imageRef = ref(storage, user?.photoURL)
        if (imageRef) {
          await deleteObject(imageRef).catch((error) => {
            console.log(error);
          })
        }
      }
```

# 느낀점
- recoil로 전역 상태 관리하는 방법을 어렴풋하게 알고있었지만 제대로 사용해보는것은 이번이 처음이었습니다. 처음 배우는것은 확실히 어렵지만 새로운 것을 사용해보고 성취감을 느끼는 것이 정말 뿌듯하고 뜻깊은 프로젝트 기간이었습니다. 이번 프로젝트도 고생했고 다음프로젝트도 화이팅!!

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
