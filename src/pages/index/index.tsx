import { Component } from 'react'
import { AtTabBar }  from 'taro-ui'
import { View } from '@tarojs/components'

interface MsState {
  current: number;
}

export default class Index extends Component<undefined, MsState> {
  constructor () {
    super(undefined)
    this.state = {
      current: 0
    }
  }
  handleClick (value) {
    this.setState({
      current: value
    })
  }
  render () {
    return (
      <View className='home-page-wrap'>
        { this.state.current === 0 && <View>明细</View> }
        { this.state.current === 1 && <View>分析</View> }
        { this.state.current === 2 && <View>记账</View> }
        { this.state.current === 3 && <View>我的</View> }
        <AtTabBar
          tabList={[
            { title: '明细' },
            { title: '分析' },
            { title: '记账' },
            { title: '我的'}
          ]}
          fixed
          onClick={this.handleClick.bind(this)}
          current={this.state.current}
        />
      </View>
    )
  }
}