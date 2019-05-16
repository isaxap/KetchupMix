import TEST from './actionsTypes'

export function test(number) {
  return {
    type: TEST,
    payload: number
  }
}
