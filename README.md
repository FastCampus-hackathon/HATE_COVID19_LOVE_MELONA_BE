# HATE_COVID19_LOVE_MELONA API SERVER

![merona](https://user-images.githubusercontent.com/94885534/155251519-14480c93-5c00-42a5-ae3e-4ea74914831c.png)

[모바일 페이지 체험하기](https://dreamy-murdock-5f5c4c.netlify.app)

## GET /hospital/list

서울시 호흡기 진료 병원 리스트

| name     | type    | Desc            |
| -------- | ------- | --------------- |
| createAt | String! | Api Create Date |
| length   | Number! | Data Length     |
| data     | Array!  | Data            |

| name      | type     | Desc                                    |
| --------- | -------- | --------------------------------------- |
| address   | String!  | 병.의원 주소                            |
| name      | String!  | 병.의원 이름                            |
| subject   | String!  | 진료과                                  |
| isPcr     | Boolean! | PCR 여부                                |
| isRat     | Boolean! | RAT 여부 (신속항원검사)                 |
| category  | String!  | 종합병원 / 병원 / 의원                  |
| isClinic  | Boolean! | 호흡기전담클리닉 여부                   |
| tel       | String!  | 전화번호                                |
| longitude | Float!   | 경도                                    |
| Latitude  | Float!   | 위도                                    |
| isContact | Boolean! | 전화상담 여부                           |
| status    | String!  | 진료중/진료마감 혹은 '정보없음'         |
| week      | String!  | 평일 영업시간 혹은 '정보없음'           |
| sat       | String!  | 토요일 영업시간, '휴무' 또는 '정보없음' |
| sun       | String!  | 일요일 영업시간, '휴무' 또는 '정보없음' |
|           |          |                                         |

---

## GET /search/lat/lng

Request : search/:latitude/:longitude

현재 위치의 좌표를 요청값으로 보내서 가장 가까운 병원 순으로 응답 받음.

| name     | type    | Desc            |
| -------- | ------- | --------------- |
| createAt | String! | Api Create Date |
| length   | Number! | Data Length     |
| data     | Array!  | Data            |

| name     | type    | Desc              |
| -------- | ------- | ----------------- |
| name     | String! | 병.의원 이름      |
| subject  | String! | 소아청소년과      |
| address  | String! | 주소              |
| distance | String! | 거리, 문자열 변환 |

---

## 사용 API

1. 건강보험심사평가원_코로나19 전화상담 병의원 정보
2. 건강보험심사평가원_의료기관별상세정보서비스
3. 건강보험심사평가원_호흡기 전담클리닉 운영 의료기관 정보
4. 건강보험심사평가원_호흡기 진료 지정 의료기관 정보서비스

---

```json
{
  "createAt": "2022-02-22T02:42:02.920Z",
  "length": 4,
  "data": [
    {
      "address": "서울특별시 강북구 도봉로 190 (미아동, 비전빌딩)",
      "name": "이윤식이비인후과의원",
      "isPcr": false,
      "isRat": true,
      "category": "의원",
      "isClinic": false,
      "tel": "02-945-2323",
      "longitude": 127.0270001,
      "latitude": 37.6258982,
      "isContact": true,
      "status": "진료마감",
      "week": "09:00 ~ 18:30",
      "sat": "09:00 ~ 14:00",
      "sun": "휴무"
    },
    {
      "address": "서울특별시 서초구 동작대로 118 3층 301호~303호 (방배동, 방배동예다인프라자빌딩)",
      "name": "지에프소아청소년과의원",
      "isPcr": false,
      "isRat": true,
      "category": "의원",
      "isClinic": false,
      "tel": "02-522-5119",
      "longitude": 126.9828023,
      "latitude": 37.4870229,
      "isContact": false,
      "status": "진료마감",
      "week": "09:00 ~ 18:00",
      "sat": "09:00 ~ 16:00",
      "sun": "10:00 ~ 16:00"
    },
    {
      "address": "서울특별시 강서구 공항대로 164 류마타워 3층 305호 (마곡동)",
      "name": "마곡코엔이비인후과의원",
      "isPcr": false,
      "isRat": true,
      "category": "의원",
      "isClinic": false,
      "tel": "02-2664-5075",
      "longitude": 126.8255148,
      "latitude": 37.5593259,
      "isContact": false,
      "status": "진료마감",
      "week": "09:00 ~ 19:00",
      "sat": "09:00 ~ 13:00",
      "sun": "휴무"
    },
    {
      "address": "서울특별시 구로구 새말로 15 2~9층 (구로동, 삼전솔하임)",
      "name": "의료법인 우리아이들 의료재단 우리아이들병원",
      "isPcr": true,
      "isRat": true,
      "category": "병원",
      "isClinic": true,
      "tel": "02-858-0100",
      "longitude": 126.8824677,
      "latitude": 37.5021356,
      "isContact": true,
      "status": "진료마감",
      "week": "09:00 ~ 22:00",
      "sat": "09:00 ~ 17:00",
      "sun": "09:00 ~ 17:00"
    }
  ]
}
```
