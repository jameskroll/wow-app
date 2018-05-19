import React, { Component } from 'react'

export default class Locale extends Component {

  constructor() {
    super()
    this.state = {
      locales: [
        'en_US',
        'en_GB'
      ]
    }
  }

  _buildLocales = () => {
    return  <select>
              <option value="en_US">United States</option>
              <option value="en_GB"> United Kingdom</option>
            </select>
  }

  render() {
    return (
      <div>
        { this._buildLocales() }
      </div>
    )
  }
}
