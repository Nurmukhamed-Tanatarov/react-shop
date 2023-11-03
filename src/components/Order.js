/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react'
import { FaTrash } from 'react-icons/fa'

export class Order extends Component {
  render() {
    return (
      <div className='item'>
        <img src={"./images/" + this.props.item.img} />
        <h2>{this.props.item.title}</h2>
        <p>{this.props.item.price}$</p>
        <FaTrash className='deleteIcon' />
      </div>
    )
  }
}

export default Order