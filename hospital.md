# 건강보험심사평가원_호흡기 진료 지정 의료기관 정보서비스

## - 유형 : REST

## - 포맷 : XML

## - 트래픽 : 10000

---

## Request Parameter

| 항목명  | 항목명(영문) | 항목크기 | 항목구분 | 샘플데이터 | 항목설명 |
|---|---|---|---|---|---|
| 서비스키 | serviceKey | 100 | 필수 | - | 인증키 |
| 페이지 번호 | pageNo | 4 | 필수 | 1 | 페이지번호 |
| 한 페이지 결과 수 | numOfRows | 4 | 필수 | 10 |  한 페이지 결과 수 |

---

## Response Element

| 항목명  | 항목명(영문) | 항목크기 | 항목구분 | 샘플데이터 | 항목설명 |
|---|---|---|---|---|---|
|결과코드 | resultCode | 2| 필수| 00| 결과코드 |
|결과메시지 | resultMsg | 50| 필수| OK| 결과메시지 |
|한 페이지 결과 수 |  numOfRows | 4| 필수| 10| 한 페이지 결과 수 |
|페이지 번호 | pageNo | 4| 필수| 1| 페이지번호 |
|전체 결과 수 | totalCount | 4| 필수| 3| 전체 결과 수 |
|요양기관명 | yadmNm | 400| 필수| 장유닥터윤의원| 요양기관명 |
|시도명 | sidoNm | 400| 필수| 경상남도| 시도명 |
|시군구명 | sgguNm | 400| 필수| 김해시| 시군구명 |
|요양종별코드 | recuClCd | 2| 필수| 31| 11:종합병원 / 21:병원 / 31:의원 |
|주소 | addr |500| 필수| 경상남도| 김해시 장유로334번길 9, 302동 204호 (신문동, | |장유경동리인하이스트) 의료기관 주소 |
|RAT가능여부 |  ratPsblYn | 1| 필수| Y| RAT(신속항원검사)가능 여부 |
|구분코드 |  pcrPsblYn | 1| 필수| N| PCR 검사 가능 여부 |
|운영시작일자  | mgtStaDd | 8| 필수| 20220203| 운영시작일자 |
|x좌표 |  XPos | 20| 옵션| 882255| x좌표 |
|세계지구x좌표 |  XPosWgs84 | 20| 옵션| 128|.6802772 세계지구x좌표 |
|y좌표 |  YPos | 20| 옵션| 482758| y좌표 |
|세계지구y좌표 |  YPosWgs84 | 20| 옵션| 35|.2255538 세계지구y좌표 |

---

## Example

