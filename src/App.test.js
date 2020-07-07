import React from 'react';
import { render } from '@testing-library/react';
import App, { WEALTH_LIST_COUNT } from './App';
import { createRandomUser, MAX_WEALTH } from './utils/createRandomUser'
import filterCurrencyKR from './utils/filterCurrencyKR'

/** 테스트 1 */
test('앱은 숨겨진 콘텐츠를 포함하고 있나요?', () => {
  // 앱을 렌더링 한 후, container 추출
  const { container } = render(<App />)
  // container의 첫번째 자식 노드에서 문서 객체 집합을 참조
  const hiddenContents = container.firstChild.querySelectorAll('.a11yHidden')
  expect(hiddenContents.length > 0).toBe(true)
})

/** 테스트 2 */
test('"자산 데이터 컨트롤러" 텍스트를 포함하는 요소는 스크린리더에서 읽히도록 감춤 처리 되었나요?', () => {
  // 앱을 렌더링 한 후, getByText 추출
  const { getByText } = render(<App />)
  // getByText() 를 사용해 "자산 데이터 컨트롤러"를 정확히 포함하는 요소를 찾아 참조
  const hiddenContent = getByText(/자산 데이터 컨트롤러/)
  // 참조된 문서 객체가 a11yHidden 클래스 이름을 증졌는지 예상하여 그 값이 true인지 검증
  expect(hiddenContent.classList.contains('a11yHidden')).toBe(true)
})

/** 테스트 3 */
test('앱이 포함하는 버튼은 총 5개가 렌더링되었나요?', () => {
  // 앱을 렌더링 한 후, getAppByRole 추출
  const { getAllByRole } = render(<App />)
  // 버튼 역할(role) 요소 노드를 모두 수집하여 참조
  const buttonList = getAllByRole('button')
  // 참조된 버튼 객체의 개수를 예상하여 그 값이 5인지 검증
  expect 
})

/** 테스트 4 */
test('랜덤 사용자 생성 함수는 객체 데이터 유형을 반환하나요?', () => {
  // 랜덤 사용자 생성 함수 실행
  const randomUser = createRandomUser()

  // 랜덤 사용자 객체는 기대한대로 객체 데이터 유형인지 검증
  expect(randomUser).toEqual(jasmine.any(Object))

  // randomUser 객체의 key 값 순환
  for (let key of Object.keys(randomUser)) {
    let value = randomUser[key]

    // randomUser의 key 값이 null이 아닌지 체크
    expect(value).not.toBeNull()

    // 속성(key) 별 조건 검증
    switch (key) {
      case 'name':
        // 데이터 유형이 예측한 값인지 검증
        expect(typeof value).toEqual('string')
        // 이름 값이 비어있지는 않은지 검증
        expect(value.length > 0).toBe(true)
        break
      case 'wealth':
        // 데이터 유형이 예축한 값인지 검증
        expect(typeof value).toEqual('number')
        // 기대하는 겂의 범위와 맞는지 검증
        expect(value <= MAX_WEALTH).toBe(true)
        break
      default:
        console.error('기대하는 속성 값이 아닌 속성이 포함된 객체 입니다.')
    }
  }
})

test('춧자를 원화로 변경하는 필터 함수는 잘 작동하나요?', () => {
  expect(filterCurrencyKR(100)).toEqual('100원')
  expect(filterCurrencyKR(10000)).toEqual('10,000원')
  expect(filterCurrencyKR(2398410)).toEqual('2,398,410원')
})

test(`wealthList 리스트 렌더링으로 생성된 아이템 수는 ${WEALTH_LIST_COUNT}개 인가요?`, () => {
  const { container } = render(<App />)
  const headlines = container.querySelectorAll('.main .headline')
  expect(headlines.length - 1).toBe(WEALTH_LIST_COUNT)
})