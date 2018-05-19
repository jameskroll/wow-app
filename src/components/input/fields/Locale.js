import React, { Component } from 'react'

export default class Locale extends Component {

  constructor() {
    super()
    this.styles = {
      container: {
        flex:1
      },
      title: {
        fontSize: '12',
        fontWeight: '500',
        margin: 8
      }
    }
  }

  _buildLocales = () => {
    return (
      <div style={ this.styles.container }>
      <p style={ this.styles.title }>Region</p>
        <select>
          <option value=" ">Please Select Region</option>
          <option value="en_US">United States</option>
          <option value="en_GB"> United Kingdom</option>
        </select>
      </div>
    )
  }

  render() {
    return (
      <div>
        { this._buildLocales() }
      </div>
    )
  }
}
