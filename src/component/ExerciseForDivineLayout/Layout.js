import React, { Component } from 'react'
import HeaderEx from './HeaderEx'
import Product from './Product'

export default class Layout extends Component {
  render() {
    return (
      <div>
        <HeaderEx />
        <Product />
      </div>
    )
  }
}
