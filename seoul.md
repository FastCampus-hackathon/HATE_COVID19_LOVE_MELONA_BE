# 서울특별시 코로나19 자치구별 확진자 발생동향

- 유형 : REST

- 포맷 : JSON

- 트래픽 : 1000

---

## Request Parameter

| 변수명 | 타입 | 변수설명 | 값설명 |
|---|---|---|---|
|KEY | String(필수) | 인증키 | OpenAPI 에서 발급된 인증키
|TYPE | String(필수) | 요청파일타입 | xml : xml, xml파일 : xmlf, 엑셀파일 : xls, json파일 : json
|SERVICE | String(필수) | 서비스명 | TbCorona19CountStatusJCG
|START_INDEX | INTEGER(필수) | 요청시작위치 | 정수 입력 (페이징 시작번호 입니다 : 데이터 행 시작번호)
|END_INDEX | INTEGER(필수) | 요청종료위치 | 정수 입력 (페이징 끝번호 입니다 : 데이터 행 끝번호)
|JCG_DT | STRING(선택) | 자치구 기준일  |

## Response Element

| No. | 출력명 | 출력설명 |
|---|---|---|
| No | 출력명 | 출력설명
| 공통 | list_total_count | 총 데이터 건수 (정상조회 시 출력됨)
| 공통 | RESULT CODE | 요청결과 코드 (하단 메세지설명 참고)
| 공통 | RESULT MESSAGE | 요청결과 메시지 (하단 메세지설명 참고)
| 1 | JCG_DT | 자치구 기준일
| 2 | JONGNO | 종로구 전체
| 3 | JONGNOADD | 종로구 추가
| 4 | JUNGGU | 중구 전체
| 5 | JUNGGUADD | 중구 추가
| 6 | YONGSAN | 용산구 전체
| 7 | YONGSANADD | 용산구 추가
| 8 | SEONGDONG | 성동구 전체
| 9 | SEONGDONGADD | 성동구 추가
| 10 | GWANGJIN | 광진구 전체
| 11 | GWANGJINADD | 광진구 추가
| 12 | DDM | 동대문구 전체
| 13 | DDMADD | 동대문구 추가
| 14 | JUNGNANG | 중랑구 전체
| 15 | JUNGNANGADD | 중랑구 추가
| 16 | SEONGBUK | 성북구 전체
| 17 | SEONGBUKADD | 성북구 추가
| 18 | GANGBUK | 강북구 전체
| 19 | GANGBUKADD | 강북구 추가
| 20 | DOBONG | 도봉구 전체
| 21 | DOBONGADD | 도봉구 추가
| 22 | NOWON | 노원구 전체
| 23 | NOWONADD | 노원구 추가
| 24 | EP | 은평구 전체
| 25 | EPADD | 은평구 추가
| 26 | SDM | 서대문구 전체
| 27 | SDMADD | 서대문구 추가
| 28 | MAPO | 마포구 전체
| 29 | MAPOADD | 마포구 추가
| 30 | YANGCHEON | 양천구 전체
| 31 | YANGCHEONADD | 양천구 추가
| 32 | GANGSEO | 강서구 전체
| 33 | GANGSEOADD | 강서구 추가
| 34 | GURO | 구로구 전체
| 35 | GUROADD | 구로구 추가
| 36 | GEUMCHEON | 금천구 전체
| 37 | GEUMCHEONADD | 금천구 추가
| 38 | YDP | 영등포구 전체
| 39 | YDPADD | 영등포구 추가
| 40 | DONGJAK | 동작구 전체
| 41 | DONGJAKADD | 동작구 추가
| 42 | GWANAK | 관악구 전체
| 43 | GWANAKADD | 관악구 추가
| 44 | SEOCHO | 서초구 전체
| 45 | SEOCHOADD | 서추구 추가
| 46 | GANGNAM | 강남구 전체
| 47 | GANGNAMADD | 강남구 추가
| 48 | SONGPA | 송파구 전체
| 49 | SONGPAADD | 송파구 추가
| 50 | GANGDONG | 강동구 전체
| 51 | GANGDONGADD | 강동구 추가
| 76 | ETC | 기타 전체
| 77 | ETCADD | 기타 추가

---

## Example

```js
{
  TbCorona19CountStatusJCG: {
    list_total_count: 1,
    RESULT: {
      CODE: "INFO-000",
      MESSAGE: "정상 처리되었습니다"
    },
    row: [
      {
      JCG_DT: "2022.02.20.00",
      JONGNO: "7716",
      JONGNOADD: "309",
      JUNGGU: "7088",
      JUNGGUADD: "234",
      YONGSAN: "11543",
      YONGSANADD: "408",
      SEONGDONG: "14190",
      SEONGDONGADD: "808",
      GWANGJIN: "18353",
      GWANGJINADD: "918",
      DDM: "19502",
      DDMADD: "889",
      JUNGNANG: "19288",
      JUNGNANGADD: "962",
      SEONGBUK: "22296",
      SEONGBUKADD: "926",
      GANGBUK: "14500",
      GANGBUKADD: "698",
      DOBONG: "15836",
      DOBONGADD: "787",
      NOWON: "25558",
      NOWONADD: "1267",
      EP: "21494",
      EPADD: "742",
      SDM: "14127",
      SDMADD: "418",
      MAPO: "18674",
      MAPOADD: "943",
      YANGCHEON: "20545",
      YANGCHEONADD: "734",
      GANGSEO: "24446",
      GANGSEOADD: "950",
      GURO: "21833",
      GUROADD: "858",
      GEUMCHEON: "12332",
      GEUMCHEONADD: "678",
      YDP: "21178",
      YDPADD: "677",
      DONGJAK: "20513",
      DONGJAKADD: "832",
      GWANAK: "26633",
      GWANAKADD: "1272",
      SEOCHO: "20277",
      SEOCHOADD: "706",
      GANGNAM: "28902",
      GANGNAMADD: "1105",
      SONGPA: "33472",
      SONGPAADD: "1413",
      GANGDONG: "24441",
      GANGDONGADD: "1301",
      ETC: "35186",
      ETCADD: "1267"
      }
    ]
  }
}
```
