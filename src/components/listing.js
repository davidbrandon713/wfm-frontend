import React from 'react'

const Listing = ({ order, dark }) => {
	const styles = {
		container: {
			borderBottom: dark ? '1px solid snow' : '1px solid #333',
		},
		price: {
			color: dark ? 'limegreen' : 'purple',
		},
	}

	return (
		order && (
			<div
				className="listing-container"
				style={styles.container}
			>
        <h1 className="listing-username">
          {order.user.ingame_name}
        </h1>
        <div className='listing-mid-container'>
          <span
            className="listing-price"
            style={styles.price}
          >
            {order.platinum} platinum
          </span>
          <span>{order.quantity}x</span>
        </div>
        <div className='listing-bot-container'>
          <p>{order.user.reputation} +</p>
        </div>
			</div>
		)
	)
}

export default Listing
