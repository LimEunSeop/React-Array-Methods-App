import { randomNumber } from './randomNumber'

const LAST_NAMES =  '김이박최정강조윤장임한오서신권황안송류전홍고문양손배조백허유지'
const FIRST_NAMES = '이겸,아름,다운,유진,훈,수진,예진,인영,지훈,동현,기호,승현,나연,다영,재인,구영,미나,서연,지우,지아,민준,건우'.split(
  ','
)

function generateLastName() {
  return LAST_NAMES[randomNumber(LAST_NAMES.length)]
}

function generateFirstName() {
  return FIRST_NAMES[randomNumber(FIRST_NAMES.length)]
}

export function generateRandomName() {
  return generateLastName() + generateFirstName()
}