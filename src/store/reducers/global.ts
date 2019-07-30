import { Global, Action } from './global-types'

const initState: Global = {
  testText: '测试文案',
}

export default (state = initState, action: Action) => {
  const {
    type,
    testText,
  } = action

  switch (type) {
    case 'CHANGE_TEST_TEXT':
      return Object.assign({}, state, { testText })
    default:
      return state
  }
}
