import React, { useState } from 'react'
import ErrorBoundry from './components/error-boundry'
import Header from './components/header'
import ItemInfoComponent from './components/item-info-component'
import Scroll from './components/scroll'
import Listing from './components/listing'

function App() {
	const [itemInfo, setItemInfo] = useState(null)
	const [orders, setOrders] = useState()
	const [dark, setDark] = useState(true)

	const styles = {
		theme: {
			backgroundColor: dark ? '#333' : '#fffafa',
			color: dark ? '#fffafa' : '#333',
		},
	}

	return (
		<div
			className="app-container"
			style={styles.theme}
		>
			<Header />
			<ErrorBoundry>
				<Scroll dark={dark}>
					{
						<ItemInfoComponent
							itemInfo={itemInfo}
							setItemInfo={setItemInfo}
              setOrders={setOrders}
							setDark={setDark}
						/>
					}
					<div className="listings-container">
						<div className="sell-list-container">
							{orders ? (
								<>
									<div className="list-type-title">
										<h1>Sell</h1>
										<div className="sell-list-marker" />
									</div>
									{orders
										.filter((order) => order.order_type === 'sell')
										.sort((order, nextOrder) => {
											return order.platinum - nextOrder.platinum
										})
										.map((order) => {
											return (
												<Listing
													itemInfo={itemInfo}
													order={order}
													dark={dark}
													key={order.creation_date}
												/>
											)
										})}
								</>
							) : null}
						</div>
						<div className="buy-list-container">
							{orders ? (
								<>
									<div className="list-type-title">
										<h1>Buy</h1>
										<div className="buy-list-marker" />
									</div>
									{orders
										.filter((order) => order.order_type === 'buy')
										.sort((order, nextOrder) => {
											return nextOrder.platinum - order.platinum
										})
										.map((order) => {
											return (
												<Listing
													itemInfo={itemInfo}
													order={order}
													dark={dark}
													key={order.creation_date}
												/>
											)
										})}
								</>
							) : null}
						</div>
					</div>
				</Scroll>
			</ErrorBoundry>
		</div>
	)
}

export default App
