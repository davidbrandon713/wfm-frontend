import React from 'react'

const Listing = ({ item, order, dark }) => {
	const styles = {
    container: {
      borderBottom: dark ? '1px solid snow' : '1px solid #333',
    },
		price: {
			color: dark ? 'lightgreen' : 'purple',
		},
	}

	return (
		<div className="listing-container" style={styles.container}>
			<h2 className="listing-item">
				{item} - {order.quantity}x
			</h2>
			<div className="listing-username">{order.user.ingame_name}</div>
			<br />
			<div
				className="listing-price"
				style={styles.price}
			>
				{order.platinum} platinum
			</div>
		</div>
	)
}

export default Listing
