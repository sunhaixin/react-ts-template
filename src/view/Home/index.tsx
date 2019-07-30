import * as React from 'react'
import { connect } from 'react-redux'
import { State } from '@src/store/reducers/index-types'
import './index.scss'

interface HomeProps {
  testText: string
}
interface HomeState {
  global: any
}

class Home extends React.Component<HomeProps, HomeState> {
  render () {
    console.log(this.props)
    return (
      <div>
        <div>首页</div>
        <div>测试 redux： {this.props.testText}</div>
      </div>
    )
  }
}

export default connect((state: State) => ({
  testText: state.global.testText
}))(Home)
