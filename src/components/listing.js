import React from 'react'

const Listing = ({ itemInfo, order, dark }) => {
	const styles = {
		container: {
			borderBottom: dark ? '1px solid snow' : '1px solid #333',
		},
		price: {
			color: dark ? 'limegreen' : 'purple',
		},
	}

	return (
		itemInfo && (
			<div
				className="listing-container"
				style={styles.container}
			>
        <div className='listing-upper-container'>
          <h1 className="listing-username">
            {order.user.ingame_name}
          </h1>
        </div>
        <div className='listing-mid-container'>
          <p
            className="listing-price"
            style={styles.price}
          >
            {order.platinum} platinum
          </p>
          <p>{order.quantity}x</p>
        </div>
        <div className='listing-bot-container'>
          <p>{order.user.reputation} +</p>
        </div>
			</div>
		)
	)
}

export default Listing
