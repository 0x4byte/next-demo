import React from 'react'
import Link from 'next/link'
import { FormattedMessage } from 'react-intl'
import { connect } from 'react-redux'

import Button from 'modules/app/components/Button'
import { add } from './reducer'

class Home extends React.Component {
  state = {
    value: 1
  }

  setSelectValue = () => {
    this.setState({ value: 2 })
  }

  render() {
    return (
      <div>
        <span>
          <FormattedMessage
            id="superHello"
            defaultMessage="hello"
            values={{ message: 'city.' }}
          />
        </span>
        <select
          value={this.state.value}
          onChange={e => {
            this.setState({ value: e.target.value })
          }}
        >
          <option value={1}>11</option>
          <option value={2}>22</option>
          <option value={3}>33</option>
        </select>
        <img src={require('./images/songda.png')} alt="huang" />
        <Link href="/about" prefetch>
          <a>about</a>
        </Link>
        <Button onClick={this.props.add}>button</Button>
        <div>Count: {this.props.count}</div>
        <Button theme="primary" onClick={this.setSelectValue}>
          DynamicBtn-toggle-language-en
        </Button>
      </div>
    )
  }
}

export default connect(
  state => ({
    count: state.home.count
  }),
  { add }
)(Home)
