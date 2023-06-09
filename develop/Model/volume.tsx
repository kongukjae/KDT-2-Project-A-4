
import * as React from 'react'

/**
 * 회사 데이터타입
 * day : Date, string 배열 날짜
 * volume : number 배열 거래량
 */
type CompanyDateType =  {
  day : string[],
  volume : number[],
}

/**
 * 주식 거래 데이터 타입
 */
type CompanyInfoType = {
  no : number,
  open : number,
  high : number,
  low : number,
  close : number,
  volume : number,
  day : string,
}

/**
 * 주식 데이터를 받아올 때 날짜와 거래량을 따로 배열로 저장
 * 날짜는 string[], 거래량은 number[]로 받아옴
 */
class CompanyDayVolumeInfo {
  private company : {samsung : CompanyInfoType[]};
  constructor(company : {samsung : CompanyInfoType[]}){
    this.company = company
  }

  /**
   * 데이터(날짜, 거래량)를 가져옴
   */
  get dayVolume() : CompanyDateType {
    return {
      day : this.company.samsung.map((value) => {
        const date = new Date(value.day);
        const year = date.getFullYear();
        const month = String(date.getMonth()+1).padStart(2,"0");
        const day = String(date.getDate()).padStart(2,"0");
        return `${year}-${month}-${day}`
      }),
      volume : this.company.samsung.map((value)=>value.volume)
    }
  }
} 

//거래량 기준 2일전의 종가와 1일전의 종가를 뺀 양 중 큰 거래량 TOP 5를 추천

