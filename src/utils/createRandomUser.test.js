import { fillRandomUsers, createRandomUser } from './createRandomUser'

test('유저가 올바른 값으로 리턴되는가', () => {
  let user = createRandomUser()
  expect(user).toEqual(jasmine.any(Object))
  for (let key of Object.keys(user)) {
    let value = user[key]
    switch (key) {
      case 'name':
        expect(typeof value).toEqual('string')
        break;
      case 'wealth':
        expect(typeof value).toEqual('number')
        break;
      default:
        console.error('잘못된 key 입니다')
    }
  }
})

test('각 유져 배열의 속성값이 정상적인 값인가', () => {
  let users = fillRandomUsers(10)
  for (let user of users) {
    for (let key of Object.keys(user)) {
      let value = user[key]
      switch (key) {
        case 'name':
          expect(typeof value).toEqual('string')
          break;
        case 'wealth':
          expect(typeof value).toEqual('number')
          break;
        default:
          console.error('잘못된 key 입니다')
      }
    }
  }
})