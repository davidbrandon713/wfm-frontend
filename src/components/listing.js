import React from 'react'

const Listing = ({ item, order }) => {
  return (
    <div className="listing-container">
      <h2 className="listing-item">
        {item} - {order.quantity}x
      </h2>
      <div className="listing-username">{order.user.ingame_name}</div>
      <br />
      <div className="listing-price">{order.platinum} platinum</div>
    </div>
  )
}

export default Listing