```json
{
  response: {
    header: {
      resultCode: "00",
      resultMsg: "NORMAL SERVICE."
    },
    body: {
      items: {
        item: [
          {
            addr: "서울특별시 노원구 동일로 1341 3층 1,2호 (상계동, 장우빌딩)",
            mgtStaDd: 20220207,
            pcrPsblYn: "Y",
            ratPsblYn: "Y",
            recuClCd: 31,
            rprtWorpClicFndtTgtYn: "N",
            sgguCdNm: "노원구",
            sidoCdNm: "서울",
            telno: "02-933-6133",
            XPosWgs84: 127.0621075,
            YPosWgs84: 37.6483272,
            yadmNm: "노충희비뇨기과의원",
            ykihoEnc: "JDQ4MTg4MSM1MSMkMiMkNCMkMDAkNDgxNzAyIzMxIyQxIyQzIyQ3OSQzNjE4MzIjNDEjJDEjJDgjJDgz"
          },
          {
            addr: "서울특별시 구로구 새말로 15 2~9층 (구로동, 삼전솔하임)",
            mgtStaDd: 20220203,
            pcrPsblYn: "Y",
            ratPsblYn: "Y",
            recuClCd: 21,
            rprtWorpClicFndtTgtYn: "Y",
            sgguCdNm: "구로구",
            sidoCdNm: "서울",
            telno: "02-858-0100",
            XPosWgs84: 126.8824677,
            YPosWgs84: 37.5021356,
            yadmNm: "의료법인 우리아이들 의료재단 우리아이들병원",
            ykihoEnc: "JDQ4MTg4MSM1MSMkMSMkMCMkOTkkMzgxMzUxIzMxIyQxIyQ3IyQwMyQzNjEyMjIjNDEjJDEjJDgjJDgz"
          },
          {
            addr: "강원도 원주시 혁신로 53 (반곡동)",
            mgtStaDd: 20220210,
            pcrPsblYn: "N",
            ratPsblYn: "Y",
            recuClCd: 31,
            rprtWorpClicFndtTgtYn: "N",
            sgguCdNm: "원주시",
            sidoCdNm: "강원",
            telno: "033-747-4253",
            XPosWgs84: 127.9799833,
            YPosWgs84: 37.3234965,
            yadmNm: "연세혁신내과의원",
            ykihoEnc: "JDQ4MTYyMiM1MSMkMiMkNCMkMDAkMzgxOTYxIzUxIyQxIyQ1IyQxMyQzNjE4MzIjNjEjJDEjJDQjJDgz"
          },
          {
            addr: "경기도 성남시 수정구 위례동로 147 5층 505호 (창곡동, 위례건아타워)",
            mgtStaDd: 20220216,
            pcrPsblYn: "N",
            ratPsblYn: "Y",
            recuClCd: 31,
            rprtWorpClicFndtTgtYn: "N",
            sgguCdNm: "성남수정구",
            sidoCdNm: "경기",
            telno: "031-731-6614",
            XPosWgs84: "127.1501100",
            YPosWgs84: 37.4730816,
            yadmNm: "365프렌즈내과의원",
            ykihoEnc: "JDU4MTI3MSM1MSMkMiMkMCMkMDAkNDgxOTYxIzIxIyQyIyQxIyQwMCQyNjEwMDIjODEjJDEjJDYjJDgz"
          },
          {
            addr: "전라북도 전주시 덕진구 가련산로 10 2층 202호 (덕진동2가, KB빌딩)",
            mgtStaDd: 20220203,
            pcrPsblYn: "N",
            ratPsblYn: "Y",
            recuClCd: 31,
            rprtWorpClicFndtTgtYn: "N",
            sgguCdNm: "전주덕진구",
            sidoCdNm: "전북",
            telno: "063-278-8575",
            XPosWgs84: 127.1105504,
            YPosWgs84: 35.8406724,
            yadmNm: "하가내과의원",
            ykihoEnc: "JDQ4MTYyMiM2MSMkMiMkNiMkMDAkMzgxMTkxIzMxIyQxIyQzIyQ4MiQyNjEyMjIjNTEjJDEjJDYjJDgz"
          },
          {
            addr: "경기도 구리시 건원대로 91 2층 (인창동, 중앙빌딩)",
            mgtStaDd: 20220218,
            pcrPsblYn: "N",
            ratPsblYn: "Y",
            recuClCd: 31,
            rprtWorpClicFndtTgtYn: "N",
            sgguCdNm: "구리시",
            sidoCdNm: "경기",
            telno: "031-563-0075",
            XPosWgs84: 127.1382395,
            YPosWgs84: 37.6090687,
            yadmNm: "새롬소아청소년과의원",
            ykihoEnc: "JDU4MTI3MSM1MSMkMiMkMCMkMDAkNDgxOTYxIzUxIyQxIyQxIyQxMyQzNjEyMjIjNDEjJDEjJDgjJDgz"
          },
          {
            addr: "서울특별시 관악구 난곡로 214 5층 (신림동, 금정빌딩)",
            mgtStaDd: 20220208,
            pcrPsblYn: "N",
            ratPsblYn: "Y",
            recuClCd: 31,
            rprtWorpClicFndtTgtYn: "N",
            sgguCdNm: "관악구",
            sidoCdNm: "서울",
            telno: "02-863-1175",
            XPosWgs84: "126.9181420",
            YPosWgs84: 37.4739107,
            yadmNm: "성모베스트이비인후과의원",
            ykihoEnc: "JDQ4MTg4MSM1MSMkMiMkNCMkMDAkNDgxNzAyIzUxIyQxIyQ1IyQ2MiQyNjE0ODEjODEjJDEjJDYjJDgz"
          },
          {
            addr: "서울특별시 구로구 도림로 67 (구로동)",
            mgtStaDd: 20220204,
            pcrPsblYn: "Y",
            ratPsblYn: "Y",
            recuClCd: 31,
            rprtWorpClicFndtTgtYn: "N",
            sgguCdNm: "구로구",
            sidoCdNm: "서울",
            telno: "02-830-0107",
            XPosWgs84: 126.8910281,
            YPosWgs84: 37.4895188,
            yadmNm: "이레소아청소년과의원",
            ykihoEnc: "JDQ4MTg4MSM1MSMkMiMkNCMkMDAkNDgxNzAyIzUxIyQxIyQ1IyQ2MiQyNjE4MzIjNTEjJDEjJDYjJDgz"
          },
          {
            addr: "서울특별시 강남구 밤고개로21길 8 (율현동, 세곡프라자 1동 202호)",
            mgtStaDd: 20220214,
            pcrPsblYn: "Y",
            ratPsblYn: "Y",
            recuClCd: 31,
            rprtWorpClicFndtTgtYn: "N",
            sgguCdNm: "강남구",
            sidoCdNm: "서울",
            telno: "02-445-1275",
            XPosWgs84: 127.1078517,
            YPosWgs84: 37.4735687,
            yadmNm: "우리소아청소년과의원",
            ykihoEnc: "JDQ4MTg4MSM1MSMkMiMkNCMkMDAkNDgxNzAyIzExIyQxIyQ3IyQ3MiQyNjEwMDIjNTEjJDEjJDYjJDgz"
          },
          {
            addr: "부산광역시 남구 분포로 115 B동 2층 (용호동, 힐탑탑플레이스)",
            mgtStaDd: 20220208,
            pcrPsblYn: "N",
            ratPsblYn: "Y",
            recuClCd: 31,
            rprtWorpClicFndtTgtYn: "N",
            sgguCdNm: "부산남구",
            sidoCdNm: "부산",
            telno: "051-714-2046",
            XPosWgs84: "129.1128920",
            YPosWgs84: "35.1320590",
            yadmNm: "김성미소아청소년과의원",
            ykihoEnc: "JDQ4MTAxMiM1MSMkMiMkMCMkMDAkNDgxOTYxIzExIyQxIyQzIyQ4MiQ0NjEwMDIjODEjJDEjJDIjJDgz"
          }
        ]
      },
      numOfRows: 10,
      pageNo: 1,
      totalCount: 5349
    }
  }
}
```
