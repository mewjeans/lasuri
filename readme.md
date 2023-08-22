# Lasuri Prototype
- 설명

## 목차
1. [FeatureDescription](#feature-description)
2. [Tech stack](#tech-stack)
3. [API 명세](#api-명세)
4. [협업 방법](#협업-방법)
5. [To Reviewers](#to-reviewers)
6. [코드 컨벤션](#코드-컨벤션)
7. [커밋 메시지 Emoji](#커밋-메시지-emoji)
8. [Schedule](#-schedule)
9. [Members](#-members)

## Feature Description

- 이런 이런 기능입니다
### Tech stack
Component          Technology
---                ---
Frontend           React 
Backend            Spring Boot 3.+, Java 17+
Security           -
Auth               -
Database           H2 Database, Sqlite
Persistence        JPA 
API Documentation  Swagger ui
WebServer          -
Client Build       npm, yarn, webpack
Server Build       gradle
App                flutter, ReactNative

# API 명세
- notion

# 협업 방법
1. Branching Strategy
PR을 통해 Feature 브랜치들을 master에 머지하고, 최종 배포할 시기가 되면 Admin 관리자가 master 브랜치를 Production 브랜치에 머지하여 배포하는 단순한 구조를 따릅니다.

2. 협업 과정
로컬에 Clone한 레포에서 Feature 브랜치를 생성하여 작업합니다.
개발이 끝났다면 다시 한번 원격 레포의 최신 커밋을 받아와줍니다.br
 체크아웃 하기 전, Feature 브랜치에서의 작업 내용을 커밋해야 합니다.

```powershell
$ git checkout develop
$ git pull origin develop
추가된 최신 커밋이 있다면 내가 작업한 Feature 브랜치를, 
새로운 커밋이 추가된 Develop 브랜치의 마지막 커밋으로 Rebase 합니다. (말그대로 base를 바꾼다는 뜻입니다)

$ git checkout Feature[브랜치명]
$ git rebase develop
충돌이 발생했다면, 에디터에서 충돌을 해결한 뒤 아래 명령어를 입력합니다.

$ git add .
$ git rebase --continue
이상이 없다면 Feature 브랜치를 push 합니다.

$ git push origin Feature[브랜치명]
Github에서 PR을 생성합니다. PR 시 나타나는 템플릿을 채워주세요.
```

## To Reviewers

- 이런 이런 점을 유의해주세요
Review 과정을 거칩니다.

Self Merge 해주세요.

Squash Merge되며, Merge된 Feature Branch는 자동 삭제됩니다.

로컬에서 Develop 브랜치로 체크아웃한 뒤 Pull하고, 새로운 Feature 브랜치로 분기하여 다음 작업을 진행해주세요.


# 코드 컨벤션
구분                 Javascript, Java, Dart, flutter
---                  ---
PascalCase           클래스, Exception
camelCase            변수, 함수, 메소드
UPPER_CASE           상수변수
Boolean Type         is_prefix(ex  is_human = True 사람인지 아닌지)
최대 tab depth의 제한   최대 depth는 4로 제한
주석 규칙              로 적고, 그 이상은  로 주석을 작성

# 커밋 메시지 Emoji
이모지(Emoji)	    Description
---             ---
🎨              코드의 형식  구조를 개선 할 때
📰              새 파일을 만들 때
📝              사소한 코드 또는 언어를 변경할 때
🐎              성능을 향상시킬 때
📚              문서를 쓸 때
🐛             	버그 reporting할 때, @FIXME 주석 태그 삽입
🚑             	버그를 고칠 때
🐧             	리눅스에서 무언가를 고칠 때
🍎             	Mac OS에서 무언가를 고칠 때
🏁             	Windows에서 무언가를 고칠 때
🔥             	코드 또는 파일 제거할 때 , @CHANGED주석 태그와 함께
🚜             	파일 구조를 변경할 때 . 🎨과 함께 사용
🔨             	코드를 리팩토링 할 때
☔️             	테스트를 추가 할 때
🔬             	코드 범위를 추가 할 때
💚             	CI 빌드를 고칠 때
🔒             	보안을 다룰 때
⬆️             	종속성을 업그레이드 할 때
⬇️             	종속성을 다운 그레이드 할 때
⏩             	이전 버전  지점에서 기능을 전달할 때
⏪             	최신 버전  지점에서 기능을 백 포트 할 때
👕             	linter  strict  deprecation 경고를 제거 할 때
💄             	UI  style 개선시
♿️             	접근성을 향상시킬 때
🚧             	WIP (진행중인 작업)에 커밋, @REVIEW주석 태그와 함께 사용
💎             	New Release
🔖             	버전 태그
🎉             	Initial Commit
🔈             	로깅을 추가 할 때
🔇             	로깅을 줄일 때
✨             	새로운 기능을 소개 할 때
⚡️             	도입 할 때 이전 버전과 호환되지 않는 특징, @CHANGED주석 태그 사용
💡             	새로운 아이디어, @IDEA주석 태그
🚀             	배포  개발 작업 과 관련된 모든 것
🐘             	PostgreSQL 데이터베이스 별 (마이그레이션, 스크립트, 확장 등)
🐬             	MySQL 데이터베이스 특정 (마이그레이션, 스크립트, 확장 등)
🍃             	MongoDB 데이터베이스 특정 (마이그레이션, 스크립트, 확장 등)
🏦             	일반 데이터베이스 별 (마이그레이션, 스크립트, 확장명 등)
🐳             	도커 구성
🤝             	파일을 병합 할 때

## 📋 Schedule
```
📌 
 1주일  

```

## 🏃🏻 Members
 [a href=httpsgithub.comKateiscodingimg src=httpsavatars.githubusercontent.comu120708446v=4 width=90a]()  [a href=httpsgithub.comseung9526img src=httpsavatars.githubusercontent.comu38849788v=4 width=90a]()  [a href=httpsgithub.comSecludorimg src=httpsavatars.githubusercontent.comu129930239v=4 width=90a]() 
 ----------------------------------------------------------  ----------------------------------------------------------  ----------------------------------------------------------  
              [김승현](httpsgithub.comKateiscoding)                           [성경민](httpsgithub.comseung9526)                           [오주영](httpsgithub.comSecludor)               
br
