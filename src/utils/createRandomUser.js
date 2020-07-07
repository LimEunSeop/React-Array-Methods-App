import { generateRandomName } from './generateRandomName'
import { randomNumber } from './randomNumber'

export const MAX_WEALTH = 100000000

/**
 * 100원 단위로 변경하는 함수
 * @param {Number} n 
 */
export function change100Won(n) {
  return (n / 100).toFixed(0) * 100
}

export function createRandomUser() {
  return {
    name: generateRandomName(),
    wealth: change100Won(randomNumber(MAX_WEALTH))
  }
}

export function fillRandomUsers(n) {
  return Array.from(new Array(n), _=> createRandomUser())
}